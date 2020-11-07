
let modal = document.getElementById("simpleModal"); //gets modal div
let modalBtn = document.getElementById("modalBtn"); //gets click here button
let closeBtn = document.getElementById("closeBtn"); //gets the X which is wrapped in a span tag
let canvas = document.getElementById('canvas');

modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener('click', closeModal);

function openModal(){
  modal.style.display = "block";
}

// window.addEventListener("click", closeModal);
canvas.addEventListener("click", closeModal());

function  closeModal(){
  modal.style.display = "none";
}
