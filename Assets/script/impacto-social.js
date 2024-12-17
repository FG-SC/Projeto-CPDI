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