import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
   recipes:Recipe[]=[
     new Recipe('Dhokla','This is gujrati dish','https://www.ndtv.com/cooks/images/dhokla.2.jpg'),
     new Recipe('Gulab Jamun','This is sweet dish','https://www.inhouserecipes.com/wp-content/uploads/2013/05/gulab-jamun-recipe.jpg',
       )
   ];
  constructor() { }

  ngOnInit() {
  }

}
