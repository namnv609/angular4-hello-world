import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: any = [];

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get("https://reqres.in/api/users?page=1")
      .toPromise()
      .then((res) => res.json())
      .then((users) => this.users = users);
  }
}
