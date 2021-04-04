$('.skrol').on('click', function(e){
     
    //ambil isi href
    var refs = $(this).attr('href');
    //cekel elemen href
    // console.log(refs);
    var ele = $(refs);
    //console.log(ele.offset().top);     

    $('html,body').animate({
        scrollTop: ele.offset().top - 50

    },200,'swing');

    e.preventDefault();
});
