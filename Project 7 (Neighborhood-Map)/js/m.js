var locations = ko.observableArray([
  {
    lat: 15.2993, 
    lng: 74.1240,
    title: 'Goa',
    id: 'goa'
  },
  {
    lat: 31.147, 
    lng: 75.3412,
    title: 'Punjab',
    id: 'punjab'
  },
  {
    lat: 28.7041, 
    lng: 77.1025,
    title: 'Delhi',
    id: 'delhi'
  },
  {
    lat: 26.9124, 
    lng: 75.7873,
    title: 'Jaipur',
    id: 'jaipur'
  },
  {
    lat: 26.8467, 
    lng: 80.9462,
    title: 'Luckhnow',
    id: 'luckhnow'
  },
  {
    lat: 19.0760, 
    lng: 72.8777,
    title: 'Mumbai',
    id: 'mumbaii'
  },
  {
    lat: 28.4744, 
    lng: 77.5040,
    title: 'Greater Noida',
    id: 'greater noida'
  }
]);

function initGoogleMap() {
    var styles = [
    {
        "featureType": "administrative.country",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#e0efef"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#1900ff"
            },
            {
                "color": "#c0e8e8"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 700
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#7dcdcd"
            }
        ]
    }
];
  var googleMap = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 20.5937, 
      lng: 78.9629
    },
    zoom: 5,
    fullscreenControl: true,
    styles: styles,
    zoomControl: false,
    streetViewControl: false,
    mapTypeControl: true
  });


  locations().forEach(function(data) {
    var makePosition = new google.maps.LatLng(data.lat, data.lng);
    var marker = new google.maps.Marker({
      position: makePosition,
      map: googleMap,
      title: data.title,
      animation: google.maps.Animation.DROP,
    });

    var infoWindow;

    var wikiRequestTimeout = setTimeout(function() {
      alert('Failed to load data.');
    }, 8000);

    wikiRequestTimeout;
    var wikiUrl = 'https://en.wikipedia.org/w/api.php?format=json&action=opensearch&search=' + data.title  + '&callback=wikiCallback';

    $.ajax({
      url: wikiUrl,
      dataType: 'jsonp',
      jsonp: 'callback',
      success: function(response) {
        var linkString = "<div class='map-info-window'><h2>" + data.title + "</h2>" +
                         "<p>" + response[2][0] + "</p>";
        response[3].forEach(function(entry) {
          linkString = linkString + '<a href="' + entry + '" target=_blank>' + entry + '</a><br>';
        });
        linkString = linkString + "</div>";
        data.contentString = linkString;
        clearTimeout(wikiRequestTimeout);
      }
    }).done(function() {
      infoWindow = new google.maps.InfoWindow({
        content: data.contentString
      });
    });

    data.mapMarker = marker;

    marker.addListener('click', function(event) {
      data.trigger(marker);
      locations().forEach(function(place) {
        if (data.title === place.title) {
          place.openInfoWindow();
        } else {
          place.closeInfoWindow();
        }
      });
    });

    googleMap.addListener('click', function() {
      locations().forEach(function(place) {
        place.closeInfoWindow();
      });
    });

    data.trigger = function(marker) {
      infoWindow.open(googleMap, marker);
      marker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(function() { marker.setAnimation(null); }, 900);
    }.bind(this);

    data.closeInfoWindow = function() {
      infoWindow && infoWindow.close(googleMap, marker);
    }.bind(this);

    data.openInfoWindow = function() {
      infoWindow.open(googleMap, marker);
    }.bind(this);

    mapMarkersExist = true;
  });

  var ControlListViewDiv = document.createElement('div');

  ControlListViewDiv.index = 1;
  googleMap.controls[google.maps.ControlPosition.LEFT].push(ControlListViewDiv);
}

function ViewModel() {
  var self = this;
  this.placeList = ko.observableArray([]);

  locations().forEach(function(place) {
    place.visible = ko.observable(true);
    self.placeList.push(place);
  });

  this.filterValue = ko.observable('');
  
  this.filterList = ko.computed(function() {
    locations().forEach(function(place) {
      var search = self.filterValue().toLowerCase();
      var toBeSearched = place.title.toLowerCase();

      place.visible(toBeSearched.indexOf(search) > -1);

      if (place.mapMarker) {
        place.mapMarker.setVisible(toBeSearched.indexOf(search) > -1);
      }

      
    });
  }, this);

  this.triggerMap = function(name, event) {
    locations().forEach(function(place) {
      if (event.target.id === place.id) {
        place.trigger(place.mapMarker);
      } else {
        place.closeInfoWindow();
      }
    });
  };

}


ko.applyBindings(new ViewModel());

function googleError() {
  alert("Please reload the page");
}