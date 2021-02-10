 //Reading in our GeoJSON files
var us_states = "/us_states";
var us_county = "/us_county";


// Use L.geoJSON to create a geoJSON layer

county1 = "Autauga"
county2 =  "McCulloch"
function rendercounty(county) {
  d3.json(county).then(data =>{
    
    // filter county data to have only county and county2 info
    console.log(data.features)
    county1_data = data.features.filter(d => d.properties.NAME == county1)
    county2_data = data.features.filter(d => d.properties.NAME == county2)
    console.log(county1_data)
    console.log(county2_data)
    
    renderMap(us_states, county1_data, county2_data)

  }); 

};
rendercounty(us_county)


// Grabbing our State GeoJSON data..
function renderMap(state, county1_data, county2_data) {
  d3.json(state).then(data => {

      stateData = data['features'];

      // Use L.geoJSON to create a geoJSON layer
      var stateLayer = L.geoJSON(stateData, {
        onEachFeature: function (feature, layer) {
          layer.bindPopup(`<h3>${feature.properties.NAME}</h3>`);
            }
        });
      console.log(county1)
      var county1_Layer = L.geoJSON(county1_data, {
        onEachFeature: function (feature, layer) {
          L.marker(layer.bindPopup(`<h3>${feature.properties.NAME}</h3>`));
            }
        });

      var county2_Layer = L.geoJSON(county2_data, {
        onEachFeature: function (feature, layer) {
          L.marker(layer.bindPopup(`<h3>${feature.properties.NAME}</h3>`));
            }
        });
    
        // Define streetmap, lightmap, and darkmap layers
      var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        tileSize: 512,
        maxZoom: 18,
        zoomOffset: -1,
        id: "mapbox/streets-v11",
        accessToken: API_KEY
      });

      var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "light-v10",
        accessToken: API_KEY
      });

      var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "dark-v10",
        accessToken: API_KEY
      });

    
      // Define a baseMaps object to hold our base layers
      
      var baseMaps2 = {
        "Street Map": streetmap,
        "Light Map": lightmap,
        "Dark Map" : darkmap      
      };

      // Create overlay object to hold our overlay layer
    
      var overlayMaps2 = {
        State: stateLayer,
        County1: county1_Layer,
        County2 : county2_Layer    
      };

      var myMap = L.map("map", {
        center: [37.09, -95.71],
        zoom: 4,
        layers: [lightmap, county1_Layer, county2_Layer]

      });

    
      L.control.layers(baseMaps2, overlayMaps2, {
        collapsed: false
      }).addTo(myMap);

    });
  };

//START OF COUNTY 1 MAP
function renderMap(state, county1_data, county2_data) {
  d3.json(state).then(data => {

      stateData = data['features'];


      // Use L.geoJSON to create a geoJSON layer
      var stateLayer = L.geoJSON(stateData, {
        onEachFeature: function (feature, layer) {
          layer.bindPopup(`<h3>${feature.properties.NAME}</h3>`);
            }
        });
      console.log(county1)
      var county1_Layer = L.geoJSON(county1_data, {
        onEachFeature: function (feature, layer) {
          L.marker(layer.bindPopup(`<h3>${feature.properties.NAME}</h3>`));
            }
        });

      var county2_Layer = L.geoJSON(county2_data, {
        onEachFeature: function (feature, layer) {
          L.marker(layer.bindPopup(`<h3>${feature.properties.NAME}</h3>`));
            }
        });
    
        // Define streetmap, lightmap, and darkmap layers
      var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        tileSize: 512,
        maxZoom: 18,
        zoomOffset: -1,
        id: "mapbox/streets-v11",
        accessToken: API_KEY
      });

      var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "light-v10",
        accessToken: API_KEY
      });

      var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "dark-v10",
        accessToken: API_KEY
      });

    
      // Define a baseMaps object to hold our base layers
      
      var baseMaps2 = {
        "Street Map": streetmap,
        "Light Map": lightmap,
        "Dark Map" : darkmap      
      };

      // Create overlay object to hold our overlay layer
    
      var overlayMaps2 = {
        State: stateLayer,
        County1: county1_Layer,
        County2 : county2_Layer    
      };

      var myMap_County1= L.map("map-county1", {
        center: [40.417198, -82.355904],
        zoom: 4,
        layers: [lightmap, county1_Layer, county2_Layer]
        

      });

    
      L.control.layers(baseMaps2, overlayMaps2, {
        collapsed: false
      }).addTo(myMap_County1);

    });
  };





