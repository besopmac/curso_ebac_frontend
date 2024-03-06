// document.addEventListener('DOMContentLoaded', function() {
//   document.getElementById('btn-buscar-cep').addEventListener('click', function() {
//     const xhttp = new XMLHttpRequest()
//     const cep = document.getElementById('cep').value
//     const endpoint = `https://viacep.com.br/ws/${cep}/json/`
//     xhttp.open('GET', endpoint)
//     xhttp.send()
//   })
// })

$(document).ready(function() {
  $('#cep').mask('00000-000')

  $('#btn-buscar-cep').click(function() {
    const cep = $('#cep').val()
    const endpoint = `https://viacep.com.br/ws/${cep}/json/`
    const botao = $(this)
    
    $(botao).find('i').addClass('d-none')
    $(botao).find('span').removeClass('d-none')

    // $.ajax(endpoint).done(function(response) {
    //   const { logradouro, bairro, localidade, uf } = response
    //   const endereco = `${logradouro}, ${bairro}, ${localidade} - ${uf}`
    //   $('#endereco').val(endereco)

    //   $(botao).find('i').removeClass('d-none')
    //   $(botao).find('span').addClass('d-none')
    // })

    fetch(endpoint)
      .then(function(reponse) {
        return reponse.json()
      })
      .then(function(json) {
        const { logradouro, bairro, localidade, uf } = json
        const endereco = `${logradouro}, ${bairro}, ${localidade} - ${uf}`
        
        $('#endereco').val(endereco)
      })
      .catch(function(error) {
        console.error(error)
      })
      .finally(function() {
        $(botao).find('i').removeClass('d-none')
        $(botao).find('span').addClass('d-none')
      })
  })

  $('form-pedido').submit(function(e) {
    e.preventDefault();
    
    if ($('#nome').val().length < 3) {
      throw new Error('Nome muito curto')
    }
  })
})