import { Component, OnInit } from '@angular/core';
import { UserService, UNKNOWN_USER } from "../services/user.service";
import { Observable } from "rxjs";

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html'
})
export class TopMenuComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.userService.user$.map(user => user !== UNKNOWN_USER);
  }

}
