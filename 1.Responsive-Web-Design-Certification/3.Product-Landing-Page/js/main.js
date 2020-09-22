function hamburgerButton() {
  var x = document.getElementById("nav-sub");
  console.log(x);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

const navbar = document.getElementById("navbar-sticky");
let scrolled = false;

// detect browser resize  to fix transparency issues
var displayWindowSize = function () {
  var w = document.documentElement.clientWidth;
  return w;
};

window.addEventListener("resize", displayWindowSize);

window.onscroll = function () {
  if (window.pageYOffset > 80) {
    navbar.classList.remove("top");

    setTimeout(function () {
      scrolled = true;
    }, 100);
    
  } else {
    navbar.classList.add("top");
    scrolled = false;
  }
};
