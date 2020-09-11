import outsideClick from './closefunction.js';

export default function initDropDown() {
  const dropdownMenu = document.querySelectorAll('[data-dropdown');

  function handleClick(event) {
    this.classList.toggle('active');
    event.preventDefault();
    outsideClick(this, ['click', 'touchstart'], () => {
      this.classList.remove('active');
    });
  }

  dropdownMenu.forEach((menu) => {
    ['click', 'touchstart'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
