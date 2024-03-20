window.addEventListener('scroll', ()=> {
  var header = document.querySelector('header')
  header.classList.toggle('sticky', window.scrollY > 0)
})


let menu = document.querySelector('#menu-bar')
let navbar = document.querySelector('.header-div');

menu.addEventListener('click', ()=>{
   menu.classList.toggle('fa-times')
   navbar.classList.toggle('active')

   window.onscroll = () => {
      menu.classList.remove('fa-time')
      menu.classList.remove('active')
   }
})


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 =  document.getElementById("myBtn-2");

// When the user clicks on the button, open the modal
btn.onclick = function(e) {
   e.preventDefault()
  modal.style.display = "block";
}
btn2.onclick = function(e) {
   e.preventDefault()
  modal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
var cancel = document.getElementById("cancel");
cancel.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}