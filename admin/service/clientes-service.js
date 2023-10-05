
const listaClientes = () =>{
    return fetch(`http://localhost:3000/profile`)
    .then(resposta =>{
        return resposta.json()
    })
}
const criarClientes = (nome,email) =>{
    return fetch(`http://localhost:3000/profile`,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify({
            nome:nome,
            email:email
        })
    })
    .then(resposta =>{
        return resposta.json();
    })
}

const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`,{
        method:'DELETE'   
    })
}

const detalhaCliente = (id) =>{
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(resposta =>{
        return resposta.json();
    })
}

const atualizaCliente = (id,nome,email) =>{
    return fetch(`http://localhost:3000/profile/${id}`,{
        method:"PUT",  //Método que vai ser usado para alterar os dados do cliente no banco de dados
        headers : {'Content-Type':'application/json'},//Definindo o tipo da informação a ser enviada ao servidor
        body: JSON.stringify({
            nome:nome,
            email:email
        })
    })
    .then(resposta => {
        return resposta.json()
    })
}



export const clienteService = {listaClientes,criarClientes,removeCliente,detalhaCliente,atualizaCliente,criarProduto}