'use client'

import * as React from "react"
import Link from "next/link"
import { Menu, X, MapPin } from "lucide-react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

export function ImprovedNavigation() {
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsOpen(false)
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    closed: {
      x: -20,
      opacity: 0,
      transition: {
        duration: 0.2
      }
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  }

  const navItems = [
    { id: 'about', label: 'О нас' },
    { id: 'brands', label: 'Бренды' },
    { id: 'contacts', label: 'Контакты' }
  ]

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <Link href="/" className="flex items-center justify-start gap-6 py-3 px-3">
        {/* Add Logo */}
      </Link>

      <div className="hidden lg:block">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-2">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.id}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} font-playfair`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </motion.div>
              </NavigationMenuItem>
            ))}

            <NavigationMenuItem>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="https://wa.me/77717689949"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    variant="ghost"
                    className="hover:bg-gray-100 text-[#25D366] rounded-full px-6 border-none shadow-none transition-colors duration-300  font-playfair"
                  >
                    WhatsApp
                  </Button>
                </Link>
              </motion.div>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="https://www.instagram.com/maxxfine?igsh=amM3cGRhYTMxOTNt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    variant="ghost"
                    className="hover:bg-gray-100 text-[#E4405F] rounded-full px-6 border-none shadow-none transition-colors duration-300 font-playfair"
                  >
                    Instagram
                  </Button>
                </Link>
              </motion.div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center gap-2 lg:hidden">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center"
        >
          <Link
            href="https://2gis.kz/astana/geo/71.4334,51.11087"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-red-500 hover:text-red-600 transition-colors duration-300  font-playfair"
          >
            <MapPin className="h-4 w-4 mr-1" />
            Астана
          </Link>
          <div className="w-px h-4 bg-gray-200 mx-2" />
          <Link
            href="https://2gis.kz/almaty/geo/76.91278,43.20576"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-red-500 hover:text-red-600 transition-colors duration-300  font-playfair"
          >
            <MapPin className="h-4 w-4 mr-1" />
            Алматы
          </Link>
        </motion.div>

        <div className="w-px h-4 bg-gray-200 mx-2" />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.div>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="lg:hidden absolute top-14 left-0 w-full bg-white shadow-lg z-50 overflow-hidden"
          >
            <motion.nav className="flex flex-col p-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  variants={itemVariants}
                  className="py-2 text-left hover:bg-gray-100 rounded-md px-3 transition-colors duration-300  font-playfair"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </motion.button>
              ))}

              <div className="mt-4 space-y-2">
                <motion.div variants={itemVariants}>
                  <Link 
                    href="https://wa.me/77717689949"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    onClick={() => setIsOpen(false)}
                  >
                    <Button 
                      variant="ghost"
                      className="w-full hover:bg-gray-100 text-[#25D366] flex items-center gap-2 justify-start px-3 transition-colors duration-300 font-playfair"
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      WhatsApp
                    </Button>
                  </Link>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Link 
                    href="https://www.instagram.com/maxxfine?igsh=amM3cGRhYTMxOTNt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    onClick={() => setIsOpen(false)}
                  >
                    <Button 
                      variant="ghost"
                      className="w-full hover:bg-gray-100 text-pink-500 flex items-center gap-2 justify-start px-3 transition-colors duration-300  font-playfair"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                        <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      Instagram
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default ImprovedNavigation