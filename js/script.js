/*

This is where your javascript will go
feel free to delete everything in this file.

*/

document.addEventListener("DOMContentLoaded", function(event) {
    var clickCount = 0;
    console.log('Page Loaded. non-jquery way. Feel free to use jquery if you want / need.');
    var button = document.querySelector('.delete-this-div-and-class button');
    button.addEventListener("click",function(e){
        e.preventDefault();
        alert('If you are seeing this javascript is working. yay!')
        clickCount++;
        this.innerText="clicks: "+clickCount;
    });
});