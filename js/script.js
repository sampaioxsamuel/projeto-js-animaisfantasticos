import initScrollSuave from './modules/scroll-suave.js';
import darkMode from './modules/dark-mode.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';
import initModal from './modules/modal.js';
import initToolTip from './modules/tooltip.js';
import initDropDown from './modules/dropdown.js';
import menuMobile from './modules/menu-mobile.js';
import HorarioFuncionamento from './modules/horario-funcionamento.js';
import AnimaisAPI from './modules/animaisAPI.js';
import DoeBTC from './modules/doeBTC.js';

initScrollSuave();
darkMode();
initAnimacaoScroll();
initAccordion();
initTabNav();
initModal();
initToolTip();
initDropDown();
menuMobile();
HorarioFuncionamento();
AnimaisAPI();
DoeBTC();

console.log("Dev Mode");