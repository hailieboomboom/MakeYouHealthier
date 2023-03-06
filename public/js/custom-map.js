/**
geometry:
  coordinates: (2) [144.947109, -37.81847]
  type: "Point"
properties:
  Facility_ID: "MELBOU10986"
  Facility_Name: "Active Melbourne City Sports"
  FullAddress: "744 Bourke Street, DOCKLANDS 3008"
  Pcode: 3008
  Sports_Played: "Fitness & Gymnasium Workouts"
  Street_Name: "Bourke"
  Street_Type: "Street"
  Suburb_Town: "DOCKLANDS"
*/

let marker_array = [];

/**
* Add the map to the page
*/
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [144.96093, -37.81645],
  zoom: 7
});

directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    unit: 'metric',
    controls: {
      instructions: true
    },
    interactive: false
});

map.addControl(directions,
 'top-right'
);

geo_data.features.forEach(function (element, i) {
  element.properties.id = i;
});

const filterBtn = document.querySelector('.filter-sport-button');
filterBtn.onclick = filter_data;

// Function to remove all markers on map when click
function removeAllMarkers(e) {
  e.preventDefault();
  if (marker_array!==null) {
    for (var i = marker_array.length - 1; i >= 0; i--) {
      marker_array[i].remove();
    }
  }
  marker_array = [];
}

function addMarkers(geo_data) {
  let data = {};
  if (geo_data.features) {
    data = geo_data.features;
  } else {
    data = geo_data;
  }
  // add markers to map and add to array
  for (const { geometry, properties } of data) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    let marker = new mapboxgl.Marker(el).setLngLat(geometry.coordinates).addTo(map);

    el.addEventListener('click', (e) => {
      /* Close all other popups and display popup for clicked store */
      createPopUp(geometry, properties);
      directions.setDestination(properties.FullAddress);
      // getAddressFromGeo(geometry, properties);

      e.stopPropagation();
    });

    marker_array.push(marker);

  }
}

// build location on the list
function buildLocationList(geo_data) {
  for (const [key, value] of Object.entries(geo_data)) {

    /* Add a new listing section to the sidebar. */
    const listings = document.getElementById('listings');
    const listing = listings.appendChild(document.createElement('div'));
    /* Assign a unique `id` to the listing. */
    listing.id = `listing-${value.properties.id}`;
    /* Assign the `item` class to each listing for styling. */
    listing.className = 'item';

    /* Add the link to the individual listing created above. */
    const link = listing.appendChild(document.createElement('a'));
    link.href = '#stop-here';
    link.className = 'title';
    link.id = `link-${value.properties.id}`;
    link.innerHTML = `${value.properties.Facility_Name}`;

    /* Add details to the individual listing. */
    const details = listing.appendChild(document.createElement('div'));
    details.innerHTML = `<strong>Address: </strong> ${value.properties.FullAddress}`;
    if (value.properties.Sports_Played) {
      details.innerHTML += `<br> <strong>Sport Available:</strong> ${value.properties.Sports_Played}`;
    }

    link.addEventListener('click', function () {
      for (const [key, value] of Object.entries(geo_data)) {
      // for (const feature of features) {
        if (this.id === `link-${value.properties.id}`) {
          flyToStore(value);

          createPopUp(value.geometry, value.properties);
          directions.setDestination(value.properties.FullAddress);

          details.innerHTML = `<strong>Address: </strong> ${value.properties.FullAddress}`;
          details.innerHTML += `<br> <strong>Sport Available:</strong> ${value.properties.Sports_Played}`;
        }
      }
      const activeItem = document.getElementsByClassName('active');
      if (activeItem[0]) {
        activeItem[0].classList.remove('active');
      }
      this.parentNode.classList.add('active');
    });
  }
}

// move current cursor to destination
function flyToStore(currentFeature) {
  map.flyTo({
    center: currentFeature.geometry.coordinates,
    zoom: 14
  });
}

function createPopUp(geometry, properties) {
  const popUps = document.getElementsByClassName('mapboxgl-popup');

  /** Check if there is already a popup on the map and if so, remove it */
  if (popUps[0]) popUps[0].remove();

  const popup = new mapboxgl.Popup({ closeOnClick: false })
    .setLngLat(geometry.coordinates)
    .setHTML(`<div>
    <h4>${properties.Facility_Name}</h4><p><strong>Address:</strong> ${properties.FullAddress}</p><p><strong>Sports Available:</strong> ${properties.Sports_Played}</p>
    </div>`)
    .addTo(map);

  directions.setDestination([geometry.coordinates[0],geometry.coordinates[1]]);

}


// Find lat, long of postal code and move camera to that location
function find_pcode_location(pcode) {
  for (const [key, value] of Object.entries(auscode.features)) {
    if(value.postcode == pcode) {
      map.flyTo({
        center: [value.Long_precise, value.Lat_precise],
        zoom: 14.5
      });
      break;
    }
  }
}

