function getBinomial( n, p) {
   var log_q = Math.log(1.0 - p);
   var x = 0;
   var sum = 0;
   for(;;) {
      sum += Math.log(Math.random()) / (n - x);
      if(sum < log_q) {
         return x;
      }
      x++;
   }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var arr = new Array();
var difference = new Array();
var full_seq =  Array(50).fill().map((element, index) => index + 1);
var full_seq = full_seq.map( function(value) {
return value - 1;
} );
var j = 1;

$('.next-ball').on('click', function(){
  var num_red = getBinomial(50,0.4);
  //console.log(num_red);
  while(j <= num_red){
      var random = getRandomInt(0, 49);
      if(arr.indexOf(random) >= 1){
        //console.log("got duplicate: " + random)
        while ( arr.indexOf(random) >= 1) {
          //console.log(random + ' has already been picked, go again.');
          random = getRandomInt(0, 49);
          if(arr.indexOf(random) < 1){
            break;
          }
      }

      }
      arr.push(random);
    j++
  }
  difference = full_seq.filter(x => !arr.includes(x));
console.log(difference);
console.log(arr);
  for(i= 0; i < arr.length; i++){
    $('.ball-placeholders').find('li:eq('+arr[i] +')').addClass('selected-ball').removeClass('ball-placeholder');
  }
  for(i= 0; i < difference.length; i++){
    $('.ball-placeholders').find('li:eq('+difference[i] +')').addClass('not-selected-ball').removeClass('ball-placeholder');
  }


    $('.next-ball').hide();
    $('.play-again').show();


  
});

$('.play-again').on('click', function(){
  for(i= 0; i < arr.length; i++){
    $('.ball-placeholders').find('li:eq('+arr[i] +')').addClass('ball-placeholder').removeClass('selected-ball');
  }
  for(i= 0; i < difference.length; i++){
    $('.ball-placeholders').find('li:eq('+difference[i] +')').addClass('ball-placeholder').removeClass('not-selected-ball');
  }
  arr = [];
  difference = [];
  j = 1;
  $('.next-ball').show();
  $('.play-again').hide();
});
