// src/app/api/leads/route.ts
import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db('crm')
    const leads = await db.collection('leads').find({}).toArray()
    return NextResponse.json(leads)
  } catch (error) {
    console.error('Database Error:', error)
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const client = await clientPromise
    const db = client.db('crm')
    
    const result = await db.collection('leads').insertOne({
      ...data,
      status: 'new',
      createdAt: new Date()
    })

    return NextResponse.json({ success: true, id: result.insertedId })
  } catch (error) {
    console.error('Database Error:', error)
    return NextResponse.json({ error: 'Failed to create lead' }, { status: 500 })
  }
}