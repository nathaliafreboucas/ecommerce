//GET -  PEGA OS DADOS
const listaProdutos = async ()=>{ /*faz a comunicação com a api, aqui o get é automatico*/
    const resposta = await fetch(`http://localhost:3000/produtos`)
    return await resposta.json()
}
//faz o GET do produto especifico
const pegaProduto = async (id) =>{
    const resposta = await fetch(`http://localhost:3000/produtos/${id}`)
    return await resposta.json()
}
//faz o GET da sessao especifica
 const pegaSessaoProduto = async (categoria) =>{
     const resposta = await fetch(`http://localhost:3000/produtos?categoria=${categoria}`)
     console.log(resposta)
     return await resposta.json()
 }

//POST -  "posta" OS DADOS no db
const adicionaProduto = async (url,categoria,nome,preco,descricao) => {
    const resposta = await fetch(`http://localhost:3000/produtos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            url: url,
            categoria: categoria,
            nome: nome,
            preco: preco,
            descricao: descricao
        })
    })
    return resposta.body

}
// EDITAR - PUT
const editaProduto = async (id,url,categoria,nome,preco,descricao) => {
    const resposta = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            url: url,
            categoria: categoria,
            nome: nome,
            preco: preco,
            descricao: descricao
        })
    })
    return await resposta.json()
}
//APAGAR - DELETE
const apagaProduto = (id)=>{
    return fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'DELETE',
    })
}

export const produtoServices = {
    listaProdutos,
    adicionaProduto,
    pegaProduto,
    pegaSessaoProduto,
    editaProduto,
    apagaProduto
}

