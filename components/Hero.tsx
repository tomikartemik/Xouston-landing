"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Code2, Smartphone, Globe, Sparkles } from 'lucide-react';
import Scene from './three/Scene';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Elements - matching Contact page style */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-emerald-900/20" />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      <div className="absolute h-96 w-96 -top-48 -right-48 rounded-full bg-indigo-500/30 blur-3xl" />
      <div className="absolute h-96 w-96 -bottom-48 -left-48 rounded-full bg-emerald-500/30 blur-3xl" />

      <Scene />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="sticky top-24">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex items-center space-x-2 mb-6"
              >
                <div className="relative flex items-center px-4 py-2 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
                  <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500/10 to-emerald-500/10 border border-white/10">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <span className="ml-3 text-sm text-indigo-200">Next Generation Development</span>
                </div>
              </motion.div>

              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-emerald-500">
                  Building Digital
                </span>
                <br />
                <span className="text-white">Excellence</span>
              </h2>

              <p className="text-xl text-indigo-200 mb-8">
                We craft exceptional web and mobile experiences that drive innovation and growth for forward-thinking businesses.
              </p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto group relative mb-4 sm:mb-0 sm:mr-4"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative flex items-center justify-center px-6 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-emerald-500 text-white font-medium">
                  <span>Start Your Project</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto relative"
              >
                <div className="relative flex items-center justify-center px-6 py-4 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 text-white font-medium hover:bg-white/10 transition-colors">
                  <span>Explore Services</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative space-y-6">
              {[
                {
                  icon: Code2,
                  title: "Web Development",
                  description: "Modern, responsive websites built with cutting-edge technology",
                  gradient: "from-indigo-500 to-blue-500"
                },
                {
                  icon: Smartphone,
                  title: "Mobile Development",
                  description: "Native and cross-platform mobile applications",
                  gradient: "from-emerald-500 to-cyan-500"
                },
                {
                  icon: Globe,
                  title: "Global Reach",
                  description: "Scalable solutions for worldwide deployment",
                  gradient: "from-blue-500 to-violet-500"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative flex items-center space-x-6 p-4 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/10 to-emerald-500/10 border border-white/10">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="text-indigo-200">{item.description}</p>
                    </div>
                    <ArrowRight className="absolute right-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-white" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}