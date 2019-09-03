import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isDropdownOpen = false;
  @HostListener('click') onOpenDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  constructor() { }

}
