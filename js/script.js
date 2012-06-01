/* Author: @mcsheffrey
*/

/* Swipe Variables */
$.fn.cycle.transitions.scrollHorzTouch = function($cont, $slides, opts) {

  $('#dcshoes ul li img').css({
    'display': 'inline-block',
    'height':'auto',
    'position': 'relative',
    'width':'100%'
  });

  $cont.css('overflow','hidden').width();
  opts.before.push(function(curr, next, opts, fwd) {

  if (opts.rev)
    fwd = !fwd;

  positionNext = $(next).position();
  positionCurr = $(curr).position();

  $.fn.cycle.commonReset(curr,next,opts);

  if( ( positionNext.left > 0 && fwd ) || ( positionNext.left <  0 && !fwd ) ) {
    opts.cssBefore.left = positionNext.left;
  } else {
    opts.cssBefore.left = fwd ? (next.cycleW-1) : (1-next.cycleW);
  }

  if( ( positionCurr.left > 0 && fwd ) || ( positionCurr.left <  0 && !fwd ) ) {
    opts.animOut.left = positionCurr.left;
  } else {
    opts.animOut.left = fwd ? -curr.cycleW : curr.cycleW;
  }

});

  opts.cssFirst.left = 0;
  opts.cssBefore.top = 0;
  opts.animIn.left = 0;
  opts.animOut.top = 0;
};
  var currenSlide = null;
  var slideNumber = 0;
  var currentLeft = 0;
  var leftStart = 0;
  var sliderExpr;
  var slideFlag = false;

 $('#dcshoes ul').cycle({
    easing: 'easeInOutQuint',
    fx:     'scrollHorzTouch',
    timeout: 0,
    speedIn:   400,
    speedOut:   400,
    slideExpr: 'img',
    next: '#next',
    prev: '#prev',
    before: beforeSlide,
    after: afterSlide,
    startingSlide: 0
});


$('#dcshoes ul').swipe({ 
  swipeMoving: function( pageX ){

    if( slideFlag ) return;

    var newLeft = currentLeft-pageX;

    currenSlide.css('left', newLeft+'px'  );

    var $slides = $( sliderExpr, $('#dcshoes ul') );
    var scrollSlide;

    nextSlideLeft =   newLeft > 0 ? newLeft - currenSlide.width(): newLeft+currenSlide.width();
    flag = newLeft > 0 ? -1: 1;
    scrollSlide  = slideNumber + flag;
    if( scrollSlide < 0 || scrollSlide > ($slides.length - 1 ) )
    {
        scrollSlide = scrollSlide < 0 ? $slides.length - 1 : 0;
    }

     $slides.eq( scrollSlide ).css('left',nextSlideLeft + 'px' );
     $slides.eq( scrollSlide ).show();
  },
  swipeLeft: function() {
    $('#dcshoes ul').cycle('next');
  },
  swipeRight: function() { 
    $('#dcshoes ul').cycle('prev'); 
  }
});


// Call this function before the slide start
function beforeSlide( curr, next , opt ) {
  console.log($(next));
  
  $('#dcshoes ul li img').css({
    'height':'auto',
    'width':'100%'
  });
  sliderExpr = opt.slideExpr;
  slideFlag = true;
}

// Call this function after the slide start
function afterSlide(curr, next , opt ) {
  currenSlide =  $(next);
  slideNumber = opt.currSlide;
  currentLeft = $(next).position().left;
  slideFlag = false;
  $('#prev').text(slideNumber + 1);
  $('#next').text(opt.slideCount);
  console.log(opt);
  
}


var $projects = $('.section').length,
    current = 0,
    dir = 'next',
    pos = 0,
    animating = false,
    timer;

    function nick() {
      animating = false;

      clearTimeout(timer);
    }

$('body.work').bind("mousewheel", function(event, delta, deltaX, deltaY) {
 

  event.preventDefault();

  if( animating ) {
    clearTimeout(timer);

    timer = setTimeout(nick, 100);

    return false;
  }

    if (deltaY < 0.025) {

      if (pos !== $projects) {

        animating = true;

        console.log('start scrolling');

        timer = setTimeout(nick, 100);

        $.scrollTo('.section:eq(' + ++pos + ')', 800, {easing:'easeInOutQuint',axis: "y", onAfter:function(){

          console.log('done scrolling');
          

        }});
      } 

    } else if (deltaY > -0.025) {

      if (pos !== 0) {

        animating = true;

        timer = setTimeout(nick, 100);

        $.scrollTo('.section:eq(' + --pos + ')', 800, {easing:'easeInOutQuint',axis: "y", onAfter:function(){

        }});
      }  

    };
    

      console.log(dir);

      console.log($projects);

      console.log(pos);

  

  return false;

});

$('#work').on('click', function(event) {
  event.preventDefault();
  $.scrollTo('.section:eq(1)', 800, {easing:'easeInOutQuint',axis: "y"});
  pos++;
});

// $(".projectSlideHolder:eq(" + aK + ") .media").each(function(aP) {
//     if (aP < ai && aP > -1) {
//         aD[aP] = $(this).width() + imagePadding;
//         ax = ax + aD[aP]
//     }
// });

//   $(window).scrollTo(".project:eq(" + aK + ")", 400, {easing: "easeInOutExpo",offset: -20,axis: "y",onAfter: function() {

//   });


// function e() {
// $(".project").each(function() {
//     var projectLength = $(this).find(".media").length;
//     var aP = $(this).find(".projectSlideHolder").attr("name");
//     aP = parseInt(aP);
//     aP++;
//     $(this).find(".counter").html("" + aP + "/" + aQ + "")
// })

// e();

getTwitters('twitter', { 
  id: 'mcsheffrey', 
  count: 1, 
  enableLinks: true, 
  ignoreReplies: true, 
  clearContents: true,
  template: '"%text%" <a href="http://twitter.com/%user_screen_name%/statuses/%id_str%/"> ~ %time%</a>'
});
