import { Component } from 'angular2/core';
import { EditMealComponent } from './edit-meal.component';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-info-list',
  inputs: ['meal'],
  directives: [EditMealComponent],
  template: `
  <p>Test</p>
    <h2>{{ meal.description }}</h2>
    <h2>{{ meal.calories }} calories</h2>
    <h2>Date: {{ meal.date }}</h2>

  `
})
export class MealInfoComponent {
  public meal: Meal;
}
