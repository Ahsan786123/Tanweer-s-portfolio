import { motion } from 'motion/react';
import { FileSpreadsheet, Calculator, PieChart, RefreshCw, Users, Settings } from 'lucide-react';

const skills = [
  {
    name: 'IFRS',
    icon: <FileSpreadsheet size={32} />,
    level: 95,
    description: 'International Financial Reporting Standards compliance and implementation.',
  },
  {
    name: 'Management Accounting',
    icon: <PieChart size={32} />,
    level: 90,
    description: 'Strategic financial planning, analysis, and management reporting.',
  },
  {
    name: 'AP & AR Management',
    icon: <Calculator size={32} />,
    level: 98,
    description: 'End-to-end Accounts Payable and Accounts Receivable operations.',
  },
  {
    name: 'Order to Cash (O2C)',
    icon: <RefreshCw size={32} />,
    level: 95,
    description: 'Optimizing the entire O2C cycle for improved cash flow.',
  },
  {
    name: 'Team Leadership',
    icon: <Users size={32} />,
    level: 92,
    description: 'Mentoring and directing high-performing finance teams.',
  },
  {
    name: 'Process Optimization',
    icon: <Settings size={32} />,
    level: 88,
    description: 'Streamlining financial workflows for maximum efficiency.',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-brand-blue relative text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-brand-gold uppercase mb-3">
            Core Competencies
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">
            Professional Skills
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel-dark p-8 rounded-2xl hover:border-brand-gold/50 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h4 className="text-xl font-bold">{skill.name}</h4>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {skill.description}
              </p>

              <div className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-gray-300">Proficiency</span>
                  <span className="text-brand-gold">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-brand-gold to-yellow-300 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
