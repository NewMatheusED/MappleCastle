$(function() {

    $(document).ready(function() {

        AOS.init();

        $('.loader').css('display', 'none')

        $(window).on('scroll', () => {

            let coords = $(window).scrollTop()
    
            console.log(coords + 'px Debug')
    
            if(coords > 0) {
                $('header').addClass('show')
                $('header .container ul li a').css({'color': 'rgb(4,4,4)'})
                $('body.dark header .container ul li a').css({'color': 'rgb(221,221,221)'})
            }else{
                $('header').removeClass('show')
                $('header .container ul li a').css({'color': 'rgb(221,221,221)'})
                $('body.dark header .container ul li a').css({'color': 'rgb(221,221,221)'})
                
            }
        })
    })

    $(window).on('scroll', () => {

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

    $('ul.desktop li a, ul.mobile li a').click(function() {
        $('header .container .menuMobile ul.mobile').slideUp()

        var href = $(this).attr('href'); 

        $('html, body').animate({
            scrollTop:$(href).offset().top - 100
        });
    });

    $('.logo a').click(function() {
        $('header .container .menuMobile ul.mobile').slideUp();

        $('html,body').animate({
            scrollTop: 0
        });
    });

    $('header .container .menuMobile svg').click(function() {
        $('header .container .menuMobile ul.mobile').slideToggle()
    })

    $('.highContrast i').click(function() {
        $('body').toggleClass('dark')

        let coords = $(window).scrollTop()

        if(coords > 0) {
            $('header .container ul li a').css({'color': 'rgb(4,4,4)'})
            $('body.dark header .container ul li a').css({'color': 'rgb(221,221,221)'})
        }else{
            $('header .container ul li a').css({'color': 'rgb(221,221,221)'})
            $('header .container ul li.mobile a').css({'color': 'rgb(221,221,221)'})
            $('body.dark header .container ul li a').css({'color': 'rgb(221,221,221)'})
            $('body.dark header .container ul.mobile li a').css({'color': 'rgb(4,4,4)'})
        }

    })
})

