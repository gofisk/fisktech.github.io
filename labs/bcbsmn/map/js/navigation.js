$(document).ready(function () {
    $(".M").click(function () {
        map.setView([44.830642, -93.192652], 20)
        L.marker([44.830642, -93.192652], {
            icon: transmarker
        }).addTo(map).bindPopup(M_pop /*,(autopad)*/ ).openPopup();
    });
})
$(document).ready(function () {
    $(".Y").click(function () {
        map.setView([44.832433, -93.194759], 20)
        L.marker([44.832433, -93.194759], {
            icon: transmarker
        }).addTo(map).bindPopup(Y_pop /*,(autopad)*/ ).openPopup();
    });
})
$(document).ready(function () {
    $(".R").click(function () {
        map.setView([44.834033, -93.198858], 20)
        L.marker([44.834033, -93.198858], {
            icon: transmarker
        }).addTo(map).bindPopup(R_pop /*,(autopad)*/ ).openPopup();
    });
})
$(document).ready(function () {
    $(".P").click(function () {
        map.setView([44.835005, -93.198873], 20)
        L.marker([44.835005, -93.198873], {
            icon: transmarker
        }).addTo(map).bindPopup(P_pop /*,(autopad)*/ ).openPopup();
    });
})
$(document).ready(function () {
    $(".U").click(function () {
        map.setView([44.836101, -93.195745], 20)
        L.marker([44.836101, -93.195745], {
            icon: transmarker
        }).addTo(map).bindPopup(U_pop /*,(autopad)*/ ).openPopup();
    });
})
$(document).ready(function () {
    $(".C").click(function () {
        map.setView([44.827802, -93.195779], 20)
        L.marker([44.827802, -93.195779], {
            icon: transmarker
        }).addTo(map).bindPopup(C_pop /*,(autopad)*/ ).openPopup();
    });
})