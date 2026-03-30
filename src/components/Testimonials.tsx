import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Chief Financial Officer',
    company: 'Tech Mahindra',
    text: 'Tanweer is an exceptional accounting leader. His deep understanding of IFRS and ability to streamline our AP & AR processes has significantly improved our cash flow and reporting accuracy. He is a true asset to any financial operations team.',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Operations Director',
    company: 'Mynd Solutions Pvt. Ltd.',
    text: 'During his time as AR Team Leader, Tanweer demonstrated outstanding leadership and technical expertise. He consistently optimized our Order to Cash cycle, reducing DSO and fostering a culture of excellence within his team.',
  },
  {
    name: 'Emily Chen',
    role: 'Senior Finance Manager',
    company: 'Genpact India',
    text: 'I had the pleasure of working alongside Tanweer for several years. His reliability, attention to detail, and proactive approach to resolving complex financial discrepancies are unmatched. He brings immense value and strategic insight to the table.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-brand-gold uppercase mb-3">
            Client & Colleague Feedback
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-blue">
            Testimonials
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow relative"
            >
              <Quote size={48} className="absolute top-6 right-6 text-brand-gold/20" />
              
              <div className="mb-8">
                <p className="text-gray-600 italic leading-relaxed relative z-10">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white font-serif font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-brand-blue">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="text-xs text-brand-gold font-medium">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
