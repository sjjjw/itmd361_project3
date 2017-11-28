function initMap() {
    var location = {lat: 37.375177, lng: 126.632846};
    var location1 = {lat: 37.557189, lng: 126.992194};
    
    var desc = 'My university called Incheon National Universiy is located in Songdo, Incheon';
    var desc1 = 'Capital of Korea: Seoul';   
    var info = new google.maps.InfoWindow({
      content: desc
    });
    var info1 = new google.maps.InfoWindow({
      content: desc1
    });
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 9,
      center: location
    });
    
    var marker = new google.maps.Marker({
      position: location,
      map: map
    });
    var marker1 = new google.maps.Marker({
      position: location1,
      map: map
    });
           
    google.maps.event.addListener(marker, 'click', function(){
      info.open(map, marker);
      info1.open(map, marker1);
    });
    google.maps.event.addListener(marker1, 'click', function(){
      info1.open(map, marker1);
    });
}
