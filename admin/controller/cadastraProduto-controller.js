import { produtoService } from "../service/produto-service.js"

const formulario1 = document.querySelector('[data-form-produto]')

formulario1.addEventListener('submit',(evento)=> {
    evento.preventDefault()
    const produto = evento.target.querySelector('[data-produto]').value
    const preco = evento.target.querySelector('[data-preco]').value
    const descricao = evento.target.querySelector('[data-descricao]').value
 
 
    produtoService.criarProduto(produto,preco,descricao)
    .then(() => {
        window.location.href = '../telas/cadastro_concluido.html'            
     })
 })
 