

const handleSubmit = (event) =>{
    event.preventDefault();

    alert('Enviando......')
}

document.querySelector('form').addEventListener('submit', handleSubmit)

// **Função para alternar a visibilidade de dois elementos**

const botaoAlternar = document.getElementById("botao-alternar");
const elemento1 = document.getElementById("elemento-1");
const elemento2 = document.getElementById("elemento-2");

botaoAlternar.addEventListener("click", function () {

    if (elemento2.classList.contains("steal")) {
        elemento2.classList.remove("steal");
        elemento1.classList.add("elemento-escondido");
    }
    else if (elemento2.classList.contains("elemento-escondido")) {
        elemento2.classList.remove("elemento-escondido");
        elemento1.classList.add("elemento-escondido");
    }
    else {
        elemento2.classList.add("elemento-escondido");
        elemento1.classList.remove("elemento-escondido");
    }
});
