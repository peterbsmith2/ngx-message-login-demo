import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cris-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Output() select: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
