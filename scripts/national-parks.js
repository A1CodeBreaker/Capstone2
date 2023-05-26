"use strict";

// locationData.js
// This script contains data for park locations

// Array of location options
var locations = [
    "New York",
    "California",
    "Florida",
    // Add more locations here...
  ];
  
  // Get the location selector element
  var locationSelector = document.getElementById("locationSelector");
  
  // Function to populate the location selector
  function populateLocationOptions() {
    for (var i = 0; i < locations.length; i++) {
      var option = document.createElement("option");
      option.value = locations[i];
      option.textContent = locations[i];
      locationSelector.appendChild(option);
    }
  }
  
  // Populate the location selector
  populateLocationOptions();
  
  
  // parkTypeData.js
  // This script contains data for park types
  
  // Array of park type options
  var parkTypes = [
    "National Park",
    "State Park",
    "City Park",
    // Add more park types here...
  ];
  
  // Get the park type selector element
  var parkTypeSelector = document.getElementById("parkTypeDiv");
  
  // Function to populate the park type selector
  function populateParkTypeOptions() {
    for (var i = 0; i < parkTypes.length; i++) {
      var option = document.createElement("option");
      option.value = parkTypes[i];
      option.textContent = parkTypes[i];
      parkTypeSelector.appendChild(option);
    }
  }
  
  // Populate the park type selector
  populateParkTypeOptions();
  
  
  // national-parks.js
  // This script handles the national park information display
  
  // Get the park table body element
  var parkTableBody = document.getElementById("parkInfo");
  
  // Function to display park information
  function displayParkInfo(parks) {
    // Clear previous table data
    parkTableBody.innerHTML = "";
  
    // Loop through the parks array and create table rows
    for (var i = 0; i < parks.length; i++) {
      var park = parks[i];
      var row = parkTableBody.insertRow();
      
      var nameCell = row.insertCell();
      var addressCell = row.insertCell();
      var infoCell = row.insertCell();
      
      nameCell.textContent = park.name;
      addressCell.textContent = park.address;
      infoCell.textContent = park.info;
    }
  }
  
  // Event listener for location selector change
  locationSelector.addEventListener("change", function() {
    var selectedLocation = locationSelector.value;
    var filteredParks = filterParks(selectedLocation, parkTypeSelector.value);
    displayParkInfo(filteredParks);
  });
  
  // Event listener for park type selector change
  parkTypeSelector.addEventListener("change", function() {
    var selectedType = parkTypeSelector.value;
    var filteredParks = filterParks(locationSelector.value, selectedType);
    displayParkInfo(filteredParks);
  });
  
  
