document.addEventListener('DOMContentLoaded', () => {
  const thumbnails = document.querySelectorAll('.vertical-photo-of-item .photo-of-item');
  const largeImage = document.getElementById('product-img');

  if (!thumbnails.length || !largeImage) return;

  let currentIndex = 0;

  function setActiveImage(index) {
    thumbnails.forEach((btn, i) => {
      const imgInsideBtn = btn.querySelector('img');

      if (i === index) {
        btn.classList.add('active');
        largeImage.src = imgInsideBtn.src;
        largeImage.alt = imgInsideBtn.alt;
      } else {
        btn.classList.remove('active');
      }
    });
    currentIndex = index;
  }

  thumbnails.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      setActiveImage(index);
    });
  });

  largeImage.style.cursor = 'pointer';
  largeImage.addEventListener('click', () => {
    let nextIndex = (currentIndex + 1) % thumbnails.length;
    setActiveImage(nextIndex);
  });
});
