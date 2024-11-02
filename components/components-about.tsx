'use client'

import Image from "next/image"

export default function AboutComponent() {
  return (
      <section id="about" className="py-10 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
                src="/avatar01.jpg"
                alt="Sviatoslav Oleksiv's portrait"
                width={300}
                height={300}
                className="rounded-full"
            />
            <div>
              <p className="text-lg mb-4">
                I&apos;m Sviatoslav Oleksiv, a Senior Full-Stack Developer based in Warsaw, Poland. With over 10 years of
                experience, I specialize in JavaScript, TypeScript, React, and Node.js, focusing on cloud-native
                solutions and SaaS projects.
              </p>
              <p className="text-lg">
                My expertise spans from front-end frameworks like Next.js and Angular to back-end technologies and cloud
                platforms (AWS, GCP). I&apos;m passionate about solving complex problems and creating user-friendly
                interfaces. When not coding, I work on AI-driven personal projects and contribute to the developer
                community on Stack Overflow and GitHub.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}