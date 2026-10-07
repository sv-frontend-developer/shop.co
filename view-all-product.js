document.addEventListener('DOMContentLoaded', () => {
  const hiddenContent = document.querySelector('.sale-card-display-none');
  const btnShowHiddenContent = document.querySelector('.sale-btn');

  btnShowHiddenContent.addEventListener('click', () => {
    if (hiddenContent.classList.contains('display-on')) {
      hiddenContent.classList.remove('display-on');
      btnShowHiddenContent.textContent = 'View all';
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      hiddenContent.classList.add('display-on');
      btnShowHiddenContent.textContent = 'Hide';
    }
  });
});