"use client";

import React from 'react';
import { motion, useInView } from 'framer-motion';

const metrics = [
  { number: 10, suffix: "+", label: "Interactive Dashboards Built", desc: "Self-service across sales, marketing & growth teams" },
  { number: 40, suffix: "%", label: "Reduction in Manual Reporting", desc: "Through automation and scalable self-service" },
  { number: 100, suffix: "+", label: "Professionals Trained", desc: "In SQL, Python, Power BI & data literacy" },
  { number: 60, suffix: "%", label: "Faster Dashboard Performance", desc: "After data model optimisation & ETL improvements" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1400;
      const increment = value / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="metric-value tabular-nums">
      {displayValue}{suffix}
    </span>
  );
}

export default function Impact() {
  return (
    <section id="impact" className="max-w-6xl mx-auto px-6 py-24 border-t border-[#27272a]">
      <div className="text-center mb-14">
        <div className="uppercase tracking-[3px] text-xs text-[#10b981] font-medium mb-3">CHAPTER 05 — THE RESULTS</div>
        <h2 className="text-5xl font-semibold tracking-[-2px]">Data → Decisions → Growth</h2>
        <p className="mt-4 max-w-md mx-auto text-[#a1a1aa]">Quantifiable outcomes from rigorous analytics and experimentation.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="card rounded-3xl p-9 text-center group">
            <div className="font-mono text-[72px] leading-none font-semibold tracking-[-4.5px] text-[#10b981] mb-3">
              <AnimatedNumber value={metric.number} suffix={metric.suffix} />
            </div>
            <div className="font-semibold text-xl tracking-tight mb-2">{metric.label}</div>
            <p className="text-sm text-[#71717a] leading-snug">{metric.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
