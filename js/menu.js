
screenWidth = window.screen.width;
screenHeight = window.screen.height;


  $(document).ready(function () {
    $(".button-collapse").sideNav({
      menuWidth: 300,
      closeOnClick: true,
      edge: 'right', // <--- CHECK THIS OUT
    });
  });

window.addEventListener("scroll", function(){
  if (document.body.scrollTop > (3.3 * (screenHeight/5)) || document.documentElement.scrollTop > (3.3 * (screenHeight/5))) {
    document.querySelector(".navbar-color").style.backgroundImage = " url(images/landingBKG.svg)";
  } else {
    document.querySelector(".navbar-color").style.backgroundImage = "";
  }
    if (document.body.scrollTop > (1 * (screenHeight/5)) || document.documentElement.scrollTop > (1 * (screenHeight/5))) {
      document.querySelector(".icon-scroll").style.opacity = "0";
    } else {
      document.querySelector(".icon-scroll").style.opacity = "1";
    }
});
