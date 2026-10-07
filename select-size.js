const sizeContainer = document.querySelector('.size-options');

sizeContainer.addEventListener('click', event => {
  const clickedBtn = event.target.closest('.size-btn');

  if (!clickedBtn) return;

  const currentActiveSize = sizeContainer.querySelector('.selected-size');
  if (currentActiveSize) {
    currentActiveSize.classList.remove('selected-size');
  }

  clickedBtn.classList.add('selected-size');
});
