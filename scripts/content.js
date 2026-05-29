// 1. Criamos o elemento 'button' na memória
const botaoExcel = document.createElement("button");

// 2. Colocamos o ID (para puxar o visual do CSS) e o texto do botão
botaoExcel.id = "btn-pncp-excel";
botaoExcel.innerText = "📊 Gerar Excel";

// 3. Adicionamos o botão ao 'body' (corpo) da página do site
document.body.appendChild(botaoExcel);

// 4. Adicionamos um 'ouvinte' para saber quando o usuário clicar no botão
botaoExcel.addEventListener("click", () => {
    // Por enquanto, apenas exibimos um alerta para testar se funciona
    alert("Botão funcionando! Na próxima etapa vamos extrair os dados da tela.");
});