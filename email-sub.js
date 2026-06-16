const emailInput = document.querySelector('.email');
const emailBtnClear = document.querySelector('.email-clear-btn');
const subscribeBtn = document.querySelector('.subscribe');
const errorDisplay = document.getElementById('email-error');

if(emailInput && emailBtnClear) {
  emailBtnClear.addEventListener('click', function(event) {
    emailInput.value = '';
    emailInput.focus();

    const errorBlock = document.getElementById('email-error');
    if (errorBlock) {
      errorBlock.innerHTML = '';
    }

    console.log("Field of email cleared");
  });
}

if(subscribeBtn && emailInput) {
  subscribeBtn.addEventListener('click', function(event) {
    let fail = '';
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailValue == '') {
      fail = "Enter your email address";
    } else if (!emailPattern.test(emailValue)) {
      fail = "Please enter valid email address"
    }

    console.log(fail);

    if(fail != '') {
      if (errorDisplay) errorDisplay.innerHTML = fail;
    } else {
      if (errorDisplay) errorDisplay.innerHTML = '';
      alert("You have subscribed to the newsletter.")
      emailInput.value = '';
    }
  });
}