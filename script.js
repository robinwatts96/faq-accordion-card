// const arrow = document.getElementById('testArrow');
// const hidden = document.getElementById('testP');

function myFunction() {
 if (hidden.style.display === "none") {
    hidden.style.display = "block";
 } 
};

const arrow = document.getElementById('testArrow');
const hidden = document.getElementById('testP');

arrow.onClick = function showHidden() {
    hidden.style.display = 'block';
}