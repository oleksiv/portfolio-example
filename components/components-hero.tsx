import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroComponent() {
  return (
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-2">
            Sviatoslav Oleksiv
          </h1>
          <h2 className="text-3xl font-semibold mb-6">
            Full-Stack Developer
          </h2>
          <p className="text-xl mb-8">
            Crafting robust and scalable web applications with modern technologies.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>
        </div>
      </section>
  )
}