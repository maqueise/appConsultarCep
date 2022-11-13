
const formConsultarCep = document.querySelector('#consultarCep')
const inputCep = formConsultarCep.cep // seleciona o input do cep a partir do formulário
const divDados = document.querySelector('#dados')

formConsultarCep.addEventListener('submit', function (event) {
  event.preventDefault() // anula comportamento padrão de envio do form ao clicar no botão
  consultarCep(inputCep.value) // invoca a função passando o cep digitado por parâmetro
})

async function consultarCep(cep) {
  let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
  let dadosCep = await response.json()
  divDados.innerHTML = `
    <p> Endereço: ${dadosCep.logradouro}  </p>
    <p> Localidade: ${dadosCep.localidade}  </p>
  `
}


