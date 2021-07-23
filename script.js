// const arrow = document.getElementById('testArrow');
// const hidden = document.getElementById('testP');

// function myFunction() {
//  if (hidden.style.display === "none") {
//     hidden.style.display = "block";
//  } 
// };

let arrow = document.getElementById('testArrow');
let hidden = document.getElementById('testP');

hidden.addEventListener('click', (e) => {
    let parent = e.target.parentNode;
    let activeItem = document.querySelector('.TestClassArrow');
  
    if (!activeItem) {
      parent.classList.add('hidden');
    } else if (parent.classList.contains('hidden')) {
      parent.classList.remove('hidden');
    } else {
      activeItem.classList.remove('hidden');
      parent.classList.add('hidden');
    }
  });

// arrow.onClick = function showHidden() {
//     hidden.style.display = 'block';
// }