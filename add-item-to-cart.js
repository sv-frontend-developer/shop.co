document.addEventListener('DOMContentLoaded', () => {
  const mainBtn = document.querySelector('.add-to-cart');
  const cartBox = document.querySelector('.header-basket');

  const counterIcon = document.createElement('div');
  counterIcon.style.cssText = `
    position: absolute; 
    top: -6px; 
    left: 10px; 
    width: 17px; 
    height: 17px; 
    color: white; 
    background-color: red;
    display: flex; 
    align-items: center; 
    justify-content: center;
    border-radius: 6px;
    font-size: 12px;
  `;

  let count = Number(localStorage.getItem('cartCount')) || 0;

  function updateCartUI() {
    if (count > 0) {
      if (!cartBox.contains(counterIcon)) {
        cartBox.style.cssText = ' position: relative; ';
        cartBox.append(counterIcon);
      }
      counterIcon.textContent = count;
    } else {
      if (cartBox.contains(counterIcon)) {
        counterIcon.remove();
      }
    }

    localStorage.setItem('cartCount', count);
  }

  window.addEventListener('storage', event => {
    if (event.key === 'cartCount') {
      count = Number(event.newValue) || 0;
      updateCartUI();
    }
  });

  updateCartUI();

  if (mainBtn) {
    mainBtn.addEventListener('click', () => {
      count++;
      updateCartUI();
    });
  }
  // mainBtn.addEventListener('click', () => {
  //   count++;

  //   if (!cartBox.contains(counterIcon)) {
  //     cartBox.style.cssText = ' position: relative; ';
  //     cartBox.append(counterIcon);
  //   }
  //   counterIcon.textContent = count;
  // });
});
