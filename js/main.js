
// Слайдер для блока хедер
$(document).ready(function() {
    $('.header__slider').slick({
        dots: true,
        speed: 500,
        autoplay: true,
    })
});

// ...............................................
// Слайдер для блока Топ продаж
$(document).ready(function() {
    $('.product__slider').slick({
        slidesToShow: 4,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 522,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },

        ]

    })
});


// .......................................
// Слайдер для блока АКЦИОННОЕ ПРЕДЛОЖЕНИЕ
$(document).ready(function() {
    $('.offer__slider').slick({
        responsive: [{
            breakpoint: 1084,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    })
});


// .....................................
// Фіксована кнопка вниз
$('.footer__btn-up').click(function() {
    $('body').animate({ 'scrollTop': 0 }, 1000);
    $('html').animate({ 'scrollTop': 0 }, 1000);
})



// ......................................
// Таймер
function timer(){
let countDownDate = new Date("Dec 31, 2020 00:00:00").getTime();
let countDownFunction = setInterval(function () {

    let now = new Date().getTime();

    let distance = countDownDate - now;

    let hours = Math.floor(distance /(1000 * 60 * 60 ));
    let minutes = Math.floor(distance % ((1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor(distance % ((1000 * 60 )) / 1000);

    if (hours < 10) {
        hours = '0' + hours;
    } 
    if (minutes < 10) {
        minutes = '0' + minutes;
    } 
    if (seconds < 10) {
        seconds = '0' + seconds;
    } 

    document.getElementById("timer").innerHTML =
    hours + '<p><span class="offer__hours">часов</span></p>' + 
    minutes + '<p><span class="offer__minutes">минут</span></p>' + 
    seconds +' <p><span class="offer__seconds">секунд</span></p>';

    document.getElementById("timer2").innerHTML =
    hours + '<p><span class="offer__hours"2>часов</span></p>' + 
    minutes + '<p><span class="offer__minutes2">минут</span></p>' + 
    seconds +' <p><span class="offer__seconds2">секунд</span></p>';

    if (distance < 0) {
        clearInterval(countDownFunction);
        document.getElementById("timer").innerHTML = "Время истекло"
    }

    if (distance < 0) {
        clearInterval(countDownFunction);
        document.getElementById("timer2").innerHTML = "Время истекло"
    }
})}

 timer();

// ...................................................




