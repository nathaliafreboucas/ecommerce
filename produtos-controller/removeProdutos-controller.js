import {produtoServices} from "../servicos/produtos-service.js"

const pegaCaixaProduto = document.querySelector('[data-todos-produtos]')
console.log(pegaCaixaProduto)

pegaCaixaProduto.addEventListener('click', (evento)=>{
    let alvo = evento.target.className === 'botao-excluir'
    console.log("esse é o alvo: "+ alvo)
    if(alvo){
        const produto = evento.target.closest('[data-id]')
        let id = produto.dataset.id
        console.log("cliquei no alvo correto")
        produtoServices.apagaProduto(id)
        .then(()=>{
            produto.remove()
        })
    }
})
