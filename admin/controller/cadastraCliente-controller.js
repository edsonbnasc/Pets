import { clienteService } from "../service/clientes-service.js"
const formulario = document.querySelector('[data-form]')


formulario.addEventListener('submit',(evento)=> {
   evento.preventDefault()
   const nome = evento.target.querySelector('[data-nome]').value
   const email = evento.target.querySelector('[data-email]').value

   clienteService.criarClientes(nome,email)
   .then(() => {
      window.location.href = '../telas/cadastro_concluido.html'            
   })
})


