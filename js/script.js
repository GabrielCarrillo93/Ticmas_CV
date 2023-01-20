
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0; 
}

var modal = document.getElementById("myModal");
var img = document.getElementById("profile");
var modalImg = document.getElementById("img01");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}


var span = document.getElementsByClassName("close")[0];


span.onclick = function() {
  modal.style.display = "none";
}