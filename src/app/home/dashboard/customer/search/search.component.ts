import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent {

  @Output() inputt = new EventEmitter();
  value: any

  val() {
    this.inputt.emit(this.value);
  }

}