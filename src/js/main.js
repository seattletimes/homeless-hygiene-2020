// var paywall = require("./lib/paywall");
// setTimeout(() => paywall(12345678), 5000);

require("component-responsive-frame/child");
require('waypoints/lib/noframework.waypoints.min');
const $ = require('jquery');
var data = require('../../data/calc.sheet.json');




// $( ".city" ).each(function( index ) {
//   console.log( index + ": " + $( this ).text() );
// });

data.forEach(function (arrayItem) {
    var x = arrayItem.unshel_perThou;

    var z = x % 1;

    z = z.toFixed(3);

    z = (1 - z) * 100;

    console.log(z);
});


$('*[data-num="1"]').show();

var shHeight = $('*[data-num="3"]').height() + 80;

$('.sH').css("height", `${shHeight}px`);



$( ".icon i" ).click(function() {
  var currentNum = $('.slideHolder').find(".slide:visible").attr("data-num");


  if ( $( this ).hasClass( "fa-caret-right" ) ) {
    $('.fa-caret-right').css("opacity",1);
    $('.fa-caret-left').css("opacity",0.5);
    mightySwitch( (parseInt(currentNum) + 1) );
  } else {
    $('.fa-caret-right').css("opacity",0.5);
    $('.fa-caret-left').css("opacity",1);
    mightySwitch( (parseInt(currentNum) - 1) );
  }


});



          var mightySwitch = function(num) {

            console.log(num);

            switch(num) {
              case 1:
                $('.title').empty().text("Unsheltered population");
                $('.fa-caret-right').css("opacity",1);
                $('.fa-caret-left').css("visibility","hidden");

                if ( !$( '.sinks' ).hasClass( "hide" ) ) {
                   $( '.sinks' ).addClass( "hide" );
                   $('.sinks i').hide();
                   $('.sinks .final').hide();
                }
                $('.num').removeClass('hide');

                $('*[data-num="1"]').show();
                $('*[data-num="2"]').hide();

                displaySequence('num');

                break;
              case 2:
                $('.fa-caret-left').css("visibility","inherit");
                $('.fa-caret-right').css("visibility","inherit");


                $('.sinks .final').delay(2000).fadeIn(500);

                $('.title').empty().text("New hand washing stations");


                if ( !$( '.num' ).hasClass( "hide" ) ) {
                   $( '.num' ).addClass( "hide" );
                   $('.num i').hide();
                }


                if ( !$( '.toilets' ).hasClass( "hide" ) ) {
                   $( '.toilets' ).addClass( "hide" );
                   $('.toilets i').hide();
                   $('.toilets .final').hide();
                }

                // $('.toilets').removeClass('hide');
                $('.sinks').removeClass('hide');

                $('*[data-num="1"]').hide();
                $('*[data-num="3"]').hide();
                $('*[data-num="2"]').show();
                displaySequence('sinks');

                break;
              case 3:
                $('.sinks .final').hide();
                $('.toilets .final').delay(2000).fadeIn(500);
                $('.sinks').addClass('hide');
                $('.sinks i').hide();
                $('.toilets').removeClass('hide');
                $('.title').empty().text("New portable toilets");


                $('*[data-num="2"]').hide();
                $('*[data-num="3"]').show();
                displaySequence('toilets');

                $('.fa-caret-left').css("opacity",1);
                $('.fa-caret-right').css("visibility","hidden");

                break;
              default:
                console.log('I default');
            }

          }



var displaySequence = function(icon) {

                    $( ".city" ).each(function( index ) {
                      var totalDivs = $(this).find(`.${icon} i`).length;
                      var currentDiv = 0;
                      var setSpeed = 50;
                      var chainInterval = setInterval(showChain, setSpeed);
                      var thisDiv = this;

                      function showChain() {
                          if (currentDiv < totalDivs) {
                              // $(thisDiv).find(".toilets  i:eq(" + currentDiv + ")").show();
                              $(thisDiv).find(`.${icon} i:eq(${currentDiv})`).show();


                              currentDiv++;
                          } else {
                              clearInterval(chainInterval);
                          }
                      }
                    });

};
