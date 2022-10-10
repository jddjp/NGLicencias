import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-altas',
  templateUrl: './altas.component.html',
  styleUrls: ['./altas.component.css']
})
export class AltasComponent implements OnInit {
  categories: any[] = 
  [
  {name: 'Accounting', key: 'A'},
  {name: 'Marketing', key: 'M'}, 
  {name: 'Production', key: 'P'},
   {name: 'Research', key: 'R'}];
  constructor() { }
  selectedCategories: any[] = [];
  ngOnInit(): void {
    this.selectedCategories = this.categories.slice(1,3);
  }

}
