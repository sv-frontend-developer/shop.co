document.addEventListener('DOMContentLoaded', () => {
  const hiddenContent = document.querySelector('.sale-card-display-none');
  const btnShowHiddenContent = document.querySelector('.view-all');
  const addSpaceBelowBlockWithCards = document.querySelector('.sale-first-block');

  btnShowHiddenContent.addEventListener('click', () => {
    if (hiddenContent.classList.contains('display-on')) {
      hiddenContent.classList.remove('display-on');
      btnShowHiddenContent.textContent = 'View all';
      addSpaceBelowBlockWithCards.style.paddingBottom = ' 10px ';
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      hiddenContent.classList.add('display-on');
      btnShowHiddenContent.textContent = 'Hide';
      addSpaceBelowBlockWithCards.style.paddingBottom = ' 50px ';
    }
  });
});
