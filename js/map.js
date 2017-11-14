function initMap() {
    var location1 = {lat: 37.557189, lng: 126.992194};
    var location2 = {lat: 37.375177, lng: 126.632846};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 5,
      center: location1
    });
    var marker1 = new google.maps.Marker({
      position: location1,
      map: map
    });
    var marker2 = new google.maps.Marker({
      position: location2,
      map: map
    });
}