// Add sport checkbox
function add_sport_name_checkbox() {
  const checkbox_div = $('#checkbox-sport-list');

  sport_l.forEach((val, idx) => {
    checkbox_div.append(`<div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox${val}" name="recommend" value="${val}" checked>
      <label class="form-check-label" for="inlineCheckbox${val}">${val}</label>
    </div>`);
  })

  checkbox_div.append(`<div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" id="checkAll" checked>
    <label class="form-check-label" for="checkAll">Select All</label>
  </div>`);

  $("#checkAll").click(function () {
      $('input:checkbox').not(this).prop('checked', this.checked);
  });
}



// Function to get array of checked checkboxes
function get_checked_checkbox() {
  let $filterCheckboxes = $('input[type="checkbox"]');
  let selectedFilters = {};

  $filterCheckboxes.filter(':checked').each(function() {

    if (!selectedFilters.hasOwnProperty(this.name)) {
      selectedFilters[this.name] = [];
    }

    selectedFilters[this.name].push(this.value);

  });
  return selectedFilters;
}

// Function to filter sport location from checkbox
function filter_data_checkbox(geo_data) {
  // Filter sport from checkboxes
  var $filterCheckboxes = $('input[type="checkbox"]');

  $filterCheckboxes.on('change', function() {

    var selectedFilters = {};

    $filterCheckboxes.filter(':checked').each(function() {

      if (!selectedFilters.hasOwnProperty(this.name)) {
        selectedFilters[this.name] = [];
      }

      selectedFilters[this.name].push(this.value);

    });
    console.log(selectedFilters)

    let filtered_data = [];

    geo_data.features.forEach((val, index) => {
      let sport_list = val.properties.Sports_Played.toLowerCase();
      let selected_checkboxes = selectedFilters.recommend.map(x => x.toLowerCase());
      // console.log(sport_list)
      // console.log(selected_checkboxes)
      if(selected_checkboxes.some(v => sport_list.includes(v))) {
        filtered_data.push(val)
      }
    })

    console.log(filtered_data.length);
    filtered_data = filter_postcode(filtered_data);
    return filtered_data;
  });
}

function filter_data_postal(geo_data) {
  // Filter sport from checkboxes
  var selectedFilters = get_checked_checkbox();

  let filtered_data = [];

  if (Array.isArray(selectedFilters.recommend) && selectedFilters.recommend.length) {
    geo_data.features.forEach((val, index) => {
      let sport_list = val.properties.Sports_Played.toLowerCase();
      let selected_checkboxes = selectedFilters.recommend.map(x => x.toLowerCase());
      // console.log(sport_list)
      // console.log(selected_checkboxes)
      if(selected_checkboxes.some(v => sport_list.includes(v))) {
        filtered_data.push(val)
      }
    })

    filtered_data = filter_postcode(filtered_data);

    return filtered_data;
  } else {
    $('.show-result').append(`<h4 class="text-center amount-location">Please select at least 1 sport from the checkboxes.</h4>`);
    document.getElementById("listings").innerHTML = '';
  }
}

// Function to filter data with post code
function filter_postcode(filtered_data){
  let postal_code = $('.postal-input').val();
  let new_filtered_data = []

  filtered_data.forEach((val, index) => {
    let sport_by_postal_code = val.properties.Pcode;
    if (sport_by_postal_code == postal_code || postal_code == ''){
      new_filtered_data.push(val);
    }
  })

  if (Array.isArray(new_filtered_data) && new_filtered_data.length) {
    $('.show-result').append(`<h4 class="text-center amount-location">Found ${new_filtered_data.length} sport location(s).</h4>`);
    return new_filtered_data;

  } else {
    $('.show-result').append(`<h4 class="text-center amount-location">We couldn't find the sport in area with postal code ${postal_code} but we found ${filtered_data.length} sport location(s) across Victoria.</h4>`);
    map.flyTo({
      center: [144.96093, -37.81645],
      zoom: 7
    });
    return filtered_data;
  }
}


// Function for a submit filter button
function filter_data(e) {
  let pcode = $('.postal-input').val();
  find_pcode_location(pcode);

  $('.amount-location').remove();

  let geo_filtered_data = filter_data_postal(geo_data);

  $('.show-result').removeClass('hidden-form');

  removeAllMarkers(e);
  addMarkers(geo_filtered_data);
  document.getElementById("listings").innerHTML = '';
  buildLocationList(geo_filtered_data);

  // $('.show-result').append(`<h4 class="text-center amount-location">Found ${marker_array.length} sport location(s)</h4>`);
}

// Function to initial filter data and markers on a map
function initial_map() {
  add_sport_name_checkbox();

  let initial_data = geo_data.features.slice(0,300);

  addMarkers(initial_data);
  document.getElementById("listings").innerHTML = '';
  buildLocationList(initial_data);
  $('.show-result').addClass('hidden-form');
}

$( document ).ready(function() {
  initial_map();
  // filter_initial_data_checkbox(raw_data);
})
