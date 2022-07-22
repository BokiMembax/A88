function goToByScroll(id) {
  $('html,body').animate({
    scrollTop: $("#" + id).offset().top
  }, 'slow');
}

var mybutton = document.getElementById("scrollTopImage");

var navbarLogo = document.getElementById("navbarLogo");

window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }

  if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
    navbarLogo.style.display = "block";
  } else {
    navbarLogo.style.display = "none";
  }
}