
//SLIDER

document.addEventListener('DOMContentLoaded', function () {
    var slides = document.querySelectorAll('#slider span'); //с помощью querySelectorAll получаем все слайды из контейнера.
    var i = 0; //создаем переменную для запуска текущего слайда.
    var interval = setInterval(nextSlide, 2000);//меняем класс для текущего слайда, чтобы спрятать его, задаем интервал 2сек для следующего слайда

    function nextSlide() {
        slides[i].className = '';
        i = (i + 1) % slides.length;
        slides[i].className = 'active';
    }    
}, false);

