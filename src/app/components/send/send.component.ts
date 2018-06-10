import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cris-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {
  @Output() send: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
