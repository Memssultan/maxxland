// src/app/api/auth/login/route.ts
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json()

    console.log('Attempting login with:', { username, password })
    console.log('Environment variables:', {
      envUsername: process.env.NEXT_PUBLIC_ADMIN_USERNAME,
      envPassword: process.env.NEXT_PUBLIC_ADMIN_PASSWORD
    })

    // Проверяем учетные данные
    if (
      username === process.env.NEXT_PUBLIC_ADMIN_USERNAME && 
      password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD
    ) {
      console.log('Login successful')
      return NextResponse.json({ success: true })
    }

    console.log('Login failed: invalid credentials')
    return NextResponse.json({ 
      success: false, 
      message: 'Неверные учетные данные'
    }, { status: 401 })

  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ 
      success: false, 
      message: 'Ошибка сервера при попытке входа' 
    }, { status: 500 })
  }
}