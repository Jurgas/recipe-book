import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event): void {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

  constructor(private elRef: ElementRef) {
  }
  // wasInside = false;

  // @HostListener('document:click') toggleClose(): void {
  //   if (!this.wasInside) {
  //     this.isOpen = false;
  //   }
  //   this.wasInside = false;
  // }
  //
  // @HostListener('click') toggleOpen(): void {
  //   this.isOpen = !this.isOpen;
  //   this.wasInside = true;
  // }
}
