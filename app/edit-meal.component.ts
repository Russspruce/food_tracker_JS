import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
  <div>
    <h3 class="edit">Edit Meal: </h3>
    <div class="container">
      <input [(ngModel)]="meal.name" class="col-sm-4 col-sm-offset-4 input-lg meal-form"/>
      <input [(ngModel)]="meal.description" class="col-sm-4 col-sm-offset-4 input-lg meal-form"/>
      <input [(ngModel)]="meal.date" class="col-sm-4 col-sm-offset-4 input-lg meal-form"/>
      <input [(ngModel)]="meal.calories" class="col-sm-4 col-sm-offset-4 input-lg meal-form"/>
    </div><br>
  </div>
  `
})
export class EditMealComponent {
  public meal: Meal;
}
