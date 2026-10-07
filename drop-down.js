document.addEventListener('DOMContentLoaded', () => {
  const hiddenDropDown = document.querySelector('.header-drop-down');
  const showDropDown = document.querySelector('.drop-down');
  const arrowDirection = document.querySelector('.arrow-drop-down');

  let closeTimeout;

  hiddenDropDown.addEventListener('mouseenter', () => {
    clearTimeout(closeTimeout);
    showDropDown.classList.add('visible');
    arrowDirection.classList.add('arrow-down');
  });

  hiddenDropDown.addEventListener('mouseleave', () => {
    closeTimeout = setTimeout(() => {
      showDropDown.classList.remove('visible');
      arrowDirection.classList.remove('arrow-down');
    }, 150);
  });
});