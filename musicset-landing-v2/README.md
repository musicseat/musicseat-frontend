# 🎸 MusicSet Landing Page V2

Landing page moderna e elegante da MusicSet com captação de leads integrada ao Google Sheets.

## ✨ Features

- 🎨 **Design Moderno** - Inspirado em Stripe + Rocketseat + BairesDev
- 🎭 **Animações Suaves** - Framer Motion + CSS animations
- 📱 **Totalmente Responsivo** - Mobile-first design
- 📊 **Google Sheets Integration** - Captação automática de leads
- ⚡ **Performance** - Next.js 14 com otimizações
- 🌈 **Cores MusicSet** - Fiel ao Brand Guidelines

## 🎯 Componentes

### Header
- Fixed com glassmorphism
- Efeito de scroll
- Logo + navegação

### Hero Section
- Formulário de captação de leads
- Gradientes animados (orbs)
- Validação em tempo real
- Feedback visual de sucesso/erro

### Manifesto
- 3 blocos com imagens alternadas
- Scroll reveal animations
- Hover effects nas imagens
- Layout BairesDev style

### Features
- 3 cards com glassmorphism
- Glow effects ao hover
- Ícones animados
- Gradientes decorativos

### Footer
- Links sociais
- Copyright dinâmico
- Design minimalista

## 🚀 Instalação

```bash
# Clone ou extraia o projeto
cd musicset-landing-v2

# Instale as dependências
npm install

# Configure o Google Sheets (ver tutorial)
cp .env.example .env.local
# Edite .env.local com sua URL do Google Script

# Rode em desenvolvimento
npm run dev
```

Acesse: http://localhost:3000

## 📊 Configurar Google Sheets API

**Veja o tutorial completo em: `TUTORIAL_GOOGLE_SHEETS.md`**

Resumo:
1. Criar planilha no Google Sheets
2. Criar Apps Script com o código fornecido
3. Publicar como Web App
4. Copiar URL e colocar no `.env.local`

## 🎨 Paleta de Cores

```css
--lime: #C6EA2F
--cyan: #00FFF1
--orange: #FF5C00
--magenta: #FA3EFF

--dark-green: #002310
--dark-blue: #021E4C
--dark-red: #330404
--dark-purple: #30002A
```

## 📁 Estrutura

```
musicset-landing-v2/
├── public/
│   └── images/           # Assets (logos, fotos)
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── submit-lead/   # API route para Google Sheets
│   │   ├── globals.css        # Estilos globais
│   │   ├── layout.jsx         # Layout raiz
│   │   └── page.jsx           # Página principal
│   └── components/
│       ├── Header/      # Header fixo
│       ├── Hero/        # Hero + Form de leads
│       ├── Manifesto/   # Seção com imagens
│       ├── Features/    # Cards de funcionalidades
│       └── Footer/      # Footer
├── .env.example         # Template de variáveis
├── TUTORIAL_GOOGLE_SHEETS.md  # Tutorial completo
└── package.json
```

## 🌐 Deploy no Vercel

### Via GitHub (Recomendado)

```bash
# 1. Criar repo
git init
git add .
git commit -m "feat: MusicSet landing v2"
git branch -M main
git remote add origin https://github.com/SEU_USER/musicset-landing.git
git push -u origin main

# 2. Importar no Vercel
# - Vá em vercel.com
# - Import repository
# - Add environment variable: GOOGLE_SCRIPT_URL
# - Deploy!
```

### Via CLI

```bash
npm install -g vercel
vercel
# Siga as instruções
# Adicione GOOGLE_SCRIPT_URL nas variáveis de ambiente
```

## 🎭 Animações

Todas as animações seguem princípios de UX:
- **Smooth** - Cubic-bezier easing
- **Performant** - Transform e opacity apenas
- **Accessible** - Respeitam prefers-reduced-motion
- **Subtle** - Não distraem do conteúdo

## 📝 Customização

### Adicionar novo campo no formulário

1. Edite `Hero/Hero.jsx`:
```javascript
const [formData, setFormData] = useState({ 
  name: '', 
  email: '',
  telefone: ''  // novo campo
})
```

2. Adicione input no JSX

3. Atualize o Apps Script para incluir o campo

### Trocar imagens

Substitua as imagens em `public/images/` e atualize os imports nos componentes.

### Mudar cores

Edite `globals.css`:
```css
:root {
  --lime: SUA_COR;
  /* ... */
}
```

## 🐛 Troubleshooting

### Form não envia
- Verifique se `.env.local` existe e tem a URL correta
- Teste a URL do Google Script no navegador
- Veja os logs do console

### Animações não funcionam
- Verifique se `framer-motion` está instalado
- Limpe o cache: `rm -rf .next && npm run dev`

### Imagens não carregam
- Certifique-se que estão em `public/images/`
- Verifique os nomes dos arquivos (case-sensitive)
- Reinicie o servidor

## 📄 Licença

© 2025 MusicSet. Todos os direitos reservados.

---

**Viver da música não é sorte. É direito.** 🎵
