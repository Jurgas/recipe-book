import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipie',
      'This is simply a test',
      'https://p0.pxfuel.com/preview/344/674/482/quinoa-salad-vegetarian-diet.jpg'),
    new Recipe(
      'Another Test Recipie',
      'This is simply a test',
      'https://p0.pxfuel.com/preview/344/674/482/quinoa-salad-vegetarian-diet.jpg'),
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe): void {
    this.recipeWasSelected.emit(recipe);
  }
}
