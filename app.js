const express = require('express');
const app = express();
const bodyparser = require('body-parser')
const path = require('path');
const mysql = require('mysql');
const multer = require('multer');
const upload = multer();
const show_report_middleware = require('./middleware/show_report.js');
const location_data = require('./middleware/location_data.js');
const recipe = require('./middleware/recipe.js');
const auspcode = require('./middleware/auspcode.js');
require('dotenv').config();

//{path: path.join(__dirname, '/')}
const db = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
  }
});

app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));
app.use(upload.array());

app.set('view_engine', 'ejs');

app.get('/', (req, res) => {
  res.render('landing.ejs');
})

app.get('/motivation', (req, res) => {
  res.render('motivation.ejs')
});

app.post('/show-map', (req, res) => {
  const user_data = req.body;
  const bmi = show_report_middleware.calculate_bmi(user_data.weight, user_data.height);
  const body_condition = show_report_middleware.body_condition(bmi);
  const activity_level = user_data.activity_level;

  if (user_data.height === '' || user_data.weight === '' || !('activity_level' in user_data)) {
    res.render('exercise_input.ejs')
  }

  db.select('*').from('data_exercise_calorie').modify((query) => {
    if (body_condition == 'Obesity class 1' || body_condition == 'Obesity class 2' || body_condition == 'Obesity class 3') {
      query.where('Impact', 'low');
    } else if (body_condition == 'Overweight') {
      query.where(function() {
        this.where('Impact', 'low').orWhere('Impact', 'medium');
      })
    }
    query.where('Activity_level', activity_level)
  })
    .then(exercise_data => {
      res.render('map_show.ejs', {
        user_data,
        exercise_data,
        MAP_API: process.env.MAPBOX_API,
        location_data,
        auspcode
      })
  });
});

app.post('/show-report', (req, res) => {
  const user_data = req.body;
  const is_user_vegan = user_data.is_vegan;
  const bmi = show_report_middleware.calculate_bmi(user_data.weight, user_data.height);
  const body_condition = show_report_middleware.body_condition(bmi);
  const activity_level = user_data.activity_level;

  if (user_data.age === '' || user_data.height === '' || user_data.weight === '' ||
    !('activity_level' in user_data) || !('gender' in user_data) || !('is_vegan' in user_data)) {
    res.render('report_input.ejs')
  }

  db.select('*').from('data_meal_plan').modify((query) => {
    if (is_user_vegan == 'vegan') {
      query.where('meal_type', 'vegan');
    } else if (is_user_vegan == "vegetarian") {
      query.where('meal_type', 'vegetarian');
    } else {
      query.where('meal_type', 'normal');
    }
  }).orderByRaw('RAND()').limit(3)
  .then(meal_data => {
    const meal_id_array = [];
    meal_data.forEach((val, key) => {
      meal_id_array.push(val.meal_id);
    })

    const filtered_recipe = [];
    recipe.features.forEach((val, key) => {
      if (meal_id_array.includes(val.meal_id)) {
        filtered_recipe.push(val)
      }
    })

    res.render('report_show.ejs', {
      meal_data,
      user_data,
      middleware: show_report_middleware,
      bmi,
      body_condition,
      activity_level,
      filtered_recipe
    });
  })
  .catch(err => res.render('error.ejs'));
});

// ==============
// Obesity pages
// ==============
app.get('/obese-info', (req, res) => {
  res.render('obese-info/obese_info.ejs')
});

app.get('/obese-info-cause', (req, res) => {
  res.render('obese-info/obese_info_cause.ejs')
});

app.get('/obese-info-effect', (req, res) => {
  res.render('obese-info/obese_info_effect.ejs')
});

app.get('/obese-info-treatment', (req, res) => {
  res.render('obese-info/obese_info_treatment.ejs')
});
// End obesity pages

// ======= sponsor page =========
app.get('/external-help', (req, res) => {
  res.render('sponsors.ejs')
});
// end sponsor page

// ======== about us ==========
app.get('/about-us', (req, res) => {
  res.render('about_us.ejs')
});
// end about-us

app.get('*', (req, res) => {
  res.render('404.ejs')
})

app.listen(process.env.PORT, () => {
  console.log('Server start at port ' + process.env.PORT);
})
