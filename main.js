function validarFormulario() {
  var campo1 = document.getElementById("campo1").value;
  var campo2 = document.getElementById("campo2").value;

  if (parseInt(campo2) > parseInt(campo1)) {
    // Exibe uma mensagem positiva e permite o envio do formulário
    alert("Formulário válido! Número B é maior que o número A.");
    return true;
  } else {
    // Exibe uma mensagem de erro e impede o envio do formulário
    alert("Formulário inválido! O número B deve ser maior que o número A.");
    return false;
  }
}