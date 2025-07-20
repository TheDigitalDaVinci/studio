import { ContactForm } from '@/components/contact/contact-form';
import { Youtube, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
       <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-headline font-bold tracking-tighter text-foreground">Get In Touch</h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="bg-card/80 backdrop-blur-sm p-8 rounded-lg border border-border">
          <h2 className="text-3xl mb-6 font-headline font-semibold text-foreground">Send a Message</h2>
          <ContactForm />
        </div>
        <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-3xl font-headline font-semibold text-foreground">Contact Information</h3>
            <p className="text-muted-foreground">
                Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision.
            </p>
            <div className="space-y-4">
                <a href="mailto:mnidhinsivan@gmail.com" className="flex items-center gap-4 group">
                    <Mail className="h-6 w-6 text-primary"/>
                    <span className="text-lg text-muted-foreground group-hover:text-primary transition-colors">mnidhinsivan@gmail.com</span>
                </a>
                 <a href="tel:+919562708533" className="flex items-center gap-4 group">
                    <Phone className="h-6 w-6 text-primary"/>
                    <span className="text-lg text-muted-foreground group-hover:text-primary transition-colors">+91 9562708533</span>
                </a>
            </div>
             <div className="flex items-center gap-4 pt-4">
                <a href="https://www.youtube.com/@the.digital.davinci" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-colors group">
                    <Youtube className="h-6 w-6 text-muted-foreground group-hover:text-primary" />
                    <span className="sr-only">YouTube</span>
                </a>
                <a href="https://www.instagram.com/the.digital.davinci/" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-colors group">
                    <Instagram className="h-6 w-6 text-muted-foreground group-hover:text-primary" />
                    <span className="sr-only">Instagram</span>
                </a>
                <a href="https://www.linkedin.com/in/m-nidhin-sivan-5564221b2/" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-colors group">
                    <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary" />
                    <span className="sr-only">LinkedIn</span>
                </a>
            </div>
        </div>
      </div>
    </div>
  );
}
