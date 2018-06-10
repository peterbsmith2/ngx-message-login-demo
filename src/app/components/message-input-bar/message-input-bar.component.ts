import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cris-message-input-bar',
  templateUrl: './message-input-bar.component.html',
  styleUrls: ['./message-input-bar.component.css']
})
export class MessageInputBarComponent implements OnInit {
  @Output() send: EventEmitter<any> = new EventEmitter();
  @Output() toggle: EventEmitter<any> = new EventEmitter();
  @Output() select: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
