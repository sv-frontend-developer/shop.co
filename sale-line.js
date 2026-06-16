const closeBtn = document.querySelector('.close-btn-sale-line');
const saleLine = document.querySelector('.sale-line');

/*if(closeBtn && saleLine) {
  closeBtn.addEventListener('click', function() {
    saleLine.classList.add('hidden');
    console.log("Sale line closed");
  });
}*/

if (sessionStorage.getItem('saleLineClosed') === 'true') {
  if (saleLine) {
    saleLine.classList.add('d-none');
  }
}

if (saleLine && closeBtn) {
  closeBtn.addEventListener('click', function() {
    saleLine.classList.add('hidden');
    sessionStorage.setItem('saleLineClosed', 'true');
    console.log("Sale line closed for this session");
  })
} //пофиксить это закрытие