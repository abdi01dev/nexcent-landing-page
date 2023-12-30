// active navlink
const navLinks = Array.from(document.querySelectorAll('ul.links-wrapper li a'));

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    resetAllActiveLink();
    link.parentElement.classList.add('active');
    // e.preventDefault();
  });
});

function resetAllActiveLink() {
  navLinks.forEach(link => {
    link.parentElement.classList.remove('active');
  });
}

// Hide span on input form
const input = document.querySelector('.section-footer .footer .footer-container .right .contact .input-wrapper .input');
const span = document.querySelector('.section-footer .footer .footer-container .right .contact .input-wrapper span');
input.addEventListener('click', () => {
  hideSpan();
});

document.body.addEventListener('click', e => {
  if (e.target.classList.contains('input')) {
    hideSpan();
  } else {
    checkInputValue();
  }
});

input.addEventListener('keyup', () => {
  checkInputValue();
});

function hideSpan() {
  span.classList.add('hide');
}

function checkInputValue() {
  if (input.value !== '') {
    hideSpan();
  } else {
    span.classList.remove('hide');
  }
}
