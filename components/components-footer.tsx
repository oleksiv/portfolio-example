'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export function FooterComponent() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">&copy; {new Date().getFullYear()} Sviatoslav Oleksiv. All rights reserved.</p>
          </div>
          <nav className="flex space-x-4">
            <Link href="#about" className="text-sm hover:underline">
              About
            </Link>
            <Link href="#projects" className="text-sm hover:underline">
              Projects
            </Link>
            <Link href="#contact" className="text-sm hover:underline">
              Contact
            </Link>
          </nav>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://github.com/oleksiv" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/oleksiv" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:sviatoslav.oleksiv@gmail.com" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}