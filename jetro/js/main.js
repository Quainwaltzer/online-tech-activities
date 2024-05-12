$(document).ready(function(){
    var index = 1;
$(".slider-next-button").click(function(){
       index++;
    if (index>6){
            index=1;
        }
    $(".imageMain").attr("src", "../img/slider-image-" + index + ".jpg");
    $(".slide-info > h3").html("SLIDE " + index);
});

$(".slider-previous-button").click(function(){
    index--;
 if (index<1){
         index=6;
     }
 $(".imageMain").attr("src", "../img/slider-image-" + index + ".jpg");
 $(".slide-info > h3").html("SLIDE " + index);
});

$('.thumbnail > li').click(function(){
    var index = $(this).index();
    console.log(index);
    var imgSrc = "../img/slider-image-" + (index+1) + ".jpg";
    $('#expandedImg').attr('src', imgSrc);
    $('.modal').css('display', 'block');
});

$('.close').click(function(){
    $('.modal').css('display', 'none');
});

$(".rotate-arrow").click(function(){
    $(".thumbnail").slideToggle();
   $(this).toggleClass('rotate');
});



$(".jetrotoggle").click(function(){
     $(".navigation").slideToggle();
    $(".navigation").toggleClass('navigation-off');
    if( $(".navigation").hasClass('navigation-off')){
        $(".navigation").css({'display': 'flex' , 'transition' : 'transform, 0.3s, ease'});
    }
   $(this).toggleClass('rotate');
});


    $('.accordion-header').click(function(){
        $(this).toggleClass('active').next('.accordion-content').slideToggle();
        $('.accordion-content').not($(this).next()).slideUp();
        $('.accordion-header').not($(this)).removeClass('active');
    });


});