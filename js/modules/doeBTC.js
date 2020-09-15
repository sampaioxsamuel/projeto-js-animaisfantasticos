export default function doeBTC(url, target) {
  fetch(url)
    .then((r) => r.json())
    .then((value) => {
      const spanBTC = document.querySelector(target);
      const valor = (1000 / value.BRL.buy).toFixed(4);
      spanBTC.innerText = `${valor}`;
    });
}
