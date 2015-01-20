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
  var rockSound = new Howl({urls: ["https://clyp.it/rlcsxlup.mp3"]});
  var popSound = new Howl({urls: ["https://clyp.it/aceb4s3j.mp3"]});
  var soundTrackSound = new Howl({urls: ["https://clyp.it/f1lixvmn.mp3"]});
  var classicalSound = new Howl({urls: ["https://clyp.it/3k5yo3ko.mp3"]});
  var jazzSound = new Howl({urls: ["https://clyp.it/x2i1gxeg.mp3"]})




  //MAIN FUNCTION THAT PLAYS, PAUSES AND STOPS TRACK WITH GENRE MESSAGE
  var playTrack = function(element, message, song){
    $('#'+element).on('click', function(){
        song.play();
        newAlert(message);
    });
    $('#pause'+'-'+element).on('click', function(){
      song.pause();
    })
    $('#stop'+'-'+element).on('click', function(){
      song.stop();
    })
    $('#fadeIn'+'-'+element).on('click', function(){
      song.fadeIn(1.0,20000);
      newAlert(message);
    })

  }

  playTrack("techno", "Techno", technoSound);
  playTrack("rock", "Rock", rockSound);
  playTrack("pop", "Pop", popSound);
  playTrack("soundtrack", "SoundTrack", soundTrackSound);
  playTrack("classical", "Classical", classicalSound);
  playTrack("jazz", "Jazz", jazzSound);

});

