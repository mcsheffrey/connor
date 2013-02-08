/* Author: @mcsheffrey
*//* Swipe Variables */// $.fn.cycle.transitions.scrollHorzTouch = function($cont, $slides, opts) {
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
function nick(){animating=!1;clearTimeout(timer)}(function(e){function a(a){var l=i;a==="next"?++o:--o;if(o===0){o=s;l=u-i;a="next"}else if(o-1===s){o=1;l=0}f(n,l,a);console.log(o);t.find("#prev").text(o);e(r).eq(o-1).addClass("active").siblings().removeClass("active")}function f(t,n,r){var u,a=e("#bioonc #bg-scroll").width(),f=e("#bioonc").width(),l=(a-f)/s*o;r==="next"&&t.css({"-webkit-transform":"translate3d("+(o-1)*-i+"px,0,0)"});console.log(u,n);r==="next"?e("#bioonc #bg-scroll").css({"-webkit-transform":"translate3d("+ -l+"px,0,0)"}):e("#bioonc #bg-scroll").css({"-webkit-transform":"translate3d("+l+"px,0,0)"})}var t=e("#bioonc"),n=e("#bioonc").find(".hero ul"),r=n.children("li"),i=e(r).eq(0).addClass("active").outerWidth(!0),s=r.length,o=1,u=s*i;console.log(n,r,i,s,o,u);e(n).width(u);t.find("#next").text(s);e("#bioonc").find("button").on("click",function(){var t=e(this).data("dir");a(t)});n.swipe({swipeMoving:function(e){console.log(e)},swipeLeft:function(){a("prev")},swipeRight:function(){a("next")}})})(jQuery);var $projects=$(".section").length,current=0,dir="next",pos=0,animating=!1,timer;$("body.work").bind("mousewheel",function(e,t,n,r){e.preventDefault();if(animating){clearTimeout(timer);timer=setTimeout(nick,50);return!1}if(r<.025){if(pos!==$projects){animating=!0;console.log("start scrolling");timer=setTimeout(nick,50);$.scrollTo(".section:eq("+ ++pos+")",600,{easing:"easeInOutQuart",axis:"y",onAfter:function(){console.log("done scrolling")}})}}else if(r>-0.025&&pos!==0){animating=!0;timer=setTimeout(nick,50);$.scrollTo(".section:eq("+ --pos+")",600,{easing:"easeInOutQuart",axis:"y",onAfter:function(){}})}console.log(dir);console.log($projects);console.log(pos);return!1});$("#work").on("click",function(e){e.preventDefault();$.scrollTo(".section:eq(1)",600,{easing:"easeInOutQuart",axis:"y"});pos++});window.setTimeout(function(){$("body").addClass("ready")},500);$("#page-title").fitText(.5);getTwitters("twitter",{id:"mcsheffrey",count:1,enableLinks:!0,ignoreReplies:!0,clearContents:!0,template:'"%text%" <a href="http://twitter.com/%user_screen_name%/statuses/%id_str%/"> ~ %time%</a>'});