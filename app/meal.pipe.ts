import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calories",
  pure: false
})

export class MealPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var calorieAmount = 500;
    var desiredMealState = args[0];
    if(desiredMealState === "Unhealthy") {
      return input.filter((meal) => {
        return meal.calories > calorieAmount;
      });
    } else if (desiredMealState === "Healthy") {
      return input.filter((meal) => {
        return meal.calories <= calorieAmount;
      });
    } else {
      return input;
    }
  }
}
