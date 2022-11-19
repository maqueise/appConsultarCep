import '@picocss/pico'
import './style.css'
const formConsultarCep = document.querySelector('#consultarCep')
const inputCep = formConsultarCep.cep // seleciona o input do cep a partir do formulário
const divDados = document.querySelector('#dados')
const btnConsultarCep =
  document.querySelector('#btnConsultarCep')
/* const loader =
  `<a href="#" aria-busy="true">
    Consultando CEP, aguarde...
  </a>` */

formConsultarCep.addEventListener('submit', function (event) {
  event.preventDefault() // anula comportamento padrão de envio do form ao clicar no botão
  ativaLoader(true)
  consultarCep(inputCep.value) // invoca a função passando o cep digitado por parâmetro
})

async function consultarCep(cep) {
  let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
  let dadosCep = await response.json()
  if (dadosCep.erro) {
    divDados.innerHTML = `
      <div class="erro">CEP não encontrado!</div>
    `
  } else {
    divDados.innerHTML = `
    <p> Endereço: ${dadosCep.logradouro}  </p>
    <p> Localidade: ${dadosCep.localidade}  </p>
  `
  }
  ativaLoader(false)
}

function ativaLoader(ativo) {
  if (ativo) {
    btnConsultarCep.
      setAttribute('aria-busy', 'true')
    btnConsultarCep.
      textContent = 'Consultando CEP...'
  } else {
    btnConsultarCep.removeAttribute('aria-busy')
    btnConsultarCep.
      textContent = 'Consultar'
  }
}


