import { Component, EventEmitter } from 'angular2/core';
// import { MealListComponent } from './meal-list.component';
// import { Meal } from './meal.model';


@Component({
  selector: 'my-app',
  // directives: [MealListComponent],
  template: `
  <div class="container">
    <h1>Food Tracker</h1>
    <div *ngFor="#meal of meals">
  <h3>{{ meal.name }}</h3>
</div>
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
}

export class Meal {
  constructor(public name: string, public description: string, public date: string, public calories: number) {}
}
