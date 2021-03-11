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
var i = 1;

$('.next-ball').on('click', function(){
  var num_red = getBinomial(50,0.4);
  //console.log(num_red);
  while(i <= num_red){
      var random = getRandomInt(1, 50);
      if(arr.indexOf(random) >= 1){
        //console.log("got duplicate: " + random)
        while ( arr.indexOf(random) >= 1) {
          //console.log(random + ' has already been picked, go again.');
          random = getRandomInt(1, 50);
          if(arr.indexOf(random) < 1){
            break;
          }
      }

      }
      arr.push(random);
    i++
  }
//console.log(arr.length);
  for(i= 0; i <= arr.length; i++){
    $('.ball-placeholders').find('li:eq('+arr[i] +')').addClass('selected-ball').removeClass('ball-placeholder');
  }


    $('.next-ball').hide();
    $('.play-again').show();


  
});

$('.play-again').on('click', function(){
  for(i= 0; i <= arr.length; i++){
    $('.ball-placeholders').find('li:eq('+arr[i] +')').addClass('ball-placeholder').removeClass('selected-ball');
  }
  arr = [];
  i = 1;
  $('.next-ball').show();
  $('.play-again').hide();
});
