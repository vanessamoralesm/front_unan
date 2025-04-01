import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const linksHeader = [
  { name: 'Inicio', href: '/' },
  { name: 'Maestros', href: '/maestros' },
  { name: 'Proyectos', href: '/proyectos' },
  { name: 'Eventos', href: '/eventos' },
  { name: 'Contactos', href: '/contactos' },
]

