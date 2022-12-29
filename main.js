function initMap() {
  // The location of Uluru
  const myHome = { lat: 30.02239, lng: 31.22725 };
  // The map, centered at Uluru
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    mapId: "a26acd6e5c845e01",
    center: myHome,
    fullscreenControl: false,
  });

  //add custom mark
  google.maps.event.addListener(map, "click", (ev) => {
    CreateMarker({ location: ev.latLng });
  });

  function CreateMarker(data) {
   
 new google.maps.Marker({
      position: data.location,
      map: map,
      title: data.tilte,
      icon: {
        url: data.imageSrc,
        scaledSize: new google.maps.Size(40, 40),
      },
      animation: google.maps.Animation.DROP,
    });

  
    map.addListener("click", () => {
      infoWindow.close();
     
    }); 
  }

  CreateMarker({
    location: { lat: 30.031414, lng: 31.210927 },
    tilte: "My College",
    imageSrc: "college.jpg",
    content: `<h2>FCAI My college</h2>`,
  });

  CreateMarker({
    location: { lat: 30.02239, lng: 31.22725 },
    tilte: "My Home",
    imageSrc: "home.jpg",
    content: `<h2> My Home</h2>`,
  });

  CreateMarker({
    location: { lat: 30.02239, lng: 31.2267 },
    tilte: "pharmacy",
    imageSrc: "pharmacy.jpg",
    content: `<h2>Mona's Pharmacy </h2>`,
  });

  CreateMarker({
    location: { lat: 30.015931, lng: 31.220633 },
    tilte: "Abbas Bridge",
    imageSrc: "bridge.jpg",
    content: `<h2>Abbas Bridge </h2>`,
  });
}

window.initMap = initMap;

/*   for (let i = 0; i < markers.length; i++) {
    if (marker[i].title) {
      const infowindow = new google.maps.InfoWindow({
        content: `<h2>${markers[i]} </h2>`,
      });
    }

    
  } */
