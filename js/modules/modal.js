export default class initModal {
  constructor(btnAbrir, btnFechar, containerModal) {
    this.containerModal = document.querySelector(containerModal);
    this.btnAbrir = document.querySelector(btnAbrir);
    this.btnFechar = document.querySelector(btnFechar);

    // bind para fazer referencia ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  // abre ou fecha o modal

  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  // adiciona o evento de toggle ao modal

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }
  // fecha o modal ao clicar no lado de fora

  cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }
  // adiciona os eventos aos elementos do modal

  addModalEvent() {
    this.btnAbrir.addEventListener('click', this.eventToggleModal);
    this.btnFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  init() {
    if (this.btnAbrir && this.btnFechar && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}
