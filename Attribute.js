var img = document.getElementById('ImageLinux');
img.width = 400

var submit = document.getElementById('submit')
var span = document.getElementById('p1')

// Option One
//img.setAttribute('class', 'background')

// Option Two
img.className += ' Background';

var input = document.getElementById('inputNama')
input.value = "Nama Lengkap"

input.style.border = '7px solid yellow';
input.style.backgroundColor = 'pink';

function animateIn(){
    img.style.backgroundColor = 'blue'
}
function animateOut(){
    img.style.backgroundColor = 'pink'
}
function submitShow(){
    var text = input.value;
    span.innerHTML = text;
}

// EVENT 

// Option One
// Menambahkan attribut di tag, contohnya onClick, lalu diisi dengan function
input.onclick = animateIn
submit.onclick = submitShow

// Option Two
// img.onmouseenter = animateIn


// // Option Three
img.addEventListener('mouseenter', animateIn)
img.addEventListener('mouseleave', animateOut)