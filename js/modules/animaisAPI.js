import AnimaNumeros from './anima-numeros.js';

export default function AnimaisAPI() {
  async function fetchAnimais(url) {
    const animaisResponse = await fetch(url);
    const animasJSON = await animaisResponse.json();
    const animaisGrid = document.querySelector('.numeros-grid');

    function createAnimal(animal) {
      const newDiv = document.createElement('div');
      newDiv.classList.add('numero-animal');
      newDiv.innerHTML = `<h3>${animal.especie}</h3> <span data-numero>${animal.total}</span>`;

      return newDiv;
    }

    animasJSON.forEach((animal) => {
      const numeros = createAnimal(animal);
      animaisGrid.appendChild(numeros);
    });
    const animanumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animanumeros.init();
  }

  fetchAnimais('./animaisapi.json');
}
