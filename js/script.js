$(document).ready(function(){
    $('#loading').fadeOut(500);
});

$('body').append('<a aria-label="developer portfolio" href="https://wesam-sakr.github.io/Portfolio/" accesskey="w" target="_blank"></a>')

var navbar = document.getElementsByClassName("navbar");
var sticky = navbar[0].offsetHeight ;

// make nav bar static on scroll 
window.addEventListener("scroll" , function(){
    if (this.document.documentElement.scrollTop >= sticky) {
        $(navbar).addClass("fixed-nav");
    } else {
        $(navbar).removeClass("fixed-nav")
    }
})
var x =document.getElementsByClassName("nav-link");
for(i=0 ; i<x.length ; i++){
    x[i].style.color="#9B9B9B";
}
  
$('.navbar-nav .nav-link').click(function(){
    $('.navbar-nav .nav-link').each(function(){
        $(this).removeClass('active')
    })
    $(this).addClass('active')
})

// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navbar-nav a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navbar-nav a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}

    // counter
window.addEventListener("scroll" , function(){
    if ($(".counters").length > 0) {
        var counters = document.querySelectorAll('.counter');
        var counterStart = counters[0].offsetTop - 500;
        var speed = 200;
        if(this.document.documentElement.scrollTop > counterStart){
            counters.forEach(counter => {
                var upTo = function(){
                    var target = Number(counter.getAttribute('data-target')) 
                    var count = Number(counter.innerText)
                    var inc = Math.ceil(target / speed) ;
                    setTimeout (upTo,100)

                    if(count < target){
                        counter.innerText = count + inc ;
                    } else counter.innerText= target;
                }
                upTo();  
            });
        }
    }
        
})

// make auth-img circle 
// var authWidth = $('.feature').width();
// $('.feature').height(authWidth)
// -- responsive --
// $(window).resize(function(){
//   var authWidth = $('.feature').width();
// $('.feature').height(authWidth)
// })

$(".project-wrapper .items-container.owl-carousel").owlCarousel({
    nav: true,
    navText : ['<i class="bi bi-arrow-right"></i>','<i class="bi bi-arrow-left"></i>'],
    dots: false,
    loop: true,
    stagePadding: 80,
    autoplay: false,
    autoplayHoverPause: true,
    responsiveClass: true,
    margin: 20,
    rtl: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
});
$('.img-slider .owl-carousel').owlCarousel({
    nav: false,
    dots: true,
    loop: true,
    stagePadding: 80,
    autoplay: false,
    autoplayHoverPause: true,
    responsiveClass: true,
    margin: 20,
    rtl: true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});
$('.video-slider .owl-carousel').owlCarousel({
    nav: true,
    navText : ['<i class="bi bi-arrow-right"></i>','<i class="bi bi-arrow-left"></i>'],
    dots: false,
    loop: true,
    stagePadding: 80,
    autoplay: false,
    autoplayHoverPause: true,
    responsiveClass: true,
    margin: 20,
    rtl: true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

//  aos animation
AOS.init();


