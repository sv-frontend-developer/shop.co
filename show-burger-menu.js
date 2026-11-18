document.addEventListener('DOMContentLoaded', () => {
  const btnShowMneu = document.querySelector('.burger-menu');
  const blockWithMenu = document.querySelector('.header-main');
  const links = document.querySelectorAll('.hover-link-header');
  const dropDown = document.querySelectorAll('.show-more');

  const linksAndDropDownOriginalParents = new Map();

  [...links, ...dropDown].forEach(el => {
    linksAndDropDownOriginalParents.set(el, el.parentElement);
  });

  const burgerMenu = document.createElement('div');
  burgerMenu.classList.add('menu-hidden');
  blockWithMenu.prepend(burgerMenu);
  const closeBtn = document.createElement('div');
  burgerMenu.append(closeBtn);

  function moveToBurger() {
    links.forEach(link => {
      burgerMenu.append(link);
    });
    dropDown.forEach(drop => {
      burgerMenu.append(drop);
    });
  }

  function restoreFromBurger() {
    links.forEach(link => {
      const parent = linksAndDropDownOriginalParents.get(link);
      if (parent) {
        return parent.append(link);
      }
    });
    dropDown.forEach(drop => {
      const parent = linksAndDropDownOriginalParents.get(drop);
      if (parent) {
        return parent.append(drop);
      }
    });
  }

  function openMenu() {
    const windowWidth = document.documentElement.clientWidth;

    if (windowWidth <= 690 && windowWidth >= 360) {
      burgerMenu.classList.add('menu-visible');
      closeBtn.classList.add('cross-close-menu');
      moveToBurger();
      document.querySelector('main').style.cssText = ' filter: blur(10px); transition: filter 0.5s ease; ';
      document.body.style.overflowY = 'hidden';
    }
  }

  btnShowMneu.addEventListener('click', openMenu);

  closeBtn.addEventListener('click', () => {
    burgerMenu.classList.remove('menu-visible');
    restoreFromBurger();
    document.querySelector('main').style.cssText = ' filter: none; transition: filter 0.5s ease; ';
    document.body.style.overflowY = 'auto';
  });
});
