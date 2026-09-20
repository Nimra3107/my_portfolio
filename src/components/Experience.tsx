import { motion } from 'framer-motion';
import { Code2, Rocket, ShoppingCart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  icon: LucideIcon;
  toolsLabel?: string;
  tools?: string[];
  points: string[];
}

// Content taken from the latest CV (most recent first)
const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Al Burraq Technologies',
    role: 'Software Development Intern',
    period: 'Aug 2026 – Present',
    current: true,
    icon: Code2,
    points: [
      'Developing interactive and responsive web applications using JavaScript, React.js, and Supabase through hands-on project-based learning.',
      'Building reusable React components and applying state management, event handling, and modern JavaScript concepts in practical projects.',
      'Implementing database operations with Supabase, including storing, retrieving, filtering, and managing application data.',
      'Working with Local Storage and PostgreSQL-based Supabase database to understand client-side and database-driven data persistence.',
      'Strengthening problem-solving, debugging, and frontend development skills by implementing features and resolving practical application issues.',
    ],
  },
  {
    company: 'Amazon E-commerce',
    role: 'Product Research & Operations',
    period: 'Dec 2025 – May 2026',
    icon: ShoppingCart,
    toolsLabel: 'Tools',
    tools: ['Keepa', 'Seller Assistant', 'Seller AMP'],
    points: [
      'Conducted product hunting and sourcing to identify profitable opportunities for the store.',
      'Managed profit analysis to evaluate margins and support sourcing decisions.',
      'Handled end-to-end order management and order tracking to ensure smooth fulfillment.',
    ],
  },
  {
    company: 'DevWeekend',
    role: 'Software Development Fellowship',
    period: 'Jun 2025 – Sep 2025',
    icon: Rocket,
    toolsLabel: 'Stack',
    tools: ['React', 'Node.js', 'Express', 'MongoDB'],
    points: [
      'Completed a hands-on software development fellowship focused on practical, project-based learning.',
      'Built MERN stack projects as part of the curriculum, applying React, Node.js, Express, and MongoDB.',
      'Practiced problem-solving on LeetCode to strengthen data structures and algorithms skills.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-sm font-semibold text-indigo-400 tracking-wide uppercase mb-2">
            Experience
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">Work Experience</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Internship, fellowship, and e-commerce experience that shaped how I build and work.
          </p>
        </motion.div>

        <ol className="max-w-5xl mx-auto flex flex-col gap-8 sm:gap-10">
          {EXPERIENCE.map((item, index) => (
            <TimelineItem
              key={item.company}
              item={item}
              index={index}
              isLast={index === EXPERIENCE.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}

function TimelineItem({
  item,
  index,
  isLast,
}: {
  item: ExperienceItem;
  index: number;
  isLast: boolean;
}) {
  const Icon = item.icon;

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="grid grid-cols-[0.75rem_minmax(0,1fr)] md:grid-cols-[10rem_0.75rem_minmax(0,1fr)] gap-x-3 sm:gap-x-4 md:gap-x-6"
    >
      {/* Date column (tablet & desktop) */}
      <div
        className={`hidden md:block text-right pt-1 text-sm font-medium ${
          item.current ? 'text-teal-400' : 'text-slate-400'
        }`}
      >
        {item.period}
      </div>

      {/* Timeline rail */}
      <div className="relative" aria-hidden="true">
        <span
          className={`absolute left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full border-2 ${
            item.current
              ? 'bg-teal-400 border-teal-400 shadow-[0_0_0_4px_rgba(45,212,191,0.15)]'
              : 'bg-slate-950 border-indigo-500'
          }`}
        />
        {!isLast && (
          <span className="absolute left-1/2 -translate-x-1/2 top-6 -bottom-8 sm:-bottom-10 w-px bg-slate-700" />
        )}
      </div>

      {/* Card */}
      <div className="min-w-0 bg-slate-800/50 border border-slate-700 hover:border-indigo-500/50 transition-colors rounded-2xl p-5 sm:p-8">
        <div className="flex items-start gap-4 mb-5">
          <div className="hidden sm:flex w-12 h-12 shrink-0 rounded-xl bg-slate-900 border border-slate-700 items-center justify-center">
            <Icon className="w-6 h-6 text-indigo-400" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <h4 className="text-lg sm:text-xl font-bold text-white break-words">{item.company}</h4>
              {item.current ? (
                <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-teal-400/10 border border-teal-400/30 text-xs font-medium text-teal-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                  Current
                </span>
              ) : (
                <span className="px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-medium text-slate-400">
                  Completed
                </span>
              )}
            </div>
            <p className="text-teal-400 font-medium text-sm sm:text-base mt-1">{item.role}</p>
            {/* Date (mobile only — desktop shows it in the left column) */}
            <p className="md:hidden text-xs text-slate-400 mt-1">{item.period}</p>
          </div>
        </div>

        <ul className="space-y-3">
          {item.points.map((point) => (
            <li key={point} className="flex gap-3 text-sm sm:text-base text-slate-400 leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-indigo-400" aria-hidden="true" />
              <span className="min-w-0">{point}</span>
            </li>
          ))}
        </ul>

        {item.tools && (
          <div className="flex flex-wrap items-center gap-2 mt-6 pt-5 border-t border-slate-700/60">
            <span className="text-xs text-slate-500 mr-1">{item.toolsLabel}</span>
            {item.tools.map((tool) => (
              <span
                key={tool}
                className="px-2.5 py-1 bg-slate-900 text-slate-300 text-xs font-medium rounded-md border border-slate-700"
              >
                {tool}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.li>
  );
}
