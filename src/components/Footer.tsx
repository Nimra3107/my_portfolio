import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400 mb-2 block">
              Nimra.
            </a>
            <p className="text-slate-500 text-sm">
              &copy; {currentYear} Nimra Naveed. All rights reserved.
            </p>
          </div>

          <div className="flex gap-4">
            <SocialLink href="https://github.com/Nimra3107" icon={<Github size={20} />} />
            <SocialLink href="https://www.linkedin.com/in/nimra-naveed-4650b9376?utm_source=share_via&utm_content=profile&utm_medium=member_android" icon={<Linkedin size={20} />} />
            <SocialLink href="#" icon={<Twitter size={20} />} />
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all duration-300"
    >
      {icon}
    </a>
  );
}
