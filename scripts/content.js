// 1. Criamos o elemento 'button' na memória
const botaoExcel = document.createElement("button");
botaoExcel.id = "btn-pncp-excel";
botaoExcel.innerText = "📊 Gerar Excel";

// 2. Injetamos o botão no site
document.body.appendChild(botaoExcel);

// 3. O que acontece quando clicamos no botão
botaoExcel.addEventListener("click", () => {
    
    // Passo 3.1: Criar alguns dados de teste (como se fossem extraídos do site)
    // Cada colchete interno representa uma LINHA do Excel
    const dados = [
        ["Objeto da Contratação", "Valor (R$)", "Data"],
        ["Computador de Alta Performance", "5.000,00", "29/05/2026"],
        ["Mesa de Escritório", "850,00", "29/05/2026"],
        ["Cadeira Ergonômica", "1.200,00", "29/05/2026"]
    ];

    // Passo 3.2: A biblioteca SheetJS (XLSX) transforma nossa lista em uma Planilha
    const planilha = XLSX.utils.aoa_to_sheet(dados);

    // Passo 3.3: Criamos um "Livro" de Excel (Workbook) e colamos nossa planilha nele
    const livro = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(livro, planilha, "Contratações Teste");

    // Passo 3.4: Forçamos o navegador a baixar o arquivo .xlsx final
    XLSX.writeFile(livro, "PNCP_Extracao_Teste.xlsx");
});