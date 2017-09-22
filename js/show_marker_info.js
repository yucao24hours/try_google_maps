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
  google.maps.event.addListener(map, 'zoom_changed', function() {
    showMarkerInfo();
  });
  google.maps.event.addListener(map, 'dragend', function() {
    showMarkerInfo();
  });

  var m_latlng1 = new google.maps.LatLng(35.632605,139.88132);
  var marker1 = new google.maps.Marker({
    position: m_latlng1,
    map: map,
    title: "東京ディズニーランド"
  });

  var m_latlng2 = new google.maps.LatLng(35.625663,139.884238);
  var marker2 = new google.maps.Marker({
    position: m_latlng2,
    map: map,
    title: "東京ディズニーシー"
  });
  markers = [marker1, marker2];
}

function showMarkerInfo() {
  var latLngBound = map.getBounds();
  var markers_on_map = new Array();

  for (var i = 0; i < markers.length; i++) {
    if (latLngBound.contains(markers[i].position)) {
      markers_on_map.push(markers[i].getTitle());
    }
  }
  addList(markers_on_map);
}

function addList(marker_titles) {
  var ul = document.getElementById("markerList");
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }

  for (var i = 0; i < marker_titles.length; i++) {
    var li = document.createElement("li");
    var text = document.createTextNode(marker_titles[i]);
    li.appendChild(text);
    ul.appendChild(li);
  }
}
