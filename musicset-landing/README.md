# MusicSet Landing Page

Landing page oficial da MusicSet - A plataforma que conecta músicos e transforma talentos em carreiras.

## 🎵 Sobre

Esta é a landing page institucional da MusicSet, desenvolvida com Next.js 14. A página apresenta:

- Hero section com animações sutis
- Seção de features/funcionalidades
- Carrossel da equipe com crachás customizados
- CTA final e footer

## 🚀 Tecnologias

- **Next.js 14** - React Framework
- **CSS Modules** - Estilização
- **DM Sans** - Tipografia (Google Fonts)

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Rodar em produção
npm start
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## 🎨 Branding

A landing page segue fielmente o Brand Guidelines da MusicSet:

**Cores:**
- Escuras: `#002310`, `#021E4C`, `#330404`, `#30002A`
- Vibrantes: `#C6EA2F`, `#00FFF1`, `#FF5C00`, `#FA3EFF`
- Neutras: `#F9F9F9`, `#070707`

**Tipografia:** DM Sans (Light, Regular, Bold)

## 📁 Estrutura do Projeto

```
musicset-landing/
├── public/
│   └── images/           # Assets (logos, fotos)
├── src/
│   ├── app/
│   │   ├── globals.css   # Estilos globais
│   │   ├── layout.jsx    # Layout raiz
│   │   └── page.jsx      # Página principal
│   └── components/
│       ├── Hero/         # Seção hero
│       ├── Features/     # Cards de funcionalidades
│       ├── TeamCarousel/ # Carrossel de equipe + Badge
│       └── Footer/       # Footer com CTA
└── package.json
```

## 👥 Equipe (Crachás)

Para atualizar os membros da equipe, edite o array `teamMembers` em:
`src/components/TeamCarousel/TeamCarousel.jsx`

Adicione fotos substituindo `photo: null` pelo caminho da imagem.

## 🌐 Deploy

### Vercel (Recomendado)

1. Faça push do código para GitHub
2. Importe o projeto no Vercel
3. Deploy automático!

```bash
# Ou via CLI
npm install -g vercel
vercel
```

## 📝 Customização

### Adicionar novo membro da equipe

Edite `src/components/TeamCarousel/TeamCarousel.jsx`:

```javascript
const teamMembers = [
  // ...membros existentes
  {
    name: 'Novo Nome',
    role: 'Novo Cargo',
    photo: '/images/foto.jpg', // ou null para placeholder
    color: 'lime' // lime, cyan, orange, magenta
  }
]
```

### Trocar cores

Edite as variáveis CSS em `src/app/globals.css`:

```css
:root {
  --color-lime: #C6EA2F;
  /* ... outras cores */
}
```

## 📄 Licença

© 2025 MusicSet. Todos os direitos reservados.

---

**Viver da música não é sorte. É direito.** 🎸
