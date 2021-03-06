
//check to see if the media is mobile
var isMobile = window.matchMedia("only screen and (max-width: 1000px)");


$( document ).ready(function() {      
    if (isMobile.matches) 
    {		
      var $mobile_elements= $('.mobile-only');
      $.each($mobile_elements, function() 
      {
        var $element = $(this);
        $element.removeClass('removed');
      });
      var $desktop_elements= $('.desktop-only');
      $.each($desktop_elements, function() 
      {
        var $element = $(this);
        $element.addClass('removed');
      });
    }
});


var animationend = (function(el) {
  var animations = {
    animation: 'animationend',
    OAnimation: 'oAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    WebkitAnimation: 'webkitAnimationEnd',
  };

  for (var t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t];
    }
  }
})(document.createElement('div'));


var animation_list=['.scroll-fadein', '.scroll-fadeinup'];
var animationname_list= ['animated fadeIn', 'animated fadeInUp'];

var animation_listone=['.scroll-fadeinup-once', '.scroll-fadein-once'];
var animationname_listone= ['animated fadeInUp', 'animated fadeIn'];

var animation_listalw=['.scroll-fadeinup-alw', '.scroll-fadein-alw'];
var animationname_listalw= ['animated fadeInUp', 'animated fadeIn'];

var $window = $(window);



function check_if_in_viewalwaysvisible() {
  for(i=0; i<animation_listalw.length; i++)
  {
  var $animation_elements = $(animation_listalw[i]);	
  var animationname= animationname_listalw[i];
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
	var elt= this;
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
	  
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)){
    	$element.addClass('in-view');
		$element.addClass(animationname);
		$element.removeClass('hidden');
    } else {
      $element.removeClass('in-view');
	  $element.removeClass(animationname);
    }
  });
  };
}

//check if element is in view, if initially hidden unhide it
function check_if_in_view() {
  for(i=0; i<animation_list.length; i++)
  {
  var $animation_elements = $(animation_list[i]);	
  var animationname= animationname_list[i];
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
	var elt= this;
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
	  
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)){
      $element.addClass('in-view');
    $element.addClass(animationname);
    //remove the hidden class
		$element.removeClass('hidden');
    } else {
      $element.removeClass('in-view');
	  $element.removeClass(animationname);
	  $element.addClass('hidden');
    }
  });
  };
}

function check_if_in_viewonce() {
  for(i=0; i<animation_listone.length; i++)
  {
  var $animation_elements = $(animation_listone[i]);	
  var animationname= animationname_listone[i];
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
	var elt= this;
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
	  
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)){
    	$element.addClass('in-view');
		$element.addClass(animationname);
		$element.removeClass('hidden');
    } else {
      $element.removeClass('in-view');
    }
  });
  };
}

$window.on('scroll', check_if_in_view);
$window.on('scroll', check_if_in_viewonce);
$window.on('scroll', check_if_in_viewalwaysvisible);
$window.trigger('scroll');	
