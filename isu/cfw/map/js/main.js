var map = new L.Map('map', {maxBounds: [
    //SOUTHWEST CORNER
    [41.996067, -93.664644],
    //NORTHEAST CORNER
    [42.046210, -93.619044]
],attributionControl: false
}).setView([42.026611, -93.646444], 17) ;
  
//GET MAP TILES FOR BACKGROUND
(new L.TileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {minZoom: 15},
//(new L.TileLayer('http://otile4.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {minZoom: 15},
    {}
)).addTo(map);
                                                 
//POLYGON TOGGLE STYLE
var hidden = {"color": "#ffffff","weight": 5,"opacity":0,"fillOpacity":0,"fillColor":"#ffffff"};
                                                 
if ( $(window).width() < 850) {
    //DO NOTHING - JUST A CHECK
}
else {
    //ADD POLYGONS FROM POLYGONS.JS
    (new OSMBuildings(map)).setData(data);        
}
        
var autopad = {autoPanPaddingBottomRight: [50,50],autoPanPaddingTopLeft: [50,120]}
        
//TRANSPARENT ICONS
    var transIcon = L.Icon.extend({});
    var transmarker = new transIcon({iconUrl: 'images/markers/trans.png'});
    var transparent = L.icon({iconUrl: 'images/markers/transparent.png', /*shadowUrl: '*.png',*/ iconSize:     [80, 46]});

//CUSTOM ICONS
    var generic = L.icon({iconUrl: 'images/markers/generic.png', /*shadowUrl: '*.png',*/ iconSize:     [31, 43]});
    var video = L.icon({iconUrl: 'images/markers/video.png', /*shadowUrl: '*.png',*/ iconSize:     [31, 43]});
        
//ADD POLYGON LAYERS TO MAP
    (new L.geoJson(ASB, {style: hidden})).bindLabel('Administrative Services Building').addTo(map).bindPopup (ASB_pop,(autopad));

    L.marker([52.6206,-1.1288], {icon: transparent}).bindLabel('University Entrance',{noHide:true}).addTo(map);	

//ADD VIRTUAL TOUR MARKERS
    L.marker([42.026500, -93.649181], {icon: generic}).bindLabel('360° Virtual Tour').addTo(map).bindPopup('<iframe width="700" height="400" allowfullscreen style="border-style:none;" src="https://gofisk.com/isu/cfw/map/360/WEST_LAWN.html"></iframe>',(autopad));
    L.marker([42.026811, -93.648443], {icon: generic}).bindLabel('360° Virtual Tour').addTo(map).bindPopup('<iframe width="700" height="400" allowfullscreen style="border-style:none;" src="https://gofisk.com/isu/cfw/map/360/HUB.html"></iframe>',(autopad));
        
//ADD VIDEO MARKERS
    L.marker([52.6204,-1.1236], {icon: video}).bindLabel('Watch Video').addTo(map).bindPopup('<iframe src=\"https://www.youtube.com/embed/D-bOttxNEvQ\" frameborder=\"0\" allowfullscreen width=\"700px\" height=\"400px\"></iframe>',(autopad));
        
//ADD FOOTER CREDITS
    L.control.attribution({prefix:'Copyright &copy; 2016 - <a href="https://gofisk.com/">Scott Fisk</a> | <a href="http://leafletjs.com/">Leaflet</a> | <a href="http://osmbuildings.org">OSMBuildings</a> | <a href="http://www.opencyclemap.org/">Open Cycle Map</a> | <a href="http://www.openstreetmap.org/">OpenStreetMap</a>', position:'bottomright'}).addTo(map);
        
//ADD GEOLOCATION BUTTON
    L.control.locate().addTo(map);
        
    $('#refresh').click(function() {
        location.reload();
    });