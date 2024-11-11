// src/app/api/leads/route.ts
import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'
import { v4 as uuidv4 } from 'uuid'

// Путь к файлу с данными
const dataFile = path.join(process.cwd(), 'data', 'leads.json')

// Создаем директорию, если её нет
async function ensureDirectoryExists() {
  const dir = path.join(process.cwd(), 'data')
  try {
    await fs.access(dir)
  } catch {
    await fs.mkdir(dir)
  }
}

// Читаем данные
async function readLeads() {
  try {
    await ensureDirectoryExists()
    const data = await fs.readFile(dataFile, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

// Сохраняем данные
async function writeLeads(leads: any[]) {
  await ensureDirectoryExists()
  await fs.writeFile(dataFile, JSON.stringify(leads, null, 2))
}

// GET /api/leads - получить все заявки
export async function GET() {
  try {
    const leads = await readLeads()
    return NextResponse.json(leads)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 })
  }
}

// POST /api/leads - создать новую заявку
export async function POST(request: Request) {
  try {
    const data = await request.json()
    const leads = await readLeads()

    const newLead = {
      id: uuidv4(),
      ...data,
      status: 'new',
      createdAt: new Date().toISOString()
    }

    leads.push(newLead)
    await writeLeads(leads)

    return NextResponse.json(newLead)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create lead' }, { status: 500 })
  }
}

// src/app/api/leads/[id]/route.ts
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    const data = await request.json()
    const leads = await readLeads()

    const updatedLeads = leads.map((lead: any) =>
      lead.id === id ? { ...lead, ...data } : lead
    )

    await writeLeads(updatedLeads)
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update lead' }, { status: 500 })
  }
}