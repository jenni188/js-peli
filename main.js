
/*$(document).ready(function(){
    $(".volume-btn .volume-on").on('click' , function(){
        $(this).hide();
        $(".volume-off").fadeIn();
        $("myMusic")[0].play();
    });
});

$(document).ready(function(){
    $(".volume-btn .volume-off").on('click' , function(){
        $(this).hide();
        $(".volume-on").fadeIn();
        $("myMusic")[0].pause();
    });
});
*/
//modal

let modal = document.getElementById('shop-modal');

function openModal(){
    modal.style.display = "block";
}

function hideModal(){
    modal.style.display = "none";
}