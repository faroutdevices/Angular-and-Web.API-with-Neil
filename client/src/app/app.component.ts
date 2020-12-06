import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Title of Client App';
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit()
  {
    this.getUsers();
  }

  getUsers()
  {
    this.http.get('https://localhost:5001/api/users').subscribe(Response => {
    this.users = Response;
  }, error => {
    console.log(error);
  })
  }
}
