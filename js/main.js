$(function () {
    //Header Slider
    $(".slider__container, .news__slider").slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev btn-left"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next btn-right"></button>',
        infinite: false,
    });

    // On click event
    $(".slider__container").on("click", function (event, slick, direction) {
        var currentSlide = $(".slider__container").slick("slickCurrentSlide");
        document.getElementById("sliderArea").style.backgroundImage = `url(./img/slider-${currentSlide}.jpg)`;
    });

    $("select").styler();

    $(".header__hamburger").on("click", function () {
        $(".header__nav ul").slideToggle();
    });
});
