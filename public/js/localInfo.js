
$('#get-report-button').on('click', () => {
  let data = JSON.parse(JSON.stringify($('#info-form').serializeArray()));

  for (const [key, value] of Object.entries(data)) {
    console.log(key)
    console.log(value)
    localStorage.setItem(value.name, value.value);
  }
});


  // $('.input-field').val('');
  // $(".gender-input").val('');
  // $(".activity-input").val('');
  // $(".vegan-input").val('no');

// Read local data if Available
const age = localStorage.getItem('age');
const height = localStorage.getItem('height');
const weight = localStorage.getItem('weight');
const gender = localStorage.getItem('gender');
const activity_level = localStorage.getItem('activity_level');
const is_vegan = localStorage.getItem('is_vegan');

// Set value on the input boxes
$('.age-input').val(age);
$('.height-input').val(height);
$('.weight-input').val(weight);
$(`.gender-input option[value='${gender}']`).attr('selected', 'selected');
$(`.activity-input option[value='${activity_level}']`).attr('selected', 'selected');
$(`.vegan-input option[value='${is_vegan}']`).attr('selected', 'selected');
