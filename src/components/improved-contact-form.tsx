import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ImprovedContactForm() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Свяжитесь с нами</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              У вас есть вопросы? Оставьте свои контактные данные, и мы свяжемся с вами в ближайшее время.
            </p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[550px] space-y-4 mt-8">
          <form className="grid gap-4">
            <Input placeholder="Имя" type="text" required />
            <Input placeholder="Email" type="email" required />
            <Input placeholder="Телефон" type="tel" />
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Выберите тему обращения" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">Общий вопрос</SelectItem>
                <SelectItem value="order">Вопрос по заказу</SelectItem>
                <SelectItem value="product">Вопрос по товару</SelectItem>
                <SelectItem value="complaint">Жалоба</SelectItem>
              </SelectContent>
            </Select>
            <Textarea placeholder="Сообщение" required />
            <Button type="submit" className="w-full">Отправить</Button>
          </form>
        </div>
      </div>
    </section>
  )
}