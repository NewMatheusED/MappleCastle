$(function() {

    $('ul.desktop li a, ul.mobile li a').click(function(){
        $('header .container .menuMobile ul.mobile').slideUp()

        var href = $(this).attr('href'); 

        $('html,body').animate({
            scrollTop:$(href).offset().top - 100
        });
    });

    $('.logo a').click(function(){
        $('header .container .menuMobile ul.mobile').slideUp();

        $('html,body').animate({
            scrollTop: 0
        });
    });

    $(window).on('scroll', function() {
        let coords = $(window).scrollTop()

        console.log(coords + 'px Debug')

        if(coords > 0) {
            $('header').addClass('show')
        }else{
            $('header').removeClass('show')
        }

        $('.chamada1').css({
            'opacity': 1 * (1 - coords / $(window).height())
        })
    })

    $('header .container .menuMobile svg').click(() => {
        $('header .container .menuMobile ul.mobile').slideToggle()
    })
})

