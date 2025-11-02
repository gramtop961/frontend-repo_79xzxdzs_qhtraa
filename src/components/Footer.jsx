export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-black/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-black font-semibold">sentiment.ai</p>
            <p className="text-sm text-black/60 mt-1">Voice agents that understand feeling.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="mailto:hello@sentiment.ai"
              className="inline-flex items-center rounded-full border border-black px-4 py-2 text-sm font-medium text-black hover:bg-black hover:text-white transition-colors"
            >
              hello@sentiment.ai
            </a>
          </div>
        </div>
        <div className="mt-8 text-xs text-black/50">
          © {new Date().getFullYear()} Sentiment AI, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
