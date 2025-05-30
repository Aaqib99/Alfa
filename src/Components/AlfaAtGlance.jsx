import React from "react";
import aboutinnerbg from "../Assets/Images/glance.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const StatCard = ({ number, label, delay }) => {
  const { ref, inView } = useInView({ threshold: 0.7, triggerOnce: false });

  const numericValue = parseFloat(number.replace(/[^\d.]/g, ""));
  const suffix = number.replace(/[0-9.]/g, "");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3, delay }}
      className="transition-all duration-700"
    >
      <p className="text-3xl font-bold">
        {inView && (
          <CountUp start={0} end={numericValue} duration={2} useEasing={true} />
        )}
        {suffix}
      </p>
      <p className="text-sm mt-2">{label}</p>
    </motion.div>
  );
};

const AlfaAtGlance = () => {
  return (
    <div
      className="bg-cover bg-center pt-8 pb-8"
      style={{ backgroundImage: `url(${aboutinnerbg})` }}
    >
      <div className="max-w-6xl mx-auto px-4 text-white text-center">
        {/* Section: ALFA AT GLANCE */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-sky-400 text-lg font-semibold mb-1">ALFA</h2>
          <h1 className="text-4xl font-bold mb-4">AT GLANCE</h1>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-b border-white/20">
          <StatCard number="70+" label="Successful Projects Completed" delay={0.1} />
          <StatCard number="10+" label="Years of Contracting Expertise" delay={0.2} />
          <StatCard number="85M+" label="Valuation of Completed Projects" delay={0.3} />
          <StatCard number="200+" label="Global Vendors and Partners" delay={0.4} />
        </div>

        {/* Section: OUR WAY */}
        <motion.div
          className="mt-12 mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-sky-400 text-lg font-semibold mb-1">OUR</h2>
          <h1 className="text-4xl font-bold mb-4">WAY</h1>
          <p className="max-w-3xl mx-auto leading-relaxed text-base font-light">
            At <strong>ALFA Group</strong>, we are driven by a simple yet powerful vision: 
            to provide our clients with exceptional services and solutions that 
            exceed expectations and create lasting value. Since our establishment in 
            <strong> 2014</strong>.
          </p>
        </motion.div>

        {/* Section: TIMELINE */}
        <motion.div
          className="bg-white/20 text-white p-6 md:p-10 rounded-lg shadow-md"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-8">
            {[
              ["01", "CONSULTATION", "We listen and understand your vision and goals."],
              ["02", "DESIGN & ENGINEERING", "Creating meticulous blueprints and innovative solutions tailored to your needs."],
              ["03", "PROCUREMENT", "Securing top-quality materials & resources efficiently."],
              ["04", "PLANNING", "Developing a detailed roadmap with optimized timelines & budgets."],
              ["05", "CONSTRUCTION", "Skilled execution, ensuring quality & safety from start to finish."],
              ["06", "HANDOVER", "Seamless transition & ongoing support for your success."],
            ].map(([step, title, desc], idx) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <p className="text-lg font-bold">{step}</p>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm mt-2">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AlfaAtGlance;
