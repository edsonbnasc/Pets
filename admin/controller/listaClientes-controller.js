
/*const listaClientes = ()=>{
    const promise = new Promise((resolve, reject)=>{
        //responsavel em fazer a conexao com a API promise é uma função assincrona 
    const http = new XMLHttpRequest()//objeto http instancioado em XMLHttp

http.open('GET','http://localhost:3000/profile')
// pega o http.response e coloca na variavel data e mostra no console log
//iron fuction ()=> 
http.onload = () =>{
  if(http.status>=400){
    reject(JSON.parse(http.response))
}else{
    resolve(JSON.parse(http.response))
}
}
http.send()

})
//console.log(promise)
return promise
}*/
//outro modo de fazer o GET em menos linhas

/*cria uma nova linha e insere na tabela com campos de editar e excluir
funcao que recebe dados do db.json */
import { clienteService } from "../service/clientes-service.js"
const criaNovaLinha = (nome,email,id) => {
    const linhaNovoCliente = document.createElement('tr')
    const conteudo = `
    <td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>`
    linhaNovoCliente.innerHTML = conteudo
    linhaNovoCliente.dataset.id = id
    console.log(linhaNovoCliente)


    return linhaNovoCliente
}

/*seleciona a tabela pelo seu atributo de dados, ele fica percorrendo a arvore do DOM para buscar o corpo da tabela*/
const tabela = document.querySelector('[data-tabela]')

tabela.addEventListener('click',(evento) =>{
    let ehBotaoDeletar = evento.target.className == 'botao-simples botao-simples--excluir'
    if(ehBotaoDeletar ){
        const linhaCliente = evento.target.closest('[data-id')
        let id = linhaCliente.dataset.id
        clienteService.removeCliente(id)
        .then(() => {
            linhaCliente.remove()
        })
}})

clienteService.listaClientes()
//.then vai mostrar na tela o promise
.then(data=>{
data.forEach(element => {
    tabela.appendChild(criaNovaLinha(element.nome,element.email,element.id))
})
})
