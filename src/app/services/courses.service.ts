import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {Observable} from "rxjs/Observable";
import {Course} from "../shared/model/course";
import {Lesson} from "../shared/model/lesson";
import {first, map, tap} from 'rxjs/operators';

@Injectable()
export class CoursesService {

  constructor(private db: AngularFireDatabase) {

  }

  findAllCourses(): Observable<Course[]> {
    console.log('get all courses');
    
      return this.db.list('courses')
          .valueChanges().pipe(
            first(),
            tap(console.log)
          )
  }


  findLatestLessons(): Observable<Lesson[]> {
    return this.db.list('lessons', ref => ref.orderByKey().limitToLast(10))
      .valueChanges().pipe(
        first(),
        tap(console.log)
      )
  }

  findCourseByUrl(courseUrl:string): Observable<Course> {
      return this.db.list('courses', ref => ref.orderByChild('url').equalTo(courseUrl))
      .snapshotChanges()
      .pipe(
        map( changes => {

          const snap = changes[0];

          return <Course> {
            id:snap.payload.key,
            ...snap.payload.val()
          };

        }),
        first()
      )
  }

  findLessonsForCourse(courseId:string): Observable<Lesson[]> {
      return <any>this.db.list('lessons', ref => ref.orderByChild('courseId').equalTo(courseId))
      .valueChanges().pipe(first());
  }


}










