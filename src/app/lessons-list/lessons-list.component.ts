import { Component, OnInit, DefaultIterableDiffer } from '@angular/core';
import { globalEventBus, Observer, LESSONS_LIST_AVAILABLE, ADD_NEW_LESSON } from '../event-bus/event-bus';
import { Lesson } from '../shared/model/lesson';
import * as _ from 'lodash';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit, Observer {

  lessons: Lesson[] = [];

  constructor() { 
    console.log('lesson list component is registered as observer');
    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this);  
    globalEventBus.registerObserver(ADD_NEW_LESSON, {
      notify: lessonText => {
        this.lessons.push({
          id: Math.random(),
          description: lessonText,
          completed: false
        })
      }
    });
  }

  ngOnInit() {
  }

  notify(data:Lesson[]) {
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
