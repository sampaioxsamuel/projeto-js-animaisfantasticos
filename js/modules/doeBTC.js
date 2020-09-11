export default function doeBTC() {
  fetch('https://blockchain.info/ticker')
    .then((r) => r.json())
    .then((value) => {
      const spanBTC = document.querySelector('.btc-preco');
      const valor = (1000 / value.BRL.buy).toFixed(4);
      spanBTC.innerText = `${valor}`;
    });
}
