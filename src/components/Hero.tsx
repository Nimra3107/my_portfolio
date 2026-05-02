import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
// import Nimra1 from '../../assets/images/Nimra1.jpeg';
import Nimra2 from '../assets/images/Nimra7.png';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-sm font-medium text-slate-300">
              Available for work
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">
              Nimra Naveed
            </span>
          </h1>

          <h2 className="text-2xl lg:text-3xl font-medium text-slate-300 mb-6">
            MERN Stack Developer & UI Designer
          </h2>

          <p className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed">
            I build elegant, scalable, and user-friendly web experiences.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
            >
              View My Work
              <ArrowRight size={18} />
            </a>

            <div className="flex items-center gap-4 ml-4">
              <SocialLink href="https://github.com/Nimra3107" icon={<Github size={20} />} />
              <SocialLink href="https://www.linkedin.com/in/nimra-naveed-4650b9376?utm_source=share_via&utm_content=profile&utm_medium=member_android" icon={<Linkedin size={20} />} />
              <SocialLink href="mailto:nimranaveed351@gmail.com" icon={<Mail size={20} />} />
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:ml-auto"
        >
          <div className="relative w-72 h-72 lg:w-96 lg:h-96 mx-auto">
            
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 to-teal-400 blur-2xl opacity-20 animate-pulse" />

            {/* IMAGE */}
            <div className="relative w-full h-full rounded-full border-2 border-slate-800 overflow-hidden">
              <img
                src={Nimra2}
                alt="Nimra Ahmed"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
    >
      {icon}
    </a>
  );
}