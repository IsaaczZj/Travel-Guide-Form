![image](https://github.com/user-attachments/assets/9cb52b6d-8ede-4e9e-b1f9-935b1b03d0f9)

# Formulário de Cadastro 

Este é um projeto de um formulário de cadastro de usuário com validação de campos, construído com React, TypeScript, Zod, Reack-Hook-Form e Tailwind CSS.

## Funcionalidades

*   Entrada de dados do usuário: nome, sobrenome, gênero, email, senha e confirmação de senha.
*   Validação em tempo real dos campos do formulário utilizando Zod e React Hook Form.
*   Exibição de mensagens de erro específicas para cada campo inválido.
*   Feedback visual para campos com erro.
*   Interface estilizada com Tailwind CSS.

## Tecnologias Utilizadas

*   **React:** Biblioteca principal para construção da interface.
*   **TypeScript:** Superset do JavaScript para tipagem estática.
*   **Vite:** Ferramenta de build rápida para desenvolvimento frontend.
*   **Tailwind CSS:** Framework CSS utility-first para estilização rápida e responsiva.
*   **React Hook Form:** Biblioteca para gerenciamento de formulários de forma eficiente e com fácil integração de validação.
*   **Zod:** Biblioteca para declaração e validação de esquemas de dados.
*   **@hookform/resolvers:** Adaptador para integrar Zod com React Hook Form.

## Como Executar o Projeto

1.  **Clone o repositório e se posicione na pasta do projeto:**
    ```bash
    cd formulario
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
    ou
    ```bash
    yarn install
    ```
3.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    ou
    ```bash
    yarn dev
    ```
4.  Abra o navegador no endereço fornecido (geralmente `http://localhost:5173`).

## Estrutura do Projeto

*   `src/`: Contém todo o código fonte da aplicação.
    *   `assets/`: Arquivos estáticos como imagens (`men_walking.jpeg`).
    *   `components/`: Componentes reutilizáveis da interface (`Form.tsx`, `Input.tsx`).
    *   `hooks/`: Hooks personalizados (`useForm.tsx`).
    *   `schemas/`: Esquemas de validação Zod (`userFormSchema.ts`).
    *   `App.tsx`: Componente principal que estrutura a página.
    *   `main.tsx`: Ponto de entrada da aplicação React.
    *   `index.css`: Estilos CSS globais e importações do Tailwind.
*   `public/`: Arquivos públicos (como o favicon).
*   `index.html`: Arquivo HTML principal.
*   `vite.config.ts`: Configuração do Vite.
*   `tailwind.config.js`: Configuração do Tailwind CSS.
*   `tsconfig.json` / `tsconfig.app.json` / `tsconfig.node.json`: Configurações do TypeScript.
*   `package.json`: Definições do projeto e dependências.
*   `.eslintrc.cjs` (ou similar): Configuração do ESLint (se utilizado).
*   `postcss.config.js`: Configuração do PostCSS (usado pelo Tailwind).
