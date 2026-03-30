import { motion } from 'motion/react';
import { Phone, Mail, Linkedin, MapPin, Download } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-sm font-bold tracking-widest text-brand-gold uppercase mb-3">
                Get In Touch
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-blue leading-tight">
                Let's Discuss Your Financial Operations
              </h3>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're looking to optimize your AP/AR processes, ensure IFRS compliance, or need strategic financial leadership, I'm here to help. Reach out to discuss how we can collaborate.
            </p>

            <div className="space-y-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-brand-blue/5 text-brand-blue flex items-center justify-center group-hover:bg-brand-gold group-hover:text-white transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Phone</p>
                  <a href="tel:+918468916780" className="text-lg font-bold text-brand-blue hover:text-brand-gold transition-colors">
                    +91 8468916780
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-brand-blue/5 text-brand-blue flex items-center justify-center group-hover:bg-brand-gold group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email</p>
                  <a href="mailto:tanweer06587@gmail.com" className="text-lg font-bold text-brand-blue hover:text-brand-gold transition-colors">
                    tanweer06587@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-brand-blue/5 text-brand-blue flex items-center justify-center group-hover:bg-brand-gold group-hover:text-white transition-colors">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/tanweer-alam-64147a23" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-brand-blue hover:text-brand-gold transition-colors">
                    Tanweer Alam
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-brand-blue/5 text-brand-blue flex items-center justify-center group-hover:bg-brand-gold group-hover:text-white transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Location</p>
                  <p className="text-lg font-bold text-brand-blue">
                    Noida / Delhi NCR, India
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100"
          >
            <h4 className="text-2xl font-bold text-brand-blue mb-6">Send a Message</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all bg-gray-50 focus:bg-white"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all bg-gray-50 focus:bg-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                  placeholder="How can I help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-brand-gold hover:bg-brand-gold-light text-brand-blue font-bold rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
