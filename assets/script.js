
const house = document.querySelector('.house');
house.addEventListener('click', function() {
  house.classList.add('blink');

});

const house = document.querySelector('.clock');
house.addEventListener('click', function() {
  house.classList.add('blink');

});

const pics = document.querySelector('.pics');
house.addEventListener('click', function() {
  house.classList.add('blink');

});




document.getElementById("clock-image").addEventListener("click", function() {
  window.location.href = "index.html"; // Redirect to vr.html
});



// JavaScript to show the iframe after a certain delay (2 seconds in this example)
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.querySelector(".mumu").style.top = "0";
    document.querySelector(".mumu").style.left = "0";
  }, ); // Adjust the delay as needed (measured in milliseconds)
});
