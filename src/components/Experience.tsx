import { motion } from 'motion/react';
import { Calendar, MapPin, Building } from 'lucide-react';

const experiences = [
  {
    role: 'Accounting Manager',
    company: 'Tech Mahindra',
    location: 'Noida, India',
    date: 'Dec 2019 – Present',
    description: [
      'Spearheading comprehensive accounting operations and financial reporting.',
      'Managing and optimizing Accounts Payable (AP) and Accounts Receivable (AR) processes.',
      'Ensuring strict adherence to IFRS and local statutory compliance.',
      'Leading a team of finance professionals to deliver accurate and timely financial insights.',
    ],
  },
  {
    role: 'AR Team Leader',
    company: 'Mynd Solutions Pvt. Ltd.',
    location: 'Gurgaon, India',
    date: 'Jan 2014 – Aug 2021',
    description: [
      'Directed the Accounts Receivable team, overseeing the entire Order to Cash (O2C) cycle.',
      'Implemented process improvements that significantly reduced DSO (Days Sales Outstanding).',
      'Conducted regular financial analysis and management reporting.',
      'Mentored and trained team members to enhance operational efficiency.',
    ],
  },
  {
    role: 'Account Receivable',
    company: 'Genpact India',
    location: 'India',
    date: 'Apr 2011 – Aug 2021',
    description: [
      'Handled end-to-end Accounts Receivable processes including billing, collections, and cash application.',
      'Resolved complex customer disputes and reconciled accounts.',
      'Maintained high accuracy in financial data entry and reporting.',
      'Collaborated cross-functionally to streamline financial workflows.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-50 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-brand-gold uppercase mb-3">
            Career Journey
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-blue">
            Professional Experience
          </h3>
        </motion.div>

        <div className="relative border-l-2 border-brand-gold/30 ml-4 md:ml-0 md:border-l-0">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-brand-gold/30" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center justify-between mb-16 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-9px] md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-brand-gold border-4 border-gray-50 z-10" />

              {/* Content Box */}
              <div className={`w-full md:w-[45%] pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}>
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative group">
                  {/* Decorative Arrow */}
                  <div
                    className={`hidden md:block absolute top-6 w-4 h-4 bg-white border-t border-l border-gray-100 transform rotate-45 ${
                      index % 2 === 0 ? '-left-2' : '-right-2 border-r border-b border-t-0 border-l-0'
                    }`}
                  />

                  <h4 className="text-2xl font-bold text-brand-blue mb-2">{exp.role}</h4>
                  
                  <div className={`flex flex-col gap-2 mb-6 text-sm text-gray-500 ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                    <div className="flex items-center gap-2">
                      <Building size={16} className="text-brand-gold" />
                      <span className="font-semibold text-gray-700">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-brand-gold" />
                      <span>{exp.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-brand-gold" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className={`space-y-3 text-gray-600 leading-relaxed ${index % 2 === 0 ? 'text-left' : 'text-left md:text-right'}`}>
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0 ${index % 2 === 0 ? '' : 'md:hidden'}`} />
                        <span className="flex-1">{desc}</span>
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0 hidden ${index % 2 === 0 ? '' : 'md:block'}`} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
