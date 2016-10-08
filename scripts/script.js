console.log('JS is linked!');

// /*$(document).ready(function () {
//   $('h1').show('highlight',{'color': '#C8FB5E'},'fast');
// })
//
// alert('Game On!');*/
//
// var $audio = $('<audio></audio>');
//
// var $audioToBody = $($audio).attr({
//     'src':'./audio/caveDrip.mp3',
//     'volume':1.0,
//     'autoplay':'autoplay',
//     'loop': 'true'
// }).appendTo("body");
//
// var $cssAudio = $($audioToBody).css('display': 'none');
//
// $(document).ready(function() {
//   $("").click(function(){
//   $(".jane").effect( "bounce", {times:3}, 300 );
//         });
//     });

// // $(document).ready(function() {
// // Function to update counters on all elements with class counter
//   var doUpdate = function() {
//     $('.countdown').each(function() {
//       var count = parseInt($(this).html());
//         if (count !== 0) {
//           $(this).html(count - 1);
//           }
//         });
//       };
//
//     // Schedule the update to happen once every second
//     setInterval(doUpdate, 1000);
//     });
//Main character controls
$(document).keydown(function(e) {
    switch (e.which) {
    case 37:
        $('.jane').finish().animate({
            left: '-=40'
        }); //left arrow key
        break;
    case 38:
        $('.jane').finish().animate({
            top: '-=40'
        }); //up arrow key
        break;
    case 39:
        $('.jane').finish().animate({
            left: '+=40'
        }); //right arrow key
        break;
    case 40:
        $('.jane').finish().animate({
            top: '+=40'
        }); //bottom arrow key
        break;
    }
})
