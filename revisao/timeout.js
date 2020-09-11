/*
const contagem = document.querySelector('[data-contagem]')
const qtd = document.querySelector('[data-qtd]')
const btn = document.querySelector('[data-btn]')

btn.addEventListener('click', () => {

    for(let i = qtd.value; i > 0; i--){

        btn.style.display = 'none';
        qtd.style.display = 'none';

        setTimeout(() => {
            if(i === qtd.value){
                btn.style.display = '';
                qtd.style.display = '';
            }
            contagem.innerHTML = --qtd.value
        }, 300 * i)

    }
})
*/

// /* Maneira foda PIKA MANE

const corDeFundo = document.querySelector('body')
const contagem = document.querySelector('[data-contagem]')
const qtd = +document.querySelector('[data-qtd]').value
const btnVai = document.querySelector('[data-btn-vai]')
const btnPause = document.querySelector('[data-btn-pause]')

btnVai.addEventListener('click', começarContagem)
btnPause.addEventListener('click', pausarContagem)
btnPause.addEventListener('dblclick', resetarContagem)

let timer;
const inicial = qtd;
let diminuir = qtd;

function começarContagem () {
    btnVai.setAttribute('disabled', '')
    timer = setInterval(() => {
        contagem.innerText = diminuir--
        gerarCorAleatoria()
        if(diminuir < 0){
           clearInterval(timer)
        }
    }, 300)
} 

function pausarContagem() {
    btnVai.removeAttribute('disabled')
    clearInterval(timer)
}

function resetarContagem () {
    qtd = inicial
    contagem.innerText = inicial
    começarContagem()
}

function gerarCorAleatoria () {
    const x = Math.floor(Math.random() * 256)
    const y = Math.floor(Math.random() * 256)
    const z = Math.floor(Math.random() * 256)
    const bg = `rgb(${x}, ${y}, ${z})`

    return corDeFundo.style.backgroundColor = bg 
}


// btnVai.addEventListener('click', () => {
//     const inicial = +qtd.value
//     const interval = setInterval(() => {
        
//         contagem.innerHTML = --qtd.value
//         btnPause.onclick = () =>{
//             clearInterval(interval)
//         }
//         btnPause.ondblclick = () => {
//             qtd.value = inicial
//         }
//         if(qtd.value == 0){
//             clearInterval(interval)
//         }
//         mudarClasse()
//     }, 1000)
// })
            
// */

/* DAHORAAAAAAAAAAAA

const bodys = document.querySelector('body')
const contagem = document.querySelector('[data-contagem]')
const btnVai = document.querySelector('[data-btn-vai]')
const btnPause = document.querySelector('[data-btn-pause]')

btnVai.addEventListener('click', começarContagem)
btnPause.addEventListener('click', pausarContagem)
btnPause.addEventListener('dblclick', resetarContagem)

let i = 0;
let timer;

function começarContagem() {
    btnVai.setAttribute('disabled', '')
    timer = setInterval(() => {
        contagem.innerText = i++
        mudarClasse()
    }, 300)
}

function pausarContagem() {
    clearInterval(timer)
    btnVai.removeAttribute('disabled')
}

function resetarContagem () {
    i = 0
    contagem.innerText = 0
    começarContagem()
}

function mudarClasse() {
    const value = generateRandomColor()
    bodys.style.backgroundColor = value
}


function generateRandomColor(){
    const x = Math.floor(Math.random() * 256)
    const y = Math.floor(Math.random() * 256)
    const z = Math.floor(Math.random() * 256)
    const a = Math.floor(Math.random() * 256)

    const bg = `rgba(${x}, ${y}, ${z}, ${a})`

    return bg
}
*/
