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
    } else if (desiredMealState === "Monday") {
      return input.filter((meal) => {
        return meal.date === "Monday";
      });
    } else if (desiredMealState === "Tuesday") {
      return input.filter((meal) => {
        return meal.date === "Tuesday";
      });
    } else if (desiredMealState === "Wednesday") {
      return input.filter((meal) => {
        return meal.date === "Wednesday";
      });
    }
    else if (desiredMealState === "Thrusday") {
      return input.filter((meal) => {
        return meal.date === "Thrusday";
      });
    } else if (desiredMealState === "Friday") {
      return input.filter((meal) => {
        return meal.date === "Friday";
      });
    }
    else if (desiredMealState === "Saturday") {
      return input.filter((meal) => {
        return meal.date === "Saturday";
      });
    }
    else if (desiredMealState === "Sunday") {
      return input.filter((meal) => {
        return meal.date === "Sunday";
      });
    } else {
      return input;
    }
  }
}
