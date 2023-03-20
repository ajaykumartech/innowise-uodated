import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FiltersComponent {
  @Input() list: any;
  @Input() list2: any;
  @Output() shareCheckedList = new EventEmitter();
  showDropDown = false

  shareCheckedlist(value: any) {
    this.shareCheckedList.emit(value);
  }
}