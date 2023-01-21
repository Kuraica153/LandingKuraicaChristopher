let sections = document.getElementsByTagName('section');
// tracks index of current section
let currentSectionIndex = 0;

document.addEventListener('wheel', e => {
  if (e.wheelDeltaY > 0 && currentSectionIndex - 1 >= 0) {
    // wheel up
    sections[currentSectionIndex].classList.toggle('active');
    currentSectionIndex--;
    sections[currentSectionIndex].classList.toggle('active');
  } else if (e.wheelDeltaY < 0 && currentSectionIndex + 1 < sections.length) {
    // wheel down
    sections[currentSectionIndex].classList.toggle('active');
    currentSectionIndex++;
    sections[currentSectionIndex].classList.toggle('active');
  }
});