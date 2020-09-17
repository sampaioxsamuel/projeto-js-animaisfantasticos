export default class HorarioFuncionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSemana = this.funcionamento.dataset.hora.split(',').map(Number);
  }

  dadosAgora() {
    /* Objeto Date */
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    const estaAbertoDia = this.diasSemana.indexOf(this.diaAgora) !== -1;
    // vai fazer uma comparação do horario atual com o dataset dentro do index.html
    const estaAbertoHora = this.horarioAgora >= this.horarioSemana[0]
          && this.horarioAgora < this.horarioSemana[1];

    return estaAbertoDia && estaAbertoHora;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
  }
}
