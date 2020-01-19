$(document).ready(function() {
    $('.nav-button').click(function() {
        $('.nav-button').toggleClass('change');
    });

    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if (position >= 80) {
            $('.nav-menu').addClass('custom-navbar');
            $('.logo').addClass('logo-scroll');
            $('.btn-up').addClass('rise-up');
        } else {
            $('.nav-menu').removeClass('custom-navbar')
            $('.logo').removeClass('logo-scroll');
            $('.btn-up').removeClass('rise-up');
        }
    });

    $('.btn-up').click(function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });

    $('.gallery-list-item').click(function() {
        let value = $(this).attr('data-filter');
        if (value === 'all') {
            $('.filter').show(300)
        } else {
            $('.filter').not('.' + value).hide(300);
            $('.filter').filter('.' + value).show(300)
        }
    });

    $('.gallery-list-item').click(function() {
        $(this).addClass('gallery-item-active').siblings().removeClass('gallery-item-active')
    });
});