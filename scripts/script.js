console.log('JS is linked!');

var deathCounter;



var count = 60;

var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

function timer()
{
  count = count-1;
  if (count === 0)
  {
     clearInterval(counter);
     //counter ended
     return $('.timer-notification').html('Time is up!');
  }

  $('.countdown').html(count + 'secs');
}

//restart game
$( ".restart-btn" ).click(function() {
    location.reload(true);
});

//Main character controls
$(document).keydown(function(e) {
    var $img = $('.jane');
    switch (e.which) {
    case 37:
        $($img).finish().animate({
            left: '-=40'
        });
        //left arrow key
        break;
    case 38:
        $($img).finish().animate({
            top: '-=40'
        }); //up arrow key
        break;
    case 39:
        $($img).finish().animate({
            left: '+=40'
        }); //right arrow key
        break;
    case 40:
        $($img).finish().animate({
            top: '+=40'
        }); //bottom arrow key
        break;
    }
})

function moveSkull() {
    var $img = $(".bad-guy");

    $img.fadeOut(1000, function() {
        var maxLeft = $('.game-board').width() - $img.width();
        console.log(maxLeft);
        var maxTop = $('.game-board').height() - $img.height();
        console.log(maxLeft);
        var leftPos = Math.floor(Math.random() * (maxLeft + 1));
        console.log(maxLeft);
        var topPos = Math.floor(Math.random() * (maxTop + 1));
        console.log(maxLeft);

        $img.css({ left: leftPos, top: topPos }).fadeIn(1000);
    });
};

moveSkull();
setInterval(moveSkull, 1000);

function moveJason() {
    var $img = $(".jason");

    $img.fadeOut(1000, function() {
        var maxLeft = $('.game-board').width() - $img.width();
        console.log(maxLeft);
        var maxTop = $('.game-board').height() - $img.height();
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
        var maxLeft = $('.game-board').width() - $img.width();
        console.log(maxLeft);
        var maxTop = $('.game-board').height() - $img.height();
        var leftPos = Math.floor(Math.random() * (maxLeft + 1));
        var topPos = Math.floor(Math.random() * (maxTop + 1));
        $img.css({ left: leftPos, top: topPos }).fadeIn(1000);
    });
};

moveDracula();
setInterval(moveDracula, 1000);

function moveZombie() {
    var $img = $(".zombie");

    $img.fadeOut(1000, function() {
        var maxLeft = $('.game-board').width() - $img.width();
        var maxTop = $('.game-board').height() - $img.height();
        var leftPos = Math.floor(Math.random() * (maxLeft + 1));
        var topPos = Math.floor(Math.random() * (maxTop + 1));

        $img.css({ left: leftPos, top: topPos }).fadeIn(1000);
    });
};

moveZombie();
setInterval(moveZombie, 1000);
