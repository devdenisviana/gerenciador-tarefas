# Gerenciador de Tarefas

Este é um projeto de Gerenciador de Tarefas desenvolvido com [Next.js](https://nextjs.org/), [NestJS](https://nestjs.com/), [Tailwind CSS](https://tailwindcss.com/) e [PostgreSQL](https://www.postgresql.org/). A aplicação permite criar, editar e excluir tarefas, oferecendo uma interface responsiva e suporte a tema escuro.

## Demonstração

A aplicação está hospedada no Vercel e pode ser acessada em:
[Gerenciador de Tarefas](https://gerenciador-tarefas-pied.vercel.app/)

## Tecnologias Utilizadas

- **Next.js** - Framework para React com suporte a SSR e SSG.
- **NestJS** - Framework para a API backend em Node.js.
- **Tailwind CSS** - Para estilização rápida e responsiva.
- **PostgreSQL** - Banco de dados relacional.
- **Prisma** - ORM para interagir com o banco de dados.

## Instalação e Execução

Para rodar o projeto localmente, siga os passos abaixo.

### Requisitos
- Node.js e pnpm instalados
- PostgreSQL configurado

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/devdenisviana/gerenciador-tarefas.git
   cd seu-repositorio
   ```

2. Instale as dependências:
   ```bash
   pnpm install
   ```

3. Configure o banco de dados PostgreSQL no arquivo `.env`:
   ```env
   DATABASE_URL=postgresql://usuario:senha@localhost:5432/nome_do_banco
   ```

4. Rode as migrações do Prisma:
   ```bash
   pnpm prisma migrate dev
   ```

5. Inicie o backend NestJS:
   ```bash
   pnpm start:server
   ```

6. Inicie o frontend Next.js:
   ```bash
   pnpm dev
   ```

7. Acesse a aplicação em [http://localhost:3000](http://localhost:3000)

## Funcionalidades

- Adicionar novas tarefas
- Editar tarefas existentes
- Excluir tarefas
- Suporte a tema escuro
- Interface responsiva

## API Endpoints

A API, desenvolvida com NestJS, fornece os seguintes endpoints:

- `GET /tasks` - Retorna todas as tarefas
- `POST /tasks` - Cria uma nova tarefa
- `PUT /tasks/:id` - Atualiza uma tarefa existente
- `DELETE /tasks/:id` - Exclui uma tarefa

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

