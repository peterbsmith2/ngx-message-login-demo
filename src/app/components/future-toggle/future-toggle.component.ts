import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cris-future-toggle',
  templateUrl: './future-toggle.component.html',
  styleUrls: ['./future-toggle.component.css']
})
export class FutureToggleComponent implements OnInit {
  @Output() toggle: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
