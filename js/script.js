/* Author: @mcsheffrey
*/

/* Swipe Variables */
// $.fn.cycle.transitions.scrollHorzTouch = function($cont, $slides, opts) {

//   $('#bioonc ul li img').css({
//     'display': 'block',
//     'height':'auto',
//     'position': 'absolute',
//     'max-width':'100%',
//     'width':'auto'
//   });

//   $('#bioonc ul li').css({
//     'display': 'block'
//   });

//   $cont.css('overflow','hidden').width();
//   opts.before.push(function(curr, next, opts, fwd) {

//     console.log(opts);
    

//     if (opts.rev)
//       fwd = !fwd;    

//     positionNext = $(next).position();
//     positionCurr = $(curr).position();

//     var backgroundWidth = $('#bioonc #bg-scroll').width(),
//       sectionWidth = $('#bioonc').width(),
//       bgScrollWidth = ((backgroundWidth - sectionWidth) / opts.slideCount) * (opts.currSlide);

//   console.log(backgroundWidth, sectionWidth, bgScrollWidth);

//   $('#bioonc #bg-scroll').css('left', '-' + bgScrollWidth + 'px');

//   $('#bioonc ul').css('left', '-' + sectionWidth + 'px');

//     $.fn.cycle.commonReset(curr,next,opts);

//     if( ( positionNext.left > 0 && fwd ) || ( positionNext.left <  0 && !fwd ) ) {
//       opts.cssBefore.left = positionNext.left;

//     } else {
//       opts.cssBefore.left = fwd ? ( next.cycleW - 1) : ( 1 - next.cycleW );
//     }

//     if( ( positionCurr.left > 0 && fwd ) || ( positionCurr.left <  0 && !fwd ) ) {
//       opts.animOut.left = positionCurr.left;
//     } else {
//       opts.animOut.left = fwd ? -curr.cycleW : curr.cycleW;
//     }

//     });

//     opts.cssFirst.left = 0;
//     opts.cssBefore.top = 0;
//     opts.animIn.left = 0;
//     opts.animOut.top = 0;
//   };

//   var currenSlide = null;
//   var slideNumber = 0;
//   var currentLeft = 0;
//   var leftStart = 0;
//   var sliderExpr;
//   var slideFlag = false;

//  $('#bioonc ul').cycle({
//     easing: 'easeInOutQuint',
//     fx:     'scrollHorzTouch',
//     timeout: 0,
//     speedIn:   400,
//     speedOut:   400,
//     next: '#next',
//     prev: '#prev',
//     before: beforeSlide,
//     after: afterSlide,
//     startingSlide: 0
// });


// $('#bioonc ul').swipe({ 
//   swipeMoving: function( pageX ){

//     if( slideFlag ) return;

//     var newLeft = currentLeft - pageX;

//     currenSlide.css('left', newLeft+'px'  );

//     var $slides = $( sliderExpr, $('#dcshoes ul') );
//     var scrollSlide;

//     nextSlideLeft =   newLeft > 0 ? newLeft - currenSlide.width(): newLeft+currenSlide.width();
//     flag = newLeft > 0 ? -1: 1;
//     scrollSlide  = slideNumber + flag;
//     if( scrollSlide < 0 || scrollSlide > ($slides.length - 1 ) )
//     {
//         scrollSlide = scrollSlide < 0 ? $slides.length - 1 : 0;
//     }

//      $slides.eq( scrollSlide ).css('left',nextSlideLeft + 'px' );
//      $slides.eq( scrollSlide ).show();
//   },
//   swipeLeft: function() {

//     $('#bioonc ul').cycle('next');
//   },
//   swipeRight: function() { 
//     $('#bioonc ul').cycle('prev'); 
//   }
// });

// $('#hero-prev').on('click', function(event) {
//   $('#bioonc ul').cycle('prev');

//   event.preventDefault();
// });

// $('#hero-next').on('click', function(event) {
//   $('#bioonc ul').cycle('next');
  
//   event.preventDefault();
// });


// // Call this function before the slide start
// function beforeSlide( curr, next , opt ) {

//   $('#bioonc ul li img').css({
//     'height':'auto'
//   });
//   sliderExpr = opt.slideExpr;
//   slideFlag = true;
// }

