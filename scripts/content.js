// 1. Criamos o elemento 'button' na memória
const botaoExcel = document.createElement("button");
botaoExcel.id = "btn-pncp-excel";
botaoExcel.innerText = "📊 Gerar Excel";

// 2. Injetamos o botão no site
document.body.appendChild(botaoExcel);

// 3. Ação de extração ao clicar no botão
botaoExcel.addEventListener("click", () => {
    
    // Passo 3.1: Criar a matriz de dados vazia. 
    // Dessa vez, vamos deixar sem cabeçalho fixo, pois vamos capturar as colunas dinamicamente
    const dadosParaExcel = [];

    // Passo 3.2: Procurar pelas "linhas" da tabela do Angular (datatable-body-row) 
    // ou tabelas normais (tr) caso eles mudem algo no site
    const linhas = document.querySelectorAll("datatable-body-row, tr");

    // Passamos por cada linha encontrada na tela
    linhas.forEach(linha => {
        // Dentro da linha, procuramos todas as "células" usando a classe que você descobriu
        const celulas = linha.querySelectorAll(".datatable-body-cell-label, td");
        
        // Se a linha tiver células de dados, nós extraímos
        if (celulas.length > 0) {
            const linhaDeDados = []; // Array temporário para guardar as colunas desta linha
            
            celulas.forEach(celula => {
                // .innerText captura o texto legível. .trim() remove espaços em branco sobrando
                linhaDeDados.push(celula.innerText.trim());
            });
            
            // Adicionamos a linha completa na nossa planilha principal
            dadosParaExcel.push(linhaDeDados);
        }
    });

    // Passo 3.3: Verificamos se o robô encontrou algo
    if (dadosParaExcel.length === 0) {
        alert("Nenhum dado encontrado. Certifique-se de que a lista carregou na tela antes de clicar!");
    } else {
        // Passo 3.4: Transformar tudo em planilha
        const planilha = XLSX.utils.aoa_to_sheet(dadosParaExcel);
        const livro = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(livro, planilha, "Dados PNCP");
        
        // Passo 3.5: Baixar o arquivo final
        XLSX.writeFile(livro, "PNCP_Extraido.xlsx");
        alert("Sucesso! Extraímos " + dadosParaExcel.length + " linhas de dados.");
    }
});