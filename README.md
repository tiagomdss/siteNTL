# 🌐 NTL - Nova Tecnologia | Portal Institucional

<div align="center">

![NTL Banner](public/img/Marcas%20NTL3.png)

### Performance para operações que não podem parar.

[![Nuxt 4](https://img.shields.io/badge/Nuxt-4.x-00DC82?style=for-the-badge&logo=nuxtdotjs&logoColor=white)](https://nuxt.com/)
[![Vue 3](https://img.shields.io/badge/Vue.js-3.5+-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)](https://vuejs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![SQL Server](https://img.shields.io/badge/SQL_Server-Integration-CC292B?style=for-the-badge&logo=microsoftsqlserver&logoColor=white)](https://www.microsoft.com/sql-server)

[Visão Geral](#-visão-geral) •
[Funcionalidades](#-funcionalidades) •
[Stack Tecnológica](#-stack-tecnológica) •
[Estrutura do Projeto](#-estrutura-do-projeto) •
[Começando](#-começando) •
[Variáveis de Ambiente](#-variáveis-de-ambiente) •
[Deploy](#-deploy)

</div>

---

## 📌 Visão Geral

O **siteNTL** é a plataforma institucional da **NTL - Nova Tecnologia**, desenvolvida para apresentar as soluções em tecnologia, infraestrutura, service desk, facilities e transformação digital da companhia, além de integrar o banco de talentos e oportunidades em tempo real diretamente com o sistema **STC** (SQL Server).

A aplicação foi construída com foco em:
- **Design de Alta Performance:** Estética moderna, efeitos de *liquid glass*, suporte nativo a tema claro/escuro e layout 100% responsivo para qualquer tela (desktop, notebooks e mobile).
- **Integração Real-Time:** Consulta automatizada de vagas ativas do banco STC com caching inteligente via Nuxt Nitro (`SWR`).
- **SEO & Acessibilidade:** Estruturação semântica, meta tags dinâmicas e navegação fluida.

---

## ✨ Funcionalidades

- 💼 **Mural de Vagas Integrado**: Listagem em tempo real de vagas abertas consultadas diretamente no banco STC via API interna (`/api/vagas`).
- 👥 **Banco de Talentos**: Redirecionamento dinâmico e integração com portal de cadastro de currículos (`/api/talentos`).
- 🌓 **Dark Mode / Light Mode**: Alternância suave de tema com persistência de preferência do usuário e detecção do sistema.
- 📱 **Layout Totalmente Responsivo**: Seção hero com composição adaptativa em 2 colunas para notebooks/monitores e empilhamento fluido em smartphones.
- 🚀 **Apresentação de Soluções e Projetos**: Páginas completas e dinâmicas detalhando cases, serviços prestados e história da NTL.
- 📞 **Canais de Contato Rápidos**: Integração direta com WhatsApp, formulário de contato, e-mail institucional e redes sociais.

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia | Descrição |
| :--- | :--- | :--- |
| **Framework Web** | [Nuxt 4](https://nuxt.com/) | SSR / SSG de alta performance com Nitro Engine |
| **Interface** | [Vue 3](https://vuejs.org/) + Composition API | Reatividade e componentização moderna |
| **Estilização** | [Tailwind CSS](https://tailwindcss.com/) | Design system utilitário com tokens customizados |
| **Tipagem** | [TypeScript](https://www.typescriptlang.org/) | Tipagem estática segura ponta a ponta |
| **Banco de Dados** | Microsoft SQL Server (`mssql` / `tedious`) | Conexão com banco STC para sincronização de vagas |
| **Gerenciador de Pacotes**| [pnpm](https://pnpm.io/) | Instalações rápidas e gerenciamento determinístico de dependências |

---

## 📂 Estrutura do Projeto

```text
siteNTL/
├── app/                      # Código-fonte da aplicação Nuxt
│   ├── assets/               # CSS global, fontes e imagens compiladas
│   ├── components/           # Componentes Vue reutilizáveis (Navbar, Footer, etc.)
│   ├── composables/          # Composables e lógica compartilhada
│   ├── layouts/              # Layouts base da aplicação
│   ├── pages/                # Rotas da aplicação (index, vagas, contato, projetos)
│   └── app.vue               # Componente raiz da aplicação
├── public/                   # Arquivos estáticos servidos diretamente (logos, imagens, ícones)
├── server/                   # Backend / Server Engine (Nitro)
│   ├── api/                  # Endpoints da API interna (/api/vagas, /api/talentos)
│   └── utils/                # Conexão de banco e helpers do servidor
├── .env.example              # Exemplo de configuração de variáveis de ambiente
├── nuxt.config.ts            # Configurações do ecossistema Nuxt
├── tailwind.config.js        # Configuração do Tailwind CSS e paleta de cores
└── package.json              # Dependências e scripts do projeto
```

---

## 🚀 Começando

### Pré-requisitos
- **Node.js** `>= 18.x` (recomendado Node 20 LTS ou superior)
- **pnpm** `>= 9.x`

### 1. Clonar o Repositório
```bash
git clone https://git.ntl.com.br/neeo-projetos/sitentl.git
cd sitentl
```

### 2. Instalar as Dependências
```bash
pnpm install
```

### 3. Configurar as Variáveis de Ambiente
Copie o arquivo `.env.example` para `.env` e preencha as credenciais necessárias:
```bash
cp .env.example .env
```

### 4. Executar em Modo de Desenvolvimento
```bash
pnpm dev
```
Acesse a aplicação em [http://localhost:3000](http://localhost:3000).

---

## 🔐 Variáveis de Ambiente

Configure as seguintes variáveis no arquivo `.env`:

```ini
# SQL Server - Banco STC
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_SERVER=ip_do_servidor
DB_PORT=1433
DB_NAME=nome_do_banco

# Nuxt App Configuration
NUXT_PUBLIC_SITE_URL=http://localhost:3000
NUXT_PUBLIC_SITE_NAME=NTL - Nova Tecnologia

# Contato Institucional
NUXT_PUBLIC_CONTACT_EMAIL=contato@ntl.com.br
NUXT_PUBLIC_CONTACT_PHONE=+552131507309
NUXT_PUBLIC_WHATSAPP=+5521993259808

# Redes Sociais
NUXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/company/ntl-nova-tecnologia-ltda./
NUXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/ntl_nova_tecnologia
NUXT_PUBLIC_FACEBOOK_URL=
```

---

## 📦 Build e Deploy

### Compilação para Produção
```bash
pnpm build
```

### Pré-visualização da Build
```bash
pnpm preview
```

### Executar a Build de Produção
```bash
node .output/server/index.mjs
```

---

## 👥 Contribuição & Equipe

1. Crie uma branch para sua funcionalidade (`git checkout -b feature/nova-funcionalidade`)
2. Realize o commit das suas alterações (`git commit -m 'feat: Adiciona nova funcionalidade'`)
3. Envie para o repositório remoto (`git push origin feature/nova-funcionalidade`)
4. Abra um **Merge Request** no GitLab para revisão

---

<div align="center">
  <sub>© 1988 - Presente • <b>NTL Nova Tecnologia Ltda.</b> Todos os direitos reservados.</sub>
</div>
