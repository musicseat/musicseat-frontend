
## 📋 Pré-requisitos

- Node.js 20+ instalado
- npm ou yarn
- Navegador moderno (Chrome, Firefox, Edge, Safari)

## 🚀 Instalação e Configuração

### 1. Instalar Dependências

```bash
npm install
```

### 2. Iniciar o Servidor de Desenvolvimento

```bash
npm run dev
```

O servidor estará disponível em: **http://localhost:3000**

### 3. Verificar MSW (Mock Service Worker)

Após iniciar o servidor, abra o navegador e:

1. Acesse: `http://localhost:3000/test-msw`
2. Abra o DevTools Console (F12)
3. Procure pela mensagem: `[MSW] Service worker started successfully`
4. Se aparecer ✅, o MSW está funcionando corretamente

## 📱 Páginas Disponíveis

### Feed Principal
- **URL**: `http://localhost:3000/feed`
- **Descrição**: Página principal com feed de posts, navegação lateral, stories, amigos e chat
- **Funcionalidades**:
  - Criar posts
  - Curtir posts
  - Comentar em posts
  - Compartilhar posts

### Perfil de Usuário
- **URL**: `http://localhost:3000/profile/1`
- **Descrição**: Página de perfil com informações do usuário e seus posts
- **Funcionalidades**:
  - Visualizar informações do usuário
  - Ver posts do usuário
  - Alternar entre abas "Posts" e "Compartilhados"

### Teste MSW
- **URL**: `http://localhost:3000/test-msw`
- **Descrição**: Página de diagnóstico para verificar se o MSW está interceptando requisições

## 🎨 Design System

O projeto utiliza um design system customizado definido em `src/app/globals.css`:

### Cores Principais
- **Background**: `var(--color-neutral-800)` - Fundo escuro
- **Cards**: `var(--color-neutral-700)` - Cartões
- **Primary Cyan**: `var(--color-primary-cyan)` - Ações principais
- **Primary Pink**: `var(--color-primary-pink)` - Curtidas
- **Primary Orange**: `var(--color-primary-orange)` - Destaques
- **Primary Lime**: `var(--color-primary-lime)` - Status online

### Componentes CSS
- `.card` - Cartões com sombra e bordas arredondadas
- `.btn` - Botões com variantes (primary-cyan, primary-orange, etc.)
- `.input` - Campos de entrada
- `.textarea` - Áreas de texto

## 🛠️ Tecnologias Utilizadas

- **Next.js 16** - Framework React com App Router
- **React 19** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Estilização
- **Axios** - Cliente HTTP
- **MSW (Mock Service Worker)** - Simulação de API
- **Lucide React** - Ícones

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── (pages)/
│   │   ├── (private)/
│   │   │   ├── feed/          # Página do feed
│   │   │   └── profile/       # Página de perfil
│   │   └── (public)/
│   │       └── test-msw/      # Página de teste MSW
│   ├── layout.tsx             # Layout raiz com MSW
│   └── globals.css            # Design system
├── components/
│   ├── feed/                  # Componentes do feed
│   │   ├── Post.tsx           # Componente de post
│   │   ├── PostCreator.tsx    # Criador de posts
│   │   ├── Stories.tsx        # Stories
│   │   ├── FriendsList.tsx    # Lista de amigos
│   │   └── ChatPreview.tsx    # Preview do chat
│   ├── layout/                # Componentes de layout
│   │   ├── LeftSidebar.tsx    # Barra lateral esquerda
│   │   └── RightSidebar.tsx   # Barra lateral direita
│   ├── providers/
│   │   └── MSWProvider.tsx    # Provider do MSW
│   └── ui/                    # Componentes base
│       ├── Avatar.tsx
│       ├── Button.tsx
│       ├── Input.tsx
│       └── Textarea.tsx
├── mocks/
│   ├── handlers.ts            # Handlers MSW com dados mock
│   └── browser.ts             # Setup do MSW
├── services/
│   └── api.ts                 # Funções de API
├── types/
│   └── index.ts               # Tipos TypeScript
└── utils/
    └── axios.ts               # Configuração Axios
```
