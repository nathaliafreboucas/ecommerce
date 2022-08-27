//GET -  PEGA OS DADOS
const listaProdutos = ()=>{ /*faz a comunicação com a api, aqui o get é automatico*/
    return fetch(`http://localhost:3000/produtos`)
    .then(resposta =>{
        return resposta.json()

    })
}
//faz o GET do produto especifico
const pegaProduto = (id) =>{
    return fetch(`http://localhost:3000/produtos/${id}`)
    .then(resposta =>{
        return resposta.json()

    })
}
//faz o GET da sessao especifica
 const pegaSessaoProduto = (categoria) =>{
     return fetch(`http://localhost:3000/produtos?categoria=${categoria}`)
     .then(resposta =>{
        console.log(resposta)
         return resposta.json()
         
     })
 }

//POST -  "posta" OS DADOS no db
const adicionaProduto = (url,categoria,nome,preco,descricao) => {
    return fetch(`http://localhost:3000/produtos`,{
        method: 'POST',
        headers: { // passar qual tipo de informação ele está enviando no POST
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({ // NO "CORPO" DO FORMULÁRIO EU PASSAREI AS INFORMAÇÕES SEGUINTES -- STRINGIFY TRANSFORMA AS INFORMAÇÕES EM STRING PARA SEREM ENVIADAS
            url: url,
            categoria: categoria,
            nome: nome,
            preco: preco,
            descricao: descricao
        })
    })
    .then(resposta =>{
        return resposta.body
    })
}
export const produtoServices = {
    listaProdutos,
    adicionaProduto,
    pegaProduto,
    pegaSessaoProduto
}

