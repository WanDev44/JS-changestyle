const button = document.getElementById('button');

function btnclick(event) {
  event.stopPropagation()
  alert('Vous êtes connecté')
}

function btnmouseenter(event) {
  event.stopPropagation()
  button.style.backgroundColor = "red";
}

function btnmouseleave(event) {
  event.stopPropagation()
  button.style.backgroundColor = "green";
}


button.addEventListener('click', btnclick)
button.addEventListener('mouseenter', btnmouseenter)
button.addEventListener('mouseleave', btnmouseleave)
