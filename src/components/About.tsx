import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, GraduationCap } from 'lucide-react';
import NimraCV from '../assets/images/Nimra_Naveed_Mern_Stack.CV.pdf';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm font-semibold text-indigo-400 tracking-wide uppercase mb-2">About</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-white">Professional Details</h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-2xl font-bold mb-6">
              I'm a <span className="text-teal-400">MERN Stack Developer</span>
            </h4>
            <div className="space-y-4 text-slate-400 leading-relaxed mb-8">
              <p>
                I am a dedicated software engineer specializing in the MERN stack (MongoDB, Express.js, React, Node.js). I thrive on transforming complex business requirements into fast, responsive, and highly scalable web applications.
              </p>
              <p>
                With a strong emphasis on writing clean, maintainable code and delivering exceptional user experiences, I bridge the gap between technical execution and business value. I am continuously exploring emerging technologies and architectural patterns to elevate the quality of my work.
              </p>
            </div>

            <a
              href={NimraCV}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-indigo-500/30 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 font-medium rounded-lg transition-colors"
            >
              My Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700"
          >
            <ul className="space-y-6">
              <InfoItem icon={<Mail className="text-indigo-400" />} label="Email" value="nimranaveed351@gmail.com" />
              <InfoItem icon={<Phone className="text-indigo-400" />} label="Phone" value="+92 327 4330304" />
              <InfoItem icon={<MapPin className="text-indigo-400" />} label="Location" value="Lahore, Pakistan" />
              <InfoItem icon={<GraduationCap className="text-indigo-400" />} label="Degree" value="BSCS" />
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <li className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center border border-slate-700">
        {icon}
      </div>
      <div>
        <span className="block text-sm text-slate-400 font-medium">{label}</span>
        <span className="block text-white font-medium">{value}</span>
      </div>
    </li>
  );
}
