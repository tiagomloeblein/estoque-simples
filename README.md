# Estoque Simples - Sistema de Gestão de Estoque

O **Estoque Simples** é uma aplicação web moderna para controle de inventário, desenvolvida para ser simples, eficiente e fácil de implantar. O sistema conta com um dashboard visual, listagem completa de produtos e persistência de dados segura.

## 🤖 Feito com Vibecoding

Este projeto é um exemplo de **Vibecoding** — uma abordagem de desenvolvimento acelerado onde a estrutura Full Stack (Frontend, Backend, Banco de Dados e Docker) foi gerada com auxílio de Inteligência Artificial para garantir velocidade e qualidade de código.

**Estado Atual:**
O sistema entrega as **funcionalidades básicas** essenciais para um MVP (Produto Mínimo Viável) de gestão de estoque.

---

## 🚀 Funcionalidades

- **Dashboard Interativo**: Visualização gráfica do status do estoque, valor total e alertas.
- **Gestão de Produtos**: Adicionar, Editar e Excluir produtos.
- **Entrada e Saída**: Controle rápido de movimentações de estoque.
- **Relatórios**: Histórico detalhado de todas as movimentações.
- **Persistência de Dados**: Banco de dados SQLite salvo localmente na pasta `backend/data`.
- **Arquitetura Simplificada**: Todo o ambiente roda via Docker Compose sem necessidade de builds complexos.

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React, Tailwind CSS, Recharts, Lucide Icons, Vite.
- **Backend**: Node.js, Express.
- **Banco de Dados**: SQLite (via `better-sqlite3`).
- **Infraestrutura**: Docker Compose (Imagens Node.js Alpine).

---

## 📦 Instalação e Uso (Docker)

A maneira recomendada de rodar o sistema é utilizando o **Docker Compose**. O arquivo `docker-compose.yml` já contém todas as definições necessárias.

### Pré-requisitos
- **Docker Desktop** instalado.

### Passo a Passo

1. **Inicie o Sistema**:
   Abra o terminal na pasta raiz do projeto e execute:
   ```bash
   docker-compose up
   ```
   *Nota: Na primeira execução, o Docker irá baixar as imagens do Node.js e instalar as dependências (npm install) automaticamente. Isso pode levar alguns minutos.*

2. **Acesse o Sistema**:
   - Frontend: **http://localhost:3000**
   - Backend API: **http://localhost:3001**

### Persistência de Dados
Os dados do banco de dados (SQLite) e uploads de imagens são salvos na pasta local `./backend/data`. Isso significa que mesmo se você destruir os containers, seus dados permanecerão salvos no seu computador.

---

## 💻 Instalação Manual (Sem Docker)

Se preferir rodar localmente:

### Backend
1. Entre na pasta: `cd backend`
2. Instale: `npm install`
3. Rode: `npm start`

### Frontend
1. Na raiz do projeto: `npm install`
2. Rode: `npm run dev`

---

## 📂 Estrutura do Projeto

```
/
├── backend/            # Código do servidor e DB
│   ├── data/           # Banco de dados SQLite (Persistente)
│   └── server.ts       # API Express
├── components/         # Componentes React
├── docker-compose.yml  # Definição dos Serviços
└── index.html          # Entrada do Frontend
```
