$(document).ready(function () {
    $(".ASB").click(function () {
        map.setView([42.03469, -93.64564], 20)
        L.marker([42.03469, -93.64564], {
            icon: transmarker
        }).addTo(map).bindPopup(ASB_pop /*,(autopad)*/ ).openPopup();
    });
})