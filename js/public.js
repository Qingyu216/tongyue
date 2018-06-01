$(function () {
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });



    // 最新快报滚动部分
    var new__rollLen = $('.news_roll_list #zx_ul li').length;
    setInterval(function () {
        $('#zx_ul').css({
            'top': (parseInt($('#zx_ul').css('top')) - 30) + 'px',
            'transition': '0.5s'
        });
        if (-parseInt($('#zx_ul').css('top')) / 30 >= new__rollLen - 1) {
            $('#zx_ul').css({
                'top': '0',
                'transition': '0s'
            });
        }
    }, 2000);
    
    $('.roll_around div ul li').width($('.roll_around div ul li img ').width());
});
