import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipie',
      'This is simply a test',
      'https://p0.pxfuel.com/preview/344/674/482/quinoa-salad-vegetarian-diet.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)]),
    new Recipe(
      'Another Test Recipie',
      'This is simply a test',
      'https://p0.pxfuel.com/preview/344/674/482/quinoa-salad-vegetarian-diet.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)]),
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.slService.addIngredients(ingredients);
  }
}
