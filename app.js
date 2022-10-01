$(function() {
    $(window).on('scroll', function() {
        let coords = $(window).scrollTop()

        console.log(coords)

        if(coords > 0) {
            $('header').addClass('show')
        }else{
            $('header').removeClass('show')
        }
    })
})