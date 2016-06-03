import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { NewMealComponent } from './new-meal.component';
import { EditMealComponent } from './edit-meal.component';
import { MealPipe } from './meal.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  pipes: [MealPipe],
  directives: [MealComponent, EditMealComponent, NewMealComponent],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all" selected="selected">Show All</option>
    <option value="Unhealthy">Show Unhealthy Meals</option>
    <option value="Healthy">Show Healthy Meals</option>
  </select>
  <select (change)="onChange($event.target.value)">
    <option value="all">Week</option>
    <option value="Monday">Monday</option>
    <option value="Tuesday">Tuesday</option>
    <option value="Wednesday">Wednesday</option>
    <option value="Thursday">Thursday</option>
    <option value="Friday">Friday</option>
    <option value="Saturday">Saturday</option>
    <option value="Sunday">Sunday</option>
  </select>
    <meal-display *ngFor="#currentMeal of mealList| calories:filterCalories" (click)="mealClicked(currentMeal)"
    [meal]="currentMeal"
    [class.selected]="currentMeal === selectedMeal" >
      </meal-display>
    <edit-meal *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal>
    <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterCalories: String = "all";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log('child', clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }

  createMeal(newMeal: Meal): void {
    this.mealList.push(newMeal);
  }
  onChange(filterOption): void {
    this.filterCalories = filterOption;
  }
}
