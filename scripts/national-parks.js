"use strict";

// locationData.js
// This script contains data for the park locations

// Array of park locations
var locations = [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "DC",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Islands",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
    
  ];
  
  // parkTypeData.js
  // This script contains data for park types
  
  // Array of park types
  var parkTypes = [
    "National Park",
    "National Monument",
    "Recreation Area",
    "Scenic Trail",
    "Battlefield",
    "Historic",
    "Memorial",
    "Preserve",
    "Island",
    "River",
    "Seashore",
    "Trail",
    "Parkway"
    
  ];
  
  // nationalParkData.js
  // This script contains data for national parks
  
  // Array of national park objects
  var parks = [
    {
      name: "Abraham Lincoln Birthplace National Historical Park",
      location: "Kentuky, Hogenville, 42748",
      type: "National Park",
      address: "2995 Lincoln Farm Road",
      info:"(270) 358-3137",
    },
    {
        name: "Acadia National Park",
        location: "Maine, Bar Harbor, 4609",
        type: "National Park",
        address: "P.O. Box 177",
        info:"(207) 288-3338",
      },
      {
        name: "Adams National Historical Park",
        location: "Massachusetts, Qunincy, 2169",
        type: "Historic",
        address: "135 Adams Street",
        info:"(617) 770-1175",
      },
      {
        name: "African Burial Ground National Monument",
        location: "New York, New York, 10007",
        type: "Historic",
        address: "290 Broadway, 1st Floor",
        info:"(212) 637-2019",
      },
      {
        name: "Ala Kahakai National Historic Trail",
        location: "Hawaii, Kailua-Kona, 96740",
        type: "Historic",
        address: "73-4786 Kanalani Street, #14",
        info:"(808) 329-2597",
      },
      {
        name:  "Alagnak Wild River",
        location: "Alaska, King Salmon, 99613",
        type: "River",
        address: "P.O. Box 245",
        info:"(907) 246-2116",
      },
      {
        name: "Alcatraz Island",
        location: "California, San Francisco, 0",
        type: "National Park",
        address: "0",
        info:"(415) 705-1050",
      },
      {
        name: "Aleutian World War II National Historic Area",
        location: "Alaska, Unalaska, 99685",
        type: "Historic",
        address: "Ounalashka Corporation, P.O. Box 149",
        info:"(907) 581-1276",
      },
      {
        name: "Allegheny Portage Railroad National Historic Site",
        location: "Pennsylvania, Gallitzin, 16641",
        type: "Historic",
        address: "110 Federal Park Road",
        info: "(814) 886-6150",
      },
      {
        name: "American Memorial Park",
        location: "MP-Japan, Saipan, 96950",
        type: "Memorial",
        address: "Superintendent, P.O. Box 5198 CHRB",
        info: "(670) 234-7207 ext. 2020",
      },
      {
        name: "Amistad National Recreation Area",
        location: "Texas, Del Rio, 78840",
        type: "Recreation Area",
        address: "4121 Veterans Blvd.",
        info:"(830) 775-7491",
      },
      {
        name: "Abraham Lincoln Birthplace National Historical Park",
        location: "Kentuky, Hogenville, 42748",
        type: "National Park",
        address: "Yellowstone National Park, WY 82190, USA",
        info:"(270) 358-3137",
      },
      {
        name: "Andersonville National Historic Site",
        location: "Georgia, Andersonville, 31711",
        type: "Historic",
        address: "496 Cemetery Road",
        info:"(229) 924-0343",
      },
      {
        name: "Andrew Johnson National Historic Site",
        location: "Tennessee, Greenville, 37743",
        type: "Historic",
        address: "Mailing Address - Andrew Johnson NHS, 121 Monument Ave., GPS Location - Andrew Johnson NHS Visitor Center, 101 North College St.",
        info:"(423) 798-0754",
      },
      {
        name: "Aniakchak National Monument & Preserve",
        location: "Alaska, King Salmon, 99613",
        type: "National Monument",
        address: "P.O. Box 158",
        info:"(907) 246-3305",
      },
      {
        name: "Appalachian National Scenic Trail",
        location: "West Virginia, Harpers Ferry, 25425",
        type: "Scenic Trail",
        address: "P.O. Box 50",
        info:"(304) 535-6270",
      },
      {
        name: "Arches National Park",
        location: "Utah, Moab, 84532",
        type: "National Park",
        address: "PO Box 907",
        info:"(435) 719-2299",
      },
      {
        name: "Assateague Island National Seashore",
        location: "Maryland, Berlin, 21811",
        type: "Island",
        address: "7206 National Seashore Lane",
        info:"(410) 641-1441",
      },
      {
        name: "Abraham Lincoln Birthplace National Historical Park",
        location: "Kentuky, Hogenville, 42748",
        type: "National Park",
        address: "Yellowstone National Park, WY 82190, USA",
        info:"(270) 358-3137",
      },
      {
        name: "Aztec Ruins National Monument",
        location: "New Mexico, Aztec, 87410",
        type: "National Monument",
        address: "Visitor Services, #84 County Road 2900",
        info: "(505) 334-6174",
      },
      {
        name: "Badlands National Park",
        location: "South Dakota, Interior, 57750",
        type: "National Park",
        address: "25216 Ben Reifel Road, P.O. Box 6",
        info:"(605) 433-5404",
      },
      {
        name: "Baltimore-Washington Parkway",
        location: "Maryland, Greenbelt, 20770",
        type: "Parkway",
        address: "Baltimore Washington Parkway inc/o Greenbelt Park, 6565 Greenbelt Road",
        info:"(301) 344-3936",
      },
      {
        name: "Bandelier National Monument",
        location: "New Mexico, Los Alamos, 87544",
        type: "National Monument",
        address: "Superintendent, Bandelier National Monument 15 Entrance Road",
        info: "(505) 672-9607",
      },
      {
        name: "Bent's Old Fort National Historic Site",
        location: "Alaska, Nome, 99762",
        type: "Historic Site",
        address: "PO Box 220",
        info: "(907) 443-2522",
      },
      {
        name: "Big Bend National Park",
        location: "Texas, Big Bend National Park, 79834",
        type: "National Park",
        address: "PO Box 129", 
        info:  "(432) 477-2251",
      },
      {
        name: "Big South Fork National River & Recreation Area",
        location: "Tennessee, Oneida, 37941",
        type: "River",
        address: "4564 Leatherwood Road",
        info:   "(423) 286-7275",
      },
      {
        name: "Bighorn Canyon National Recreation Area",
        location: "Montana, Fort Smith, 59035",
        type: "Recreation Area",
        address:  "Bighorn Canyon NRA Headquarters, 5 Avenue B, P.O. Box 7458, Fort Smith, MT 59035",
        info:  "(307) 548-5406",
      },
      {
        name:  "Biscayne National Park",
        location: "Florida, Homestead, 33033",
        type: "National Park",
        address: "Biscayne National Park, 9700 SW 328 Street",
        info:   "(305) 230-7275",
      },
  ];
  
  // national-parks.js
  // This script handles the park selection and display
  
  // Get the location selector element
  var locationSelector = document.getElementById("locationSelector");
  
  // Populate the location selector
  for (var i = 0; i < locations.length; i++) {
    var option = document.createElement("option");
    option.value = locations[i];
    option.textContent = locations[i];
    locationSelector.appendChild(option);
  }
  
  // Get the park type selector element
  var parkTypeSelector = document.getElementById("parkTypeDiv");
  
  // Populate the park type selector
  for (var i = 0; i < parkTypes.length; i++) {
    var option = document.createElement("option");
    option.value = parkTypes[i];
    option.textContent = parkTypes[i];
    parkTypeSelector.appendChild(option);
  }
  
  // Get the park table body element
  var parkTableBody = document.getElementById("parkInfo");
  
  // Function to display park information
  function displayParkInfo() {
    var selectedLocation = locationSelector.value;
    var selectedParkType = parkTypeSelector.value;
  
    // Clear previous table data
    parkTableBody.innerHTML = "";
  
    // Filter parks based on location and type
    var filteredParks = parks.filter(function(park) {
      return (
        (selectedLocation === "" || park.location === selectedLocation) &&
        (selectedParkType === "" || park.type === selectedParkType)
      );
    });
  
    // Create table rows
    for (var i = 0; i < filteredParks.length; i++) {
      var park = filteredParks[i];
  
      var row = document.createElement("tr");
  
      var nameCell = document.createElement("td");
      nameCell.textContent = park.name;
      row.appendChild(nameCell);
  
      var addressCell = document.createElement("td");
      addressCell.textContent = park.address;
      row.appendChild(addressCell);
  
      var stateCell = document.createElement("td");
      stateCell.textContent = park.location.split(", ")[0];
      row.appendChild(stateCell);
  
      var cityCell = document.createElement("td");
      cityCell.textContent = park.location.split(", ")[1];
      row.appendChild(cityCell);
  
      var zipCodeCell = document.createElement("td");
      zipCodeCell.textContent = park.location.split(", ")[2];
      row.appendChild(zipCodeCell);
  
      var infoCell = document.createElement("td");
      infoCell.textContent = park.info;
      row.appendChild(infoCell);
  
      parkTableBody.appendChild(row);
    }
  }
  
  // Add event listeners to selectors
  locationSelector.addEventListener("change", displayParkInfo);
  parkTypeSelector.addEventListener("change", displayParkInfo);
  
  // Initial display of park information
  displayParkInfo();
  
  
