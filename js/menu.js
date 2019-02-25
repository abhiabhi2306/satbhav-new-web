bttn = document.getElementById("toggle");
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
  console.log(document.documentElement.scrollBottom);
  var indicator = document.querySelectorAll(".indicator");
  var sidemenu = document.querySelectorAll(".side-nav li>a");
  if (document.body.scrollTop > (0.8 * (screenHeight/2)) || document.documentElement.scrollTop > (0.8 * (screenHeight/2))) {
    document.querySelector(".navbar-color").style.backgroundImage = " url(images/landingBKG.svg)";
    for(i=0; i<indicator.length; i++){
      indicator[i].style.borderColor = "rgba(0,0,0,1)";
      sidemenu[i].style.color = "black";
    }
  } else {
    document.querySelector(".navbar-color").style.backgroundImage = "";
    document.querySelector(".side-nav li>a").style.color = "white";
    for(i=0; i<indicator.length; i++){
      indicator[i].style.borderColor = "rgba(255,255,255,1)";
      sidemenu[i].style.color = "white";
    }
  }
  if (document.body.scrollTop > (1 * (screenHeight/5)) || document.documentElement.scrollTop > (1 * (screenHeight/5))) {
    document.querySelector(".icon-scroll").style.opacity = "0";
    document.querySelector(".social").style.transform = "translate(0, 100px)";
  } else {
    document.querySelector(".icon-scroll").style.opacity = "1";
    document.querySelector(".social").style.transform = "translate(0, 0)";
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

		$('.section').each(function(i) {
				if (($(this).position().top - (screenHeight/5)) <= scrollDistance) {
						$('.nav-wrapper .active').removeClass('active');
    				$('.nav-wrapper .active2').removeClass('active2');
						$('.nav-wrapper .indicator').eq(i).addClass('active2');
						$('.nav-wrapper a').eq(i+7).addClass('active');
				}
		});
    if(scrollDistance <= (screenHeight/4)){
        $('.nav-wrapper .active2').addClass('active');
        $('.nav-wrapper .active2').removeClass('active2');
    }
    if(scrollDistance >= ($('.slider-container').position().top - 200) && scrollDistance <= ($('.slider-container').position().top + 200)){
        $('.indicator').each(function(i) {
          this.style.borderColor = "rgba(255,255,255,1)";
        })
        $('.side-nav li>a').each(function(i) {
          this.style.color = "white";
        })
        $('.nav-wrapper .active2').addClass('active');
        $('.nav-wrapper .active2').removeClass('active2');
    }
    if(scrollDistance >= ($('.sat_container').position().top - 200) && scrollDistance <= ($('.sat_container').position().top + 100)){
        bttn.checked = true;
    } else { bttn.checked = false; }
	  var scrollHeight = $(document).height();
	  var scrollPosition = $(window).height() + $(window).scrollTop();
	  if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
      $(".social").css("transform", "translate(0, 0)");
    }
}).scroll();
