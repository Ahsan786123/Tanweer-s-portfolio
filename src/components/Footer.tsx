export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <a href="#home" className="text-2xl font-serif font-bold text-white tracking-wide">
            TA<span className="text-brand-gold">.</span>
          </a>
          <p className="text-gray-400 text-sm mt-2">
            AP & AR Manager | Accounting Leader
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-gray-400">
          <a href="#home" className="hover:text-brand-gold transition-colors">Home</a>
          <a href="#about" className="hover:text-brand-gold transition-colors">About</a>
          <a href="#experience" className="hover:text-brand-gold transition-colors">Experience</a>
          <a href="#contact" className="hover:text-brand-gold transition-colors">Contact</a>
        </div>

        <div className="text-sm text-gray-500 text-center md:text-right">
          &copy; {new Date().getFullYear()} Tanweer Alam. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
