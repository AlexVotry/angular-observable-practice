# Repository Content

This was a tutorial from Angular University [RxJs and Reactive Patterns Angular Architecture Course](https://angular-university.io/course/reactive-angular-architecture-course).

This course repository is updated to Angular v7, there is a Yarn lock file available.

Experiments with observable and Rxjs. 

**all-lessons** is a view only with two instances of course nested inside. This part is experimenting with using the same nested component, but with two sets of data inside the parent.  

The **course** component uses two services (Lessons-pager and Messages) as providers. This ensures the services used in either component are independent of each other. 
	Course component also uses course$, lessons$ and detail$ as observable instances of the data in the HTML. 
	The Course component has access to this data but cannot manipulate it. Using the data this way automatically subscribes and unsubscribes from Observables as the component gets instantiated or destroyed.
	
The **course-detail** utilizes a resolver. A resolver is like a service and returns a value or observable. My course-detail component instantiates its own obsevable from the resolver data. This will make a smoother transition, since all the data gets collected prior to the DOM getting initiated.

The **course-list** is a presentational component shown on the home page (the first list of courses with the view button).  I am @Importing the courses from the home component html.

The **create-lesson** component is a form using FormBuilder. I am using cookies from the cookies-js library to store the partial info in the form, so if someone doesn't complete the form, and leaves the page, they will still have the data when they return to it.

The **home component** also uses observable instances in the HTML. This is also a presentational component that simply displays the observable it gets from the courseService.

The **lesson-detail** is also a presentational component that uses @Input from the course component to display the lesson video.

The **lessons-list** component @Input the lessons to list, and also uses the selected event emitter to @Output to course event handler to display the selected lesson.

The **login** component subscribes to the user service that creates the user observable. 

The **errors** component uses the error$ observable to display the instances in the html (using the conditional *ngIf to show the messages).  This appears in the app and course component.

The **newsletter** component subscribes to the newsletter service observable function. It also uses the firstName observable to display.

The **top-menu** uses the isLoggedIn observable instance to determine whether to show 'login' or 'logout'.



# Starting the development server

To start the server, run the following command:

    npm start

To start 8090 server:

    npm run rest-api
