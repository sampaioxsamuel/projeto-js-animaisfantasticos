export default class ScrollSuave {
  constructor(link, options) {
    this.linksInternos = document.querySelectorAll(link);
    if (options === 'undefined') {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }

    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener('click', this.scrollToSection);
    });
  }

  init() {
    if (!this.linksInternos.length) {
      throw Error('é preciso iniciar a classe com um link!');
    } else {
      this.addLinkEvent();
      return this;
    }
  }
}
