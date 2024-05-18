const navbarBtn = document.querySelector('.navbar__btn');
const navbarLinks = document.querySelector ('.navbar__links');

navbarBtn.addEventListener('click', function(){
  let value = navbarLinks.classList.contains('navbar__collapse')

  if (value) {
    navbarLinks.classList.remove('navbar__collapse')
    navbarBtn.classList.remove('change')
  }
  else {
    navbarLinks.classList.add('navbar__collapse')
    navbarBtn.classList.add('change')
  }
})




function show_hide() {
  var click = document.getElementById("list-items");
  if (click.style.display === "none") {
     click.style.display = "block";
  } else {
     click.style.display = "none";
  }
}
function show_hide() {
  var click = document.getElementById("list-items");
  if (click.style.display === "none") {
     click.style.display = "block";
  } else {
     click.style.display = "none";
  }
}





const scrollRight = document.getElementById("scroll-right")
const scrollLeft = document.getElementById("scroll-left")
const product = document.getElementById("products")





scrollRight.addEventListener('click', function(){
  product.scrollLeft  += 50

})

scrollLeft.addEventListener('click', function(){
  product.scrollLeft  -= 50

})



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}



function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


const modal = document.getElementById('modal')

document.getElementById('show-all').addEventListener('click', function (){
  modal.classList.remove('hidden')
  modal.classList.add('flex')
})

document.getElementById('close-modal').addEventListener('click', function (){
  modal.classList.remove('flex')
  modal.classList.add('hidden')
})
