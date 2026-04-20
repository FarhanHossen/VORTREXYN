import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Contact() {
  return (
    <section id="contact" className="py-32 relative border-t border-border overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-t-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-primary font-mono text-sm mb-6">05. What's Next?</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Get In Touch</h2>
          
          <p className="text-muted-foreground mb-12 text-lg leading-relaxed">
            I'm currently open to new opportunities in software development. 
            Whether you have a role in mind, a project idea, or just want to connect, 
            I'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-sm font-mono text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin size={15} className="text-primary" />
              <span>Sydney, NSW, Australia</span>
            </div>
            <div className="hidden sm:block h-4 w-[1px] bg-border" />
            <div className="flex items-center gap-2">
              <Phone size={15} className="text-primary" />
              <span>+61 416 279 264</span>
            </div>
            <div className="hidden sm:block h-4 w-[1px] bg-border" />
            <div className="flex items-center gap-2">
              <span>Work Rights: Full Time</span>
            </div>
          </div>
          
          <Button 
            size="lg" 
            data-testid="button-email"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-10 h-14 font-mono text-lg mb-20"
            onClick={() => window.location.href = 'mailto:farhan141549@gmail.com'}
          >
            Say Hello <Mail className="ml-3 h-5 w-5" />
          </Button>
          
          <div className="flex justify-center items-center gap-8">
            <a href="#" data-testid="link-github" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" data-testid="link-linkedin" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-xs font-mono text-muted-foreground/60">
          Designed &amp; Built by Farhan Hossen
        </p>
      </div>
    </section>
  );
}
