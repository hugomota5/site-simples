'use strict'
// referência para o botão - selecionanado a classe
const switcher = document.querySelector('.botao');
switcher.addEventListener('click', function(){
    // usando método toggle para alternar o elemento para a classe dark-theme
    document.body.classList.toggle('dark-theme')
    var className = document.body.className;
    if(className=="light-theme"){
        this.textContent = "Escuro";
    }
    else{
        this.textContent = "Claro";
    }
    console.log('Nome da classe atual: ' + className);
});