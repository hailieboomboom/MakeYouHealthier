let middlewareObject = {};

// Calculate BMI
middlewareObject.calculate_bmi = (weight, height) => {
  let bmi = Math.round(weight / ((height/100) ** 2));

  return bmi;
};
// Calculate body condition
middlewareObject.body_condition = (bmi) => {
  let body_condition = "";
  if (bmi < 18.50) {
    body_condition = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25.0) {
    body_condition = "Normal";
  } else if (bmi >= 25.0 && bmi < 30.0) {
    body_condition = "Overweight";
  } else if (bmi >= 30.0 && bmi < 35.0) {
    body_condition = "Obesity class 1";
  } else if (bmi >= 35.0 && bmi < 40.0) {
    body_condition = "Obesity class 2";
  } else if (bmi >= 40.0) {
    body_condition = "Obesity class 3";
  }
  return body_condition;
};
// query for exercise base on activity level
middlewareObject.exercise_base_on_activity_level = (activity_level) => {
  let query_calorie = "";
  switch (activity_level) {
    case 'sedentary':
      query_calorie = "Calories_per_kg <= 3.51";
      break;
    case 'lightly':
      $query_calorie = "(Calories_per_kg >= 3.51 AND Calories_per_kg <= 5.01)";
      break;
    case 'moderately':
      $query_calorie = "(Calories_per_kg >= 5.01 AND Calories_per_kg <= 7.01)";
      break;
    case 'very_active':
      $query_calorie = "(Calories_per_kg >= 7.01 AND Calories_per_kg <= 10.1)";
      break;
    case 'extremely_active':
      $query_calorie = "Calories_per_kg >= 10.1";
      break;
    default:
      break;
  }
};

module.exports = middlewareObject;
