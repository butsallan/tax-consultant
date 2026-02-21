import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-brand-dark">
      {/* Cinematic Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
          alt="Modern financial district"
          className="w-full h-full object-cover brightness-[0.4]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-transparent to-brand-dark/80" />
      </div>

      <div className="container-custom relative z-10 px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass mb-8 border border-white/10 shadow-inner-glow"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  src={`https://picsum.photos/seed/${i + 20}/64/64`}
                  className="w-8 h-8 rounded-full border-2 border-brand-dark object-cover"
                  alt="Client"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <p className="text-white/90 text-xs font-medium uppercase tracking-wider">
              <span className="text-brand-primary font-bold">100+</span> Trustworthy Partnerships
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-display font-bold text-white leading-[1.05] mb-8 tracking-tighter"
          >
            Expert Tax Solutions <br />
            <span className="text-brand-primary drop-shadow-sm">for Uganda</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl font-body leading-relaxed"
          >
            Navigate the complexities of URA compliance with elite tax intelligence. We empower Uganda's leading enterprises through precision auditing and strategic planning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button className="bg-brand-primary text-white px-12 py-5 rounded-full text-lg font-bold flex items-center justify-center gap-3 hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-premium cursor-pointer group">
              Get started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="glass text-white px-12 py-5 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-md cursor-pointer">
              Our Services
            </button>
          </motion.div>
        </div>
      </div>

      {/* Subtle brand glow */}
      <div className="absolute top-1/2 -right-1/4 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
