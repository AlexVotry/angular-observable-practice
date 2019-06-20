import { Component, OnInit, Input } from '@angular/core';
import { Lesson } from "../shared/model/lesson";

@Component({
  selector: 'lesson-detail',
  templateUrl: './lesson-detail.component.html'
})
export class LessonDetailComponent implements OnInit {

  @Input()
  lesson: Lesson;

  constructor() { }

  ngOnInit() {
  }

}
