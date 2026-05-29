# 📊 PNCP-TO-EXCEL

Uma extensão moderna para Google Chrome desenvolvida para otimizar a extração de dados do **Portal Nacional de Contratações Públicas (PNCP)**. 

Com apenas um clique, a extensão realiza o *web scraping* dos resultados exibidos na tela e gera automaticamente uma planilha do Excel (`.xlsx`), facilitando a análise de dados, auditorias e acompanhamento de licitações.

---

## ✨ Funcionalidades

* **Extração Inteligente:** Captura dados diretamente de tabelas dinâmicas em Angular renderizadas no site.
* **Injeção de Interface (DOM):** Adiciona um botão flutuante e minimalista no canto da tela do portal, garantindo acesso rápido sem poluir o visual.
* **Geração Offline:** Utiliza a biblioteca `SheetJS` localmente, processando os dados e gerando a planilha diretamente no navegador do usuário, garantindo 100% de privacidade sem envio de dados para servidores externos.
* **Arquitetura Moderna:** Desenvolvida seguindo os rigorosos padrões de segurança do Manifest V3 do Google Chrome.

---

## 🛠️ Tecnologias Utilizadas

A extensão foi construída utilizando tecnologias web padrão e bibliotecas de código aberto:

* **JavaScript (Vanilla):** Lógica principal, manipulação do DOM e Web Scraping.
* **CSS3:** Estilização da interface injetada.
* **HTML5:** Estrutura básica.
* **Chrome Extension API:** (Manifest V3) para integração com o navegador via *Content Scripts*.
* **SheetJS (xlsx):** Motor de conversão de matrizes de dados (Arrays) para arquivos Excel.

---

## 🚀 Como Instalar (Modo Usuário)

Se você deseja apenas utilizar a extensão, o processo é muito simples:

1. Acesse a aba **Releases** aqui no lado direito do repositório.
2. Baixe o arquivo mais recente com a extensão **`.crx`**.
3. Abra o seu Google Chrome e digite `chrome://extensions/` na barra de endereços.
4. Ative o **Modo do desenvolvedor** no canto superior direito.
5. Arraste e solte o arquivo `.crx` que você baixou para dentro da página.
6. Pronto! Acesse o site do [PNCP](https://pncp.gov.br/) e o botão verde aparecerá na tela.

---

## 💻 Como Executar (Modo Desenvolvedor)

Para desenvolvedores que desejam clonar o projeto, testar ou modificar o código:

1. Clone este repositório para a sua máquina:
```bash
git clone [https://github.com/SEU_USUARIO/PNCP-TO-EXCEL.git](https://github.com/SEU_USUARIO/PNCP-TO-EXCEL.git)
