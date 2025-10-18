"use client"

import React, { useState, useEffect } from 'react';
import { ExternalLink, Zap, ChevronDown, Sparkles, Terminal, FolderTree, Rocket, Code2, ArrowRight, Mail, Star, Github } from 'lucide-react';

export default function LandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [starsCount, setStarsCount] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setStarsCount(prev => {
        if (prev >= 50) {
          clearInterval(timer);
          return 50;
        }
        return prev + 2;
      });
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const scrollToInstall = () => {
    document.getElementById('install')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20">
        <div 
          className="absolute inset-0 opacity-30 transition-all duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 50%)`
          }}
        />
      </div>

      {/* Floating orbs */}
      <div className="fixed top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

      {/* Navbar */}
      <nav className="relative z-50 px-6 py-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-purple-500 to-cyan-500 p-2 rounded-lg">
              <FolderTree className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              DirCraft
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://marketplace.visualstudio.com/items?itemName=FolderStructureGenerator.DirCraft" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full hover:bg-white/20 transition-all flex items-center gap-2 group"
            >
              <ExternalLink size={18} className="group-hover:rotate-12 transition-transform" />
              Get Extension
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 pt-20 pb-32">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full mb-8 hover:border-purple-500/50 transition-all">
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-sm text-gray-300">Now available on VS Code Marketplace</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <span className="text-white">Meet </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              DirCraft
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-6 max-w-3xl mx-auto leading-relaxed">
            The VS Code extension that turns folder creation from a tedious chore into a single command
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Generate complex directory structures in milliseconds. No more endless right-clicks. No more typos. Just pure productivity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="https://marketplace.visualstudio.com/items?itemName=FolderStructureGenerator.DirCraft"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <ExternalLink size={24} />
                Install from Marketplace
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <button 
              onClick={scrollToInstall}
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
            >
              See How It Works
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Star size={18} className="text-yellow-400 fill-yellow-400" />
              <span>{starsCount}+ installs</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <Zap size={18} className="text-cyan-400" />
              <span>Free & Open Source</span>
            </div>
          </div>

          {/* Animated code demo */}
          <div className="relative max-w-3xl mx-auto mt-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur-xl opacity-50"></div>
            <div className="relative bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-sm text-gray-500 ml-4">project-structure.txt</span>
              </div>
              
              <div className="font-mono text-left space-y-1 text-sm md:text-base">
                <div className="text-cyan-400">my-app/</div>
                <div className="text-purple-400 ml-4">├── src/</div>
                <div className="text-pink-400 ml-8">│   ├── components/</div>
                <div className="text-pink-400 ml-12">│   │   ├── Header.jsx</div>
                <div className="text-pink-400 ml-12">│   │   └── Footer.jsx</div>
                <div className="text-pink-400 ml-8">│   ├── pages/</div>
                <div className="text-pink-400 ml-8">│   ├── utils/</div>
                <div className="text-pink-400 ml-8">│   └── styles/</div>
                <div className="text-purple-400 ml-4">├── public/</div>
                <div className="text-purple-400 ml-4">└── tests/</div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-gray-500 text-xs md:text-sm">Ctrl + Shift + P → DirCraft: Create Structure</span>
                  <div className="flex items-center gap-2 text-green-400 text-xs md:text-sm animate-pulse">
                    <Zap size={16} />
                    ✓ Created in 0.15s
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-600" />
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative z-10 py-16 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                10min → 2sec
              </div>
              <div className="text-gray-400 text-sm">Time Saved</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-gray-400 text-sm">Error-Free</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                ∞
              </div>
              <div className="text-gray-400 text-sm">Nesting Depth</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                0
              </div>
              <div className="text-gray-400 text-sm">Configuration</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 py-32 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Developers <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Love</span> DirCraft
            </h2>
            <p className="text-xl text-gray-400">Built by developers, for developers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Zap,
                title: 'Lightning Fast',
                desc: 'Create hundreds of nested folders and files in milliseconds. Stop wasting time on repetitive clicks.',
                gradient: 'from-yellow-500 to-orange-500'
              },
              {
                icon: Terminal,
                title: 'Natural Syntax',
                desc: 'Write your structure using simple indentation. If you can type it, DirCraft can build it instantly.',
                gradient: 'from-green-500 to-emerald-500'
              },
              {
                icon: FolderTree,
                title: 'Unlimited Complexity',
                desc: 'No limits on depth or structure. Build enterprise-level project architectures with ease.',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Rocket,
                title: 'Zero Setup',
                desc: 'Install and start creating immediately. No config files, no learning curve, just instant productivity.',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: Code2,
                title: 'Any Tech Stack',
                desc: 'Works with React, Vue, Angular, Node, Python, Django, Laravel—any framework or custom structure.',
                gradient: 'from-red-500 to-rose-500'
              },
              {
                icon: Sparkles,
                title: 'Perfect Accuracy',
                desc: 'Never worry about typos or missing folders again. Every structure is created exactly as specified.',
                gradient: 'from-indigo-500 to-violet-500'
              }
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all hover:scale-105 hover:border-white/20"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}></div>
                <div className={`bg-gradient-to-br ${feature.gradient} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="relative z-10 py-32 px-6 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Stop the Madness
          </h2>
          <p className="text-center text-gray-400 mb-20 text-lg">
            See how DirCraft transforms your workflow from frustrating to fantastic
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-500/10 border-2 border-red-500/30 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                THE OLD WAY
              </div>
              <div className="text-red-400 font-bold mb-6 flex items-center gap-2 text-2xl pt-4">
                <span className="text-3xl">😫</span> Manual Hell
              </div>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Right click... New Folder... Type name... Click... Repeat endlessly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Make a typo? Start over. Forget a folder? Redo everything</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Lose your creative flow while clicking through menus</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Complex structures? Good luck staying organized</span>
                </li>
                <li className="text-red-400 font-bold pt-4 border-t border-red-500/30 flex items-center gap-2">
                  <span className="text-2xl">⏱️</span>
                  <span>Result: 10+ minutes of tedious clicking</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-500/10 border-2 border-green-500/30 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                WITH DIRCRAFT
              </div>
              <div className="text-green-400 font-bold mb-6 flex items-center gap-2 text-2xl pt-4">
                <span className="text-3xl">⚡</span> Pure Magic
              </div>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Write your structure in plain text with simple indentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Hit Ctrl+Shift+P and select Create Folder Structure from Text</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Watch your entire structure materialize instantly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Perfect accuracy, unlimited complexity, zero stress</span>
                </li>
                <li className="text-green-400 font-bold pt-4 border-t border-green-500/30 flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  <span>Result: 2 seconds of pure productivity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="install" className="relative z-10 py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">Getting Started is Dead Simple</h2>
          <p className="text-center text-gray-400 mb-20 text-lg">Three steps to folder creation nirvana</p>

          <div className="space-y-12">
            {[
              { 
                num: '01', 
                title: 'Install DirCraft', 
                desc: 'Open VS Code, go to Extensions (Ctrl+Shift+X), search for "DirCraft", and click Install. Done in 5 seconds.',
                cta: 'Install Now',
                link: 'https://marketplace.visualstudio.com/items?itemName=FolderStructureGenerator.DirCraft'
              },
              { 
                num: '02', 
                title: 'Write Your Structure', 
                desc: 'Create a text file and write your folder structure using simple indentation. Like writing an outline—natural and intuitive.',
                cta: null
              },
              { 
                num: '03', 
                title: 'Create Instantly', 
                desc: 'Press Ctrl+Shift+P (Cmd+Shift+P on Mac), type "DirCraft", select "Create Structure", and watch the magic happen.',
                cta: null
              }
            ].map((step, i) => (
              <div key={i} className="flex gap-6 md:gap-8 items-start group">
                <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-br from-purple-500 to-cyan-500 bg-clip-text group-hover:scale-110 transition-transform flex-shrink-0">
                  {step.num}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-base md:text-lg mb-4">{step.desc}</p>
                  {step.cta && (
                    <a 
                      href={step.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all"
                    >
                      {step.cta}
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative z-10 py-32 px-6 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
            Perfect For Every Project
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'React Apps', desc: 'Components, hooks, pages, utils—perfect structure every time' },
              { title: 'Node.js APIs', desc: 'Routes, controllers, models, middleware in seconds' },
              { title: 'Microservices', desc: 'Multiple service structures with consistent architecture' },
              { title: 'Python Projects', desc: 'Modules, tests, configs organized instantly' },
              { title: 'Full-Stack Apps', desc: 'Client, server, shared—complete project scaffolding' },
              { title: 'Monorepos', desc: 'Complex multi-package structures made simple' }
            ].map((useCase, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all hover:scale-105">
                <h3 className="text-lg font-bold mb-2 text-purple-400">{useCase.title}</h3>
                <p className="text-gray-400 text-sm">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 blur-3xl"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Transform</span> Your Workflow?
              </h2>
              <p className="text-lg md:text-xl text-gray-400 mb-10">
                Join thousands of developers who&apos;ve ditched manual folder creation forever
              </p>
              <a 
                href="https://marketplace.visualstudio.com/items?itemName=FolderStructureGenerator.DirCraft"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-block relative px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-bold text-lg md:text-xl overflow-hidden transition-all hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <ExternalLink size={28} />
                  Install DirCraft Now
                  <Sparkles size={20} className="group-hover:rotate-180 transition-transform duration-500" />
                </span>
              </a>
              <p className="text-sm text-gray-500 mt-6">Free forever · Works on Windows, Mac, and Linux · No credit card required</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-gradient-to-br from-purple-500 to-cyan-500 p-2 rounded-lg">
              <FolderTree className="text-white" size={20} />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              DirCraft
            </span>
          </div>
          <p className="text-gray-500 mb-6">Built with ❤️ for developers who value their time</p>
          <div className="flex justify-center gap-6 text-sm text-gray-500">
            <a href="mailto:gaikwadsameer422@gmail.com" className="hover:text-purple-400 transition-colors flex items-center gap-2">
              <Mail size={16} />
              Contact
            </a>
            <a href="https://marketplace.visualstudio.com/items?itemName=FolderStructureGenerator.DirCraft" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors flex items-center gap-2">
              <ExternalLink size={16} />
              VS Code Marketplace
            </a>
          </div>
          <p className="text-gray-600 text-xs mt-6">© 2025 DirCraft. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}