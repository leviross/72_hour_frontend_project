// document.addEventListener("DOMContentLoaded", function(event) {
//     var clickCount = 0;
//     console.log('Page Loaded. non-jquery way. Feel free to use jquery if you want / need.');
//     var button = document.querySelector('.show button');
//     button.addEventListener("click",function(e){
//         e.preventDefault();
//         alert('If you are seeing this javascript is working. yay!')
//         clickCount++;
//         this.innerText="clicks: "+clickCount;
//     });
// });


// $("button").on("click", function() {
// alert("Thanks for your email");
// });


$(document).ready(function(){
  $('.show button').on('click', function(){
    //alert('it worked');
    swal({
     title: "Error!",
     text: "Here's my error message!",
     type: "error",
     confirmButtonText: "Cool"
   });
  })


});

