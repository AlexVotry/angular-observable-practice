import { Component, OnInit } from '@angular/core';
import { globalEventBus, LESSONS_LIST_AVAILABLE } from './event-bus';
import { testLessons } from '../shared/model/test-lessons';

@Component({
  selector: 'event-bus',
  templateUrl: './event-bus.component.html',
  styleUrls: ['./event-bus.component.css']
})
export class EventBusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Top level component broadcasted all lessons ...');
    globalEventBus.notifyObservers(LESSONS_LIST_AVAILABLE, testLessons);
  }

}
