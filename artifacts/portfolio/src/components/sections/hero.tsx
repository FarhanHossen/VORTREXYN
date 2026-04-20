import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="home" className="min-h-[100dvh] flex items-center pt-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-primary font-mono text-sm mb-6"
          >
            <Terminal size={16} />
            <span>Hello, World.</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            I'm <span className="text-foreground">Farhan Hossen.</span><br />
            <span className="text-muted-foreground">Software Developer.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            I build precise, performant, and scalable digital experiences. 
            Focused on crafting high-end developer tools and sophisticated web applications 
            where architecture meets aesthetics.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button 
              size="lg" 
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 font-mono"
            >
              View Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="rounded-none px-8 font-mono border-border hover:bg-secondary"
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
