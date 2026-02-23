"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

// ─── Minimal Reveal Animation ───
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── Code Lines Component ───
const CodeLines = ({ lines }: { lines: string[] }) => (
  <div className="mt-6 flex flex-col gap-2 font-mono text-xs md:text-sm text-[#71717a]">
    {lines.map((line, i) => (
      <div key={i} className="flex items-center gap-3 group/line hover:text-[#27272a] transition-colors cursor-default">
        <span className="w-6 text-right opacity-30 select-none text-[10px]">{i + 1}</span>
        <div className="px-3 py-1.5 bg-[#f4f1ea] border-l-2 border-[#d4a373]/30 rounded-r-sm w-full group-hover/line:border-[#d4a373] transition-all break-all sm:break-normal">
          {line}
        </div>
      </div>
    ))}
  </div>
);

// ─── Data ───

const CODE_SNIPPET = `from corerec.engines.dcn import DCN
import cr_learn

# Load dataset
data = cr_learn.load_dataset('movielens-100k')

# Initialize & Train
model = DCN(embedding_dim=64, epochs=20)
model.fit(
    user_ids=data.user_ids,
    item_ids=data.item_ids,
    ratings=data.ratings
)

# Predict
recs = model.recommend(user_id=1, top_k=10)`;

const FINAL_SHOWCASE = [
  {
    id: "simple-design",
    title: "Simple by design.",
    desc: "A unified API for every stage of recommendation. Load data, pick a model, and train. Whether it's Matrix Factorization or Deep Learning, the code looks the same.",
    snippet: CODE_SNIPPET,
    image: "/assets/asset3.jpg",
    imageAlt: "Code editor aesthetic",
    align: "left" as const,
  },
  {
    id: "tdm",
    title: "Retrieval at Billion-Scale.",
    desc: "Alibaba-style Tree-based Deep Models (TDM) break the vector search limit. Retrieve from billion-item catalogs in O(log N) time with beam search deep networks.",
    codeLines: [
      "model = TDM(tree_depth=10, beam_size=20, node_dim=64)",
      "model.fit(user_ids=train_users, item_ids=train_items, ratings=train_ratings)",
      "recommendations = model.recommend(user_id=1, top_k=10)"
    ],
    image: "/assets/asset2.jpg",
    imageAlt: "Tree structure efficiency",
    align: "right" as const,
  },
  {
    id: "nasrec",
    title: "Neural Architecture Search.",
    desc: "Let CoreRec design your model. Reinforcement learning automatically discovers optimal neural architectures that balance accuracy, latency, and model size.",
    codeLines: [
      "model = NASRec(embedding_dim=64, epochs=20, batch_size=256)",
      "model.fit(user_ids=train.users, item_ids=train.items, ratings=train.ratings)",
      "score = model.predict(user_id=1, item_id=100)"
    ],
    image: "/assets/asset6gif.gif",
    imageAlt: "Automated search process",
    align: "left" as const,
  },
  {
    id: "mmoe",
    title: "Optimize Clicks & Conversions.",
    desc: "Why choose one metric? Train multi-task models like Google's MMoE and Tencent's PLE to balance competing objectives—maximizing engagement while minimizing churn.",
    codeLines: [
      "model = MMoE(num_experts=4, expert_dim=64, task_names=['click', 'conversion'])",
      "model.fit(user_ids=train_users, item_ids=train_items, ratings=train_ratings)",
      "score = model.predict(user_id=1, item_id=100)"
    ],
    image: "/assets/asset1.png",
    imageAlt: "Multi-objective network",
    align: "right" as const,
  },
  {
    id: "multimodal",
    title: "Deep Multimodal Fusion.",
    desc: "Go beyond collaborative filtering. CoreRec fuses text, image, audio, and behavioral embeddings using attention mechanisms to understand content.",
    codeLines: [
      "fusion = AttentionFusion(modality_dims=[768, 512, 128], output_dim=256)",
      "fused = fusion(text_emb, image_emb, audio_emb)",
      "# Deep content understanding with attention"
    ],
    image: "/assets/asset3.jpg",
    imageAlt: "Content understanding",
    align: "left" as const,
  },
  {
    id: "serving",
    title: "Production Ready Serving.",
    desc: "Built-in serving layer handles real-time inference with minimal latency. Deploy your trained models to Kubernetes or bare metal environments.",
    codeLines: [
      "server = CoreRecServer(model)",
      "server.serve(host='0.0.0.0', port=8000)",
      "# Ready for gRPC/HTTP requests"
    ],
    image: "/assets/asset4.jpg",
    imageAlt: "Production infrastructure",
    align: "right" as const,
  }
];

