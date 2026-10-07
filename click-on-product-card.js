document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card-of-product, .card-of-product-mit-sale');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const productId = card.getAttribute('data-id');

      window.location.href = `view-product-page.html?id=${productId}`;
    });
  });
});