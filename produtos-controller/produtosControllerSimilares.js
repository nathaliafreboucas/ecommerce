import { produtoServices } from "../servicos/produtos-service.js";
import { produtosNaTelaPrincipal } from "./produtosControllerInicio.js";

const pegaPaginaAtual = new URL(window.location)
const id = pegaPaginaAtual.searchParams.get("id")
console.log(id);

const categoria = pegaPaginaAtual.searchParams.get("categoria")
console.log("essa eh a categoria::: "+categoria);

const sessao = document.querySelector(".sessoes")

produtoServices.pegaSessaoProduto(categoria)
.then(dados =>{
    dados.forEach(elemento => {
        
        sessao.appendChild(produtosNaTelaPrincipal(elemento.url, elemento.nome, elemento.preco, elemento.id, elemento.categoria))
       
    })
})


