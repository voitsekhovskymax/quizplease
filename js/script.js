$(document).ready(function () {
    console.log("ready!");

    // City Selector
    var state_menu = false;
    $(".city-drop-main").click(function () {
        state_menu = !state_menu;
        var list = $(this).children(".main-city-droplist");
        if (!state_menu)
            list.addClass("w--open");
        else
            list.removeClass("w--open");
    });


    // Menu

    $(".hamburger-menu, .menu-navbar .close").click(function () {
        $(".menu-navbar").toggleClass("open");
    });






    window.onscroll = function () {
        myFunction();
    };

    var header = document.getElementById("header");

    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }






});
