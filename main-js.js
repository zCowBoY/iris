
// Seleciona os elementos a partir de seus IDs
const agendamentoTab = document.getElementById("Agendamento");
const confirmacaoTab = document.getElementById("Confirmacao");
const selecaoBtns = document.querySelectorAll(".tablinks");

// Variável para guardar a última aba selecionada
let ultimaAbaSelecionada = null;

// Função que troca para a aba selecionada
function openTab(event, tabName) {
  // Verifica se a aba clicada é a mesma que já está ativa
  if (ultimaAbaSelecionada === tabName) {
    // Esconde a aba clicada
    document.getElementById(tabName).style.display = "none";
    // Desmarca o botão de seleção
    event.currentTarget.classList.remove("active");
    // Atualiza a variável da última aba selecionada
    ultimaAbaSelecionada = null;
  } else {
    // Esconde todas as abas
    agendamentoTab.style.display = "none";
    confirmacaoTab.style.display = "none";

    // Remove a classe "active" de todos os botões de seleção
    selecaoBtns.forEach(btn => {
      btn.classList.remove("active");
    });

    // Mostra a aba selecionada e adiciona a classe "active" ao botão correspondente
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");

    // Atualiza a variável da última aba selecionada
    ultimaAbaSelecionada = tabName;
  }
}
