// For a reset info button
$('#reset-input').on("click", function() {
  $('.age-input').val('');
  $('.height-input').val('');
  $('.weight-input').val('');
  $(".gender-input").val('');
  $(".activity-input").val('');
  $(".vegan-input").val('no');
});


// Enable tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
