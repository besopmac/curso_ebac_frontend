$(document).ready(function() {
  // Função para adicionar tarefa à lista
  function adicionarTarefa() {
    var nomeTarefa = $("#nomeTarefa").val();

    if (nomeTarefa.trim() !== "") {
      // Adiciona a tarefa à lista ordenada
      $("#listaTarefas").append("<li>" + nomeTarefa + "</li>");

      // Limpa o campo após adicionar a tarefa
      $("#nomeTarefa").val("");
    } else {
      alert("Por favor, insira um nome para a tarefa.");
    }
  }

  // Função para aplicar efeito de linha através do texto
  function aplicarEfeitoLinha(item) {
    item.toggleClass("completed");
  }

  // Associa a função ao clique do botão de cadastro
  $("#btnCadastrar").click(function() {
    adicionarTarefa();
  });

  // Associa a função ao envio do formulário
  $("form").submit(function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    adicionarTarefa();
  });

  // Associa a função ao clique nos itens da lista
  $(document).on("click", "#listaTarefas li", function() {
    aplicarEfeitoLinha($(this));
  });
});