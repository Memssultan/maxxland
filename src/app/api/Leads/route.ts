// src/app/api/leads/route.ts
import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import { ObjectId } from 'mongodb'

// GET - получение всех заявок
export async function GET() {
  try {
    console.log('Fetching leads from MongoDB...')
    const client = await clientPromise
    const db = client.db('crm') // Используем базу данных 'crm'
    
    const leads = await db
      .collection('leads')
      .find({})
      .sort({ createdAt: -1 }) // Сортировка по дате (новые сверху)
      .toArray()
    
    console.log(`Found ${leads.length} leads`)
    return NextResponse.json(leads)
  } catch (error) {
    console.error('Database Error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch leads' }, 
      { status: 500 }
    )
  }
}

// POST - создание новой заявки
export async function POST(request: Request) {
  try {
    console.log('Creating new lead...')
    const data = await request.json()
    const client = await clientPromise
    const db = client.db('crm')

    const newLead = {
      ...data,
      status: 'new',
      createdAt: new Date(),
      _id: new ObjectId()
    }

    const result = await db.collection('leads').insertOne(newLead)
    console.log('Lead created:', result.insertedId)

    return NextResponse.json({
      success: true,
      id: result.insertedId,
      lead: newLead
    })
  } catch (error) {
    console.error('Database Error:', error)
    return NextResponse.json(
      { error: 'Failed to create lead' },
      { status: 500 }
    )
  }
}