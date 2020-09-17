// import { outsideClick } from './closefunction.js'

import outsideClick from './closefunction.js';

export default class MenuMobile {
  constructor(button, list, events) {
    this.menuBtn = document.querySelector(button);
    this.menuList = document.querySelector(list);
    this.eventos = events || ['click'];
    this.activeClass = 'active';

    // é preciso usaro .bind() caso use uma função de callback dentro de uma classe
    this.openMenu = this.openMenu.bind(this);
    // this.
  }

  addMenuEvent() {
    this.eventos.forEach((event) => this.menuBtn.addEventListener(event, this.openMenu));
  }

  openMenu() {
    this.menuBtn.classList.add('ativo');
    this.menuList.classList.add('ativo');
    outsideClick(this.menuList, this.eventos, () => {
      this.menuBtn.classList.remove('ativo');
      this.menuList.classList.remove('ativo');
    });
  }

  init() {
    if (this.menuBtn && this.menuList) {
      this.addMenuEvent();
    }
    return this;
  }
}
