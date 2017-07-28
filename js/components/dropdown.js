/*!
 * inspideez
 * dropdown
 */
$(function () {
    $('.dropdown-toggle').on("click", function (event) {
        event.stopPropagation();
        //closing all other dropdown's and adding .closing for animating 
        $('.dropdown.open').not($(this).parent('.dropdown')).removeClass('open').addClass('closing');
        //removing .closing after timeout
        setTimeout(function () {
            $('.dropdown').removeClass('closing');
        }, 250);
        //toggle .open and .closing
        $(this).parent('.dropdown').toggleClass('open');
        if ($(this).parent('.dropdown').hasClass('open')) {
        } else {
            $(this).parent('.dropdown').addClass('closing');
            setTimeout(function () {
                $('.dropdown').removeClass('closing');
            }, 250);
        }
        
    });
    //outside click closing all dropdown's
    $('html,body').on("click", function () {
        $('.dropdown.open').addClass('closing');
        setTimeout(function () {
            $('.dropdown').removeClass('closing');
        }, 250);
        $('.dropdown').removeClass('open')
    });

});