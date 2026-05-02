import { motion } from 'framer-motion';
import { ExternalLink, Github, Plus } from 'lucide-react';
import gro from '../assets/images/grocery.jpg';
import curd from '../assets/images/curd.jpg';
import auth from '../assets/images/auth.jpg';
import travel from '../assets/images/travel.jpg';
import edusity from '../assets/images/edusity.jpg';
import clothing from '../assets/images/clothing.jpg';
import smartBi from '../assets/images/smartBi.png';
const PROJECTS = [
  {
    title: 'SmartBI Business Intelligence Tool',
    category: 'Business Analytics',
    demo: 'https://smartbi-one.vercel.app/',
    github: '#',
    image: smartBi,
    imageColor: 'from-rose-500 to-red-800',
    tags: ['React', 'Node.js', 'Express.js', 'Context API', 'Mongodb', 'python', 'Stripe']
  },
  {
    title: 'Grocery Application',
    category: 'Full Stack App',
    demo: 'https://groceryapp-opal.vercel.app',
    github: '#',
    image: gro,
    imageColor: 'from-green-500 to-emerald-700',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS']
  },
  {
    title: 'CRUD Application',
    category: 'Web Tool',
    demo: 'https://curd-operation-eight.vercel.app',
    github: '#',
    image: curd,
    imageColor: 'from-blue-500 to-indigo-700',
    tags: ['React', 'Express', 'API', 'CSS']
  },
  {
    title: 'Authentication System',
    category: 'Security & Auth',
    demo: 'https://mern-auth-peach.vercel.app',
    github: '#',
    image: auth,
    imageColor: 'from-purple-500 to-pink-700',
    tags: ['MERN', 'JWT', 'Bcrypt']
  },
  {
    title: 'Travel Companion App',
    category: 'React Project',
    demo: 'https://react-travel-project-k7qj.vercel.app',
    github: '#',
    image: travel,
    imageColor: 'from-orange-500 to-red-700',
    tags: ['React', 'Tailwind']
  },
  {
    title: 'Edusity Learning Platform',
    category: 'EdTech',
    demo: 'https://edusity-react-project-ecru.vercel.app',
    github: '#',
    image: edusity,
    imageColor: 'from-teal-500 to-cyan-700',
    tags: ['React', 'Vite']
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-indigo-400 tracking-wide uppercase mb-2">Portfolio</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">Featured Projects</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A selection of my recent work showcasing full-stack development, UI design, and problem-solving skills across various domains.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-indigo-500/50 transition-colors"
    >
      {/* Image Container */}
      <div className="h-48 w-full relative overflow-hidden">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${project.imageColor}`}>
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent mix-blend-overlay" />
          </div>
        )}
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6">
        <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider block mb-2">
          {project.category}
        </span>
        <h4 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
          {project.title}
        </h4>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-slate-900 text-slate-300 text-xs font-medium rounded-md border border-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
