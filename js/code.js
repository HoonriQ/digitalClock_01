$(function(){
  setInterval(function (){

    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    if(hour <= 12){
      $('.ampm').html('<small>&nbsp;AM</small>');
    }
    else{
      $('.ampm').html('<small>&nbsp;PM</small>')
      hour = hour - 12;
    };
    
    if(hour < 10){
      hour = '0' + hour
    };
    if(min < 10){
      min = '0' + min
    };
    if(sec < 10){
      sec = '0' + sec
    };
    
    if(hour == 12, min > 45){
      $('#alarm').html('lunch time');
    };
    
    /*
    if(hour == '0'+ 1, min < 40){
      $('#alarm').html('lunch time');
    };
    */

    
    if(min > 49){
      $('#alarm').html('break time');
    };
      

    $('.hour').html(hour);
    $('.min').html(min);
    $('.sec').html(sec);

  }, 1000);

});