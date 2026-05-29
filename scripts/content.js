// 1. Criamos o elemento 'button' na memória
const botaoExcel = document.createElement("button");
botaoExcel.id = "btn-pncp-excel";
botaoExcel.innerText = "📊 Gerar Excel";

// 2. Injetamos o botão no site
document.body.appendChild(botaoExcel);

// 3. O que acontece quando clicamos no botão
botaoExcel.addEventListener("click", () => {
    
    // Passo 3.1: Criar a base da nossa planilha (o cabeçalho)
    const dadosParaExcel = [
        ["Objeto/Título", "Órgão Responsável", "Data/Status"] 
    ];

    // Passo 3.2: O "Robô" lê a tela buscando os blocos de resultados
    // Tenta encontrar elementos comuns de listas ou tabelas no HTML
    const resultados = document.querySelectorAll(".br-card, .resultado-item, tr, .list-item");

    // Para cada bloco encontrado na tela, fazemos a extração
    resultados.forEach(item => {
        // Tenta achar o título, órgão e data usando tags comuns.
        // O sinal '?' (Optional Chaining) evita que o programa quebre se a informação não existir naquela linha.
        const titulo = item.querySelector("h3, h4, .titulo, .title")?.innerText || "Título não encontrado";
        const orgao = item.querySelector("h5, .orgao, .subtitle, .description")?.innerText || "Órgão não encontrado";
        const data = item.querySelector(".data, .status, .date, .badge")?.innerText || "Data não encontrada";
        
        // Adicionamos a linha extraída aos nossos dados gerais
        dadosParaExcel.push([titulo, orgao, data]);
    });

    // Se o robô só tiver a linha 1 (o cabeçalho), ele não achou nada na tela
    if (dadosParaExcel.length === 1) {
        alert("O robô não encontrou os dados automaticamente. Precisaremos mapear as 'classes' HTML exatas da página do PNCP!");
    } else {
        // Passo 3.3: Transformar tudo em planilha
        const planilha = XLSX.utils.aoa_to_sheet(dadosParaExcel);
        const livro = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(livro, planilha, "Dados PNCP");
        
        // Passo 3.4: Baixar o arquivo final
        XLSX.writeFile(livro, "PNCP_Dados_Reais.xlsx");
        alert("Planilha gerada com sucesso com " + (dadosParaExcel.length - 1) + " itens lidos da tela!");
    }
});