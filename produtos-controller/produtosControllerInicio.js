import { produtoServices } from "../servicos/produtos-service.js";

export const produtosNaTelaPrincipal = (url, nome, preco, id,  categoria) =>{ /*cria o template */
    const caixa = document.createElement('div');
    caixa.classList.add("caixa")
    const conteudo = `
            <img src="${url}" alt="">
            <div class="info-produto">
                <p class="nome-produto">${nome}</p>
                <p class="preço">${preco}</p>
                <a href="./detalhes-produto.html?id=${id}&categoria=${categoria}">Ver produto</a>
            </div>
    `
    caixa.innerHTML = conteudo;
    return caixa
}

produtoServices.listaProdutos()
.then(dados => {/*insere os dados da api no DOM */
    dados.forEach(elemento =>{
        let compartimento = ""
        if (elemento.categoria == "star wars"){
            compartimento = document.querySelector('[data-sessao-sw]');
            compartimento.appendChild(produtosNaTelaPrincipal(elemento.url, elemento.nome,elemento.preco, elemento.id,elemento.categoria))
        }
        else if(elemento.categoria == "diversos"){
            compartimento = document.querySelector('[data-sessao-diver]');
            compartimento.appendChild(produtosNaTelaPrincipal(elemento.url, elemento.nome,elemento.preco, elemento.id,elemento.categoria))
        }
        else if(elemento.categoria == "consoles"){
            compartimento = document.querySelector('[data-sessao-cons]');
            compartimento.appendChild(produtosNaTelaPrincipal(elemento.url, elemento.nome,elemento.preco, elemento.id,elemento.categoria))
        }else{
            throw new Error("Essa categoria não existe")
        }

    })
})
