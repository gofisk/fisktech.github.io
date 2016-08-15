var map = new L.Map('map', {maxBounds: [
    //SOUTHWEST CORNER
    [44.817602, -93.217765],
    //NORTHEAST CORNER
    [44.841101, -93.167315]
],attributionControl: false
}).setView([44.832621, -93.195186], 16) ;
  
//GET MAP TILES FOR BACKGROUND
(new L.TileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {minZoom: 15},

    {}
)).addTo(map);
                                                 
//POLYGON TOGGLE STYLE
var hidden = {"color": "#ffffff","weight": 5,"opacity":0,"fillOpacity":0,"fillColor":"#ffffff"};
                                                 
if ( $(window).width() < 0) {
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
    var camera = L.icon({iconUrl: 'images/markers/camera.png', /*shadowUrl: '*.png',*/ iconSize:     [43, 43]});
    var generic = L.icon({iconUrl: 'images/markers/generic.png', /*shadowUrl: '*.png',*/ iconSize:     [31, 43]});
    var video = L.icon({iconUrl: 'images/markers/video.png', /*shadowUrl: '*.png',*/ iconSize:     [31, 43]});
        
//ADD POLYGON LAYERS TO MAP
    (new L.geoJson(M, {style: hidden})).bindLabel('Main Building').addTo(map).bindPopup (M_pop,(autopad));
	(new L.geoJson(Y, {style: hidden})).bindLabel('Yankee Place').addTo(map).bindPopup (Y_pop,(autopad));
	(new L.geoJson(R, {style: hidden})).bindLabel('Riverpark I').addTo(map).bindPopup (R_pop,(autopad));
	(new L.geoJson(P, {style: hidden})).bindLabel('Riverpark II').addTo(map).bindPopup (P_pop,(autopad));
	(new L.geoJson(U, {style: hidden})).bindLabel('BlueCross University').addTo(map).bindPopup (U_pop,(autopad));
	(new L.geoJson(C, {style: hidden})).bindLabel('Child Development Center').addTo(map).bindPopup (C_pop,(autopad));

//ADD VIRTUAL TOUR MARKERS
    L.marker([44.830133, -93.191886], {icon: camera}).bindLabel('360° Virtual Tour').addTo(map).bindPopup('<iframe width="700" height="400" allowfullscreen style="border-style:none;" src="360/HUB.html"></iframe>',(autopad));
    L.marker([44.832035, -93.193818], {icon: camera}).bindLabel('360° Virtual Tour').addTo(map).bindPopup('<iframe width="700" height="400" allowfullscreen style="border-style:none;" src="360/HUB.html"></iframe>',(autopad));
    L.marker([44.833785, -93.198176], {icon: camera}).bindLabel('360° Virtual Tour').addTo(map).bindPopup('<iframe width="700" height="400" allowfullscreen style="border-style:none;" src="360/HUB.html"></iframe>',(autopad));
    L.marker([44.835778, -93.198315], {icon: camera}).bindLabel('360° Virtual Tour').addTo(map).bindPopup('<iframe width="700" height="400" allowfullscreen style="border-style:none;" src="360/HUB.html"></iframe>',(autopad));
    L.marker([44.827500, -93.196574], {icon: camera}).bindLabel('360° Virtual Tour').addTo(map).bindPopup('<iframe width="700" height="400" allowfullscreen style="border-style:none;" src="360/HUB.html"></iframe>',(autopad));
    L.marker([44.835841, -93.195321], {icon: camera}).bindLabel('360° Virtual Tour').addTo(map).bindPopup('<iframe width="700" height="400" allowfullscreen style="border-style:none;" src="360/HUB.html"></iframe>',(autopad));
        
//ADD VIDEO MARKERS
    L.marker([52.6204,-1.1236], {icon: video}).bindLabel('Watch Video').addTo(map).bindPopup('<iframe src=\"https://www.youtube.com/embed/D-bOttxNEvQ\" frameborder=\"0\" allowfullscreen width=\"700px\" height=\"400px\"></iframe>',(autopad));
        
//ADD FOOTER CREDITS
    L.control.attribution({prefix:'&copy; 2016 - <a href="https://gofisk.com/">Scott Fisk</a> | <a href="http://leafletjs.com/">Leaflet</a> | <a href="http://osmbuildings.org">OSMBuildings</a> | <a href="http://www.openstreetmap.org/">OpenStreetMap</a>', position:'bottomright'}).addTo(map);
        
//ADD GEOLOCATION BUTTON
    L.control.locate().addTo(map);
        
    $('#refresh').click(function() {
        location.reload();
    });