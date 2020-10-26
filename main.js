

/*function setVolume() {
    var mediaClip = document.getElementById("video1")
    mediaClip.volume = document.getElementById("vol-control").value;
}

window.onload = function() {
    // when  page is loaded restore your volume to it's save value
    if (localStorage.getItem('volume') != null) {
        var mediaClip = document.getElementById("video1")
        mediaClip.volume = parseInt(localStorage.getItem('vol-control')); // you restore your volume setting to your save volume
    }
}
function setVolume() {
    var mediaClip = document.getElementById("video1");
    mediaClip.volume = document.getElementById("vol-control").value;
    localStorage.setItem('volume', mediaClip.volume); // you change your volume setting
}
*/
$(document).ready(function(){
    $(".img .volume-on").on('click' , function(){
        $(this).hide();
        $(".volume-off").fadeIn();
        $("myMusic")[0].play();
    });
});