// // Call this function after the slide start
// function afterSlide(curr, next , opt ) {
//   currenSlide =  $(next);
//   slideNumber = opt.currSlide;
//   currentLeft = $(next).position().left;
//   slideFlag = false;
//   $('#prev').text(slideNumber + 1);
//   $('#next').text(opt.slideCount);
// }

// the procedural method
(function($) {
  var $section = $('#bioonc'),
      sliderUL = $('#bioonc').find('.hero ul'),
      imgs = sliderUL.children('li'),
      imgWidth = $(imgs).eq(0).addClass('active').outerWidth(true), // 600
      imgsLen = imgs.length, // 4
      current = 1,
      totalImgsWidth = imgsLen * imgWidth; // 2400

      console.log(sliderUL, imgs, imgWidth, imgsLen, current, totalImgsWidth);

  $(sliderUL).width(totalImgsWidth);

  $section.find('#next').text(imgsLen);

  $('#bioonc').find('button').on('click', function() {

    var direction = $(this).data('dir');

    setCurrent(direction)
  });

  function setCurrent(direction) {
    var loc = imgWidth; // 600

    // update current value
    ( direction === 'next' ) ? ++current : --current;

    // if first image
    if ( current === 0 ) {
      current = imgsLen;
      loc = totalImgsWidth - imgWidth; // 2400 - 600 = 1800
      direction = 'next';
    } else if ( current - 1 === imgsLen ) { // Are we at end? Should we reset?
      current = 1;
      loc = 0;
    }

    transition(sliderUL, loc, direction);
    console.log(current);

    $section.find('#prev').text(current);

    $(imgs).eq(current-1).addClass('active').siblings().removeClass('active');
  }

  function transition( container, loc, direction ) {
    var unit, // -= +=
        backgroundWidth = $('#bioonc #bg-scroll').width(),
        sectionWidth = $('#bioonc').width(),
        bgScrollWidth = ((backgroundWidth - sectionWidth) / imgsLen) * current;

    if (direction === 'next') {
      container.css({
        '-webkit-transform': 'translate3d(' + (current-1) * -imgWidth + 'px,0,0)'
      });
    }

    console.log(unit, loc);

    if (direction === 'next') {
      $('#bioonc #bg-scroll').css({
        '-webkit-transform': 'translate3d(' + -bgScrollWidth + 'px,0,0)'
      });
    } else {
      $('#bioonc #bg-scroll').css({
        '-webkit-transform': 'translate3d(' + bgScrollWidth + 'px,0,0)'
      });
    }

  }

  sliderUL.swipe({
    swipeMoving: function( pageX ){
      console.log(pageX);
      
    },
    swipeLeft: function() {
      setCurrent('prev')
    },
    swipeRight: function() {
      setCurrent('next')
    }
  });

})(jQuery);

var $projects = $('.section').length,
    current = 0,
    dir = 'next',
    pos = 0,
    animating = false,
    timer;

    // Fake timer
    function nick() {
      animating = false;

      clearTimeout(timer);
    }

$('body.work').bind("mousewheel", function(event, delta, deltaX, deltaY) {
 

  event.preventDefault();

  if( animating ) {
    clearTimeout(timer);

    timer = setTimeout(nick, 50);

    return false;
  }

    if (deltaY < 0.025) {

      if (pos !== $projects) {

        animating = true;

        console.log('start scrolling');

        timer = setTimeout(nick, 50);

        $.scrollTo('.section:eq(' + ++pos + ')', 600, {easing:'easeInOutQuart',axis: "y", onAfter:function(){

          console.log('done scrolling');
          
        }});
      } 

    } else if (deltaY > -0.025) {

      if (pos !== 0) {

        animating = true;

        timer = setTimeout(nick, 50);

        $.scrollTo('.section:eq(' + --pos + ')', 600, {easing:'easeInOutQuart',axis: "y", onAfter:function(){

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
  $.scrollTo('.section:eq(1)', 600, {easing:'easeInOutQuart',axis: "y"});
  pos++;
});

window.setTimeout(
  function() {
    $('body').addClass('ready');
  },
  500
);

$('#page-title').fitText(0.5);

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
