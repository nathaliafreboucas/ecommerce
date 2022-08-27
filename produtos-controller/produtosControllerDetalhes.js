import { produtoServices } from "../servicos/produtos-service.js";

const produtoNaTelaDetalhes = (url, nome, preco, descricao) =>{
    const areaDetalhes = document.createElement('div');
    areaDetalhes.classList.add("detalhes-descricao")
    const conteudo = `
        <div class="imagem-descricao">
            <img src="${url}" alt="">
        </div>
        <div class="descricao">
            <h1>${nome}</h1>
            <p class="preço">${preco}</p>
            <p class="detalhes-produto">${descricao}</p>
        </div>
    `
    areaDetalhes.innerHTML = conteudo
    return areaDetalhes
}

const pegaPaginaAtual = new URL(window.location)
console.log(pegaPaginaAtual)
const id = pegaPaginaAtual.searchParams.get("id")


const detalhesDescricao = document.querySelector('[data-detalhes-produto]')



produtoServices.pegaProduto(id)
.then(dados => {/*insere os dados da api no DOM */
    detalhesDescricao.appendChild(produtoNaTelaDetalhes(dados.url, dados.nome, dados.preco,dados.descricao))
    
})


