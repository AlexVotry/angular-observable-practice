import { Component, OnInit } from '@angular/core';
import { Lesson } from '../shared/model/lesson';
import * as _ from 'lodash';
import { Observer, store } from '../event-bus/app-data';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements Observer, OnInit {

  lessons: Lesson[] = [];

  ngOnInit() { 
    console.log('lesson list component is registered as observer');
    store.subscribe(this);
  }

  next(data:Lesson[]) {
    console.log('Lessons list component received data');
    this.lessons = data;
  }
  
  toggleLessonsViewed(lesson:Lesson) {
    store.toggleLesson(lesson);
    console.log('toggling lesson ...');
  }

  delete(deleted:Lesson) {
    store.deleteLesson(deleted);
  }
  
}
