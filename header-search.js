const searchInput = document.querySelector('.header-search');
const clearBtn = document.querySelector('.search-clear-btn');

if(searchInput && clearBtn) {
  clearBtn.addEventListener('click', function(event) {
    searchInput.value = '';
    searchInput.focus();
    console.log("Field of search cleared");
  });
}