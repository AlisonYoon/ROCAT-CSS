// JavaScript Document
$(document).ready(function() {

  var num = $('li').length - 1;

  // var width_arr = ['100%', '50%', '25%', '33.3%', '66.6%'];
  // var height_arr = ['430px', '350px', '232px', '175px'];

  if( num === 0 ) {
    $('li').css({width:'100%', height:'430px'});
  } else if ( num == 1 ){
    $('li').css({width:'50%', height:'350px'});
  } else if ( num == 2 ){
    $('li').css({width:'33.3%', height:'232px'});
    $('li:first-child').css({width:'66.6%', height:'464px'});
  } else if ( num == 3 ){
    $('li').css({width:'50%', height:'350px'});
  } else if ( num == 4 ){
    $('li').css({width:'50%', height:'350px'});
    $('li:nth-child(n+3)').css({width:'33.3%', height:'233px'});
  } else if ( num == 5 ){
    $('li').css({width:'33.3%', height:'232px'});
    $('li:first-child').css({width:'66.6%', height:'464px'});
  } else if ( num == 6 ){
    $('li').css({width:'50%', height:'350px'});
    $('li:nth-child(n+3)').css({width:'25%', height:'175px'});
    $('li:nth-child(5)').css({width:'25%', height:'175px', clear:'both'});
    $('li:nth-child(6)').css({width:'25%', height:'175px'});
    $('li:last-child').css({width:'50%', height:'350px', 'margin-top':'-175px'});
  } else if ( num == 7 ){
    $('li:nth-child(-n+4)').css({width:'25%', height:'175px'});
    $('li:nth-child(3)').css({width:'25%', height:'175px', clear:'both'});
    $('li:nth-child(5)').css({width:'50%', height:'350px', 'margin-top':' -175px'});
    $('li:nth-child(n+6)').css({width:'33.3%', height:'245px'});
  } else if ( num == 8 ){
    $('li:first-child').css({width:'50%', height:'350px'});
    $('li:nth-child(n+2)').css({width:'25%', height:'175px'});
  } else if ( num == 9 ){
    $('li:first-child').css({width:'50%', height:'350px'});
    $('li:nth-child(n+2)').css({width:'25%', height:'175px'});
    $('li:nth-child(7)').css({width:'50%', height:'350px'});
    $('li:nth-child(10)').css({width:'25%', height:'175px', 'margin-top':' -175px'});
  }

});
