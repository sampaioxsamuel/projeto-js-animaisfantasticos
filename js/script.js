import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';
import initModal from './modules/modal.js';
import initToolTip from './modules/tooltip.js';
import initDropDown from './modules/dropdown.js';
import menuMobile from './modules/menu-mobile.js';
import HorarioFuncionamento from './modules/horario-funcionamento.js';
import AnimaisAPI from './modules/animaisAPI.js';
import DoeBTC from './modules/doeBTC.js';
import darkMode from './modules/dark-mode.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

darkMode();
initAnimacaoScroll();
initTabNav();
initModal();
initToolTip();
initDropDown();
menuMobile();
HorarioFuncionamento();
AnimaisAPI();
DoeBTC();

console.log('~Dev Mode~');
