// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        // Impede o envio do formulário para validar os campos
        event.preventDefault();
        
        // Validação dos campos
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;
        
        if (!nome || !email || !mensagem) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Validação do e-mail
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, insira um e-mail válido.");
            return;
        }

        // Se tudo estiver válido, envia o formulário
        alert("Mensagem enviada com sucesso!");
        form.reset(); // Limpa o formulário após envio
    });
});

// Seleciona o botão
const btnTopo = document.getElementById("btn-topo");

// Mostrar o botão quando o usuário rolar para baixo
window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnTopo.style.display = "block"; // Exibe o botão
    } else {
        btnTopo.style.display = "none"; // Oculta o botão
    }
};

// Voltar ao topo ao clicar no botão
btnTopo.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Rola suavemente para o topo
    });
});
