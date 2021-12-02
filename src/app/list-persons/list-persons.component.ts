import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-persons',
  templateUrl: './list-persons.component.html',
  styleUrls: ['./list-persons.component.scss']
})
export class ListPersonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input() userList: any;

  delete() {
    this.userList.pop();
  }

  
}
