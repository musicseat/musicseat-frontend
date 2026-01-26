import './globals.css'

export const metadata = {
  title: 'MusicSet - Viver da música não é sorte. É direito.',
  description: 'A plataforma que conecta músicos, transforma talentos em carreiras e redefine o acesso à música como trabalho.',
  keywords: 'música, músicos, carreira musical, rede de músicos, plataforma musical',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
