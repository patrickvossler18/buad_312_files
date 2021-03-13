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

function sample_array(arr, n){
  var j = 0;
  var sample_idx = new Array();
  var sampled_obs = new Array();
  
  while(j < n){
      var random = getRandomInt(0, arr.length);
      if(sample_idx.indexOf(random) >= 1){
        //console.log("got duplicate: " + random)
        while ( sample_idx.indexOf(random) >= 1) {
          //console.log(random + ' has already been picked, go again.');
          random = getRandomInt(0, arr.length);
          if(sample_idx.indexOf(random) < 1){
            break;
          }
        }
      }
      sample_idx.push(random);
    j++
  }
  
  for ( k = 0; k < sample_idx.length; k ++){
      sampled_obs.push(arr[sample_idx[k]]);
  }
  return(sampled_obs)
}


//var arr = new Array();
var blue = new Array(1500).fill(0);
var red = new Array(900).fill(1);
var arr = blue.concat(red);
var sample = new Array();

$('.next-ball').on('click', function(){
  //var num_red = getBinomial(50,0.4);
  //console.log(num_red);
  //var srs = sample_from_array(arr, 50);
  var srs = sample_array(arr, 50);
  
  for(i=0; i < srs.length; i++){
    if(srs[i] === 1){
      $('.ball-placeholders').find('li:eq('+ i +')').addClass('selected-ball').removeClass('ball-placeholder');
    } else {
      $('.ball-placeholders').find('li:eq('+ i +')').addClass('not-selected-ball').removeClass('ball-placeholder');
    }
    sample.push(srs[i]);
  }
    $('.next-ball').hide();
    $('.play-again').show();
  
});

$('.play-again').on('click', function(){
  
  for(i=0; i < sample.length; i++){
    if(sample[i] === 1){
      $('.ball-placeholders').find('li:eq('+ i +')').addClass('ball-placeholder').removeClass('selected-ball');
    } else {
      $('.ball-placeholders').find('li:eq('+ i +')').addClass('ball-placeholder').removeClass('not-selected-ball');
    }
  }
  
  sample = [];
  $('.next-ball').show();
  $('.play-again').hide();
});