export default function Landing() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Transition when banner height (approx 40px) is passed
      setIsScrolled(window.scrollY > 45);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#fdfcf8] text-[#27272a] selection:bg-[#d4a373] selection:text-white overflow-x-hidden flex flex-col font-sans">
      
      {/* ─── Nav ─── */}
      {/* Placeholder to prevent layout jump when switching to fixed */}
      <div className={`${isScrolled ? "h-[75px]" : "h-0"}`} />
      
      <nav 
        className={`z-50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isScrolled 
            ? "fixed top-0 md:top-6 left-0 md:left-1/2 md:-translate-x-1/2 w-full md:w-[95%] md:max-w-3xl md:rounded-full border-b md:border border-[#e5e5e5] bg-[#fdfcf8]/95 md:bg-white/95 backdrop-blur-md py-4 md:py-3 px-4 md:px-6 md:px-8" 
            : "sticky top-0 w-full border-b border-[#e5e5e5]/20 bg-white/5 backdrop-blur-2xl py-4 md:py-6 px-4 md:px-6"
        }`}
      >
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto gap-4 md:gap-5 min-w-0">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/coreRec.svg"
              alt="CoreRec"
              width={24}
              height={24}
              className="opacity-90"
            />
            <span className="text-lg font-medium tracking-tight">CoreRec</span>
          </Link>
          <div className="flex items-center gap-4 md:gap-5 text-sm font-medium hidden sm:flex flex-1 justify-end min-w-0 shrink">
            <Link href="/" className="text-[#27272a] border-b-2 border-[#27272a] pb-0.5 whitespace-nowrap">Home</Link>
            <Link href="/philosophy" className="text-[#71717a] hover:text-[#27272a] transition-colors border-b-2 border-transparent hover:border-[#27272a]/30 pb-0.5 whitespace-nowrap">Philosophy</Link>
            <a href="#showcase" className="text-[#71717a] hover:text-[#27272a] transition-colors border-b-2 border-transparent hover:border-[#27272a]/30 pb-0.5 whitespace-nowrap">Showcase</a>
            <a href="/docs" className="text-[#71717a] hover:text-[#27272a] transition-colors border-b-2 border-transparent hover:border-[#27272a]/30 pb-0.5 whitespace-nowrap">Docs</a>
            <a
              href="https://github.com/vishesh9131/CoreRec"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#71717a] hover:text-[#27272a] transition-colors border-b-2 border-transparent hover:border-[#27272a]/30 pb-0.5 whitespace-nowrap"
            >
              GitHub
            </a>
            {isScrolled && (
              <Link href="/docs" className="ml-2 px-4 py-2 text-xs font-medium uppercase tracking-widest text-[#27272a] bg-[#ebe5da] border border-[#d4a373]/50 hover:bg-[#e5ddd0] hover:border-[#d4a373] transition-colors shrink-0">
                Get Started
              </Link>
            )}
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
            <Link href="/" className="text-sm font-medium text-[#27272a] border-b-2 border-[#27272a] pb-1 w-fit" onClick={() => setNavOpen(false)}>Home</Link>
            <Link href="/philosophy" className="text-sm font-medium text-[#71717a] hover:text-[#27272a]" onClick={() => setNavOpen(false)}>Philosophy</Link>
            <a href="#showcase" className="text-sm font-medium text-[#71717a] hover:text-[#27272a]" onClick={() => setNavOpen(false)}>Showcase</a>
            <a href="/docs" className="text-sm font-medium text-[#71717a] hover:text-[#27272a]" onClick={() => setNavOpen(false)}>Docs</a>
            <a href="https://github.com/vishesh9131/CoreRec" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#71717a] hover:text-[#27272a]" onClick={() => setNavOpen(false)}>GitHub</a>
            <Link href="/docs" className="text-sm font-medium px-4 py-2 mt-2 border border-[#d4a373]/50 bg-[#ebe5da] hover:border-[#d4a373] w-fit" onClick={() => setNavOpen(false)}>Get Started</Link>
          </div>
        )}
      </nav>

      <main className="flex-1 w-full">
        
        {/* ─── Editorial Hero Section ─── */}
        <section className="relative min-h-0 md:min-h-[90vh] flex flex-col items-center justify-center py-12 md:py-20 overflow-hidden">
          
          <div className="relative w-full max-w-7xl px-4 md:px-12 grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:gap-0">
            
            {/* Typography - first on mobile, left on desktop */}
            <div className="col-span-1 md:col-span-5 relative z-20 md:-mr-32 order-1 md:order-none">
               <Reveal>
                 <a href="https://pepy.tech/projects/corerec?timeRange=threeMonths&category=version&includeCIDownloads=true&granularity=daily&viewType=line&versions=0.5.0%2C0.4.1.9%2C0.4.1.8" target="_blank" rel="noopener noreferrer" className="block text-xs text-[#71717a] hover:text-[#27272a] transition-colors mb-2 md:mb-3 md:pl-2">
                   38,000+ downloads
                 </a>
                 <span className="block text-xs font-medium uppercase tracking-[0.2em] text-[#71717a] mb-2 md:mb-4 md:pl-2">
                   production grade
                 </span>
                 <h1 className="text-[12vw] sm:text-[14vw] md:text-[9rem] font-semibold tracking-tighter text-[#27272a] leading-[0.85] select-none">
                   CoreRec
                 </h1>
                 <div className="flex items-center gap-4 mt-4 md:mt-8 md:pl-2">
                   <span className="text-sm font-mono text-[#71717a]">01</span>
                   <div className="h-px w-12 bg-[#d4a373]" />
                   <span className="text-sm font-mono text-[#71717a]">05</span>
                 </div>
                 <a href="/docs" className="inline-block mt-6 md:mt-8 px-6 py-3 text-sm font-medium uppercase tracking-widest text-[#27272a] bg-[#ebe5da] border border-[#d4a373]/50 hover:bg-[#e5ddd0] hover:border-[#d4a373] transition-colors select-none [-webkit-tap-highlight-color:transparent]">
                   Get Started
                 </a>
               </Reveal>
            </div>

            {/* Image + Definition - stacked on mobile, overlay on desktop */}
            <div className="col-span-1 md:col-span-7 relative z-10 w-full flex flex-col md:block gap-4 md:gap-0 order-2 md:order-none">
               <Reveal delay={0.2} className="relative w-full max-w-md mx-auto md:mx-0 md:max-w-xl aspect-[4/5] bg-[#e5e5e5] shrink-0">
                  <Image 
                    src="/assets/asset1.png" 
                    fill 
                    className="object-cover" 
                    alt="Hero" 
                    priority
                  />
                  <div className="absolute -top-12 -right-6 md:-top-16 md:-right-16 w-32 h-32 md:w-48 md:h-48 z-40 hidden md:flex items-center justify-center animate-[spin_12s_linear_infinite]">
                     <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                        <text className="text-[11px] uppercase font-bold tracking-[0.2em] fill-[#27272a]">
                           <textPath href="#circlePath" startOffset="0%">
                              • View Documentation • Get Started • 
                           </textPath>
                        </text>
                     </svg>
                  </div>
               </Reveal>

               <Reveal delay={0.4} className="relative md:absolute md:-bottom-12 md:-right-12 z-30 w-full md:w-80 bg-[#0a0a0a] p-6 md:p-10 text-[#fdfcf8]">
                  <h3 className="text-xs font-medium text-[#71717a] mb-3 md:mb-4 uppercase tracking-widest">Definition</h3>
                  <p className="text-sm leading-relaxed text-[#e4e4e7] font-light font-serif">
                     CoreRec is the application of deep learning to recommendation systems that establishes an elegant, unified framework for research and production.
                  </p>
               </Reveal>
            </div>

          </div>
        </section>


        {/* ─── Showcase Section ─── */}
        <section id="showcase" className="mb-32 space-y-24 md:space-y-32 px-6 max-w-7xl mx-auto pt-20">
          {FINAL_SHOWCASE.map((item, index) => (
            <Reveal key={item.id} className="w-full">
              <div className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${
                item.align === "right" ? "md:flex-row-reverse" : ""
              }`}>
                {/* Text Side */}
                <div className="flex-1 space-y-6 w-full">
                  <h2 className="text-3xl md:text-4xl font-light text-[#27272a]">{item.title}</h2>
                  <p className="text-lg text-[#71717a] font-light leading-relaxed max-w-lg">
                    {item.desc}
                  </p>
                  
                  {/* Show snippet block for the first one */}
                  {item.snippet && (
                    <div className="mt-8 bg-[#f4f1ea] border border-[#f0f0f0] rounded-sm p-6 overflow-hidden relative group w-full max-w-lg">
                      <div className="absolute top-3 left-4 flex gap-1.5 opacity-50">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#71717a]/30" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#71717a]/30" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#71717a]/30" />
                      </div>
                      <div className="font-mono text-xs md:text-sm overflow-x-auto text-[#27272a] pt-4">
                        <pre className="whitespace-pre-wrap">{item.snippet}</pre>
                      </div>
                    </div>
                  )}

                  {/* Show code lines for others */}
                  {item.codeLines && (
                    <CodeLines lines={item.codeLines} />
                  )}
                </div>

                {/* Image Side */}
                <div className="flex-1 w-full relative min-h-[300px] md:min-h-[400px] aspect-[4/3] group">
                  <div className="absolute inset-0 bg-[#f4f1ea] rounded-sm transform transition-transform duration-700 group-hover:scale-[1.02] overflow-hidden border border-[#e5e5e5]">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    {/* Subtle overlay for better text contrast if needed, mostly for style */}
                    <div className="absolute inset-0 bg-black/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                  
                  {/* Decorative element behind */}
                  <div className={`absolute -z-10 w-full h-full top-6 ${item.align === 'left' ? 'left-6' : 'right-6'} border border-[#d4a373]/30 rounded-sm`} />
                </div>
              </div>
            </Reveal>
          ))}
        </section>

        {/* ─── Engines List ─── */}
        <section id="engines" className="mb-32 max-w-4xl mx-auto text-center py-20 border-t border-[#f0f0f0] px-6">
          <Reveal>
            <h2 className="text-3xl font-light mb-4">Engine Architecture</h2>
            <p className="text-[#71717a] mb-12 max-w-lg mx-auto font-light">
              Built on PyTorch. Optimized for performance. Ready for production.
            </p>
          </Reveal>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {[
              "Collaborative Filtering", "Content-Based", "Deep Learning",
              "SVD", "ALS", "NCF", "LightGCN", "DeepFM", "DCN", "Transformers",
              "Multi-Tower", "Seq2Seq", "AutoInt", "Graph Neural Networks"
            ].map((tag, i) => (
              <Reveal key={tag} delay={i * 0.03} className="inline-block">
                <span className="px-4 py-2 bg-[#f4f1ea] border border-transparent hover:border-[#d4a373] rounded-full text-sm text-[#71717a] hover:text-[#27272a] transition-all duration-300 cursor-default">
                  {tag}
                </span>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ─── Footer ─── */}
        <footer className="py-12 border-t border-[#e5e5e5] flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-[#71717a] font-light mt-auto px-6 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2">
            <Image src="/coreRec.svg" alt="Logo" width={16} height={16} className="opacity-50 grayscale hover:grayscale-0 transition-all invert" />
            <span>© 2026 CoreRec Framework</span>
          </div>
          <div className="flex gap-8">
            <a href="/docs" className="hover:text-[#27272a] transition-colors underline-offset-4 hover:underline">Documentation</a>
            <a href="#" className="hover:text-[#27272a] transition-colors underline-offset-4 hover:underline">License</a>
            <a href="#" className="hover:text-[#27272a] transition-colors underline-offset-4 hover:underline">Twitter</a>
          </div>
        </footer>
      </main>
    </div>
  );
}