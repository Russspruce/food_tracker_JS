import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template:`
  <div class="newMealForm">
  <form name="newMealForm">
    <h3>Add Meal:</h3>
    <div class="container">
    <input placeholder="Name" class="col-sm-4 col-sm-offset-4 input-lg" #newName />
    <input placeholder="Description" class="col-sm-4 col-sm-offset-4 input-lg" #newDescription />
    <input placeholder="Date" class="col-sm-4 col-sm-offset-4 input-lg" #newDate />
    <input placeholder="Calories" class="col-sm-4 col-sm-offset-4 input-lg" #newCalories />
    </div>
    <button (click)="addMeal(newName, newDescription, newDate, newCalories)" class="btn-success btn-lg">Submit</button>
  </form>
  </div>
  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }

  addMeal(newName: HTMLInputElement, newDescription: HTMLInputElement, newDate: HTMLInputElement, newCalories: HTMLInputElement){
    var meal = new Meal(newName.value, newDescription.value, newDate.value, parseInt(newCalories.value));

    this.onSubmitNewMeal.emit(meal);
    newName.value= "";
    newDescription.value= "";
    newDate.value= "";
    newCalories.value= "";
    //clear forms
  }
}
