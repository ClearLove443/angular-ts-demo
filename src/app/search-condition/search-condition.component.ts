import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-search-condition',
  templateUrl: './search-condition.component.html',
  styleUrls: ['./search-condition.component.css']
})
export class SearchConditionComponent implements OnInit {

  user: User = new User;
  constructor() { }

  ngOnInit(): void {
  }

}
