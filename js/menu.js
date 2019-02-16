
screenWidth = window.screen.width;
screenHeight = window.screen.height;

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

window.addEventListener("scroll", function(){
  if (document.body.scrollTop > screenHeight || document.documentElement.scrollTop > screenHeight) {
    document.querySelector("navbar-fixed").style.background = "rgba(50,50,250,0.9);";
  } else {
    document.querySelector("navbar-fixed").style.background = "rgba(200,200,200,0.3);";
  }
});
