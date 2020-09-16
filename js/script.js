import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import ToolTip from './modules/tooltip.js';
import DropDown from './modules/dropdown.js';
import menuMobile from './modules/menu-mobile.js';
import HorarioFuncionamento from './modules/horario-funcionamento.js';
import AnimaisAPI from './modules/animaisAPI.js';
import DoeBTC from './modules/doeBTC.js';
import darkMode from './modules/dark-mode.js';
import ScrollAnima from './modules/scroll-anima.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new ToolTip('[data-tooltip]');
tooltip.init();

AnimaisAPI('../../animaisapi.json', '.numeros-grid');
DoeBTC('https://blockchain.info/ticker', '.btc-preco');

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropdown = new DropDown('[data-dropdown]');
dropdown.init();
darkMode();

menuMobile();
HorarioFuncionamento();
