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

function scrollFunction(){
    if(window.scrollY > 60){
        homeSection.classList.add('active');
    }
    else{
        homeSection.classList.remove('active');
    }
}
//Home Section Ends

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
$('.gallery').magnificPupop({
    delgate:'.overlay a',
    type:'image',
    gallery:{
        enableed:true
    }
})