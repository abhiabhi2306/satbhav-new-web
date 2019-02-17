
screenWidth = window.screen.width;
screenHeight = window.screen.height;
window.onload = function(){
  window.scrollTo(0,0);
}

$(document).ready(function () {
  $(".button-collapse").sideNav({
    menuWidth: 300,
    closeOnClick: true,
    edge: 'right', // <--- CHECK THIS OUT
  });
});
function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop;
}
window.addEventListener("scroll", function(){
  console.log(document.documentElement.scrollTop);
  var indicator = document.querySelectorAll(".indicator");
  if (document.body.scrollTop > (0.8 * (screenHeight/2)) || document.documentElement.scrollTop > (0.8 * (screenHeight/2))) {
    document.querySelector(".navbar-color").style.backgroundImage = " url(images/landingBKG.svg)";
    document.querySelector(".side-nav li>a").style.color = "black";
    for(i=0; i<indicator.length; i++){
      indicator[i].style.borderColor = "rgba(0,0,0,1)";
    }
  } else {
    document.querySelector(".navbar-color").style.backgroundImage = "";
    document.querySelector(".side-nav li>a").style.color = "white";
    for(i=0; i<indicator.length; i++){
      indicator[i].style.borderColor = "rgba(255,255,255,1)";
    }
  }
  if (document.body.scrollTop > (1 * (screenHeight/5)) || document.documentElement.scrollTop > (1 * (screenHeight/5))) {
    document.querySelector(".icon-scroll").style.opacity = "0";
  } else {
    document.querySelector(".icon-scroll").style.opacity = "1";
  }
});

$(function(){

	var sliderWidth = $('.slider').width();
	var nowLi = 1;
	var li_count = $('.slider li').length;

	$('.slider ul').css({width:li_count * sliderWidth});
	$('.slider li').css({width:sliderWidth});

	for(var i=0; i<li_count;i++){
		$('.sliderControl').append('<a></a>');
	}


	$('.sliderControl a, .slider li').click(function(){
		nowLi = $(this).index();
		sliderChange();
		$('.sliderControl a').eq(nowLi).css({'background-color':'#F6C555'});
		$('.sliderControl a').eq(nowLi).siblings().css({'background-color':'#333'});
		$('.slider li').eq(nowLi).css({'transform':'rotateY(0)'});
		$('.slider li').eq(nowLi).prevAll().css({'transform':'rotateY(60deg)'});
		$('.slider li').eq(nowLi).nextAll().css({'transform':'rotateY(-60deg)'});
		$('.slider li').eq(0).css({'left':'-60px'});
	})


	function sliderChange(){
		$('.slider ul').stop(true, false).animate({left: sliderWidth * nowLi * -1}, 500);
	}

	var timer = setInterval(perpic, 5000);

	function perpic(){
		console.log( 'nowLi = ' + nowLi)
		nowLi++;
		if(nowLi>=li_count){
			nowLi=0;
		};
		sliderChange();
		$('.sliderControl a').eq(nowLi).css({'background-color':'#F6C555'});
		$('.sliderControl a').eq(nowLi).siblings().css({'background-color':'#333'});
		$('.slider li').eq(nowLi).css({'transform':'rotateY(0)'});
		$('.slider li').eq(nowLi).prevAll().css({'transform':'rotateY(60deg)'});
		$('.slider li').eq(nowLi).nextAll().css({'transform':'rotateY(-60deg)'});
	}

	$('.slider').hover(function(){
		clearInterval(timer);
		$('.timer .percentage').removeClass('gogo');
	},function(){
		timer = setInterval(perpic, 5000);
		$('.timer .percentage').addClass('gogo');
	});

});


$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();

		// Assign active class to nav links while scolling
		$('.section').each(function(i) {
				if (($(this).position().top - (screenHeight/5)) <= scrollDistance) {
						$('.hide-on-med-and-down .active').removeClass('active');
    				$('.hide-on-med-and-down a').removeClass('active');
    				$('.hide-on-med-and-down .active2').removeClass('active2');
						$('.hide-on-med-and-down .indicator').eq(i).addClass('active2');
						$('.hide-on-med-and-down a').eq(i).addClass('active');
				}
		});
    if(scrollDistance <= (screenHeight/4)){
        $('.hide-on-med-and-down .active2').addClass('active');
        $('.hide-on-med-and-down .active2').removeClass('active2');
    }
    if(scrollDistance >= ($('a[name=gallery]').position().top - (screenHeight/4)) && scrollDistance <= ($('a[name=gallery]').position().top + 200)){
        $('.indicator').each(function(i) {
          this.style.borderColor = "rgba(255,255,255,1)";
        })
        $('.hide-on-med-and-down .active2').addClass('active');
        $('.hide-on-med-and-down .active2').removeClass('active2');
    }
}).scroll();
