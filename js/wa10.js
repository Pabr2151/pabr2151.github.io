const imageFilenames = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];
const imageAlt = {
  'img1.jpg': 'Mazzy Star',
  'img2.jpg': 'NAS',
  'img3.jpg': 'JID',
  'img4.jpg': 'Suddenly',
  'img5.jpg': 'STRFKR'
};

const thumbBar = document.querySelector('.thumb-bar');
const displayedImg = document.querySelector('.displayed-img');
const overlay = document.querySelector('.overlay');
const darkenBtn = document.querySelector('.dark');

for (let i = 0; i < imageFilenames.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', '/img/' + imageFilenames[i]);
    newImage.setAttribute('alt', imageAlt[imageFilenames[i]]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', function() {
      displayedImg.setAttribute('src', this.getAttribute('src'));
      displayedImg.setAttribute('alt', this.getAttribute('alt'));
    });
  }
  

darkenBtn.addEventListener('click', function() {
  if (darkenBtn.getAttribute('class') === 'dark') {
    darkenBtn.setAttribute('class', 'light');
    darkenBtn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    darkenBtn.setAttribute('class', 'dark');
    darkenBtn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});

