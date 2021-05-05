$(document).ready(function () {
    console.log("ready!");



    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,

        // If we need pagination


        // Navigation arrows
        navigation: {
            nextEl: '.team-slider-next',
            prevEl: '.team-slider-prev',
        },


    });

});
