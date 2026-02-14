import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, Github, Chrome, Cpu } from 'lucide-react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-deep-space">
      
      {/* 1. Ambient Background Animations (The "Glow") */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/40 rounded-full mix-blend-screen filter blur-[128px] animate-blob"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-amd-red/30 rounded-full mix-blend-screen filter blur-[128px] animate-blob animation-delay-2000"></div>

      {/* 2. Main Glass Container */}
      <div className="w-full max-w-5xl h-[650px] glass-panel rounded-3xl flex overflow-hidden relative z-10">
        
        {/* LEFT SIDE: The Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
          
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-2 flex items-center gap-2">
              <Cpu className="text-amd-red" /> MockMate AI
            </h1>
            <p className="text-gray-400 text-sm">
              Powered by <span className="text-amd-red font-semibold">AMD Instinct™</span> Accelerators.
            </p>
          </div>

          <h2 className="text-2xl font-semibold mb-2">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="text-gray-500 mb-6 text-sm">
            {isLogin ? 'Enter your credentials to access your dashboard.' : 'Start your journey to interview mastery.'}
          </p>

          {/* Animated Form Switcher */}
          <AnimatePresence mode="wait">
            <motion.form
              key={isLogin ? "login" : "signup"}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              {!isLogin && (
                <div className="relative group">
                  <User className="absolute left-4 top-3.5 h-5 w-5 text-gray-500 group-focus-within:text-white transition-colors" />
                  <input type="text" placeholder="Full Name" className="glass-input w-full rounded-xl py-3 pl-12 pr-4" />
                </div>
              )}
              
              <div className="relative group">
                <Mail className="absolute left-4 top-3.5 h-5 w-5 text-gray-500 group-focus-within:text-white transition-colors" />
                <input type="email" placeholder="Email Address" className="glass-input w-full rounded-xl py-3 pl-12 pr-4" />
              </div>

              <div className="relative group">
                <Lock className="absolute left-4 top-3.5 h-5 w-5 text-gray-500 group-focus-within:text-white transition-colors" />
                <input type="password" placeholder="Password" className="glass-input w-full rounded-xl py-3 pl-12 pr-4" />
              </div>

              <button className="w-full bg-gradient-to-r from-amd-red to-red-600 hover:from-red-500 hover:to-red-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-red-900/50 flex items-center justify-center gap-2 group mt-4">
                {isLogin ? 'Sign In' : 'Get Started'}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.form>
          </AnimatePresence>

          {/* Social Login */}
          <div className="mt-8">
            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-white/10"></div>
              <span className="flex-shrink-0 mx-4 text-gray-500 text-xs uppercase">Or continue with</span>
              <div className="flex-grow border-t border-white/10"></div>
            </div>
            
            <div className="flex gap-4 mt-4">
              <button className="flex-1 bg-white/5 border border-white/10 hover:bg-white/10 py-2.5 rounded-lg flex items-center justify-center transition-colors">
                <Chrome className="h-5 w-5 text-white" />
              </button>
              <button className="flex-1 bg-white/5 border border-white/10 hover:bg-white/10 py-2.5 rounded-lg flex items-center justify-center transition-colors">
                <Github className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-gray-400">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button 
              onClick={() => setIsLogin(!isLogin)} 
              className="text-white hover:text-amd-red font-semibold transition-colors underline decoration-amd-red/50 hover:decoration-amd-red"
            >
              {isLogin ? 'Sign up' : 'Log in'}
            </button>
          </p>
        </div>

        {/* RIGHT SIDE: The Visual Storytelling (Hidden on Mobile) */}
        <div className="hidden md:block w-1/2 relative">
           <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 to-black z-0"></div>
           {/* Replace this URL with any high-tech image you like */}
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-50 mix-blend-overlay"></div>
           
           <div className="absolute bottom-12 left-12 right-12 z-20">
             <div className="inline-block px-3 py-1 bg-amd-red/20 border border-amd-red/50 rounded-full text-amd-red text-xs font-bold mb-4">
               NEW FEATURE
             </div>
             <h3 className="text-3xl font-bold mb-3 leading-tight">Master your body language with AI Vision.</h3>
             <p className="text-gray-300 text-sm leading-relaxed">
               Our AMD-powered computer vision engine analyzes your eye contact, posture, and confidence in real-time, giving you the edge in your next MNC interview.
             </p>
           </div>
        </div>

      </div>
    </div>
  );
};

export default AuthPage;