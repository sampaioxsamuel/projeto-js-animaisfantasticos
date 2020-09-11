export default function darkMode() {
  const btn = document.querySelector('#dark-mode');
  const html = document.querySelector('body');
  const modal = document.querySelector('.modal');
  const close = document.querySelector('.fechar');

  btn.addEventListener('click', (event) => {
    event.preventDefault();
    if (localStorage.getItem('theme-preferences') === 'dark') {
      localStorage.setItem('theme-preferences', 'light');
    } else {
      localStorage.setItem('theme-preferences', 'dark');
    }
    window.location.reload();
  });

  if (localStorage.getItem('theme-preferences') === 'dark') {
    html.classList.add('dark-mode');
    modal.classList.add('dark-mode');
    close.classList.add('dark-btn');
  }
}
