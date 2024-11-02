'use client'

import {FormEvent, useState} from 'react'
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Label} from "@/components/ui/label"
import {Mail, MapPin, Phone} from 'lucide-react'
import {useToast} from "@/hooks/use-toast";

export default function ContactComponent() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const {toast} = useToast()

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000))

        toast({
            title: "Message sent!",
            description: "Thank you for your message. I&apos;ll get back to you soon.",
        })

        setIsSubmitting(false)
        event.currentTarget.reset()
    }

    return (
        <section id="contact" className="py-10 px-6 lg:px-8 bg-gradient-to-b from-background to-secondary">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Contact Information</CardTitle>
                            <CardDescription>Feel free to reach out through any of these channels</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <Mail className="text-primary"/>
                                <span>sviatoslav.oleksiv@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="text-primary"/>
                                <span>+48 730 245 488</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MapPin className="text-primary"/>
                                <span>Warsaw, Poland</span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Send a Message</CardTitle>
                            <CardDescription>I&apos;ll get back to you as soon as possible</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" name="name" required/>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" name="email" type="email" required/>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea id="message" name="message" required/>
                                </div>
                                <Button type="submit" className="w-full" disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}