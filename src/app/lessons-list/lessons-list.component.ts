import { Component, OnInit, DefaultIterableDiffer } from '@angular/core';
import { Lesson } from '../shared/model/lesson';
import * as _ from 'lodash';
import { lessonsList$ } from '../event-bus/app-data';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements Observer {

  lessons: Lesson[] = [];

  constructor() { 
    console.log('lesson list component is registered as observer');
    lessonsList$.subscribe(this);
  }

  next(data:Lesson[]) {
    console.log('Lessons list component received data');
    this.lessons = data.slice(0);
  }
  toggleLessonsViewed(lesson:Lesson) {
    console.log('toggling lesson ...');
    lesson.completed = !lesson.completed;
  }

  delete(deleted:Lesson) {
    console.log('delete lesson');
    _.remove(this.lessons, lesson => lesson.id === deleted.id)
  }
  
}
