import outsideClick from './closefunction.js';

export default class DropdownMenu {
  constructor(menus, events) {
    this.dropdownMenu = document.querySelectorAll(menus);
    this.activeClass = 'active';
    // define o click e touchstart como argumento padrao caso vc não passe nada
    this.events = events || ['click', 'touchstart'];
    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
  }

  // ativa o dropdown menu e adiciona a função de clique fora dele (outsideclick)
  activeDropDownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.toggle(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // adiciona os eventos ao dropdownMenu
  addDropDownEvent() {
    this.dropdownMenu.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropDownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenu.length) {
      this.addDropDownEvent();
    }
    return this;
  }
}
