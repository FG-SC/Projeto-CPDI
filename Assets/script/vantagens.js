const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Apenas adiciona a classe "show" ao elemento
        } else {
            entry.target.classList.remove('show'); // Remove a classe "show" quando sai da tela
        }
    });
}, {
    threshold: 0.5, // 50% do elemento deve estar visível para iniciar a animação
});

document.querySelectorAll('.animationPair, .animationOdd').forEach((element) => {
    myObserver.observe(element);
});
