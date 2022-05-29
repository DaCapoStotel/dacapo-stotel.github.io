  var scroll = this.pageYOffset || document.documentElement.scrollTop;
  var wrapper = document.getElementById('page-wrapper'); 
  var dynamic = document.getElementById('nav-bar');
  var height = wrapper.offsetHeight;

window.addEventListener('scroll', function(){
  var scroll = this.pageYOffset || document.documentElement.scrollTop;
  var showPoint = this.innerHeight/8;
	/*
	if (scroll <= 0) {
    nav1.style.color = "#ff5757";
    nav2.style.color = "#ff5757";
    nav3.style.color = "#ff5757";
    nav1.style.backgroundColor = "white";
    nav2.style.backgroundColor = "white";
    nav3.style.backgroundColor = "white";
    nav1.style.transition = '0.8s ease-out';
    nav2.style.transition = '0.8s ease-out';
    nav3.style.transition = '0.8s ease-out';
  }  */
 /* 
  if(scroll > 0 && scroll < 800) {
    nav1.style.color = "white";
    nav2.style.color = "#ff5757";
    nav3.style.color = "#ff5757";
    nav1.style.backgroundColor = "#ff5757";
    nav2.style.backgroundColor = "white";
    nav3.style.backgroundColor = "white";
    nav1.style.transition = '0.8s ease-out';
    nav2.style.transition = '0.8s ease-out';
    nav3.style.transition = '0.8s ease-out';
  } else if (scroll <= 0) {
    nav1.style.color = "#ff5757";
    nav2.style.color = "#ff5757";
    nav3.style.color = "#ff5757";
    nav1.style.backgroundColor = "white";
    nav2.style.backgroundColor = "white";
    nav3.style.backgroundColor = "white";
    nav1.style.transition = '0.8s ease-out';
    nav2.style.transition = '0.8s ease-out';
    nav3.style.transition = '0.8s ease-out';
  }  
  else if (scroll > 800 && scroll < 1200) {
    nav1.style.color = "#ff5757";
    nav2.style.color = "white";
    nav3.style.color = "#ff5757";
    nav1.style.backgroundColor = "white";
    nav2.style.backgroundColor = "#ff5757";
    nav3.style.backgroundColor = "white";
    nav1.style.transition = '0.8s ease-out';
    nav2.style.transition = '0.8s ease-out';
    nav3.style.transition = '0.8s ease-out';
  } 
  else if (scroll > 1200 && scroll < 1500) {
    nav1.style.color = "#ff5757";
    nav2.style.color = "#ff5757";
    nav3.style.color = "white";
    nav1.style.backgroundColor = "white";
    nav2.style.backgroundColor = "white";
    nav3.style.backgroundColor = "rgba(255,87,87,1)";
    nav1.style.transition = '0.8s ease-out';
    nav2.style.transition = '0.8s ease-out';
    nav3.style.transition = '0.8s ease-out';
  }
*/
      const mediaQuery = window.matchMedia('(max-width: 650px)')

if(mediaQuery.matches && scroll <= 0) {
  header.style.webkitBoxShadow = '0 0px 0px -0px black';
	header.style.mozBoxShadow = '0 0px 0px -0px black';
	header.style.boxShadow = '0 0px 0px -0px black';
  header.style.transition = '0.3s ease-out';
}
else if (mediaQuery.matches && scroll > 0) {
  header.style.webkitBoxShadow = '0 6px 8px -7px black';
	header.style.mozBoxShadow = '0 6px 8px -7px black';
	header.style.boxShadow = '0 6px 8px -7px black';
  header.style.transition = '1s ease-out';
}       

  
  
if (mediaQuery.matches && scroll > 1400) {
  details.style.fontSize = '1.3rem';
}
else if (mediaQuery.matches && scroll < 1400) {
  details.style.fontSize = '1.1rem';
  }  
else if (/*!(mediaQuery.matches && */scroll > 1200) {
  details.style.fontSize = '1.6rem';
}    
else if (/*!(mediaQuery.matches &&*/ scroll < 1200) {
  details.style.fontSize = '1.4rem';
}

  
                       
});




var observer = new IntersectionObserver(function(entries) {
  if (entries[0].isIntersecting === true){
		    nav1.style.color = "#ff5757";
    nav2.style.color = "#ff5757";
    nav3.style.color = "#ff5757";
    nav1.style.backgroundColor = "white";
    nav2.style.backgroundColor = "white";
    nav3.style.backgroundColor = "white";
    nav1.style.transition = '0.8s ease-out';
    nav2.style.transition = '0.8s ease-out';
    nav3.style.transition = '0.8s ease-out';
  }
}, { threshold: [1] });

observer.observe(document.querySelector("#container"));

var observer0 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
		    nav1.style.color = "white";
    nav2.style.color = "#ff5757";
    nav3.style.color = "#ff5757";
    nav1.style.backgroundColor = "#ff5757";
    nav2.style.backgroundColor = "white";
    nav3.style.backgroundColor = "white";
    nav1.style.transition = '0.8s ease-out';
    nav2.style.transition = '0.8s ease-out';
    nav3.style.transition = '0.8s ease-out';
  }
  }, { threshold: [1] });

observer0.observe(document.querySelector("#bildvonuns"));

var observer1 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
		    nav1.style.color = "white";
    nav2.style.color = "#ff5757";
    nav3.style.color = "#ff5757";
    nav1.style.backgroundColor = "#ff5757";
    nav2.style.backgroundColor = "white";
    nav3.style.backgroundColor = "white";
    nav1.style.transition = '0.8s ease-out';
    nav2.style.transition = '0.8s ease-out';
    nav3.style.transition = '0.8s ease-out';
  }
  }, { threshold: [1] });

observer1.observe(document.querySelector("#about"));


var observer2 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
		    nav1.style.color = "#ff5757";
    nav2.style.color = "white";
    nav3.style.color = "#ff5757";
    nav1.style.backgroundColor = "white";
    nav2.style.backgroundColor = "#ff5757";
    nav3.style.backgroundColor = "white";
    nav1.style.transition = '0.8s ease-out';
    nav2.style.transition = '0.8s ease-out';
    nav3.style.transition = '0.8s ease-out';
  }
}, { threshold: [1] });

observer2.observe(document.querySelector("#wowann"));


var observer3 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
		    nav1.style.color = "#ff5757";
    nav2.style.color = "#ff5757";
    nav3.style.color = "white";
    nav1.style.backgroundColor = "white";
    nav2.style.backgroundColor = "white";
    nav3.style.backgroundColor = "#ff5757";
    nav1.style.transition = '0.8s ease-out';
    nav2.style.transition = '0.8s ease-out';
    nav3.style.transition = '0.8s ease-out';
  }
}, { threshold: [1] });

observer3.observe(document.querySelector("#contact"));
