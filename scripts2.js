// Adicionar interatividade básica ao site

// Manipular envio do formulário de contato
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();  // Evita o envio padrão do formulário

            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;

            // Verificando se os campos estão preenchidos
            if (nome && email && mensagem) {
                console.log(`Formulário enviado com sucesso. Nome: ${nome}, Email: ${email}`); // Log para verificar os dados

                // Exibe o alert
                alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
                form.reset();  // Reseta o formulário após envio
            } else {
                alert('Por favor, preencha todos os campos do formulário.');
            }
        });
    } else {
        console.error('Formulário não encontrado.');
    }
});


// Adicionar uma funcionalidade interativa nas vantagens
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('vantagens.html')) {
        const vantagensList = document.querySelector('ul');
        const mensagem = document.createElement('p');

        mensagem.textContent = 'Clique em uma vantagem para saber mais!';
        vantagensList.before(mensagem);

        vantagensList.addEventListener('click', (e) => {
            if (e.target.tagName === 'LI') {
                alert(`Mais detalhes sobre: ${e.target.textContent}`);
            }
        });
    }
});
