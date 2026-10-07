const colorsContainer = document.querySelector('.colors-btn');

colorsContainer.addEventListener('click', event => {
  const clickedBtn = event.target.closest('.colors');

  if (!clickedBtn) return;

  const currentActiveBtn = colorsContainer.querySelector('.selected-color');
  if (currentActiveBtn) {
    currentActiveBtn.classList.remove('selected-color');
  }

  clickedBtn.classList.add('selected-color');
});
