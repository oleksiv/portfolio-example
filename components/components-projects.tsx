'use client'

import Image from "next/image"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge";

const projects = [
    {
        title: "E-commerce Platform",
        description: "A full-stack e-commerce solution with real-time inventory management.",
        image: "/placeholder.svg",
        technologies: ["React", "Node.js", "MongoDB", "Socket.io"]
    },
    {
        title: "Task Management App",
        description: "A collaborative task management tool with real-time updates.",
        image: "/placeholder.svg",
        technologies: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets"]
    },
    {
        title: "Weather Dashboard",
        description: "A responsive weather dashboard with data visualization.",
        image: "/placeholder.svg",
        technologies: ["React", "D3.js", "OpenWeatherMap API", "Tailwind CSS"]
    },
]

export default function ProjectsComponent() {
    return (
        <section id="projects" className="py-10 px-6 lg:px-8 bg-background">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Recent Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <Card key={project.title} className="overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <Badge key={tech} variant="secondary">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}