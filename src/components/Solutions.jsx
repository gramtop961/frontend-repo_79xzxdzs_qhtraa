import { Mic, Shield, Brain, Waveform } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  {
    icon: Mic,
    title: 'Real-time voice AI',
    desc: 'Low-latency, natural prosody with contextual memory and interruption support.',
  },
  {
    icon: Brain,
    title: 'Sentiment-first NLU',
    desc: 'Emotion detection and intent parsing built on a precise data ontology.',
  },
  {
    icon: Shield,
    title: 'Enterprise-grade privacy',
    desc: 'SOC2-ready pipelines, redaction, and on-prem options to keep data in control.',
  },
  {
    icon: Waveform,
    title: 'Clean data ontology',
    desc: 'Unified schema for voice, text, and metadata to standardize your customer truth.',
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black">
            Built for sensitive conversations
          </h2>
          <p className="mt-3 text-black/70">
            Minimalist by design, powerful where it counts. Every layer is measured and observable.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-xl border border-black/10 p-6 hover:shadow-sm transition-all bg-white"
            >
              <div className="h-10 w-10 flex items-center justify-center rounded-md border border-black/10 bg-white mb-4">
                <item.icon className="text-black" size={18} />
              </div>
              <h3 className="text-base font-medium text-black">{item.title}</h3>
              <p className="mt-2 text-sm text-black/70 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div id="approach" className="mt-16 grid items-stretch gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-black/10 p-8">
            <h3 className="text-lg font-medium text-black">Ontology-driven design</h3>
            <p className="mt-3 text-black/70">
              We start from the data — a shared ontology for utterances, turns, intents, emotions, and outcomes. This keeps systems consistent and measurable across teams.
            </p>
          </div>
          <div className="rounded-xl border border-black/10 p-8">
            <h3 className="text-lg font-medium text-black">Measurement by default</h3>
            <p className="mt-3 text-black/70">
              Every agent ships with clarity on latency, containment, satisfaction, and compliance. No black boxes — just crisp operational visibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
