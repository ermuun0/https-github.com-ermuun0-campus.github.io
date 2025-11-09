// Get elements
const openPopup = document.getElementById('profile');
const popup = document.getElementById('myModal');
const closePopup = document.getElementById('closeModal');

// Open popup when div is clicked
openPopup.addEventListener('click', () => {
  popup.style.display = 'flex';
});

// Close popup when X is clicked
closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Close popup when clicking outside the content
window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});

// Get elements
const openU = document.getElementById('openPopup');
const popU = document.getElementById('popup');
const closeU = document.getElementById('closePopup');

// Open popup when div is clicked
openU.addEventListener('click', () => {
  popU.style.display = 'flex';
});

// Close popup when X is clicked
closeU.addEventListener('click', () => {
  popU.style.display = 'none';
});

// Close popup when clicking outside the content
window.addEventListener('click', (e) => {
  if (e.target === popU) {
    popU.style.display = 'none';
  }
});





