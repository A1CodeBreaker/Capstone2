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
  
  // Function to filter parks based on location and type
  function filterParks(location, type) {
    var filteredParks = [];
  
    for (var i = 0; i < nationalParks.length; i++) {
      var park = nationalParks[i];
  
      if ((location === "" || park.location === location) &&
          (type === "" || park.type === type)) {
        filteredParks.push(park);
      }
    }
  
    return filteredParks;
  }
  
  // Initially display all parks
  displayParkInfo(nationalParks);
  
  
  // nationalParkData.js
  // This script contains data for the national parks
  
  // Array of national park objects
  var nationalParks = [
    {
      name: "Yellowstone National Park",
      address: "Wyoming, Montana, Idaho",
      location: "Wyoming",
      type: "National Park",
      info: "Yellowstone National Park is known for its geothermal features, such as Old Faithful and the Grand Prismatic Spring."
    },
    {
      name: "Yosemite National Park",
      address: "California",
      location: "California",
      type: "National Park",
      info: "Yosemite National Park is famous for its giant sequoia trees, iconic granite cliffs like El Capitan, and beautiful waterfalls."
    },
    {
      name: "Everglades National Park",
      address: "Florida",
      location: "Florida",
      type: "National Park",
      info: "Everglades National Park is a vast wetland known for its unique ecosystem, including marshes, mangroves, and diverse wildlife."
    },
    // Add more national parks here...
  ];
  
  
  // mountainData.js
  // This script contains data for the mountains
  
  // Array of mountain objects
  var mountains = [
    {
      name: "Mount Everest",
      elevation: 8848,
      location: "Nepal",
      image: "images/mount-everest.jpg"
    },
    {
      name: "K2",
      elevation: 8611,
      location: "Pakistan",
      image: "images/k2.jpg"
    },
    {
      name: "Kangchenjunga",
      elevation: 8586,
      location: "Nepal/India",
      image: "images/kangchenjunga.jpg"
    },
    // Add more mountains here...
  ];
  
  // Get the mountain image element
  var mountainImg = document.getElementById("mountainImg");
  
  // Function to set the mountain image
  function setMountainImage(mountainIndex) {
    var mountain = mountains[mountainIndex];
    mountainImg.style.backgroundImage = "url(" + mountain.image + ")";
  }
  
  // Event listener for mountain selection
  mountainSelector.addEventListener("change", function() {
    var selectedMountainIndex = mountainSelector.value;
    setMountainImage(selectedMountainIndex);
  });
  
  // Set the mountain image for the default selection
  setMountainImage(mountainSelector.value);