// src/app/api/leads/route.ts
import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function POST(request: Request) {
  try {
    // Подключаемся к MongoDB
    const client = await clientPromise
    const db = client.db('crm')

    // Получаем данные из запроса
    const data = await request.json()

    // Создаем новую заявку
    const newLead = {
      ...data,
      status: 'new',
      createdAt: new Date(),
    }

    // Сохраняем в базу данных
    const result = await db.collection('leads').insertOne(newLead)

    if (!result.insertedId) {
      throw new Error('Failed to insert lead')
    }

    // Возвращаем успешный ответ
    return NextResponse.json({ 
      success: true, 
      leadId: result.insertedId 
    })

  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Failed to create lead' }, 
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db('crm')
    
    const leads = await db
      .collection('leads')
      .find({})
      .sort({ createdAt: -1 })
      .toArray()

    return NextResponse.json(leads)
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch leads' }, 
      { status: 500 }
    )
  }
}