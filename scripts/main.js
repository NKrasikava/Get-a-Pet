
//SLIDER

document.addEventListener('DOMContentLoaded', function () {
    var slides = document.querySelectorAll('#slider span'); //с помощью querySelectorAll получаем все слайды из контейнера.
    var i = 0; //создаем переменную для запуска текущего слайда.
    var interval = setInterval(nextSlide, 3000);//меняем класс для текущего слайда, чтобы спрятать его, задаем интервал 2сек для следующего слайда

    function nextSlide() {
        slides[i].className = '';
        i = (i + 1) % slides.length;
        slides[i].className = 'active';
    }


    //BURGER

    $('#menu-burger').click(function () {
        var overlayMenu = $('#overlay-menu'),
            menuIconLines = $('#menu-burger .menu-icon'),
            menuBurger = $('#menu-burger');

        if (overlayMenu.hasClass('open')) {
            overlayMenu.removeClass('open');
            menuIconLines.removeClass('open');
            menuBurger.removeClass('open');
        }
        else {
            overlayMenu.addClass('open');
            menuIconLines.addClass('open');
            menuBurger.addClass('open');
        };
    })

    
    // GALLERY - Slick plugin
    
        $('.container').slick({
            centerMode: true,
            adaptiveHeight: "true",
            centerMode: "true",
            adaptiveHeight: "false",
            variableWidth: true,

            prevArrow:"<img class='dog_arrow' >",
            nextArrow:"<img class='dog_arrow' >",

            centerPadding: "50%",
        });


}, false);