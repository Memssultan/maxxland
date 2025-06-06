// components/contact-form.tsx
'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    setSuccess(false)

    try {
      console.log('Отправка данных:', formData)

      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          createdAt: new Date().toISOString()
        })
      })

      console.log('Статус ответа:', response.status)
      const data = await response.json()
      console.log('Ответ сервера:', data)

      if (!response.ok) {
        throw new Error(data.error || 'Error submitting form')
      }

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
      setSuccess(true)
      setTimeout(() => setSuccess(false), 3000)

    } catch (error: any) {
      console.error('Детали ошибки:', error)
      setError(`Ошибка: ${error.message || 'Неизвестная ошибка'}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-playfair mb-6">Оставить заявку</h2>

      {error && (
        <div className="mb-4 p-4 bg-red-50 text-red-600 rounded">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-4 p-4 bg-green-50 text-green-600 rounded">
          Заявка успешно отправлена!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-playfair text-gray-700 mb-1">
            Ваше имя *
          </label>
          <Input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label className="block text-sm font-playfair text-gray-700 mb-1">
            Email *
          </label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label className="block text-sm font-playfair text-gray-700 mb-1">
            Телефон *
          </label>
          <Input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label className="block text-sm font-playfair text-gray-700 mb-1">
            Сообщение
          </label>
          <Textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            disabled={isSubmitting}
          />
        </div>

        <Button 
          type="submit" 
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Отправка...' : 'Отправить'}
        </Button>
      </form>

      {/* Отладочная информация */}
      {process.env.NODE_ENV === 'development' && (
        <div className="mt-4 p-4 bg-gray-100 rounded text-xs">
          <p>MongoDB URI: {process.env.MONGODB_URI ? 'Настроен' : 'Не настроен'}</p>
        </div>
      )}
    </div>
  )
}