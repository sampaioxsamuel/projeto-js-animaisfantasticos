const controles = document.getElementById('controles');
const cssText = document.querySelector('.css')
const btn = document.querySelector('.btn')
const reset = document.querySelector('.reset')

controles.addEventListener('change', handleChangeStyle)
reset.addEventListener('click', () => {
    window.localStorage.clear()
})

const cssObject = {
    element: btn,
    texto (value) {
        this.element.innerHTML = value;
    },
    backgroundColor(value) {
        return this.element.style.backgroundColor = value;
        alert('mudou')
    },
    color(value) {
        return this.element.style.color = value;
    },
    width(value) {
        this.element.style.width = value + 'px';
    },
    height(value) {
        this.element.style.height = value + 'px';
    },
    border(value) {
        this.element.style.border = value;
    },
    borderRadius(value) {
        this.element.style.borderRadius = value + 'px';
    },
    fontFamily(value){
        this.element.style.fontFamily = value;
    },
    fontSize(value){
        this.element.style.fontSize = value + 'px';
    }
    
}


function handleChangeStyle(event) {
    const name = event.target.name
    const value = event.target.value
    const checkBox = event.target.value

    console.log(checkBox)

    cssObject[name](value);
    cssProp()
    saveStorage(name, value)
    // console.log(cssObject[name](value))
} 

function cssProp() {
    // cssText.innerHTML = btn.innerText = name
    cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>')
}

function saveStorage(name, value) {
    localStorage[name] = value
}

function setStorage() {
    const properties = Object.keys(localStorage)
    properties.forEach(proper => {
        cssObject[proper](localStorage[proper])
        controles.elements[proper].value = localStorage[proper]
    })
    cssProp()
}

setStorage()