$(document).ready(function () {
    $(".carver").click(function () {
        L.marker([42.025350, -93.648341], {
            icon: transmarker
        }).addTo(map).bindPopup(CARVER_HALL_pop/*,(autopad)*/).openPopup();
        map.setView([42.025540, -93.647150], 18)
        L.marker.setStyle({fillColor: '#00aeff'});
    });
        $(".mu").click(function () {
        L.marker([42.023674, -93.645784], {
            icon: transmarker
        }).addTo(map).bindPopup(MEMORIAL_UNION_pop/*,(autopad)*/).openPopup();
        map.setView([42.023674, -93.645784], 18)
        L.marker.setStyle({fillColor: '#00aeff'});
    });
        $(".scheman").click(function () {
        L.marker([42.021580, -93.637055], {
            icon: transmarker
        }).addTo(map).bindPopup(SCHEMAN_BUILDING_pop/*,(autopad)*/).openPopup();
        map.setView([42.021580, -93.637055], 18)
        L.marker.setStyle({fillColor: '#00aeff'});
    });
    $(".hilton").click(function () {
        L.marker([42.021006, -93.634823], {
            icon: transmarker
        }).addTo(map).bindPopup(HILTON_pop/*,(autopad)*/).openPopup();
        map.setView([42.021006, -93.634823], 18)
        L.marker.setStyle({fillColor: '#00aeff'});
    });
    $(".convos").click(function () {
        L.marker([42.025230, -93.640230], {
            icon: transmarker
        }).addTo(map).bindPopup(CONVOS_DINING_pop/*,(autopad)*/).openPopup();
        map.setView([42.025440, -93.638390], 18)
        L.marker.setStyle({fillColor: '#00aeff'});
    });
    $(".lebaron").click(function () {
        L.marker([42.028800, -93.647524], {
            icon: transmarker
        }).addTo(map).bindPopup(LEBARON_HALL_pop/*,(autopad)*/).openPopup();
        map.setView([42.028800, -93.647524], 18)
        L.marker.setStyle({fillColor: '#00aeff'});
    });
    $(".design").click(function () {
        L.marker([42.028700, -93.653180], {
            icon: transmarker
        }).addTo(map).bindPopup(DESIGN_BUILDING_pop/*,(autopad)*/).openPopup();
        map.setView([42.028700, -93.653180], 18)
        L.marker.setStyle({fillColor: '#00aeff'});
    });
    $(".alumni").click(function () {
        L.marker([42.018151, -93.638691], {
            icon: transmarker
        }).addTo(map).bindPopup(ALUMNI_CENTER_pop/*,(autopad)*/).openPopup();
        map.setView([42.018050, -93.637500], 18)
        L.marker.setStyle({fillColor: '#00aeff'});
    });
})