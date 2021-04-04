$('.skrol').on('click', function(e){
     
    //ambil isi href
    var refs = $(this).attr('href');
    //cekel elemen href
    // console.log(refs);
    var ele = $(refs);
    //console.log(ele.offset().top);     

    $('body').scrollTop(ele.offset().top);

    e.preventDefault();
});