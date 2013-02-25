window.googleMaps = {}

googleMaps.initialize = () ->
  window.geocoder = new google.maps.Geocoder();
  mapOptions = {
    zoom: 11,
    center: new google.maps.LatLng(37.7750, 237.5),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  window.map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions)


# properties is an array of JS objects of the form:
  # address: "675 Townsend (aka 660 King or 701 8th Street)"
  # bathrooms: null
  # bedrooms: null
  # city: "San Francisco"
  # comments: null
  # created_at: "2013-02-23T23:55:49Z"
  # id: 1
  # latitude: null
  # longitude: null
  # name: "Metro@Showplace Square"
  # neighborhood: "SOMA"
  # price: null
  # square_footage: null
  # total_bmr: 15
  # total_units: 148
  # updated_at: "2013-02-23T23:55:49Z"
  # zipcode: "94103"
googleMaps.geocodeProperties = (properties) ->
  _.each properties, (property) ->
    googleMaps.geocodeAddress(property.address + ", " + property.city)


googleMaps.geocodeAddress = (address) ->
  geocoder.geocode( { 'address': address}, (results, status) ->
    if (status == google.maps.GeocoderStatus.OK)
      map.setCenter(results[0].geometry.location)
      marker = new google.maps.Marker({ map: map, position: results[0].geometry.location})
    else
      alert("Geocode was not successful for the following reason: " + status)
  )
