import { produtoServices } from "../servicos/produtos-service.js";

const pegaUrl = new URL(window.location)
const id = pegaUrl.searchParams.get('id')

const url = document.querySelector('[data-url]')
const categoria = document.querySelector('[data-categoria]')
const nome = document.querySelector('[data-nome]')
const preco = document.querySelector('[data-preco]')
const descricao = document.querySelector('[data-descricao]')

produtoServices.pegaProduto(id)
.then(dados =>{
    url.value = dados.url
    categoria.value = dados.categoria
    nome.value = dados.nome
    preco.value = dados.preco
    descricao.value = dados.descricao
})

const pegaBotaoSalvar = document.querySelector('[data-form-salva-produto]');

pegaBotaoSalvar.addEventListener('submit',(evento)=>{
    evento.preventDefault()

    produtoServices.editaProduto(id,url.value,categoria.value,nome.value,preco.value,descricao.value)
    .then(() =>{
        window.location.href="./produtosAdmin.html"
    })

})