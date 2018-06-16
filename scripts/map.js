
var restaurantList = [
{
    "latlng":[53.54861,9.9288813],
    name:"Zur Traube"
},
{
    "latlng":[53.5478089,9.9276869],
    name:"Cuore Mio"
},
{
    "latlng":[53.5492824,9.9230596],
    name:"Taverna Kreta"
},
{
    "latlng":[53.550419,9.9247113],
    name:"Brasserie La Provence"
},
{
    "latlng":[53.5507854,9.9249039],
    name:"Restaurant Kleine Brunnenstrasse"
},
{
    "latlng":[53.55152,9.9287612],
    name:"Cosmos Ristorante"
},
{
    "latlng":[53.5520467,9.9309137],
    name:"Schweinske in Ottensen"
},
{
    "latlng":[53.5516211,9.9252909],
    name:"Goldene Gans"
},
{
    "latlng":[53.5491651,9.9201741],
    name:"Fuh"
},
{
    "latlng":[53.5540809,9.9224833],
    name:"Restaurant Balutschistan Altona"
}
];

var timeout, mapCanvas, zoom;

function initialize() {

    var mapDiv = document.getElementById("map");
    mapCanvas = new google.maps.Map(mapDiv);
    mapCanvas.setMapTypeId(google.maps.MapTypeId.SATELLITE);

    var bounds = new google.maps.LatLngBounds();
    var restaurant, i, latlng;

    for (i in restaurantList) {
        restaurant = restaurantList[i];
        latlng = new google.maps.LatLng(restaurant.latlng[0], restaurant.latlng[1]);
        bounds.extend(latlng);
        var marker = createMarker(
            mapCanvas, latlng, restaurant.name
            );

        bindMarkerButton(marker, i);
    }

    mapCanvas.fitBounds(bounds);
}

function createMarker(map, latlng) {

        var marker = new google.maps.Marker({
        position : latlng,
        map : map
    });

    google.maps.event.addListener(marker, "click", function(){ 
        map.panTo(marker.getPosition());  
        map.setZoom(18); 

        if(!timeout) {
            document.querySelector('.info-trigger').click();
        }      
        timeout = false;
    });
    return marker;
}

function bindMarkerButton(marker, i) {
    var li = document.querySelectorAll('.list__item');

    google.maps.event.addDomListener(li[i], "click", function(){
        timeout = setTimeout(function() {
            google.maps.event.trigger(marker, "click");
        }, 500);            
    });
}

google.maps.event.addDomListener(window, "load", initialize);

