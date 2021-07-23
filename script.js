// const arrow = document.getElementById('testArrow');
// const hidden = document.getElementById('testP');

// function myFunction() {
//  if (hidden.style.display === "none") {
//     hidden.style.display = "block";
//  } 
// };

let arrow = document.getElementById('testArrow');
let hidden = document.getElementById('testP');

arrow.onClick = function showHidden() {
    hidden.style.display = 'block';
}