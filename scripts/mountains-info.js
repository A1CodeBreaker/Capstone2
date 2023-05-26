"use strict";

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
  
  // Get the mountain selector element
  var mountainSelector = document.getElementById("mountainInfo");
  
  // Function to populate the mountain selector
  function populateMountainOptions() {
    for (var i = 0; i < mountains.length; i++) {
      var option = document.createElement("option");
      option.value = i;
      option.textContent = mountains[i].name;
      mountainSelector.appendChild(option);
    }
  }
  
  // Populate the mountain selector
  populateMountainOptions();
  
  // Get the mountain table body element
  var mountainTableBody = document.querySelector("#mountainTable tbody");
  
  // Function to display mountain information
  function displayMountainInfo(mountainIndex) {
    // Clear previous table data
    mountainTableBody.innerHTML = "";
  
    var mountain = mountains[mountainIndex];
  
    // Create table rows
    var nameRow = document.createElement("tr");
    var nameCell1 = document.createElement("td");
    var nameCell2 = document.createElement("td");
    nameCell1.textContent = "Name:";
    nameCell2.textContent = mountain.name;
    nameRow.appendChild(nameCell1);
    nameRow.appendChild(nameCell2);
  
    var elevationRow = document.createElement("tr");
    var elevationCell1 = document.createElement("td");
    var elevationCell2 = document.createElement("td");
    elevationCell1.textContent = "Elevation:";
    elevationCell2.textContent = mountain.elevation + " meters";
    elevationRow.appendChild(elevationCell1);
    elevationRow.appendChild(elevationCell2);
  
    var locationRow = document.createElement("tr");
    var locationCell1 = document.createElement("td");
    var locationCell2 = document.createElement("td");
    locationCell1.textContent = "Location:";
    locationCell2.textContent = mountain.location;
    locationRow.appendChild(locationCell1);
    locationRow.appendChild(locationCell2);
  
    // Append rows to the table body
    mountainTableBody.appendChild(nameRow);
    mountainTableBody.appendChild(elevationRow);
    mountainTableBody.appendChild(locationRow);
  
    // Set the mountain image
    var mountainImg = document.getElementById("mountainImg");
    mountainImg.style.backgroundImage = "url(" + mountain.image + ")";
  }
  
  // Event listener for mountain selection
  mountainSelector.addEventListener("change", function() {
    var selectedMountainIndex = mountainSelector.value;
    displayMountainInfo(selectedMountainIndex);
  });
  
  // Initially display the first mountain's information
  displayMountainInfo(0);