var scroll = this.pageYOffset || document.documentElement.scrollTop;
  var wrapper = document.getElementById('page-wrapper'); 
  var dynamic = document.getElementById('nav-bar');
  var height = wrapper.offsetHeight;

window.addEventListener('scroll', function(){
  var scroll = this.pageYOffset || document.documentElement.scrollTop;
  var showPoint = this.innerHeight/8;
  
  if(scroll > 0 && scroll < 800) {
    nav1.style.color = "white";
    nav2.style.color = "#ff5757";
    nav3.style.color = "#ff5757";
    nav1.style.backgroundColor = "#ff5757";
    nav2.style.backgroundColor = "white";
    nav3.style.backgroundColor = "white";
    nav1.style.transition = '1s ease-out';
    nav2.style.transition = '1s ease-out';
    nav3.style.transition = '1s ease-out';
  } else if (scroll <= 0) {
    nav1.style.color = "#ff5757";
    nav2.style.color = "#ff5757";
    nav3.style.color = "#ff5757";
    nav1.style.backgroundColor = "white";
    nav2.style.backgroundColor = "white";
    nav3.style.backgroundColor = "white";
    nav1.style.transition = '1s ease-out';
    nav2.style.transition = '1s ease-out';
    nav3.style.transition = '1s ease-out';
  }  
  else if (scroll > 800 && scroll < 1200) {
    nav1.style.color = "#ff5757";
    nav2.style.color = "white";
    nav3.style.color = "#ff5757";
    nav1.style.backgroundColor = "white";
    nav2.style.backgroundColor = "#ff5757";
    nav3.style.backgroundColor = "white";
    nav1.style.transition = '1s ease-out';
    nav2.style.transition = '1s ease-out';
    nav3.style.transition = '1s ease-out';
  } 
  else if (scroll > 1200 && scroll < 1500) {
    nav1.style.color = "#ff5757";
    nav2.style.color = "#ff5757";
    nav3.style.color = "white";
    nav1.style.backgroundColor = "white";
    nav2.style.backgroundColor = "white";
    nav3.style.backgroundColor = "rgba(255,87,87,1)";
    nav1.style.transition = '1s ease-out';
    nav2.style.transition = '1s ease-out';
    nav3.style.transition = '1s ease-out';
  }
});