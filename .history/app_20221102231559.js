$(function() {

    $(document).ready(function() { // quando a página carregar...
        
        AOS.init(); //iniciar biblioteca de animação

        $('.loader').css('display', 'none') //esconder loader ao carregar a página

        //--------------------------------------------------------------------------

        function adaptColor(){ //função para adaptação de cores

            let coords = $(window).scrollTop();

            $('.chamada1').css({
                'opacity': 1 * (1 - coords / $(window).height())
            })
    
            if(coords > 0) {
                $('header').addClass('show')
                $('header .container ul li a').css({'color': 'rgb(4,4,4)'})
                $('header .container ul.mobile li a').css({'color': 'rgb(4,4,4)'})
                $('header .container ul.desktop li span').css({'background': 'rgb(4,4,4)'})
                $('body.dark header .container ul li a').css({'color': 'rgb(221,221,221)'})
                $('body.dark header .container ul.desktop li span').css({'background': 'rgb(221,221,221)'})
            }else{
                $('header').removeClass('show')
                $('header .container ul li a').css({'color': 'rgb(221,221,221)'})
                $('header .container ul.mobile li a').css({'color': 'rgb(4,4,4)'})
                $('header .container ul.desktop li span').css({'background': 'rgb(221,221,221)'})
                $('body.dark header .container ul li a').css({'color': 'rgb(221,221,221)'})
                $('body.dark header .container ul.desktop li a').css({'color': 'rgb(221,221,221)'})   
            }
        }

        //para haver a adaptação em scroll e em loading da página
        adaptColor();
        $(window).on('scroll', () => {
            adaptColor();
        })


        //--------------------------------------------------------------------------

        //início do sistema de fonte dinâmica

        let size = 0; 

        let menuSize = getComputedStyle(document.documentElement).getPropertyValue('--menuSize');
        let acsessSize = getComputedStyle(document.documentElement).getPropertyValue('--acsessSize');
        let acsessSizeFontSize = getComputedStyle(document.documentElement).getPropertyValue('--acsessSizeFontSize');
        let titleSize = getComputedStyle(document.documentElement).getPropertyValue('--titleSize');
        let boxTitleSize = getComputedStyle(document.documentElement).getPropertyValue('--boxTitleSize');
        let boxTextSize = getComputedStyle(document.documentElement).getPropertyValue('--boxTextSize');   

        function textToInt(val) {
            var transform = val.replace("px", "");
            var result = parseInt(transform);
            return result
        }

        menuSize = textToInt(menuSize)
        acsessSize = textToInt(acsessSize)
        acsessSizeFontSize = textToInt(acsessSizeFontSize)
        titleSize = textToInt(titleSize)
        boxTitleSize = textToInt(boxTitleSize)
        boxTextSize = textToInt(boxTextSize)

        $('.increaseFont').click(function () {
            size += 2
            document.body.style.setProperty('--menuSize', (menuSize + size) + 'px')
            document.body.style.setProperty('--acsessSize', (acsessSize + size) + 'px')
            document.body.style.setProperty('--acsessSizeFontSize', (acsessSizeFontSize + size) + 'px')
            document.body.style.setProperty('--titleSize', (titleSize + size) + 'px')
            document.body.style.setProperty('--boxTitleSize', (boxTitleSize + size) + 'px')
            document.body.style.setProperty('--boxTextSize', (boxTextSize + size) + 'px')
        })

        $('.decreaseFont').click(function () {
            size -= 2
            document.body.style.setProperty('--menuSize', (menuSize + size) + 'px')
            document.body.style.setProperty('--acsessSize', (acsessSize + size) + 'px')
            document.body.style.setProperty('--acsessSizeFontSize', (acsessSizeFontSize + size) + 'px')
            document.body.style.setProperty('--titleSize', (titleSize + size) + 'px')
            document.body.style.setProperty('--boxTitleSize', (boxTitleSize + size) + 'px')
            document.body.style.setProperty('--boxTextSize', (boxTextSize + size) + 'px')
        })

        //fim do sistema de fonte dinâmica

        //--------------------------------------------------------------------------

        //início do sistema de menu dinâmico

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
          
        //fim do sistema de menu dinâmico

        //--------------------------------------------------------------------------

        $('.highContrast i').click(function() { //ativar modo de alto contraste
            $('body').toggleClass('dark')
            adaptColor();
        })
    })
})