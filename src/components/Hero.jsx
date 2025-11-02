import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[82vh] overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/utrirTwDrFc8TLoE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_50%,rgba(255,255,255,0.6)_85%,rgba(255,255,255,1)_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex min-h-[82vh] items-center">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl tracking-tight font-semibold text-black"
          >
            Voice agents that understand feeling.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-lg text-black/70"
          >
            We build empathetic AI voices for support, sales, and research — engineered on a clean data ontology and tuned for real conversations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#solutions"
              className="inline-flex items-center rounded-full bg-black text-white px-5 py-3 text-sm font-medium hover:opacity-90"
            >
              Explore solutions
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-black text-black px-5 py-3 text-sm font-medium hover:bg-black hover:text-white transition-colors"
            >
              Talk to us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
