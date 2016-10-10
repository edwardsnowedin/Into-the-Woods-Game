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


var count = 30;

var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

function timer()
{
  count = count-1;
  if (count === 0)
  {
     clearInterval(counter);
     //counter ended
     return alert('Time\'s up!');
  }

  $('.countdown').html(count + " secs");
}

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

function moveSkull() {
    var $img = $(".bad-guy");

    $img.fadeOut(1000, function() {
        var maxLeft = $(window).width() - $img.width();
        var maxTop = $(window).height() - $img.height();
        var leftPos = Math.floor(Math.random() * (maxLeft + 1))
        var topPos = Math.floor(Math.random() * (maxTop + 1))

        $img.css({ left: leftPos, top: topPos }).fadeIn(1000);
    });
};

moveSkull();
setInterval(moveSkull, 1000);

function moveJason() {
    var $img = $(".jason");

    $img.fadeOut(1000, function() {
        var maxLeft = $(window).width() - $img.width();
        console.log(maxLeft);
        var maxTop = $(window).height() - $img.height();
        var leftPos = Math.floor(Math.random() * (maxLeft + 1))
        var topPos = Math.floor(Math.random() * (maxTop + 1))

        $img.css({ left: leftPos, top: topPos }).fadeIn(1000);
    });
};

moveJason();
setInterval(moveJason, 1000);

function moveDracula() {
    var $img = $(".dracula");

    $img.fadeOut(1000, function() {
        var maxLeft = $(window).width() - $img.width();
        console.log(maxLeft);
        var maxTop = $(window).height() - $img.height();
        var leftPos = Math.floor(Math.random() * (maxLeft + 1))
        var topPos = Math.floor(Math.random() * (maxTop + 1))

        $img.css({ left: leftPos, top: topPos }).fadeIn(1000);
    });
};

moveDracula();
setInterval(moveDracula, 1000);
