import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-person',
  templateUrl: './child-person.component.html',
  styleUrls: ['./child-person.component.scss']
})
export class ChildPersonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() person: any;

  @Input() index: any;

}
