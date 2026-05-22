import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextReveal from '../components/TextReveal';

const ContactItem = ({ item, index }) => {
  const [copied, setCopied] = useState(false);
  const isEmail = item.label === 'Email';

  const handleCopy = () => {
    navigator.clipboard.writeText(item.value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-5 group relative">
      <div className={`w-12 h-12 border border-white/8 rounded-2xl flex items-center justify-center group-hover:border-${index % 2 === 0 ? 'orange' : 'blue'}-500/50 group-hover:bg-${index % 2 === 0 ? 'orange' : 'blue'}-500/5 transition-all flex-shrink-0`}>
        {Object.assign({}, item.icon, {
          props: Object.assign({}, item.icon.props, {
            className: item.icon.props.className.replace('text-orange-400', index % 2 === 0 ? 'text-orange-400' : 'text-blue-400')
          })
        })}
      </div>
      <div className="flex-grow">
        <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-0.5">{item.label}</p>
        <div className="flex items-center gap-3">
          {item.href ? (
            <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
              className={`text-white font-bold hover:text-${index % 2 === 0 ? 'orange' : 'blue'}-400 transition-colors text-sm break-all`}>
              {item.value}
            </a>
          ) : (
            <p className="text-white font-bold text-sm">{item.value}</p>
          )}
          
          {isEmail && (
            <button 
              onClick={handleCopy}
              className={`p-1.5 rounded-lg border border-white/5 bg-white/2 hover:bg-white/5 transition-all group/copy relative`}
              title="Copy email"
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.span
                    key="check"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="text-[8px] text-green-400 font-black absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 px-2 py-1 rounded whitespace-nowrap z-50"
                  >
                    Copied!
                  </motion.span>
                ) : null}
              </AnimatePresence>
              <svg className={`w-3.5 h-3.5 ${copied ? 'text-green-400' : 'text-white/30 group-hover/copy:text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 012-2v-8a2 2 0 01-2-2h-8a2 2 0 01-2 2v8a2 2 0 012 2z"/>
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 2000);
  };

  const contactInfo = [
    {
      label: 'Email',
      value: 'sameersangam66@gmail.com',
      href: 'mailto:sameersangam66@gmail.com',
      icon: (
        <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
    },
    {
      label: 'Phone',
      value: '+91 6360094791',
      href: 'tel:+916360094791',
      icon: (
        <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/sameersangam',
      href: 'https://www.linkedin.com/in/sameersangam/',
      icon: (
        <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      label: 'Location',
      value: 'Karnataka, India',
      href: null,
      icon: (
        <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <p className="text-orange-400 text-[10px] font-black uppercase tracking-[0.3em]">Communication Hub</p>
              <div className="h-px flex-grow bg-white/5" />
            </div>

            <TextReveal
              text="Have a project in mind? Let's build it."
              className="text-5xl md:text-7xl font-black text-white mb-8 leading-[0.9] tracking-tighter"
            />
            
            <div className="flex items-center gap-6 mb-12">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-green-500/10 border border-green-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-black text-green-400 uppercase tracking-widest">Active Now</span>
              </div>
              <div className="text-[10px] font-black text-white/30 uppercase tracking-widest">
                Typical response: <span className="text-white/60">~2 hours</span>
              </div>
            </div>

            <p className="text-slate-400 mb-12 leading-relaxed text-sm max-w-lg">
              I'm open to full-time roles, freelance projects, and collaboration opportunities. Whether you need data annotation expertise or a full stack web application built — I'd love to hear from you.
            </p>

            <div className="space-y-6 mb-12">
              {contactInfo.map((item, i) => (
                <ContactItem key={i} item={item} index={i} />
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-white/2 border border-white/5 flex items-center gap-5">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/20">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-black text-white/30 uppercase tracking-widest">Data Privacy</p>
                <p className="text-xs font-bold text-white/60">All communications are encrypted and private.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-morphism rounded-3xl p-10"
          >
            <h3 className="text-xl font-bold text-white mb-8">Send Me a Message</h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Your Name</label>
                  <input required type="text" placeholder="John Doe"
                    className="w-full bg-white/2 border border-white/8 rounded-xl px-5 py-4 text-white text-sm placeholder-white/10 focus:outline-none focus:border-blue-500/50 transition-colors"/>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Email</label>
                  <input required type="email" placeholder="hello@example.com"
                    className="w-full bg-white/2 border border-white/8 rounded-xl px-5 py-4 text-white text-sm placeholder-white/10 focus:outline-none focus:border-orange-500/50 transition-colors"/>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Message</label>
                <textarea required rows="5" placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-white/2 border border-white/8 rounded-xl px-5 py-4 text-white text-sm placeholder-white/10 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"/>
              </div>
              <button disabled={formState !== 'idle'}
                className="w-full py-4 bg-gradient-to-r from-orange-500 via-purple-600 to-blue-600 hover:scale-[1.01] active:scale-[0.98] disabled:bg-white/8 disabled:text-white/30 text-white font-black rounded-xl transition-all shadow-lg shadow-purple-500/20 text-sm tracking-wide">
                {formState === 'idle' && 'Send Message'}
                {formState === 'submitting' && 'Sending...'}
                {formState === 'success' && '✓ Message Sent!'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
