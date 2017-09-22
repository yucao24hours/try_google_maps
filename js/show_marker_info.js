var map;
var markers = new Array();

function initialize() {
  // すべてのマーカーを地図に設置し、
  // 他の関数からも使えるように markers 配列に格納しておく
  var latlng = new google.maps.LatLng(35.630442,139.882951);
  var opts = {
    zoom: 14,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("map_canvas"), opts);

  var m_latlng1 = new google.maps.LatLng(35.632605,139.88132);
  var marker1 = new google.maps.Marker({
    position: m_latlng1,
    map: map
  });

  var m_latlng2 = new google.maps.LatLng(35.625663,139.884238);
  var marker2 = new google.maps.Marker({
    position: m_latlng2,
    map: map
  });
  markers = [marker1, marker2];
}

function showMarkerInfo() {
  var latLngBound = map.getBounds();
  for (var i = 0; i < markers.length; i++) {
    if (latLngBound.contains(markers[i].position)) {
      console.log("Marker"+ i +" - matched");
    }
  }
}