// Function that will determine the color of a neighborhood based on the borough it belongs to
function chooseColor(STATE) {
  switch (STATE) {
  case ("45"):
    return "yellow";
  case ("17"):
    return "red";
  case ("13"):
    return "orange";
  case ("20"):
    return "green";
  default:
    return "grey";
  }
}

// Grabbing our GeoJSON data..
d3.json(us_states).then(data => {
  // Creating a geoJSON layer with the retrieved data
  L.geoJson(data, {
    // Style each feature (in this case a State)
    style: function(feature) {
      return {
        color: "white",
        // Call the chooseColor function to decide which color to color our neighborhood (color based on State)
        fillColor: chooseColor(feature.properties.STATE),
        fillOpacity: 0.3,
        weight: 1.5
      };
    },
    // Called on each feature
    onEachFeature: function(feature, layer) {
      // Set mouse events to change map styling
      layer.on({
        // When a user's mouse touches a map feature, the mouseover event calls this function, that feature's opacity changes to 90% so that it stands out
        mouseover: function(event) {
          layer = event.target;
          layer.setStyle({
            fillOpacity: 0.9
          });
        },
        // When the cursor no longer hovers over a map feature - when the mouseout event occurs - the feature's opacity reverts back to 30%
        mouseout: function(event) {
          layer = event.target;
          layer.setStyle({
            fillOpacity: 0.3
          });
        },
        // When a feature (neighborhood) is clicked, it is enlarged to fit the screen
        click: function(event) {
          myMap.fitBounds(event.target.getBounds());
        }
      });
      // Giving each feature a pop-up with information pertinent to it
      layer.bindPopup(`<h1>${feature.properties.NAME}</h1><hr/><h2 style='text-align: center;'>${feature.properties.CENSUSAREA}</h2>`);

    }
  })
})

//END OF COUNTY 1 MAP



// Function that will determine the color of a neighborhood based on the borough it belongs to
function chooseColor(STATE) {
  switch (STATE) {
  case ("45"):
    return "yellow";
  case ("17"):
    return "red";
  case ("13"):
    return "orange";
  case ("20"):
    return "green";
  default:
    return "grey";
  }
}

// Grabbing our GeoJSON data..
d3.json(us_states).then(data => {
  // Creating a geoJSON layer with the retrieved data
  L.geoJson(data, {
    // Style each feature (in this case a State)
    style: function(feature) {
      return {
        color: "white",
        // Call the chooseColor function to decide which color to color our neighborhood (color based on State)
        fillColor: chooseColor(feature.properties.STATE),
        fillOpacity: 0.3,
        weight: 1.5
      };
    },
    // Called on each feature
    onEachFeature: function(feature, layer) {
      // Set mouse events to change map styling
      layer.on({
        // When a user's mouse touches a map feature, the mouseover event calls this function, that feature's opacity changes to 90% so that it stands out
        mouseover: function(event) {
          layer = event.target;
          layer.setStyle({
            fillOpacity: 0.9
          });
        },
        // When the cursor no longer hovers over a map feature - when the mouseout event occurs - the feature's opacity reverts back to 30%
        mouseout: function(event) {
          layer = event.target;
          layer.setStyle({
            fillOpacity: 0.3
          });
        },
        // When a feature (neighborhood) is clicked, it is enlarged to fit the screen
        click: function(event) {
          myMap.fitBounds(event.target.getBounds());
        }
      });
      // Giving each feature a pop-up with information pertinent to it
      layer.bindPopup(`<h1>${feature.properties.NAME}</h1><hr/><h2 style='text-align: center;'>${feature.properties.CENSUSAREA}</h2>`);

    }
  })
})






