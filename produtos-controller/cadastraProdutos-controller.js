import { produtoServices } from "../servicos/produtos-service.js"

const formulario = document.querySelector('[data-form-adiciona-produto]')
formulario.addEventListener('submit',(evento)=>{
    evento.preventDefault()//previne o comportamento padrão. Ele não enviará imediatamente os dados sem checar o que dentro antes
    const url = evento.target.querySelector('[data-url]')
    const valorUrl = url.value
    const categoria = evento.target.querySelector('[data-categoria]')
    const valorCategoria= categoria.value
    const nome = evento.target.querySelector('[data-nome]')
    const valorNome = nome.value
    const preco = evento.target.querySelector('[data-preco]')
    const valorPreco = preco.value
    const descricao = evento.target.querySelector('[data-descricao]')
    const valorDescricao = descricao.value
    if(valorCategoria == "star wars" || valorCategoria == "consoles" || valorCategoria == "diversos" ){
        produtoServices.adicionaProduto(valorUrl, valorCategoria, valorNome, valorPreco, valorDescricao)
        .then(() =>{
            window.location.href='../produtosAdmin.html'
        })
    }else{
        alert("Essa categoria não existe")
    }
})