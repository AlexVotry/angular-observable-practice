import { Component, OnInit } from '@angular/core';
import { testLessons } from '../shared/model/test-lessons';
import { Lesson } from '../shared/model/lesson';
import { store } from './app-data';

@Component({
  selector: 'event-bus',
  templateUrl: './event-bus.component.html'
})
export class EventBusComponent implements OnInit {

  ngOnInit() {
    // console.log('Top level component broadcasted all lessons ...');

    // store.initializeLessonsList(testLessons.slice(0));

    // setTimeout(() => {
    //   const newLesson = {
    //     id: Math.random(),
    //     description: 'New lesson arriving from the backend'
    //   };
    //   store.addLesson(newLesson);
    //   // globalEventBus.notifyObservers(LESSONS_LIST_AVAILABLE, this.lessons);
    // }, 10000);

  }

  // addLesson(lessonText: string) {
  //   const newLesson = {
  //     id: Math.random(),
  //     description: lessonText
  //   };
  //   store.addLesson(newLesson);
  // }

}
