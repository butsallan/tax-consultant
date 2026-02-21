import { motion } from "motion/react";
import { PieChart, BarChart3, Landmark, Calculator, ArrowRight, ShieldCheck, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "EFRIS Guidance",
    icon: <Calculator className="w-8 h-8" />,
    desc: "Expert guidance on EFRIS to optimize your URA compliance and manage electronic invoices."
  },
  {
    title: "Tax Filings & Compliance",
    icon: <PieChart className="w-8 h-8" />,
    desc: "Navigate complex tax filings easily. We ensure accurate and timely submission of Income Tax, VAT & PAYE."
  },
  {
    title: "Customs Imports & Exports",
    icon: <Landmark className="w-8 h-8" />,
    desc: "Comprehensive solutions for managing cross-border trade, customs valuation and clearance."
  },
  {
    title: "NSSF & URSB Support",
    icon: <ShieldCheck className="w-8 h-8" />,
    desc: "Complete assistance with both NSSF and URSB registrations, monthly returns and compliance."
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-brand-bg relative overflow-hidden">
      {/* Decorative background accent */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-[2px] bg-brand-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">Premier Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark leading-tight">
              Strategic tax intelligence <br /> for commercial growth
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group p-8 bg-white rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-premium hover:-translate-y-2 transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-brand-primary" />
              </div>

              <div className="w-14 h-14 bg-brand-bg rounded-2xl flex items-center justify-center text-brand-primary mb-8 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                {s.icon}
              </div>

              <h4 className="text-xl font-display font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors">
                {s.title}
              </h4>
              <p className="text-slate-500 font-body text-sm leading-relaxed mb-6">
                {s.desc}
              </p>

              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <ArrowRight className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex justify-center"
        >
          <button className="bg-brand-dark text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 hover:bg-brand-primary transition-all duration-300 shadow-lg cursor-pointer group">
            Consult our experts
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
