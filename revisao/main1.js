function handleKeyUp(event) {
    const target = event.target
    
    if(!target.checkValidity()){
        target.classList.toggle('invalido')

        contato.nome.setCustomValidity('Nome é necessario')
        target.nextElementSibling.innerText = target.validationMessage;
    }
    texxto.innerText = event.target.value
}
