export default function initToolTip() {
  const tooltip = document.querySelectorAll('[data-tooltip]');

  const onMouseMove = {
    tooltipBox: '',
    element: '',
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 20}px`;
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    },
  };

  const onMouseLeave = {
    tooltipBox: '',
    element: '',
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    },
  };

  function criarTooltipBox(element) {
    const tooltipbox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipbox.classList.add('tooltip');
    tooltipbox.innerText = text;
    document.body.appendChild(tooltipbox);

    return tooltipbox;
  }

  function onMouseOver() {
    const tooltipBox = criarTooltipBox(this);
    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
  }

  tooltip.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  });
}
