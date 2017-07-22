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


$(document).ready(() =>{
    runCountDownTimer(2017,8,6);
    handleScroll();
});