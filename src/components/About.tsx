import { motion } from 'motion/react';
import { Briefcase, TrendingUp, Users, FileText } from 'lucide-react';

const highlights = [
  {
    icon: <Briefcase size={24} />,
    title: '14+ Years Experience',
    description: 'Extensive background in accounting, AP & AR management.',
  },
  {
    icon: <FileText size={24} />,
    title: 'IFRS Expertise',
    description: 'Deep understanding of International Financial Reporting Standards.',
  },
  {
    icon: <Users size={24} />,
    title: 'Leadership',
    description: 'Proven ability to manage teams and improve financial processes.',
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'Business Value',
    description: 'Delivering strategic insights and optimizing financial operations.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-sm font-bold tracking-widest text-brand-gold uppercase mb-3">
                About Me
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-blue leading-tight">
                Strategic Financial Leadership & Operations
              </h3>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              I am a results-driven Senior Accounting Professional with over 14 years of comprehensive experience in financial operations, specializing in Accounts Payable (AP), Accounts Receivable (AR), and Management Accounting.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              My expertise lies in implementing robust financial controls, ensuring compliance with International Financial Reporting Standards (IFRS), and leading high-performing teams to optimize the Order to Cash (O2C) cycle. I am passionate about transforming financial data into actionable business insights and driving continuous process improvements that deliver tangible value to the organization.
            </p>

            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-brand-blue flex items-center justify-center text-brand-gold font-serif text-2xl font-bold">
                  TA
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-blue">Tanweer Alam</h4>
                  <p className="text-gray-500">AP & AR Manager</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-blue/5 text-brand-blue flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-brand-blue mb-3">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
