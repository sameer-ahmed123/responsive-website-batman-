const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  // alert("hi");
  nav_header.classList.toggle("active");
};

//  subscribe to thapa technical Channle plz link:https://www.youtube.com/thapatechnical
mobile_nav.addEventListener("click", () => toggleNavbar());

function online(){
  var connectivity = window.navigator.onLine
  if (connectivity){
    alert("you are online")
  }
  else{
    alert("you are offline")
  }
}