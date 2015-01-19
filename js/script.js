$(document).ready(function(){

  var newAlert = function(m){
    swal({
      title: "I love this " + m + " track!",
      text: "This message will auto-destruct in 4 seconds...",
      type: "success",
      timer: 4000
    });
  }
  var technoSound = new Howl({urls: ["https://clyp.it/3ilizyrr.mp3"]});





  //MAIN FUNCTION THAT PLAYS, PAUSES AND STOPS TRACK WITH GENRE MESSAGE
  var playTrack = function(element, link, message){
    $('#'+element).on('click', function(){
        technoSound.play();
        newAlert(message);
    });
    $('#pause'+'-'+element).on('click', function(){
      technoSound.pause();
    })
    $('#stop'+'-'+element).on('click', function(){
      technoSound.stop();
    })
    $('#fadeIn'+'-'+element).on('click', function(){
      technoSound.stop();
    })

  }
  var pauseTrack = function(element, link){
    $(element).on('click', function(){
        var sound = new Howl({
          urls: [link]
        }).pause();
        //newAlert(message);
    });
  }
  var stopTrack = function(element, link){
    $(element).on('click', function(){
        var sound = new Howl({
          urls: [link]
        }).stop();
        //newAlert(message);
    });
  }


  playTrack("techno","https://clyp.it/3ilizyrr.mp3","Techno");
  pauseTrack("#pause-techno","https://clyp.it/3ilizyrr.mp3");
  stopTrack("#stop-techno","https://clyp.it/3ilizyrr.mp3");





});

