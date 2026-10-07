document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');

  const titleElem = document.getElementById('product-title');
  const priceElem = document.getElementById('product-price');
  const oldPriceElem = document.getElementById('product-old-price');
  const discountElem = document.getElementById('product-discount');
  const imgElem = document.getElementById('product-img');
  const smallImgElem = document.getElementById('product-img-small');
  const descElem = document.getElementById('product-desc');
  const starImages = document.querySelectorAll('.stars-with-mark-hero-product img');
  const ratingElem = document.getElementById('product-rating');
  const btnAddToCart = document.querySelector('.add-to-cart');
  const btnQuantityMinus = document.querySelector('.minus-item-btn');
  const btnQuantityPlus = document.querySelector('.plus-item-btn');
  const selectColorField = document.querySelector('.colors-btn');
  const selectSizeField = document.querySelector('.size-options');

  if (productId && productsData[productId]) {
    const product = productsData[productId];

    if (product.title.includes('-')) {
      const formattedTitle = product.title.replace(/-/g, '<span class="custom-dash">-</span>');
      titleElem.innerHTML = formattedTitle;
    } else {
      titleElem.textContent = product.title;
    }

    priceElem.textContent = product.price;
    imgElem.src = product.image;
    imgElem.setAttribute('alt', product.alt);
    smallImgElem.src = product.smallImage;
    smallImgElem.setAttribute('alt', product.alt);
    descElem.textContent = product.description;
    ratingElem.textContent = product.rating.toFixed(1);

    if (product.oldPrice) {
      oldPriceElem.textContent = product.oldPrice;
      oldPriceElem.style.display = 'inline';
    } else {
      oldPriceElem.style.display = 'none';
    }

    if (product.discount) {
      discountElem.textContent = product.discount;
      discountElem.style.display = 'inline-block';
    } else {
      discountElem.style.display = 'none';
    }

    const rating = product.rating;
    starImages.forEach((starImg, index) => {
      const starIndex = index + 1;

      if (starIndex <= Math.floor(rating)) {
        starImg.src = 'markStar/mark-fullStar.svg';
      } else if (starIndex === Math.ceil(rating) && !Number.isInteger(rating)) {
        starImg.src = 'markStar/mark-halfStar.svg';
      } else {
        starImg.src = 'markStar/mark-emptyStar.svg';
      }
    });

    const linkTitle = document.getElementById('link-item-category');
    if (product.title.includes('jeans')) {
      linkTitle.textContent = 'Jeans';
    } else if (product.title.includes('T-shirt') || product.title.includes('t-shirt')) {
      linkTitle.textContent = 'T-shirt';
    } else if (product.title.includes('shirt')) {
      linkTitle.textContent = 'Shirt';
    } else if (product.title.includes('shorts')) {
      linkTitle.textContent = 'Shorts';
    } else if (product.title.includes('Polo') || product.title.includes('polo')) {
      linkTitle.textContent = 'Polo';
    } else if (product.title.includes('jacket')) {
      linkTitle.textContent = 'Jacket';
    }
  } else {
    titleElem.textContent = 'Product not found';
    priceElem.textContent = '';
    oldPriceElem.style.display = 'none';
    discountElem.style.display = 'none';
    imgElem.src = '';
    descElem.textContent = '';
    ratingElem.textContent = '0';
    btnAddToCart.style.cssText = ' color: #000; background-color: #f0f0f0; pointer-events: none ';
    btnQuantityMinus.style.cssText = ' pointer-events: none; ';
    btnQuantityPlus.style.cssText = ' pointer-events: none; ';
    selectColorField.style.cssText = ' pointer-events: none; ';
    selectSizeField.style.cssText = ' pointer-events: none; ';
  }
});
