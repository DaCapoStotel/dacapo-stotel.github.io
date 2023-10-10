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
      const mediaQuery = window.matchMedia('(max-width: 800px)')

if(mediaQuery.matches && scroll <= 0) {
  header.style.webkitBoxShadow = '0 0px 0px -0px black';
	header.style.mozBoxShadow = '0 0px 0px -0px black';
	header.style.boxShadow = '0 0px 0px -0px black';
  header.style.transition = '0.3s ease-out';
}
else if (mediaQuery.matches && scroll > 5) {
  header.style.webkitBoxShadow = '0 6px 8px -7px black';
	header.style.mozBoxShadow = '0 6px 8px -7px black';
	header.style.boxShadow = '0 6px 8px -7px black';
  header.style.transition = '1s ease-out';
}       

});

      const mediaQuery = window.matchMedia('(max-width: 650px)')
  
if (mediaQuery.matches && scroll > 1200) {
  details.style.fontSize = '1.3rem';
}
else if (mediaQuery.matches && scroll < 1200) {
  details.style.fontSize = '1.1rem';
  }  
else if (scroll > 1050) {
  details.style.fontSize = '1.8rem';
}    
else if (scroll < 1050) {
  details.style.fontSize = '1.4rem';
}
                       
});




var observer9 = new IntersectionObserver(function(entries) {
  
  const mediaQuery = window.matchMedia('(max-width: 650px)')
  
  if (mediaQuery.matches && entries[0].isIntersecting === true){
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

observer9.observe(document.querySelector("#bildvonuns"));
/*
var observer0 = new IntersectionObserver(function(entries) {
	if(mediaQuery.matches && entries[0].isIntersecting === true){
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
}, { threshold: [0.7] });

observer0.observe(document.querySelector("#bildvonuns"));
*/
var observer1 = new IntersectionObserver(function(entries) {
  
  const mediaQuery = window.matchMedia('(max-width: 650px)')
  
	if(mediaQuery.matches && entries[0].isIntersecting === true){
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
}, { threshold: [0.7] });

observer1.observe(document.querySelector("#about"));


var observer2 = new IntersectionObserver(function(entries) {
  
  const mediaQuery = window.matchMedia('(max-width: 650px)')
  
	if(mediaQuery.matches && entries[0].isIntersecting === true){
		    nav1.style.color = "#ff5757";
    nav2.style.color = "white";
    nav3.style.color = "#ff5757";
    nav1.style.backgroundColor = "white";
    nav2.style.backgroundColor = "#ff5757";
    nav3.style.backgroundColor = "white";
    nav1.style.transition = '0.8s ease-out';
    nav2.style.transition = '0.8s ease-out';
    nav3.style.transition = '0.8s ease-out';
    /*details.style.fontSize = '1.1rem';*/
  }
}, { threshold: [0.5] });

observer2.observe(document.querySelector("#wowann"));

/*
var observer8 = new IntersectionObserver(function(entries) {
  
  const mediaQuery = window.matchMedia('(max-width: 650px)')
  
	if(entries[0].isIntersecting === true){
    details.style.fontSize = '1.4rem';
  }
}, { threshold: [0.5] });

observer8.observe(document.querySelector("#wowann"));
*/

var observer3 = new IntersectionObserver(function(entries) {
  
  const mediaQuery = window.matchMedia('(max-width: 650px)')
  
	if(mediaQuery.matches && entries[0].isIntersecting === true){
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
}, { threshold: [0.5] });


observer3.observe(document.querySelector("#contact"));


/*
var observer4 = new IntersectionObserver(function(entries) {
  
  const mediaQuery = window.matchMedia('(max-width: 650px)')
  
	if(mediaQuery.matches && entries[0].isIntersecting === true){
		details.style.fontSize = '1.3rem';
  }
  else if (entries[0].isIntersecting === true){
		details.style.fontSize = '1.4rem';
  }
}, { threshold: [0.5] });


observer4.observe(document.querySelector("#details"));*/

/*
window.addEventListener('scroll', function() {
	var element = document.querySelector('#containerino');
	var position = element.getBoundingClientRect();

	// checking whether fully visible
	if(position.top <= 0 && position.bottom <= window.innerHeight) {
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

});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#bildvonuns');
	var position = element.getBoundingClientRect();

	// checking whether fully visible
	if(scroll > 0 && position.top < window.innerHeight && position.bottom >= 0) {
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

});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#about');
	var position = element.getBoundingClientRect();

	// checking whether fully visible
	if(position.top < window.innerHeight && position.bottom >= 0) {
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

});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#wowann');
	var position = element.getBoundingClientRect();

	// checking whether fully visible
	if(position.top < window.innerHeight && position.bottom >= 0) {
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

});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#contact');
	var position = element.getBoundingClientRect();

	// checking whether fully visible
	if(position.top < window.innerHeight && position.bottom >= 0) {
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

});
*/





/*
window.addEventListener('scroll', function() {
	var element = document.querySelector('#containerino');
	var position = element.getBoundingClientRect();

	// checking whether fully visible
	if(position.top < window.innerHeight && position.bottom >= 0) {
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

});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#bildvonuns');
	var position = element.getBoundingClientRect();

	// checking whether fully visible
	if(scroll > 0 && position.top < window.innerHeight && position.bottom >= 0) {
    nav1.style.color = "white";
    nav1.style.backgroundColor = "#ff5757";
    nav1.style.transition = '0.8s ease-out';
	}
  else {
    nav1.style.color = "#ff5757";
    nav1.style.backgroundColor = "white";
    nav1.style.transition = '0.8s ease-out';    
  }

});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#about');
	var position = element.getBoundingClientRect();

	// checking whether fully visible
	if(position.top >= 0 && position.bottom <= window.innerHeight) {
    nav2.style.color = "#ff5757";
    nav2.style.backgroundColor = "white";
    nav2.style.transition = '0.8s ease-out'; 
    nav3.style.color = "#ff5757";
    nav3.style.backgroundColor = "white";
    nav3.style.transition = '0.8s ease-out'; 
	}
  
	if(position.top < window.innerHeight && position.bottom >= 0) {
    nav1.style.color = "white";
    nav1.style.backgroundColor = "#ff5757";
    nav1.style.transition = '0.8s ease-out';
	}
  else {
    nav1.style.color = "#ff5757";
    nav1.style.backgroundColor = "white";
    nav1.style.transition = '0.8s ease-out';    
  }

});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#wowann');
	var position = element.getBoundingClientRect();

	if(position.top >= 0 && position.bottom <= window.innerHeight) {
    nav1.style.color = "#ff5757";
    nav1.style.backgroundColor = "white";
    nav1.style.transition = '0.8s ease-out';
    nav3.style.color = "#ff5757";
    nav3.style.backgroundColor = "white";
    nav3.style.transition = '0.8s ease-out'; 
	}
  
	if(position.top < window.innerHeight && position.bottom >= 0) {
    nav2.style.color = "white";
    nav2.style.backgroundColor = "#ff5757";
    nav2.style.transition = '0.8s ease-out';
	}
  else {
    nav2.style.color = "#ff5757";
    nav2.style.backgroundColor = "white";
    nav2.style.transition = '0.8s ease-out';    
  }

});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#contact');
	var position = element.getBoundingClientRect();

	// checking whether fully visible
	if(position.top >= 0 && position.bottom <= window.innerHeight) {
    nav2.style.color = "#ff5757";
    nav2.style.backgroundColor = "white";
    nav2.style.transition = '0.8s ease-out'; 
    nav1.style.color = "#ff5757";
    nav1.style.backgroundColor = "white";
    nav1.style.transition = '0.8s ease-out'; 
	}
  
	if(position.top < window.innerHeight && position.bottom >= 0) {
    nav3.style.color = "white";
    nav3.style.backgroundColor = "#ff5757";
    nav3.style.transition = '0.8s ease-out';
	}
  else {
    nav3.style.color = "#ff5757";
    nav3.style.backgroundColor = "white";
    nav3.style.transition = '0.8s ease-out';    
  }

});

*/
