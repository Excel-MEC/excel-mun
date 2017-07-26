const countdownUnits = countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS;

function runCountDownTimer(year,month,day){
    const date = new Date(year,month,day);
    setInterval(()=>{
        $('span.countdownTarget').html(countdown(date).toString());
    },1000);
}


function handleScroll(){
    $(document).scroll(() => {
        if($(document).scrollTop() > 53){
            $('nav').removeClass('navbar-transparent');
        }else{
            $('nav').addClass('navbar-transparent');
        }
    });
}

function setupScrollreveal(){
    sr.reveal('.marketing-element' ,{duration: 2000, origin: "bottom", distance: "200px"},60);
    sr.reveal('.registration-alert' ,{duration: 500 ,origin: "top"});
    sr.reveal('.about-us-heading' ,{duration: 1000 ,origin: "left"});
    sr.reveal('.about-us-desc',{duration:1000,origin: "right"});
    sr.reveal('.preparation-heading',{duration:1000,origin: "left"});
    sr.reveal('.topic' ,{duration: 2000, origin: "bottom", distance: "20px"},60);
    sr.reveal('.contact-no-el' ,{duration:1000,origin: "left"},60 );
    sr.reveal('.contact-us-heading',{duration:1000,origin: "right"});
    sr.reveal('.map-panel',{duration:1000,origin: "left"});


}


function smoothScroll(){

    const duration = 800;

    $("#bs-example-navbar-collapse-2 ul li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, duration, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

    });

    $(".navbar-header a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

    if(!hash) return;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, duration, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

    });
}

function init_map1() {
    var myLocation = new google.maps.LatLng(10.0281967,76.3292422);
    var mapOptions = {
        center: myLocation,
        zoom: 19
    };
    var marker = new google.maps.Marker({
        position: myLocation,
        title: "Property Location"
    });
    var map = new google.maps.Map(document.getElementById("map1"),
        mapOptions);
    marker.setMap(map);
}

$(document).ready(() =>{
    window.sr = ScrollReveal();
    runCountDownTimer(2017,8,6);
    handleScroll();
    setupScrollreveal();
    smoothScroll();
    init_map1();

});
