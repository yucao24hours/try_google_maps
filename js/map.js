function initMap() {
  var opts = {
    zoom: 15,
    center: new google.maps.LatLng(35.6851750,139.7527995)
  };
  var map = new google.maps.Map(document.getElementById("map"), opts);
}
