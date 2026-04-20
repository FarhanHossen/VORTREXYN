import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Contact() {
  return (
    <section id="contact" className="py-32 relative border-t border-border overflow-hidden">
      {/* Decorative background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-t-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-primary font-mono text-sm mb-6">04. What's Next?</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Get In Touch</h2>
          
          <p className="text-muted-foreground mb-12 text-lg leading-relaxed">
            I'm currently open for new opportunities. Whether you have a question, 
            a project proposal, or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-10 h-14 font-mono text-lg mb-20"
            onClick={() => window.location.href = 'mailto:hello@example.com'}
          >
            Say Hello <Mail className="ml-3 h-5 w-5" />
          </Button>
          
          <div className="flex justify-center items-center gap-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter size={24} />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-xs font-mono text-muted-foreground/60">
          Designed & Built by Farhan Hossen
        </p>
      </div>
    </section>
  );
}
