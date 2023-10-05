
/*converte uma string em um objeto
const data = JSON.parse(http.response)
*/
const criarProduto = (nomeproduto,preco,descricao) =>{
    return fetch(`http://localhost:3000/prod`,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify({
            nomeproduto:nomeproduto,
            preco:preco,
            descricao:descricao
        })
    })
    .then(resposta => {
        return resposta.json()
    })
  
}
export const produtoService = {criarProduto}