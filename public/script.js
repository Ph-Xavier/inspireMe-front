const API_URL = "https://inspireme-back-docker.onrender.com/v1";

async function fetchQuote() {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    const respostaElement = document.getElementById('resposta');

    try {
        quoteElement.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Buscando nova inspiração...';
        authorElement.innerText = "";
        respostaElement.innerText = "";

        const resposta = await fetch(API_URL);
        const dados = await resposta.json();

        // Preenche a frase e o autor
        quoteElement.innerText = `"${dados.quote}"`;
        authorElement.innerText = `- ${dados.author}`;
        
        // Requisito obrigatório da Parte 2: exibe a mensagem e a data
        respostaElement.textContent = `${dados.message} chamada em ${dados.chamada_em}`;

    } catch (error) {
        quoteElement.innerText = "Erro ao buscar inspiração. Tente novamente!";
        console.error("Erro na API:", error);
    }
}

// Carrega uma frase ao iniciar
fetchQuote();