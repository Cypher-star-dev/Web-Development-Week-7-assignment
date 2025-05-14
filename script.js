const button = document.getElementById('myButton');

window.onload = () => {
  const savedBounce = localStorage.getItem('bounceActive');
  if (savedBounce === 'true') {
    button.classList.add('bounce');
  }
};

button.addEventListener('click', () => {
  if (button.classList.contains('bounce')) {
    button.classList.remove('bounce');
    localStorage.setItem('bounceActive', 'false');
  } else {
    button.classList.add('bounce');
    localStorage.setItem('bounceActive', 'true');
    button.addEventListener('animationend', () => {
      button.classList.remove('bounce');
    }, { once: true });
  }
});
