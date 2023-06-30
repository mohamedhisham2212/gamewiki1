const body = document.querySelector('body');
function lightm() {
  toggle.classList.toggle('active')
  body.classList.toggle('active')
  c.classList.toggle('active')
  nv1.classList.toggle('active')
  side.classList.toggle('active')
  fff.classList.toggle('active')
}
function appear() {
  var x = document.getElementById("fr001");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function age() {
  document.getElementById("ol").style.display = "block";
}

function off() {
  document.getElementById("ol").style.display = "none";
}
function scfunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
