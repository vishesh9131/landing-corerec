"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function PhilosophyPage() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fdfcf8] text-[#27272a] selection:bg-[#d4a373] selection:text-white overflow-x-hidden flex flex-col font-sans">
      <nav className="sticky top-0 z-50 w-full border-b border-[#e5e5e5]/20 bg-white/5 backdrop-blur-2xl py-4 md:py-6 px-4 md:px-6">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto gap-4 md:gap-5 min-w-0">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image src="/coreRec.svg" alt="CoreRec" width={24} height={24} className="opacity-90" />
            <span className="text-lg font-medium tracking-tight">CoreRec</span>
          </Link>
          <div className="flex items-center gap-4 md:gap-5 text-sm font-medium hidden sm:flex flex-1 justify-end min-w-0 shrink">
            <Link href="/" className="text-[#71717a] hover:text-[#27272a] transition-colors border-b-2 border-transparent hover:border-[#27272a]/30 pb-0.5 whitespace-nowrap">Home</Link>
            <Link href="/philosophy" className="text-[#27272a] border-b-2 border-[#27272a] pb-0.5 whitespace-nowrap">Philosophy</Link>
            <Link href="/#showcase" className="text-[#71717a] hover:text-[#27272a] transition-colors border-b-2 border-transparent hover:border-[#27272a]/30 pb-0.5 whitespace-nowrap">Showcase</Link>
            <Link href="/docs" className="text-[#71717a] hover:text-[#27272a] transition-colors border-b-2 border-transparent hover:border-[#27272a]/30 pb-0.5 whitespace-nowrap">Docs</Link>
            <a href="https://github.com/vishesh9131/CoreRec" target="_blank" rel="noopener noreferrer" className="text-[#71717a] hover:text-[#27272a] transition-colors border-b-2 border-transparent hover:border-[#27272a]/30 pb-0.5 whitespace-nowrap">
              GitHub
            </a>
          </div>
          <button
            type="button"
            onClick={() => setNavOpen((o) => !o)}
            className="sm:hidden p-2 -mr-2 text-[#27272a] flex flex-col justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-0.5 bg-current" />
            <span className="block w-5 h-0.5 bg-current" />
            <span className="block w-5 h-0.5 bg-current" />
          </button>
        </div>

        {navOpen && (
          <div className="sm:hidden border-t border-[#e5e5e5]/40 mt-4 pt-4 px-6 pb-4 flex flex-col gap-4">
            <Link href="/" className="text-sm font-medium text-[#71717a] hover:text-[#27272a]" onClick={() => setNavOpen(false)}>Home</Link>
            <Link href="/philosophy" className="text-sm font-medium text-[#27272a] border-b-2 border-[#27272a] pb-1 w-fit" onClick={() => setNavOpen(false)}>Philosophy</Link>
            <Link href="/#showcase" className="text-sm font-medium text-[#71717a] hover:text-[#27272a]" onClick={() => setNavOpen(false)}>Showcase</Link>
            <Link href="/docs" className="text-sm font-medium text-[#71717a] hover:text-[#27272a]" onClick={() => setNavOpen(false)}>Docs</Link>
            <a href="https://github.com/vishesh9131/CoreRec" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#71717a] hover:text-[#27272a]" onClick={() => setNavOpen(false)}>GitHub</a>
            <Link href="/docs" className="text-sm font-medium px-4 py-2 mt-2 border border-[#d4a373]/50 bg-[#ebe5da] hover:border-[#d4a373] w-fit" onClick={() => setNavOpen(false)}>Get Started</Link>
          </div>
        )}
      </nav>

      <main className="flex-1 w-full">
        {/* Hero: asset11 background with typography overlay */}
        <section className="relative w-full min-h-[50vh] md:min-h-[55vh] overflow-hidden">
          <Image
            src="/assets/asset11.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fdfcf8] via-[#fdfcf8]/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-4">
                <Image src="/coreRec.svg" alt="" width={40} height={40} className="opacity-90 shrink-0" />
                <h1 className="text-4xl md:text-6xl font-light text-[#27272a] tracking-tight">Philosophy</h1>
              </div>
              <p className="mt-4 text-lg text-[#71717a] font-light">
                The thinking behind CoreRec.
              </p>
            </div>
          </div>
        </section>

        {/* Content: solid background, sticky image sidebar + scrolling text */}
        <div className="w-full bg-[#fdfcf8]">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-16 py-16 md:py-24">
            {/* Sticky side image - asset10 */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="sticky top-28 hidden lg:block">
                <div className="ml-auto w-fit">
                  <div className="relative aspect-[3/4] w-full min-w-[280px] max-w-sm -ml-24 overflow-hidden bg-[#f4f1ea]">
                  <Image
                    src="/assets/asset10.jpg"
                    alt=""
                    fill
                    className="object-cover object-center"
                  />
                  </div>
                </div>
              </div>
              <div className="lg:hidden relative aspect-[4/5] w-full max-w-md mx-auto mb-12 overflow-hidden bg-[#f4f1ea]">
                <Image
                  src="/assets/asset10.jpg"
                  alt=""
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Text content */}
            <div className="lg:col-span-7 order-2 lg:order-1 pt-0 lg:pt-8">
              <div className="space-y-16 md:space-y-20 max-w-2xl">
                <section>
                  <h2 className="text-2xl font-medium mb-4 text-[#27272a]">One API, Every Model</h2>
                  <p className="text-[#71717a] leading-relaxed">
                    Recommendation systems span decades of research: matrix factorization, neural networks, graph methods, sequential models. Most frameworks force you to learn a different interface for each. CoreRec treats every model as a recommender. Same <code className="bg-[#f4f1ea] px-1.5 py-0.5 rounded text-sm">fit()</code>, <code className="bg-[#f4f1ea] px-1.5 py-0.5 rounded text-sm">predict()</code>, <code className="bg-[#f4f1ea] px-1.5 py-0.5 rounded text-sm">recommend()</code>. Swap SVD for DCN without rewriting your pipeline.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-medium mb-4 text-[#27272a]">Research to Production</h2>
                  <p className="text-[#71717a] leading-relaxed">
                    The gap between a Jupyter notebook and a deployed system is where projects die. CoreRec is built so the code you prototype with is the code you ship. Retrieval, ranking, reranking compose into pipelines. Models persist and load. A lightweight serving layer handles inference. No separate &quot;production&quot; fork.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-medium mb-4 text-[#27272a]">Composability Over Monoliths</h2>
                  <p className="text-[#71717a] leading-relaxed">
                    Real systems are multi-stage. Retrieve candidates, score them, rerank for diversity or business rules. CoreRec exposes each stage as a component. Mix collaborative retrievers with semantic search. Add fairness or diversity rerankers. The pipeline is the product of its parts, not a black box.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-medium mb-4 text-[#27272a]">Breadth Without Bloat</h2>
                  <p className="text-[#71717a] leading-relaxed">
                    57+ models across deep learning, matrix factorization, graph, sequential, and Bayesian families. The goal is not to own every paper. It is to give practitioners a single place to experiment, compare, and choose. Type-hinted, documented, tested. Pick what fits your data and latency budget.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-medium mb-4 text-[#27272a]">Elegant by Default</h2>
                  <p className="text-[#71717a] leading-relaxed">
                    CoreRec is the application of deep learning to recommendation systems that establishes a unified framework for research and production. The philosophy is simple: reduce friction, preserve flexibility, and let the models do the work.
                  </p>
                </section>

                <section className="pt-8">
                  <h2 className="text-2xl font-medium mb-6 text-[#27272a]">Creator</h2>
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-full overflow-hidden bg-[#f4f1ea]">
                      <Image
                        src="/assets/vishesh.png"
                        alt="Vishesh"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                    <div>
                      <p className="text-[#27272a] font-medium">Vishesh</p>
                      <p className="text-[#71717a] leading-relaxed mt-2">
                        CoreRec is built by Vishesh, who works on recommendation systems and ML infrastructure. The project started from the need for a single, consistent API across research and production. Open source, maintained in spare time.
                      </p>
                      <a
                        href="https://github.com/vishesh9131"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-sm font-medium text-[#d4a373] hover:text-[#b08968] transition-colors"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </section>
              </div>

              <div className="mt-20 pt-12 border-t border-[#e5e5e5]">
                <Link href="/" className="text-sm font-medium text-[#d4a373] hover:text-[#b08968] transition-colors">
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
}
