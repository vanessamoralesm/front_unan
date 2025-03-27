import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const linksHeader = [
  { name: 'Inicio', href: '#' },
  { name: 'Maestros', href: '#' },
  { name: 'Proyectos', href: '#' },
  { name: 'Eventos', href: '#' },
  { name: 'Contactos', href: '#' },
]