import { produtoServices } from "../servicos/produtos-service.js"; 

const todosOsProdutos = (id,url,nome,preco) =>{ /*Criando template da página do adiministrador todos os produtos */
    const caixa = document.createElement('div');
    caixa.classList.add("caixa")
    const conteudo = `
            <div class="div-img-botoes">
                <div class="div-img-produto">
                    <img src="${url}" alt=""> 
                </div>
                <a data-botao-deletar class="link-crud"><img src="./assets/imagens/imgdelete.png" alt="" class="botao-excluir"></a>
                <a href="./edita-produto.html?id=${id}" class="link-crud" data-botao-editar><img src="./assets/imagens/imgedit.png" alt=""></a>
            </div>
            
            <div class="info-produto">
                <p class="nome-produto">${nome}</p>
                <p class="preço">${preco}</p>
                <p class="nome-produto">${id}</p>
            </div>
    `
    caixa.innerHTML = conteudo;
    caixa.dataset.id = id
    caixa.dataset.caixa= "caixa"
    return caixa
}

produtoServices.listaProdutos()
.then(dados=>{
    dados.forEach(elemento =>{
        const sessaoUnica = document.querySelector('[data-todos-produtos]');
        sessaoUnica.appendChild(todosOsProdutos(elemento.id, elemento.url, elemento.nome,elemento.preco))
    })
})

