export default function initModal() {
  const container = document.querySelector('[data-modal="container"]');
  const abrir = document.querySelector('[data-modal="abrir"]');
  const fechar = document.querySelector('[data-modal="fechar"]');

  function toggleModal(event) {
    event.preventDefault();
    container.classList.toggle('ativo');
  }

  function cliqueForaModal(event) {
    if (event.target === this) {
      container.classList.remove('ativo');
    }
  }

  abrir.addEventListener('click', toggleModal);
  fechar.addEventListener('click', toggleModal);
  container.addEventListener('click', cliqueForaModal);
}
