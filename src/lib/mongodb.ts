// src/lib/mongodb.ts
import { MongoClient } from 'mongodb'

if (!process.env.MONGODB_URI) {
  // В режиме разработки используем фиктивные данные
  if (process.env.NODE_ENV === 'development') {
    console.warn('No MONGODB_URI found. Using mock data.')
  } else {
    throw new Error('Please add your Mongo URI to environment variables')
  }
}

const uri = process.env.MONGODB_URI || ''
const options = {}

let client
let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV === 'development') {
  // В режиме разработки используем глобальную переменную
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>
  }
  
  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options)
    globalWithMongo._mongoClientPromise = client.connect()
  }
  clientPromise = globalWithMongo._mongoClientPromise
} else {
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise