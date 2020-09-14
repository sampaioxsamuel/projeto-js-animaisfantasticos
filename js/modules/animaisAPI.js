import AnimaNumeros from './anima-numeros.js';

export default function AnimaisAPI(url, target) {
  // Cria a div contendo com o total de animais
  function createAnimal(animal) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('numero-animal');
    newDiv.innerHTML = `<h3>${animal.especie}</h3> <span data-numero>${animal.total}</span>`;

    return newDiv;
  }

  // Preenche cada animal no DOM
  const animaisGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const numeros = createAnimal(animal);
    animaisGrid.appendChild(numeros);
  }

  // anima os numeros de cada animal
  function animaAnimaisNumeros() {
    const animanumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animanumeros.init();
  }

  // Puxa os animais atraves de um arquivo JSON
  // e cria cada animal utilizando o createAnimal(animal);
  async function fetchAnimais() {
    try {
      // fetch, Espera uma resposta e depois transformar a resposta em json
      const animaisResponse = await fetch(url);
      const animasJSON = await animaisResponse.json();

      // apos transformar em json, ativa as funções
      // para preencher e animar os numeros
      animasJSON.forEach((animal) => {
        preencherAnimais(animal);
      });

      animaAnimaisNumeros();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }
  return fetchAnimais();
}
