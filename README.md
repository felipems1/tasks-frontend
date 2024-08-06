# Tasks Front-End

Este é um projeto para gerenciamento de tarefas utilizando Angular, TypeScript e Tailwind CSS. A aplicação permite criar, ler, atualizar e excluir tarefas.

## Tecnologias Utilizadas

- **Angular**
- **TypeScript**
- **Tailwind CSS**

## Pré-requisitos

- Node.js e npm (ou yarn) instalados em sua máquina.

## Instalação

Siga os passos abaixo para configurar o ambiente de desenvolvimento local:

### 1. Clone o Repositório

```bash
git clone https://github.com/felipems1/tasks-frontend.git
```

### 2. Navegue até o Diretório do Projeto

```bash
cd tasks-frontend
```

### 3. Instale as Dependências

```bash
npm install
```

ou, se você usa o yarn:

```bash
yarn install
```

### 4. Inicie o Servidor de Desenvolvimento

```bash
npm start
```

ou, se você usa o yarn:

```bash
yarn start
```

A aplicação estará disponível em `http://localhost:4200`

### 5. Inicie o Backend

Certifique-se de que o backend está em execução para que a aplicação frontend funcione corretamente. O backend está disponível no repositório https://github.com/felipems1/tasks-backend.

### 6. Serviço de Tarefas

Os serviços são definidos em task.service.ts e são responsáveis por interagir com a API para obter, criar, atualizar e excluir tarefas. As funções principais são:

- `getTasks(title?: string)`: Obtém todas as tarefas. Pode filtrar as tarefas pelo título se o parâmetro `title` for fornecido.
- `addTask(task: Task)`: Cria uma nova tarefa.
- `updateTask(task: Task)`: Atualiza uma tarefa existente.
- `deleteTask(id: string)`: Exclui uma tarefa.

<p align="center">Projeto feito com ❤️ por <a href="https://www.linkedin.com/in/felipems1/">Felipe Moises</a></p>