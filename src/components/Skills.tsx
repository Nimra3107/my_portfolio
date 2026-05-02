import { motion } from 'framer-motion';
import { Monitor, Smartphone, Layout } from 'lucide-react';

const SKILLS = [
  { name: 'HTML5', percentage: 90, color: 'bg-orange-500' },
  { name: 'CSS / Tailwind CSS', percentage: 80, color: 'bg-teal-400' },
  { name: 'JavaScript (ES6+)', percentage: 75, color: 'bg-yellow-400' },
  { name: 'Node.js & Express', percentage: 70, color: 'bg-green-500' },
  { name: 'React.js', percentage: 70, color: 'bg-blue-400' },
  { name: 'C++', percentage: 65, color: 'bg-indigo-500' },
];

const SERVICES = [
  {
    title: 'Web Design',
    description: 'Transforming ideas into comprehensive wireframes and mockups. Blending artistic vision with technical expertise to craft user-friendly, visually appealing, and impactful digital experiences.',
    icon: <Layout className="w-8 h-8 text-indigo-400" />,
  },
  {
    title: 'Web Application Development',
    description: 'Architecting and developing robust, interactive web applications. Integrating seamless user experiences and efficient backend performance to bring complex technical requirements to life.',
    icon: <Monitor className="w-8 h-8 text-teal-400" />,
  },
  {
    title: 'Responsive Design',
    description: 'Creating adaptable and visually consistent layouts that adjust seamlessly across devices and screen sizes. Ensuring optimal user engagement on desktops, tablets, and mobile platforms.',
    icon: <Smartphone className="w-8 h-8 text-purple-400" />,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold text-indigo-400 tracking-wide uppercase mb-2">Technical Proficiency</h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-8">My Skills</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              A comprehensive overview of my technical capabilities. I consistently refine my skill set to align with modern industry standards and best practices.
            </p>

            <div className="space-y-6">
              {SKILLS.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:mt-16"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 p-8 shadow-2xl flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-4">
                  {SKILLS.map((skill, index) => (
                     <div key={`tag-${index}`} className="bg-slate-950/50 rounded-lg p-4 border border-slate-800 text-center flex flex-col items-center justify-center">
                        <span className="text-white font-medium block mb-1">{skill.name}</span>
                        <span className="text-xs text-slate-500">{skill.percentage}% Proficiency</span>
                     </div>
                  ))}
                </div>
             </div>
          </motion.div>
        </div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-indigo-400 tracking-wide uppercase mb-2">Capabilities</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-white">Services I Provide</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:bg-slate-800/50 transition-colors group"
            >
              <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
              <p className="text-slate-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillBar({ skill, index }: { skill: any; index: number }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-slate-300">{skill.name}</span>
        <span className="text-sm font-medium text-slate-500">{skill.percentage}%</span>
      </div>
      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 * index, ease: "easeOut" }}
          className={`h-full rounded-full ${skill.color}`}
        />
      </div>
    </div>
  );
}
