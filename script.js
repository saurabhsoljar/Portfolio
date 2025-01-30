//Script File


//Home section starts

var menuBtn = document.querySelector('.menu-btn');
var menu = document.querySelector('.nav-links');
var menuLinks = document.querySelectorAll('nav-link li a');

menuBtn.addEventListener('click',activeClass);

function activeClass(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
}

for(i = 0; i < menuLinks.length; i++){
    menuLinks[i].addEvantListener('click',menuItemClick);
}

function menuItemClick(){
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
}

var homeSection = document.querySelector('.home');
window.addEventListener('scroll',scrollFunction);
window.addEventListener('load',scrollFunction);

function scrollFunction(){
    if(window.scrollY > 60){
        homeSection.classList.add('active');
    }
    else{
        homeSection.classList.remove('active');
    }
}
//Home Section Ends

//Hire Me Button 

const hireBtn = document.getElementById('hireBtn');
const contactOptions = document.getElementById('contactOptions');

hireBtn.addEventListener('click', function(e) {
    contactOptions.style.display = contactOptions.style.display === 'block' ? 'none' : 'block';
    e.stopPropagation();
});

// Close dropdown when clicking outside
document.addEventListener('click', function() {
    contactOptions.style.display = 'none';
});

// Prevent dropdown from closing when clicking inside it
contactOptions.addEventListener('click', function(e) {
    e.stopPropagation();
});

//Hire Me Button end

//About section to downlode cv start

document.getElementById('downloadBtn').addEventListener('click', function() {
    // Your Google Drive resume URL
    const resumeUrl = 'https://drive.google.com/file/d/1lKvx_f6-5TRpOVpNM_3MgBavpsJ43iiR/view?usp=sharing';
    
    // Open in new window with security features
    window.open(
        resumeUrl,
        '_blank',
        'noopener,noreferrer'
    );
});

//About section to downlode cv start


//portfilio Section Strats
var $galleryContainer = $('.gallery').isotope({
    itemSelector:'.item',
    layoutMode: 'fitRows'
})

$('.button-group .button').on('click',function(){
    $('.button-group .button').removeClass('active');
    $(this).addClass('active');


    var value = $(this).attr('data-filter');
    $galleryContainer.isotope({
        filter:value
    })
})

//magnific popup
$('.gallery').magnificPopup({
    delegate: '.overlay a',
    type: 'image',
    gallery: {
        enabled: true
    }
});

//portfolio Section Ends

//Testimonial Section Starts
$('.testimonials-container').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTime:2000,
    margin:10,
    nav:true,
    navText: [
        "<i class='fa-solid fa-arrow-left'></i>",
        "<i class='fa-solid fa-arrow-right'></i>"
    ],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:true
        },
        768:{
            items:2
        }
    }
})

// My Work Showcase (addEventListener) for open new window project start

document.querySelectorAll('.overlay a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      window.open(link.href, '_blank', 'noopener,noreferrer');
    });
  });


// My Work Showcase (addEventListener) for open new window project end




