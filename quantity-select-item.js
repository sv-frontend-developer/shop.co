const quantityValue = document.querySelector('.quantity-of-item');
const plusItem = document.querySelector('.plus-item-btn');
const minusItem = document.querySelector('.minus-item-btn');

let currentQuantity = 1;

plusItem.addEventListener('click', () => {
  currentQuantity++;
  quantityValue.textContent = currentQuantity;
});

minusItem.addEventListener('click', () => {
  if (currentQuantity > 1) {
    currentQuantity--;
    quantityValue.textContent = currentQuantity;
  }
});
