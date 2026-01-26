import './globals.css'

export const metadata = {
  title: 'MusicSet - Viver da música não é sorte. É direito.',
  description: 'Conecte-se com músicos, profissionalize sua carreira e transforme seu talento em renda. A plataforma que redefine o acesso à música como trabalho no Brasil.',
  keywords: 'música, músicos, carreira musical, networking musical, plataforma musical, músicos brasileiros, viver de música',
  authors: [{ name: 'MusicSet' }],
  icons: {
    icon: '/images/ICON009.png',
    shortcut: '/images/ICON009.png',
    apple: '/images/ICON009.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
