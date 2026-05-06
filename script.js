const API_URL = "https://inspireme-back-ge6n.onrender.com/api/quote";

async function fetchQuote() {
  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");

  try {
    quoteElement.innerHTML =
      '<i class="fa-solid fa-spinner fa-spin"></i> Buscando nova inspiração...';
    authorElement.innerText = "";

    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Erro na rede");
    }

    const data = await response.json();

    quoteElement.innerText = `"${data.text}"`;
    authorElement.innerText = `- ${data.author}`;
  } catch (error) {
    console.error("Erro ao buscar a citação:", error);
    quoteElement.innerText = "Ops! Não foi possível buscar uma citação agora.";
    authorElement.innerText = "";
  }
}

window.onload = fetchQuote;
