const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const body = document.body;
const submenu = document.querySelector('.menu__list');

const links = Array.from(submenu.children); 

links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
    burger.classList.remove("active");
    menu.classList.remove("active");
    body.classList.remove("lock");
}

burger.addEventListener("click", function (e) {
    e.preventDefault();
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("lock");
})

$(document).ready(function () {
    $('.block__title').click(function (event) {
        if ($('.journey__spoller').hasClass('one')) {
            $('.block__title').not($(this)).removeClass('active');
            $('.block__text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

$('.reviews__slider').slick({
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true
});

if ($(window).width() < 768) {
    $(document).ready(function () {
        $('.footer-block__title').click(function (event) {
            if ($('.footer__right').hasClass('one')) {
                $('.footer-block__title').not($(this)).removeClass('active');
                $('.footer__links-body').not($(this).next()).slideUp(300);
            }
            $(this).toggleClass('active').next().slideToggle(300);
        });
    });
 }

 $(document).ready(function(){
    $("#header__menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);
    });
});