

$('.row #details').hide();
// $(".container #image").click(function () {
//     $(this).animate({ opacity: "0.5" })
//     $('#details').show();
//     $(this).mouseleave(function () {
//         $(this).animate({ opacity: "1" })
//         $('#details').hide();
//     });
// });






$(".row img").each(function () {
    $(this).click(function () {
        // console.log($(this));
        // var image1 = $(this).children('img');
        // console.log(image1)
        //     image1.animate({ opacity: "0.5" })
        $(this).animate({ opacity: "0.5" })

        $(this).parent('div').each(function () {
            // console.log("1")
            // console.log($(this).parent('div').find('#details').text());
            // $(this).parent('#details').css('opacity', '0.5');
            $(this).parent('div').find('#details').show();
            // $().show();
        });
    });
    $(this).mouseleave(function () {
        $(this).animate({ opacity: "1" })
        $('.row #details').hide();
    });
});




function topBtn() {
    var windowBottom = $(window).scrollTop() + $(window).height();
    var detail = $('.detail');

    var detailHalf = detail.position().top + detail.outerHeight() / 2;
    // console.log(typeof($(window).scrollTop()));
    // console.log(detailHalf);
    // console.log(windowBottom);
    if (windowBottom >= detailHalf) {
        $('.to-top-btn').fadeIn(1000);
        // console.log($(document).scrollTop())
    }
    if ($(window).scrollTop() == 0) {
        $('.to-top-btn').fadeOut(1000);
    }
}

function topBtnClick() {
    $('html,body').animate({ scrollTop: 0 }, 500);
}

$(window).on('scroll',scrollHandler);
$(window).on('scroll', topBtn);
$('.to-top-btn').on('click', topBtnClick);



function scrollHandler(){
    var windowBottom = $(window).scrollTop() + $(window).height();
    
    // 모든 playlist를 하나씩 살펴보고
    //  그 playlist의 중간 지점의 좌표가 windowBottom보다 작으면
    //     그 playlist를 보이게 해라

    // var playlists = $('.container-fluid');

    $('.about').each(function(){
        // console.log($(this))
        var playlistHalf = $(this).position().top + $(this).outerHeight()/2;
        if(playlistHalf < windowBottom) {
            $(this).animate({'opacity':'1'},2000);
        }
    })
    $('.detail').each(function(){
        // console.log($(this))
        var playlistHalf = $(this).position().top + $(this).outerHeight()/12;
        if(playlistHalf < windowBottom) {
            $(this).animate({'opacity':'1'},2000);
        }
    })

//     for (var i = 0 ; i< playlists.length ; i++){
//         var playlist = $(playlists[i]);
//         var playlistHalf = playlist.position().top + playlist.outerHeight()/2;
//         if(playlistHalf < windowBottom) {
//             playlist.animate({'opacity':'1'},1500);
//         }
        
//     }
}

scrollHandler();


