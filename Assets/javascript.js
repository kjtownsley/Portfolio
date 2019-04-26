
// navbar 
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

//   button
$(".button-fill").hover(function () {
    $(this).children(".button-inside").addClass('full');
}, function() {
  $(this).children(".button-inside").removeClass('full');
});
