import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';


@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
  <div class="container">
    <h1>Food Tracker</h1>
    <meal-list [mealList] = "meals" (onMealSelect)="mealWasSelected($event)">
    </meal-list>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor() {
    this.meals = [
      new Meal("Egg and Cheese Sandwich", "A tasty breakfast treat", "Monday", 340),
      new Meal("Cantaloupe", "A sweet fruit and a good snack", "Tuesday", 23),
      new Meal("Almond Snack Bag", "For when you want somethin in between meals", "Wednesday", 100)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log('parent', clickedMeal);
  }
}
