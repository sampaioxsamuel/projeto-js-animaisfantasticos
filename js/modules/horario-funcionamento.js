export default function HorarioFuncionamento() {
  const horaFuncionamento = document.querySelector('[data-hora]');
  const funcionamento = document.querySelector('[data-semana]');
  const ano = document.querySelector('[data-copy]');

  /* Criando array com os dados do dataset e transformando em numero usando map */
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = horaFuncionamento.dataset.hora.split(',').map(Number);

  /* Objeto Date */
  const dataAgora = new Date();
  const anoAtual = dataAgora.getFullYear();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  /* Verificação */
  ano.innerHTML = `Todos os direitos reservados ${anoAtual} &copy`;
  const estaAbertoDia = diasSemana.indexOf(diaAgora) !== -1;
  const estaAbertoHora = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

  if (estaAbertoDia && estaAbertoHora) {
    funcionamento.classList.add('aberto');
    funcionamento.setAttribute('title', 'Aberto');
  }
}
