'use client'

import * as React from "react"
import Link from "next/link"
import { MountainIcon } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const categories = [
  {
    title: "Керамогранит",
    href: "/ceramics",
    description: "Широкий выбор керамогранита для пола и стен",
  },
  {
    title: "Мебель для ванной",
    href: "/bathroom-furniture",
    description: "Стильная и функциональная мебель для вашей ванной комнаты",
  },
  {
    title: "Кухонная мебель",
    href: "/kitchen-furniture",
    description: "Современная мебель для вашей кухни",
  },
]

export function ImprovedNavigation() {
  const scrollToContacts = () => {
    const contactsSection = document.getElementById('contacts')
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link href="/" className="flex items-center justify-center mr-6">
        <MountainIcon className="h-6 w-6 mr-2" />
        <span className="font-bold text-xl">MaxxFine</span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Категории</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {categories.map((category) => (
                  <li key={category.title}>
                    <NavigationMenuLink asChild>
                      <a
                        href={category.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{category.title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {category.description}
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={scrollToAbout}>
              О нас
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={scrollToContacts}>
              Контакты
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}