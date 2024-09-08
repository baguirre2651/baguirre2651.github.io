
// for contact page\\
const contactIcons = document.querySelectorAll('.contact-icon');

contactIcons.forEach(icon => {
  icon.addEventListener('click', function() {
    const link = this.parentNode.href;
    window.open(link, '_blank');
  });
});


// Add event listener to clock ima



// Set the closeAllLightboxes function to run when #lightbox-overlay is clicked on.
document.getElementById('lightbox-overlay').addEventListener('click', closeAllLightboxes);


const lightboxOverlay = document.getElementById('lightbox-overlay');
const lightbox = document.getElementById('lightbox');
const closeBtn = document.getElementById('close-btn');

const images = document.querySelectorAll('#pics img');
images.forEach(img => {
  img.addEventListener('click', e => {
    const src = e.target.getAttribute('src');
    const imgEl = document.createElement('img');
    imgEl.setAttribute('src', src);
    lightbox.appendChild(imgEl);
    lightboxOverlay.classList.remove('hidden');
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.innerHTML = '';
  lightboxOverlay.classList.add('hidden');
});




const images = document.querySelectorAll('#pics');

images.forEach((img) => {
  img.addEventListener('click', () => {
    img.classList.toggle('zoom');
  });
});




