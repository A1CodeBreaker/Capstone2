"use strict";

// Array of mountain objects
var mountains = [
    {
      name: "Mt. Washington",
      elevation: 6288,
      effort: "Strenuous",
      location: "New Hampshire",
      image: "Washington-StoryImage_2.jpg"
    },
    {
        name: "Mt. Adams",
        elevation: 5799,
        effort: "Strenuous",
        location: "Washington",
        image: "Adams-StoryImage_2.jpg",
      },
      {
        name: "Mt. Jefferson",
        elevation: 5716,
        effort: "Strenuous",
        location: "Oregon",
        image: "Jefferson-StoryImage_2.jpg",
      },
      {
        name: "Mt. Madison",
        elevation: 5366,
        effort: "Strenuous",
        location: "New Hampshire",
        image: "Madison-StoryImage_2.jpg",
      },
      {
        name: "Mt. Madison",
        elevation: 5366,
        effort: "Strenuous",
        location: "New Hampshire",
        image: "Monroe-StoryImage_2.jpg",
      },
      {
        name: "Mt. Lafayette",
        elevation: 5260,
        effort: "Strenuous",
        location: "New Hampshire",
        image: "Lafayette-StoryImage_2.jpg",
      },
      {
        name: "Mt. Lincoln",
        elevation: 5089,
        effort: "Strenuous",
        location: "Colorado",
        image:  "Lincoln-StoryImage_2.jpg",
      },
      {
        name: "South Twin",
        elevation: 4902,
        effort: "Strenuous",
        location: "New Hampshire",
        image: "STwin-StoryImage_2.jpg",
      },
      {
        name: "Carter Dome",
        elevation: 4832,
        effort: "Strenuous",
        location: "New Hampshire",
        image: "CDome-StoryImage.jpg",
      },
      {
        name: "Mt. Moosilauke",
        elevation: 4802,
        effort: "Moderate",
        location: "New Hampshire",
        image: "Moosilauke-StoryImage_2.jpg",
      },
      {
        name: "Mt. Eisenhower",
        elevation: 4760,
        effort: "Moderate",
        location: "New Hampshire",
        image:  "Eisenhower-StoryImage_2.jpg",
      },
      {
        name: "North Twin",
        elevation: 4761,
        effort: "Strenuous",
        location: "New Hampshire",
        image:  "NTwin-StoryImage_2.jpg",
      },
      {
        name: "Mt. Carrigain",
        elevation: 4700,
        effort: "Strenuous",
        location: "New Hampshire",
        image: "Carrigain-StoryImage_2.jpg",
      },
      {
        name: "Mt. Bond",
        elevation: 4698,
        effort: "Strenuous",
        location: "New Hampshire",
        image: "Bond-StoryImage_3.jpg",
      },
      {
        name: "Middle Carter",
        elevation: 4610,
        effort: "Moderate to Strenuous",
        location: "New Hampshire",
        image: "MidCarter-StoryImage.jpg",
      },
      {
        name: "West Bond",
        elevation: 4540,
        effort: "Strenuous",
        location: "New Hampshire",
        image: "WBond-StoryImage.jpg",
      },
      {
        name: "Mt. Garfield",
        elevation: 4500,
        effort: "Moderate to Strenuous",
        location: "New Hampshire",
        image: "Garfield-StoryImage.jpg",
      },
      {
        name: "Mt. Liberty",
        elevation: 4459,
        effort: "Strenuous",
        location: "New Hampshire",
        image: "Liberty-StoryImage_2.jpg",
      },
      {
        name: "South Carter",
        elevation: 4430,
        effort: "Moderate to Strenuous",
        location: "New Hampshire",
        image: "Carters-StoryImage.jpg",
      },
      {
        name: "Wildcat Mountain",
        elevation: 4422,
        effort: "Strenuous",
        location: "New Hampshire",
        image: "Wildcat-StoryImage.jpg",
      },
      {
        name: "Mt. Hancock",
        elevation: 4420,
        effort: "Strenuous",
        location: "New Hampshire",
        image: "Hancock-StoryImage_2.jpg",
      },
      {
        name: "South Kinsman",
        elevation: 4358,
        effort: "Strenuous",
        location: "New Hampshire",
        image: "SKinsman-StoryImage.jpg",
      },
      {
        name: "Mt. Field",
        elevation: 4340,
        effort: "Moderate",
        location: "New Hampshire",
        image: "Field-StoryImage.jpg",
      },
      {
        name: "Mt. Osceola",
        elevation: 4340,
        effort: "Moderate",
        location: "New Hampshire",
        image: "Osceola-StoryImage_2.jpg",
      },
      {
        name: "Mt. Flume",
        elevation: 4328,
        effort: "Strenuous",
        location: "New Hampshire",
        image: "Flume-StoryImg_2.jpg",
      },
      {
        name: "South Hancock",
        elevation: 4319,
        effort: "Strenuous",
        location: "New Hampshire",
        image: "SHancock-StoryImg.jpg",
      },
      {
        name: "Mt. Pierce",
        elevation: 4312,
        effort: "Moderate",
        location: "New Hampshire",
        image: "Pierce-StoryImg.jpg",
      },
      {
        name: "North Kinsman",
        elevation: 4293,
        effort: "Strenuous",
        location: "New Hampshire",
        image: "NKinsman-StoryImg_2.jpg",
      },
      {
        name: "Mt. Willey",
        elevation: 4285,
        effort: "Strenuous",
        location: "New Hampshire",
        image: "Willey-StoryImg_2.jpg",
      },
      {
        name: "Bondcliff",
        elevation: 4265,
        effort: "Strenuous",
        location: "New Hampshire",
        image: "Bond-StoryImage_3.jpg",
      },
      {
        name: "Zealand Mountain",
        elevation: 4260,
        effort: "Strenuous",
        location: "New Hampshire",
        image: "Zeacliff-StoryImg_2.jpg",
      },
      {
        name: "North Tripyramid",
        elevation: 4180,
        effort: "Strenuous",
        location: "New Hampshire",
        image: "Tripyramids-StoryImg_2.jpg",
      },
      {
        name: "Mt. Cabot",
        elevation: 4170,
        effort: "Moderate to Strenuous",
        location: "New Hampshire",
        image: "Cabot-StoryImg.jpg",
      },
      {
        name: "East Osceola",
        elevation: 4156,
        effort: "Strenuous",
        location: "New Hampshire",
        image: "EOsceola-StoryImg_2.jpg",
      },
      {
        name: "Middle Tripyramid",
        elevation: 4140,
        effort: "Strenuous",
        location: "New Hampshire",
        image:  "M-Tripyramids-StoryImg.jpg",
      },
      {
        name: "Cannon Mountain",
        elevation: 4100,
        effort: "Moderate",
        location: "New Hampshire",
        image: "Cannon-StoryImg_2.jpg",
      },
      {
        name: "Wildcat D",
        elevation: 4062,
        effort: "Strenuous",
        location: "New Hampshire",
        image: "WildcatD-StoryImg.jpg",
      },
      {
        name: "Mt. Hale",
        elevation: 4054,
        effort: "Moderate",
        location: "New Hampshire",
        image: "Hale-StoryImg.jpg",
      },
      {
        name: "Mt. Jackson",
        elevation: 4052,
        effort: "Moderate",
        location: "New Hampshire",
        image: "Jackson-StoryImg.jpg",
      },
      {
        name: "Mt. Tom",
        elevation: 4051,
        effort: "Moderate",
        location: "Massachusetts",
        image: "Tom-StoryImg.jpg",
      },
      {
        name: "Mt. Moriah",
        elevation: 4049,
        effort: "Strenuous",
        location: "New Hampshire",
        image: "Moriah-StoryImg.jpg",
      },
      {
        name: "Mt. Passaconaway",
        elevation: 4043,
        effort: "Strenuous",
        location: "New Hampshire",
        image: "Passaconoway-StoryImg.jpg",
      },
      {
        name: "Owl's Head",
        elevation: 4025,
        effort: "Strenuous",
        location: "New Hampshire",
        image:  "OwlsHead-StoryImg.jpg",
      },
      {
        name: "Galehead Mountain",
        elevation: 4024,
        effort: "Strenuous",
        location: "New Hampshire",
        image: "Galehead-StoryImg.jpg",
      },
      {
        name: "Mt. Whiteface",
        elevation: 4020,
        effort: "Strenuous",
        location: "New Hampshire",
        image: "Whiteface-StoryImg.jpg",
      },
      {
        name: "Mt. Waumbek",
        elevation: 4006,
        effort: "Strenuous",
        location: "New Hampshire",
        image: "Whiteface-StoryImg.jpg",
      },
      {
        name: "Mt. Isolation",
        elevation: 4003,
        effort: "Strenuous",
        location: "New Hampshire",
        image: "Isolation-StoryImg.jpg",
      },
      {
        name: "Mt. Tecumseh",
        elevation: 4003,
        effort: "Moderate",
        location: "New Hampshire",
        image: "Tecumseh-StoryImg.jpg",
      },
    
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

    var effortRow = document.createElement("tr");
    var effortCell1 = document.createElement("td");
    var effortCell2 = document.createElement("td");
    effortCell1.textContent = "Effort:";
    effortCell2.textContent = mountain.effort;
    effortRow.appendChild(effortCell1);
    effortRow.appendChild(effortCell2);
  
    // Append rows to the table body
    mountainTableBody.appendChild(nameRow);
    mountainTableBody.appendChild(elevationRow);
    mountainTableBody.appendChild(locationRow);
    mountainTableBody.appendChild(effortRow);

   // Set the mountain image
   var mountainImg = document.getElementById("mountainImg");
   mountainImg.innerHTML = ""; // Clear previous image
   var img = document.createElement("img");
   img.src = "images/" + mountain.image; 
   img.alt = mountain.name;
   mountainImg.appendChild(img);
}
  
  // Event listener for mountain selection
  mountainSelector.addEventListener("change", function() {
    var selectedMountainIndex = mountainSelector.value;
    displayMountainInfo(selectedMountainIndex);
  });
  
  // Initially display the first mountain's information
  displayMountainInfo(0);
