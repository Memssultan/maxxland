// src/app/admin/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const ADMIN_USERNAME = 'Memssultan'
const ADMIN_PASSWORD = '123456'

interface Lead {
  _id: string
  name: string
  email: string
  phone: string
  message: string
  status: 'new' | 'inProgress' | 'completed'
  createdAt: string
}

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [leads, setLeads] = useState<Lead[]>([])
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Функция для загрузки заявок
  const fetchLeads = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/leads')
      if (!response.ok) throw new Error('Failed to fetch leads')
      const data = await response.json()
      setLeads(data)
    } catch (error) {
      console.error('Error fetching leads:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // Загружаем заявки при входе и обновляем каждые 30 секунд
  useEffect(() => {
    if (isLoggedIn) {
      fetchLeads()
      const interval = setInterval(fetchLeads, 30000)
      return () => clearInterval(interval)
    }
  }, [isLoggedIn])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.username === ADMIN_USERNAME && formData.password === ADMIN_PASSWORD) {
      setIsLoggedIn(true)
      localStorage.setItem('admin_auth', 'true')
    } else {
      setError('Неверное имя пользователя или пароль')
    }
  }

  const handleStatusChange = async (leadId: string, newStatus: Lead['status']) => {
    try {
      const response = await fetch(`/api/leads/${leadId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus })
      })

      if (!response.ok) throw new Error('Failed to update status')
      
      // Обновляем список заявок
      fetchLeads()
    } catch (error) {
      console.error('Error updating lead status:', error)
      alert('Ошибка при обновлении статуса')
    }
  }

  const getStatusColor = (status: Lead['status']) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800'
      case 'inProgress': return 'bg-yellow-100 text-yellow-800'
      case 'completed': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('ru-RU', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date)
  }

  if (isLoggedIn) {
    return (
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold">Админ-панель</h1>
              {isLoading && <p className="text-sm text-gray-500">Загрузка данных...</p>}
            </div>
            <div className="flex gap-4">
              <Button 
                onClick={fetchLeads}
                variant="outline"
              >
                Обновить
              </Button>
              <Button 
                onClick={() => {
                  setIsLoggedIn(false)
                  localStorage.removeItem('admin_auth')
                }}
                variant="destructive"
              >
                Выйти
              </Button>
            </div>
          </div>
          
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">
              Заявки 
              {leads.length > 0 && <span className="text-sm text-gray-500 ml-2">({leads.length})</span>}
            </h2>
            {leads.length === 0 ? (
              <div className="text-center py-12">
                {isLoading ? (
                  <p className="text-gray-500">Загрузка заявок...</p>
                ) : (
                  <p className="text-gray-500">Список заявок пока пуст</p>
                )}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Дата
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Имя
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Контакты
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Сообщение
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Статус
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {leads.map((lead) => (
                      <tr key={lead._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDate(lead.createdAt)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">{lead.name}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">{lead.email}</div>
                          <div className="text-sm text-gray-500">{lead.phone}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900 max-w-md break-words">
                            {lead.message}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <select
                            value={lead.status}
                            onChange={(e) => handleStatusChange(lead._id, e.target.value as Lead['status'])}
                            className={`text-sm rounded-full px-3 py-1 font-semibold ${getStatusColor(lead.status)}`}
                          >
                            <option value="new">Новая</option>
                            <option value="inProgress">В работе</option>
                            <option value="completed">Завершена</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-8">
          Вход в админ-панель
        </h2>

        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Имя пользователя
            </label>
            <Input
              type="text"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              required
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Пароль
            </label>
            <Input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              className="w-full"
            />
          </div>

          <Button type="submit" className="w-full">
            Войти
          </Button>
        </form>
      </div>
    </div>
  )
}