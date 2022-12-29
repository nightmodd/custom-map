function initMap() {
  // The location of Uluru
  const myHome = { lat: 30.02239, lng: 31.22725 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    mapId: "a26acd6e5c845e01",
    center: myHome,
    fullscreenControl: false,
  });

  const markers = [
    {
      lat: 30.031414,
      lng: 31.210927,
      title: "My College",
      url: "college.jpg",
    },
    {
      lat: 30.02239,
      lng: 31.22725,
      title: "My Home",
      url: "home.jpg",
    },
    {
      lat: 30.02239,
      lng: 31.2267,
      title: "pharmacy",
      url: "pharmacy.jpg",
    },
    {
      lat: 30.015931,
      lng: 31.220633,
      title: "Abbas Bridge",
      url: "bridge.jpg",
    },
  ];
  for (let i = 0; i < markers.length; i++) {
    const marker = new google.maps.Marker({
      position: { lat: markers[i].lat, lng: markers[i].lng },
      map,
      title: markers[i].title,
      icon: {
        url: markers[i].url,

        scaledSize: new google.maps.Size(40, 40),
      },
      animation: google.maps.Animation.DROP,
    });

    const infowindow = new google.maps.InfoWindow({
      content: `<h2>${markers[i]} </h2>`,
    });

    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
  }
}

window.initMap = initMap;
