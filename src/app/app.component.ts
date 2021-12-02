import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'InOutPractice';

  listPersons = [{
    firstName: 'Alex',
    lastName: 'Birulya',
    age: 62
  },
  {
    firstName: 'Alexsey',
    lastName: 'Kochetov',
    age: 40
  },
  {
    firstName: 'Dmitry',
    lastName: 'Sidorov',
    age: 36
  },
  {
    firstName: 'Vadim',
    lastName: 'Rumancev',
    age: 37

  },
  {
    firstName: 'Pavel',
    lastName: 'Mesko',
    age: 31
  }]
}
