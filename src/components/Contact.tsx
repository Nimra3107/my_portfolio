import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-indigo-400 tracking-wide uppercase mb-2">Contact</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-white">Get In Touch</h3>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 space-y-8"
          >
            <h4 className="text-2xl font-bold text-white mb-6">Contact Information</h4>
            <ContactInfoItem icon={<MapPin />} title="Location" details="Lahore, Pakistan" />
            <ContactInfoItem icon={<Mail />} title="Email" details="nimranaveed351@gmail.com" />
            <ContactInfoItem icon={<Phone />} title="Phone" details="+92 327 4330304" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <form className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoItem({ icon, title, details }: { icon: React.ReactNode; title: string; details: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-xl bg-slate-800 text-indigo-400 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h5 className="text-white font-medium mb-1">{title}</h5>
        <p className="text-slate-400">{details}</p>
      </div>
    </div>
  );
}
