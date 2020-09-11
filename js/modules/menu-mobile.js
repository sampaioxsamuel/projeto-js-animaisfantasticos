// import { outsideClick } from './closefunction.js'

import outsideClick from './closefunction.js';

export default function menuMobile() {
  const menuBtn = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="lista"]');
  const eventos = ['click'];

  function openMenu() {
    menuBtn.classList.add('ativo');
    menuList.classList.add('ativo');
    outsideClick(menuList, eventos, () => {
      menuBtn.classList.remove('ativo');
      menuList.classList.remove('ativo');
    });
  }

  if (menuBtn) {
    eventos.forEach((event) => menuBtn.addEventListener(event, openMenu));
  }
}
