//Selector
// Get Element berdasarkan ID
document.getElementById('box1').innerHTML = '<br>Website Portfolio';
// Pada class harus nentuin spesifik class yang mana / dari urutan class
// Jika bagian plural harus membutuhkan index

// Selector Class Option One
// document.getElementsByClassName('boxes')[0].innerHTML = 'Versi terbaru'; 
// document.getElementsByClassName('boxes')[1].innerHTML = 'Versi sebelumnya';
// document.getElementsByClassName('boxes')[2].innerHTML = 'Versi terlama';

// Selector Class Option Two
var boxes = document.getElementsByClassName('boxes');
boxes[0].innerHTML = "<br>Versi terbaru";
boxes[1].innerHTML = "Versi sebelumnya";
boxes[2].innerHTML = "Versi terlama";

// Selector Tag
var category = document.getElementsByTagName('li');
category[0].innerHTML = 'FrontEnd Developer'
category[1].innerHTML = 'BackEnd Developer'
category[2].innerHTML = 'FullStack Developer'

// Query Selector All
document.querySelectorAll('#box1')[0].innerHTML = "Querry Selector id BOX 0"
document.querySelectorAll('.boxes')[0].innerHTML = "Querry Selector class boxes 0"
document.querySelectorAll('ul div')[0].innerHTML = "Querry Selector tag ul div"