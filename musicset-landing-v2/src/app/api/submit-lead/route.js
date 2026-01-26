import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { name, email } = await request.json()

    // Validação
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Nome e email são obrigatórios' },
        { status: 400 }
      )
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // URL do Google Apps Script Web App
    // VOCÊ VAI SUBSTITUIR ISSO PELA SUA URL
    const scriptURL = process.env.GOOGLE_SCRIPT_URL

    if (!scriptURL) {
      console.error('GOOGLE_SCRIPT_URL not configured')
      return NextResponse.json(
        { error: 'Configuração incorreta do servidor' },
        { status: 500 }
      )
    }

    // Enviar para Google Sheets via Apps Script
    const response = await fetch(scriptURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        timestamp: new Date().toISOString(),
        source: 'landing-page'
      })
    })

    if (!response.ok) {
      throw new Error('Falha ao enviar para Google Sheets')
    }

    return NextResponse.json({ 
      success: true,
      message: 'Lead cadastrado com sucesso!' 
    })

  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
