var img = document.getElementById('ImageLinux');
img.width = 400

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

// EVENT 

// Option One
// Menambahkan attribut di tag, contohnya onClick, lalu diisi dengan function
// function changeColor(){
//     img.style.backgroundColor = 'blue'
// }

// Option Two
// img.onmouseenter = function(){ animateIn()};


// Option Three
img.addEventListener('mouseenter', function(){
     animateIn();
 });
img.addEventListener('mouseleave', function(){
     animateOut();
 })