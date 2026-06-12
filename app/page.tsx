'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  Users, 
  Award, 
  ChevronRight, 
  Check, 
  ExternalLink, 
  DollarSign, 
  Clock, 
  BookOpen, 
  ShieldCheck, 
  MessageSquare, 
  Briefcase, 
  ChevronDown, 
  Copy, 
  Calculator, 
  ArrowRight, 
  Milestone, 
  Percent, 
  AlertTriangle,
  Menu,
  X,
  Sparkles,
  Smartphone,
  CheckCircle2,
  Calendar,
  Layers,
  Play,
  Pause,
  Search,
  Lock,
  Unlock,
  Database,
  RefreshCw
} from 'lucide-react';

const HTML_TEMPLATE = "";

export default function Home() {
  const [activeTab, setActiveTab] = useState<'blueprint' | 'vip'>('blueprint');
  
  
  
  // Mobile Nav menu toggling
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Position Size Calculator states in React
  const [balance, setBalance] = useState<number>(10000);
  const [riskPercent, setRiskPercent] = useState<number>(1);
  const [stopLoss, setStopLoss] = useState<number>(15);
  const [calculatorPair, setCalculatorPair] = useState<string>("XAUUSD");

  const getPairMultiplier = (pair: string) => {
    switch (pair) {
      case "BTCUSD":
      case "US30":
        return 1;
      case "XAUUSD":
      case "EURUSD":
      case "GBPUSD":
      default:
        return 10;
    }
  };

  const calculatedRiskValue = balance * (riskPercent / 100);
  const calculatedLots = calculatedRiskValue / (stopLoss * getPairMultiplier(calculatorPair));

  // Exness Uganda Deposit/Withdrawal Details Modal
  const [showBrokerModal, setShowBrokerModal] = useState<boolean>(false);
  // Telegram Signal Channel Details Modal
  const [showTelegramModal, setShowTelegramModal] = useState<boolean>(false);

  // Enrollment & Mobile Money simulation
  const [isEnrolled, setIsEnrolled] = useState<boolean>(false);
  const [selectedEnrollCourse, setSelectedEnrollCourse] = useState<string | null>(null);

  const getCoursePriceAndUGX = (courseName: string | null) => {
    switch (courseName) {
      case "Beginner Course":
        return { usd: 100, ugx: "370,000" };
      case "Intermediate Course":
        return { usd: 250, ugx: "925,000" };
      case "Advanced Course":
        return { usd: 1300, ugx: "4,800,000" };
      case "VIP Signals - Monthly":
        return { usd: 35, ugx: "130,000" };
      case "VIP Signals - 6 Months":
        return { usd: 150, ugx: "550,000" };
      case "VIP Signals - Yearly":
        return { usd: 250, ugx: "925,000" };
      case "1-on-1 Online Session":
        return { usd: 600, ugx: "2,200,000" };
      case "1-on-1 Physical Session":
        return { usd: 1000, ugx: "3,700,000" };
      default:
        // Fallback or old course checks
        if (courseName?.includes("January")) return { usd: 80, ugx: "280,000" };
        if (courseName?.includes("May")) return { usd: 75, ugx: "260,000" };
        return { usd: 100, ugx: "370,000" };
    }
  };

  const [showPaymentModal, setShowPaymentModal] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [mobileMoneyCarrier, setMobileMoneyCarrier] = useState<'mtn' | 'airtel'>('mtn');
  const [paymentStep, setPaymentStep] = useState<'details' | 'push_sim' | 'processing' | 'success'>('details');
  const [mpin, setMpin] = useState<string>("");
  const [txId, setTxId] = useState<string>("");

  // Portal Interaction States
  const [activePortalTab, setActivePortalTab] = useState<'signals' | 'curriculum' | 'handbook'>('signals');
  const [activeVideoIndex, setActiveVideoIndex] = useState<number>(0);
  const [handbookSearch, setHandbookSearch] = useState<string>("");
  const [playbackTime, setPlaybackTime] = useState<number>(45);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Diagnostic Quiz states
  const [quizOpen, setQuizOpen] = useState<boolean>(false);
  const [quizStep, setQuizStep] = useState<number>(0);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [quizScore, setQuizScore] = useState<number | null>(null);

  // AI Chat Widget states
  const [chatOpen, setChatOpen] = useState<boolean>(false);
  const [chatMessages, setChatMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([
    { role: 'assistant', content: "Hello expert! It's Ash Flipper support desk in Kampala. Are you ready to beat the retail trap and start executing with precision order flow? Ask me anything about our classes, SMC algorithmic setups, or setting up MTN mobile money on Exness." }
  ]);
  const [chatInput, setChatInput] = useState<string>("");
  const [isChatLoading, setIsChatLoading] = useState<boolean>(false);

  // Countdown timer in React state
  const [days, setDays] = useState<string>('07');
  const [hours, setHours] = useState<string>('12');
  const [mins, setMins] = useState<string>('45');
  const [secs, setSecs] = useState<string>('19');

  // Load state from localStorage on hydration
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedEnroll = localStorage.getItem('ash_traders_enrolled');
      const savedScore = localStorage.getItem('ash_traders_quiz_score');
      
      setTimeout(() => {
        if (savedEnroll === 'true') {
          setIsEnrolled(true);
        }
        if (savedScore) {
          setQuizScore(parseInt(savedScore));
        }
      }, 0);
    }
  }, []);

  // Timer simulation for playback bar
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setPlaybackTime((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Load TradingView script inside Next.js environment
  useEffect(() => {
    // Dynamically script tag
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.type = 'text/javascript';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      if (typeof TradingView !== 'undefined') {
        // @ts-ignore
        new TradingView.widget({
          width: '100%',
          height: '100%',
          symbol: 'FX:XAUUSD',
          interval: '60',
          timezone: 'Africa/Nairobi',
          theme: 'dark',
          style: '1',
          locale: 'en',
          toolbar_bg: '#121216',
          enable_publishing: false,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          container_id: 'tv-chart-next',
          studies: [
            'RSI@tv-basicstudies',
            'MASimple@tv-basicstudies'
          ]
        });
      }
    };
    document.head.appendChild(script);

    // Dynamic countdown timer targeting 7 days from load time
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference < 0) {
        clearInterval(interval);
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(String(d).padStart(2, '0'));
      setHours(String(h).padStart(2, '0'));
      setMins(String(m).padStart(2, '0'));
      setSecs(String(s).padStart(2, '0'));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

    // Live support bot submit handler with Next.js route fallback
  const sendChatMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || isChatLoading) return;

    const userMsg = chatInput.trim();
    const updatedMessages = [...chatMessages, { role: 'user', content: userMsg } as const];
    setChatMessages(updatedMessages);
    setChatInput("");
    setIsChatLoading(true);

    try {
      const response = await fetch('/api/support', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          messages: updatedMessages,
          quizContext: quizScore !== null ? `Score: ${quizScore}/5. Personality: ${quizScore < 3 ? "Retail Liquidity Trap" : "Qualified Algorithmic Candidate"}` : ""
        })
      });

      const data = await response.json();
      setChatMessages((prev) => [...prev, { role: 'assistant', content: data.text }]);
    } catch (err) {
      console.error("Chat request failed:", err);
      // Simulate static response offline
      setTimeout(() => {
        setChatMessages((prev) => [
          ...prev,
          { role: 'assistant', content: "Mambo, trader! My Kampala server gateway has high load right now, but you should know that real SMC trading is about identifying daily bias. Have you looked at our academy Mentorship Programs ($100 USD) or simulated an MTN Money transfer?" }
        ]);
      }, 1000);
    } finally {
      setIsChatLoading(false);
    }
  };

  // Quiz Handling
  const QUIZ_QUESTIONS = [
    {
      q: "When you spot a support level being tested multiple times, what is your primary move?",
      options: [
        { text: "Buy at the support line immediately with a stop loss just below it.", score: 0, feedback: "Incorrect. Supporting local retail trendlines/supports gets swept by liquidity sweeps from bank-level desk networks." },
        { text: "Wait for a sweep of the support (liquidity grab), look for a Market Structure Shift (MSS), and buy on the FVG return.", score: 1, feedback: "Outstanding! This is direct institutional order flow execution. You play where big liquidity sits." }
      ]
    },
    {
      q: "Where does an institutional Order Block originate?",
      options: [
        { text: "In a cluster of exponential moving average (EMA) crosses and RSI oversold peaks.", score: 0, feedback: "Wrong! EMAs and indicators are lagging metrics that generate false consolidation traps." },
        { text: "The last opposition sell/buy candle before a sharp displacement impulse that breaks market structure, trapping retail counterparties.", score: 1, feedback: "Spot on! That is exactly what traps counter-retailers and creates massive pricing order blocks." }
      ]
    },
    {
      q: "Your account balance is $10k. Ash Flipper broadcasts a Gold trade setup with a 20-pip stop loss. What lot size is mathematically precise for 1% risk?",
      options: [
        { text: "Open at 5.0 Lots minimum. High-leverage flipping is the fastest way to master Kampala markets!", score: 0, feedback: "Disastrous! Flips are purely speculative. A single 20-pip stop on a 5.0 lot wipes $1,000 (10% of portfolio)." },
        { text: "Trade at 0.5 Lots ($100 max risk). Consistent lot sizing assures account capital protection.", score: 1, feedback: "Genius! 0.5 Lots on XAUUSD with 20 pips stop limits risk strictly to $100 (1%), ensuring mathematical safety." }
      ]
    },
    {
      q: "During highly volatile US NFP events at 3:30 PM Kampala time, what is your approach?",
      options: [
        { text: "Set pre-event buy-stop and sell-stop pending logs to catch the massive news breakout.", score: 0, feedback: "High danger! Direct news spread expansions will slip your entry and trigger dual drawdowns instantly." },
        { text: "Wait for the news-driven liquidity sweeps to terminate, confirm structural order zones, and trade the subsequent algorithmic expansion.", score: 1, feedback: "Perfect. Letting institutions deliver first and trading their footprint is the professional analyst pattern." }
      ]
    },
    {
      q: "In order to successfully pass a major $100K prop firm challenge, you must:",
      options: [
        { text: "Trade with maximum lot sizes on day one, aiming to pass the challenge bounds in the first hour.", score: 0, feedback: "Failure path. Prop firms specifically filter for lottery traders. Over-leveraged sizing breaks consistency limits." },
        { text: "Apply defensive risk principles (0.5% - 1% per setup) focusing on premium 1:3 reward-to-risk setups.", score: 1, feedback: "Passed! High RR ratios combined with micro-drawdowns are the secret of certified funded Kampala traders." }
      ]
    }
  ];

  const handleSelectQuizAnswer = (optionIdx: number) => {
    const currentQuestion = QUIZ_QUESTIONS[quizStep];
    const answerScore = currentQuestion.options[optionIdx].score;
    const newAnswers = [...quizAnswers, answerScore];
    setQuizAnswers(newAnswers);

    if (quizStep < QUIZ_QUESTIONS.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      const calculatedScore = newAnswers.reduce((a, b) => a + b, 0);
      setQuizScore(calculatedScore);
      if (typeof window !== 'undefined') {
        localStorage.setItem('ash_traders_quiz_score', String(calculatedScore));
      }
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers([]);
    setQuizScore(null);
  };

  // Mobile money deposit simulation
  const initiateEnrollment = (course: string) => {
    setSelectedEnrollCourse(course);
    setPaymentStep('details');
    setPhoneNumber("");
    setMpin("");
    setShowPaymentModal(true);
  };

  const handleMobileMoneySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) return;
    
    setPaymentStep('push_sim');
  };

  const triggerMockMpesaMtnPush = () => {
    setPaymentStep('processing');
    
    // Create random receipt details
    const cleanNum = Math.floor(100000 + Math.random() * 900000);
    setTxId(`${mobileMoneyCarrier.toUpperCase()}-UGX-${cleanNum}-2026`);

    setTimeout(() => {
      setPaymentStep('success');
      setIsEnrolled(true);
      if (typeof window !== 'undefined') {
        localStorage.setItem('ash_traders_enrolled', 'true');
      }
    }, 2500);
  };

  // Unsubscribe / Clear mock purchase
  const handleResetPurchase = () => {
    setIsEnrolled(false);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('ash_traders_enrolled');
    }
  };

  // Demo Student Video portal items
  const STUDENT_LECTURES = [
    {
      title: "Module 1: Basic Trap Dynamics & Order Blocks Foundations",
      duration: "18 minutes",
      description: "How retail chart patterns are constructed as counterparts to central institutional pools. We introduce standard price sweeps.",
      isFree: true,
      videoPlaceholder: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Module 2: Liquidity Capture Models & Market Structure Shift (MSS)",
      duration: "25 minutes",
      description: "Identifying real displacement candles that break structure from low volume retail consolidation patterns.",
      isFree: false,
      videoPlaceholder: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Module 3: High-Probability Fair Value Gaps (FVG) Entries",
      duration: "21 minutes",
      description: "Setting limit orders on specific algorithmic market imbalances. Calculate standard premium discount ranges.",
      isFree: false,
      videoPlaceholder: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Module 4: Kampala Prop Desk Framework: Passing the $100K Challenge",
      duration: "30 minutes",
      description: "Step-by-step risk management logic to defend drawdowns and secure certified funding under FTMO guidelines.",
      isFree: false,
      videoPlaceholder: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
    }
  ];

  // Simulated Signals
  const LIVE_VIP_SIGNALS = [
    {
      pair: "XAUUSD (GOLD)",
      direction: "BUY LIMIT",
      entry: "2312.40",
      sl: "2304.00",
      tp: "2335.00",
      risk: 15,
      status: "ACTIVE",
      timestamp: "Posted 25 mins ago"
    },
    {
      pair: "BTCUSD",
      direction: "BUY STOP",
      entry: "68450.00",
      sl: "67900.00",
      tp: "70200.00",
      risk: 550,
      status: "TARGET HIT",
      timestamp: "Posted 3 hours ago"
    },
    {
      pair: "EURUSD",
      direction: "SELL LIMIT",
      entry: "1.08440",
      sl: "1.08620",
      tp: "1.07910",
      risk: 18,
      status: "PENDING",
      timestamp: "Posted 5 hours ago"
    }
  ];

  // Search filter for algorithmic handbook
  const HANDBOOK_CHAPTERS = [
    { title: "Chapter 1: The Liquidity Sweep Paradigm", body: "Central banks and market makers never operate on retail trendlines. They locate pools of sell-stop orders resting below visual swing lows, sweep them, and then disperse volume in the true directional expansion." },
    { title: "Chapter 2: Fair Value Gap (FVG) Anatomy", body: "An FVG is created by a highly displaced single-direction candle where order imbalance leaves pricing pocket gaps. Price historically returns to fill at least 50% of this imbalance before continuing." },
    { title: "Chapter 3: Market Structure shifts (MSS)", body: "Unlike a minor break of structure (BOS), an MSS is confirmed when a swing point is broken with a massive displacement candle, signifying bank-level interest shifting from bearish to bullish flow." },
    { title: "Chapter 4: MTN & Airtel Mobile Spread Mechanics", body: "Trading in Uganda means handling instant cash transitions. Maintain separate accounts on Exness matching localized mobile money, mitigating currency slippage on high-spread gold setups." }
  ];

  const filteredHandbook = HANDBOOK_CHAPTERS.filter(ch => 
    ch.title.toLowerCase().includes(handbookSearch.toLowerCase()) || 
    ch.body.toLowerCase().includes(handbookSearch.toLowerCase())
  );


  return (
    <div className="min-h-screen bg-[#0C0C0E] text-white selection:bg-[#00E5FF]/20 selection:text-[#00E5FF] font-sans antialiased relative overflow-x-hidden">
      
      {/* Background radial ambient lights */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-10 right-1/4 w-[600px] h-[600px] bg-yellow-500/3 rounded-full blur-[150px] pointer-events-none z-0"></div>

      {/* STICKY GLASSMORPHISM HEADER */}
      <header className="sticky top-0 z-50 bg-[#161618]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
          
          <a href="#" className="flex items-center gap-2.5 select-none">
            <div className="w-9 h-9 rounded-lg overflow-hidden border border-white/10 flex items-center justify-center bg-black relative shrink-0">
              <img 
                src="https://lh3.googleusercontent.com/d/14UHl8tYXk0aA4bxMw6nQdLnSSwZcoZfa" 
                alt="Ash Traders Hub Logo" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-base text-white font-sans leading-none">
                ASH TRADERS <span className="text-[#00E5FF]">HUB</span>
              </span>
              <span className="text-[8px] font-mono tracking-widest text-[#FFD700] uppercase leading-none mt-1 font-bold">Miiro Ashiraf (C.E.O)</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium hover:text-[#00E5FF] text-white/70 tracking-wide transition-colors">Home</a>
            <a href="#courses" className="text-sm font-medium text-white/70 hover:text-[#00E5FF] transition-colors">Academy Courses</a>
            <a href="#broker" className="text-sm font-medium text-white/70 hover:text-[#00E5FF] transition-colors">Uganda Broker Connection</a>
            <a href="#charts" className="text-sm font-medium text-white/70 hover:text-[#00E5FF] transition-colors">Live Market Stream</a>
            <a href="#bootcamp" className="text-sm font-semibold text-slate-200">
              <span className="px-2.5 py-1 rounded bg-[#FFD700]/10 text-[#FFD700] text-[11px] border border-[#FFD700]/20 animate-pulse font-mono tracking-wider">
                3-DAY LIVE BOOT CAMP
              </span>
            </a>
          </nav>

          {/* Download standby button + CTA */}
          <div className="hidden md:flex items-center gap-3.5">
            
            <button 
              onClick={() => setShowTelegramModal(true)} 
              className="bg-[#00E5FF] hover:bg-[#00d0e6] text-black font-bold px-4 py-2 text-xs rounded-md border border-white/10 shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current text-black" />
              Join Telegram Free
            </button>
          </div>

          {/* Mobile Menu Toggler */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-450 hover:text-white p-1 select-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#101014] border-t border-white/[0.05] shadow-2xl px-6 py-6 space-y-4 font-mono text-sm"
            >
              <a href="#" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 hover:text-[#00E5FF]">Home</a>
              <a href="#courses" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-400 hover:text-[#00E5FF]">Academy Courses</a>
              <a href="#broker" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-400 hover:text-[#00E5FF]">Ugandan Broker Guide</a>
              <a href="#charts" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-400 hover:text-[#00E5FF]">Market Analysis Chart</a>
              <a href="#bootcamp" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[#FFD700] font-semibold">Live Virtual Boot Camp</a>
              
              <div className="pt-4 border-t border-white/[0.05] grid grid-cols-1 gap-2.5">
                
                <button 
                  onClick={() => { setMobileMenuOpen(false); setShowTelegramModal(true); }}
                  className="w-full text-center py-3 rounded-lg bg-[#00E5FF] text-[#0C0C0E] font-bold"
                >
                  Join Telegram Channel
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Uganda flag regional authority pill tag */}
        <div className="flex flex-col items-center mb-8">
          <span className="text-[#00E5FF] text-sm font-bold tracking-widest uppercase mb-4">Certified Financial Analyst</span>
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] shadow-xl text-center">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-xs tracking-wider text-slate-300">EAST AFRICA&apos;S MASTER CLASS</span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1.5 text-xs text-white">
              🇺🇬 Lead Analyst <strong className="text-[#FFD700]">Ash Flipper</strong>
            </span>
          </div>
        </div>

        <div className="text-center max-w-5xl mx-auto">
          {/* Main big impact heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 font-sans text-white">
            Master the Markets.<br />
            <span className="text-[#FFD700] glow-gold">Build Generational</span><br />
            Wealth.
          </h1>

          <p className="mt-8 text-white/60 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Stop losing accounts. Learn how Ash Flipper, certified Ugandan Financial Analyst, applies institutional order block algorithms and precise risk modules to pass global prop firms and build self-sufficient traders.
          </p>

          {/* Interactive Dual CTAs with micro-animations */}
          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowTelegramModal(true)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#00E5FF] text-[#0C0C0E] font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:bg-[#00d0e6] transition-colors flex items-center justify-center gap-2"
            >
              Join Free Telegram
              <ArrowRight className="w-4 h-4 text-[#0C0C0E]" />
            </motion.button>

            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#courses"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2"
            >
              View Courses
            </motion.a>
          </div>

          {/* CEO Spotlight in React */}
          <div className="mt-12 flex items-center justify-center gap-3.5 select-none bg-white/[0.02] border border-white/[0.05] p-3.5 rounded-full max-w-max mx-auto shadow-xl">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#FFD700] shadow-[#FFD700]/10 shadow-lg shrink-0">
              <img 
                src="https://lh3.googleusercontent.com/d/KuVazwpqK3EHd_ZrPGL_JMhEgF82bJFV" 
                alt="CEO Ash Flipper / Miiro Ashiraf" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-left font-sans">
              <span className="block text-sm font-bold text-white leading-none">Miiro Ashiraf (Ash Flipper)</span>
              <span className="text-[10px] font-mono text-[#FFD700] font-bold tracking-widest uppercase leading-none mt-1 block">FOUNDER & C.E.O, ASH TRADERS HUB</span>
            </div>
          </div>
          <div className="mt-16 pt-12 border-t border-white/[0.05] grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto">
            <div className="bg-[#161618] border border-white/5 rounded-xl p-4">
              <span className="block text-[#00E5FF] font-bold text-2xl font-mono leading-none">2,500+</span>
              <span className="text-[10px] text-white/45 uppercase tracking-widest mt-2 block font-sans">Students</span>
            </div>
            <div className="bg-[#161618] border border-white/5 rounded-xl p-4">
              <span className="block text-[#FFD700] font-bold text-2xl font-mono leading-none">$500K+</span>
              <span className="text-[10px] text-white/45 uppercase tracking-widest mt-2 block font-sans">Funding Passed</span>
            </div>
            <div className="bg-[#161618] border border-white/5 rounded-xl p-4">
              <span className="block text-white font-bold text-2xl font-mono leading-none">Instant</span>
              <span className="text-[10px] text-white/45 uppercase tracking-widest mt-2 block font-sans">Mobile Payouts</span>
            </div>
            <div className="bg-[#161618] border border-white/5 rounded-xl p-4">
              <span className="block text-[#00E5FF] font-bold text-2xl font-mono leading-none">Uganda</span>
              <span className="text-[10px] text-white/45 uppercase tracking-widest mt-2 block font-sans">Base Hub</span>
            </div>
          </div>

        </div>
      </section>

      {/* SOCIAL PROOF TICKER */}
      <section className="bg-[#121216] border-y border-white/[0.05] py-4.5 overflow-hidden z-10 relative">
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex items-center gap-16 animate-[scroll_35s_linear_infinite] px-4 shrink-0 font-mono text-xs uppercase tracking-wider">
            <span className="flex items-center gap-2.5 text-slate-250">
              <span className="w-2 h-2 rounded bg-[#00E5FF] animate-ping"></span>
              2,500+ Active Students Globally
            </span>
            <span className="flex items-center gap-2.5 text-[#FFD700]">
              <Sparkles className="w-4 h-4 text-[#FFD700]" />
              $500K+ Passed Prop Firm Challenges Verified
            </span>
            <span className="flex items-center gap-2.5 text-slate-200">
              <span className="w-1.5 h-1.5 rotate-45 bg-amber-500"></span>
              East Africa&apos;s Fastest Growing Trading Community
            </span>
            <span className="flex items-center gap-2.5 text-[#00E5FF]">
              <Smartphone className="w-4 h-4" />
              Easy Uganda Mobile Money Integrations Accepted
            </span>
          </div>

          <div className="flex items-center gap-16 animate-[scroll_35s_linear_infinite] px-4 shrink-0 font-mono text-xs uppercase tracking-wider" aria-hidden="true">
            <span className="flex items-center gap-2.5 text-slate-255">
              <span className="w-2 h-2 rounded bg-[#00E5FF] animate-ping"></span>
              2,500+ Active Students Globally
            </span>
            <span className="flex items-center gap-2.5 text-[#FFD700]">
              <Sparkles className="w-4 h-4 text-[#FFD700]" />
              $500K+ Passed Prop Firm Challenges Verified
            </span>
            <span className="flex items-center gap-2.5 text-slate-200">
              <span className="w-1.5 h-1.5 rotate-45 bg-amber-500"></span>
              East Africa&apos;s Fastest Growing Trading Community
            </span>
            <span className="flex items-center gap-2.5 text-[#00E5FF]">
              <Smartphone className="w-4 h-4" />
              Easy Uganda Mobile Money Integrations Accepted
            </span>
          </div>
        </div>
      </section>

      {/* INTERACTIVE TRADING DIAGNOSTIC QUIZ */}
      <section className="py-20 bg-[#101012] border-y border-white/5 relative z-10 font-sans">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#FFD700] text-xs font-mono font-semibold uppercase tracking-widest bg-[#FFD700]/10 border border-[#FFD700]/25 px-3 py-1 rounded-full">
              ⚡ Diagnostic Skill Evaluator
            </span>
            <h2 className="font-semibold text-3xl sm:text-4.0xl text-white mt-4 font-mono leading-tight">
              Are You a Retail Liquidity Trap?
            </h2>
            <p className="mt-4 text-white/60 text-sm leading-relaxed">
              Before risking real UGX capital in Kampala markets, test standard institutional scenarios. Find out if your strategy triggers bank liquidity sweeps or trades with algorithmic edge!
            </p>
          </div>

          <div className="bg-[#161618] border border-white/5 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            {/* Ambient gold glow in quiz */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD700]/3 rounded-full blur-[80px] pointer-events-none"></div>

            {quizScore === null ? (
              <div>
                {/* Quiz Header Progress */}
                <div className="flex items-center justify-between pb-6 border-b border-white/5 mb-8">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-white/40">Evaluation Track:</span>
                    <span className="text-xs font-mono text-[#00E5FF] font-bold">Question {quizStep + 1} of {QUIZ_QUESTIONS.length}</span>
                  </div>
                  <div className="w-32 bg-white/5 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-[#00E5FF] h-full transition-all duration-300" 
                      style={{ width: `${((quizStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Question */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-6 leading-snug">
                  {QUIZ_QUESTIONS[quizStep].q}
                </h3>

                {/* Options Grid */}
                <div className="space-y-4">
                  {QUIZ_QUESTIONS[quizStep].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectQuizAnswer(idx)}
                      className="w-full text-left p-5 rounded-2xl bg-[#0c0c0e]/80 border border-white/5 hover:border-[#00E5FF]/40 hover:bg-[#00E5FF]/5 transition-all group relative flex items-start gap-4"
                    >
                      <div className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-mono text-xs text-white/50 group-hover:bg-[#00E5FF] group-hover:text-black group-hover:border-transparent transition-all shrink-0 mt-0.5">
                        {idx === 0 ? 'A' : 'B'}
                      </div>
                      <span className="text-white/80 text-sm font-sans font-medium leading-relaxed group-hover:text-white transition-colors">
                        {option.text}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-6">
                {/* Result screen */}
                <div className="w-20 h-20 bg-[#FFD700]/10 border border-[#FFD700]/20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#FFD700]">
                  <Award className="w-10 h-10" />
                </div>

                <h3 className="text-2xl font-bold text-white font-mono">
                  Evaluation Score: <span className="text-[#00E5FF]">{quizScore} / {QUIZ_QUESTIONS.length}</span>
                </h3>

                <div className="mt-4 max-w-xl mx-auto">
                  {quizScore < 3 ? (
                    <div className="bg-red-500/10 border border-red-500/20 p-5 rounded-2xl text-center">
                      <span className="text-red-400 font-bold font-mono text-xs uppercase block mb-1.5">⚠️ STATUS: Retail Liquidity Trap Diagnostic Detected</span>
                      <p className="text-xs text-white/70 leading-relaxed">
                        Your trading approach is highly susceptible to central-bank liquidity grabs and consolidation washouts. You rely heavily on classical lines, retail support anchors, and emotional leverage sizing, which institutional algorithms targets for liquidation.
                      </p>
                      <span className="text-[11px] block text-[#FFD700] mt-3 font-mono font-semibold">RECOMMENDED ROUTE: Beginner Course (Academy Mentorship) to retrain.</span>
                    </div>
                  ) : quizScore < 5 ? (
                    <div className="bg-emerald-500/10 border border-emerald-500/20 p-5 rounded-2xl text-center">
                      <span className="text-[#00E5FF] font-bold font-mono text-xs uppercase block mb-1.5">⚡ STATUS: Algorithmic Apprentice</span>
                      <p className="text-xs text-white/70 leading-relaxed">
                        Splendid work! You demonstrate logical structural comprehension of Fair Value imbalances, market displacement dynamics, and standard risk boundaries. Retraining with professional Kampala analysts will fully bridge the gap to proprietary funding execution.
                      </p>
                      <span className="text-[11px] block text-[#FFD700] mt-3 font-mono font-semibold">RECOMMENDED ROUTE: Intermediate Course (SMC Imbalances & Order Blocks).</span>
                    </div>
                  ) : (
                    <div className="bg-gradient-to-r from-[#FFD700]/10 to-[#00E5FF]/10 border border-[#FFD700]/30 p-5 rounded-2xl text-center">
                      <span className="text-[#FFD700] font-bold font-mono text-xs uppercase block mb-1.5">🏆 STATUS: Certified Market Operator Prospect</span>
                      <p className="text-xs text-white/70 leading-relaxed">
                        Pure precision! You successfully bypassed every retail counterparty pitfall, demonstrating accurate lot sizing computations, NFP delay discipline, and institutional accumulation knowledge. You are a high-tier prospect for our inner circles.
                      </p>
                      <span className="text-[11px] block text-emerald-400 mt-3 font-mono font-semibold">RECOMMENDED ROUTE: Advanced Course or Direct private 1-on-1.</span>
                    </div>
                  )}
                </div>

                {/* Scholarship MM Trigger */}
                <div className="mt-8 p-5 bg-[#0c0c0e]/90 border border-white/5 rounded-2xl max-w-lg mx-auto text-center font-mono">
                  <span className="text-[11px] text-[#FFD700] uppercase font-bold block mb-1">🎁 EXCLUSIVE KAMPALA COOPERATION DISC-CODE</span>
                  <span className="text-xs text-white/40 block">Because you underwent our evaluation, secure a scholarship rate instantly using MTN or Airtel Money!</span>
                  <div className="mt-4 flex gap-3 justify-center">
                    <button 
                      onClick={() => initiateEnrollment(quizScore < 3 ? "Beginner Course" : "Intermediate Course")}
                      className="px-6 py-2.5 bg-gradient-to-r from-[#FFD700] to-[#00E5FF] text-black font-extrabold text-xs rounded-xl focus:outline-none transition-all hover:opacity-90"
                    >
                      Instant Mobile Money Enrollment ($20 Discount)
                    </button>
                    <button 
                      onClick={resetQuiz}
                      className="px-4 py-2 border border-white/10 hover:border-white/20 text-white text-xs rounded-xl"
                    >
                      Retry Quiz
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ASH TRADERS STUDENT WORKSPACE / PORTAL */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans border-b border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00E5FF] text-xs font-mono font-semibold uppercase tracking-widest inline-flex items-center gap-1.5 bg-[#00E5FF]/10 px-3 py-1 rounded-full border border-[#00E5FF]/20">
            <Database className="w-3.5 h-3.5" /> Live Student Portal & Signals Active Area
          </span>
          <h2 className="font-semibold text-3xl sm:text-4.5xl text-white mt-4 font-mono leading-tight">
            Kampala Student Workspace
          </h2>
          <p className="mt-4 text-white/60">
            Access daily analytical setups, study modules, and the order flow resource checklist. You can simulate direct purchases below, or enter preview mode immediately!
          </p>

          {!isEnrolled ? (
            <div className="mt-6 flex justify-center gap-4">
              <button
                onClick={() => setIsEnrolled(true)}
                className="px-6 py-3 bg-[#00E5FF]/15 hover:bg-[#00E5FF]/25 border border-[#00E5FF]/30 text-[#00E5FF] font-bold text-xs rounded-xl transition-all"
              >
                🔓 Enter Student preview Mode (Instant Mock Unlock)
              </button>
            </div>
          ) : (
            <div className="mt-6 flex justify-center gap-4">
              <button
                onClick={handleResetPurchase}
                className="px-4 py-1.5 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-450 font-mono text-xs rounded-lg transition-all"
              >
                Clear Simulated Enrollment (Reset State)
              </button>
            </div>
          )}
        </div>

        <div className="bg-[#161618] border border-white/5 rounded-3xl overflow-hidden shadow-2xl relative">
          
          {/* Locked Overlay if not enrolled/previewed */}
          {!isEnrolled && (
            <div className="absolute inset-0 bg-[#0c0c0e]/95 backdrop-blur-md z-40 flex flex-col items-center justify-center text-center p-6">
              <div className="w-16 h-16 bg-[#FFD700]/10 border border-[#FFD700]/20 text-[#FFD700] rounded-full flex items-center justify-center mb-6">
                <Lock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white font-mono uppercase tracking-wide">Workspace Locked</h3>
              <p className="mt-2.5 text-white/60 text-sm max-w-md mx-auto leading-relaxed">
                Connect your Kampala Mobile Money subscription or hit the preview trigger above to experience the premium signals hub, playable classes, and search engines instantly.
              </p>
              <div className="mt-6 flex gap-4">
                <button
                  onClick={() => initiateEnrollment("Beginner Course")}
                  className="px-6 py-3 bg-[#FFD700] text-black text-xs font-extrabold rounded-xl hover:opacity-90 transition-all font-mono shadow-xl shadow-[#FFD700]/10"
                >
                  💳 Enroll via MTN / Airtel Money ($100 USD)
                </button>
                <button
                  onClick={() => setIsEnrolled(true)}
                  className="px-5 py-3 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold rounded-xl border border-white/10"
                >
                  Unlock Free Preview
                </button>
              </div>
            </div>
          )}

          {/* Portal Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[580px] font-sans">
            
            {/* Sidebar Navigation */}
            <div className="p-6 border-r border-white/5 bg-[#0c0c0e]/50 flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-white/30 uppercase tracking-widest block mb-4 font-mono">Workspace Nav</span>
                <div className="space-y-2">
                  <button
                    onClick={() => setActivePortalTab('signals')}
                    className={`w-full text-left px-4 py-3.5 rounded-xl transition-all flex items-center gap-3 font-mono text-xs ${activePortalTab === 'signals' ? 'bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
                  >
                    <Sparkles className="w-4 h-4 shrink-0" />
                    <span>Daily VIP Signals Feed</span>
                  </button>

                  <button
                    onClick={() => setActivePortalTab('curriculum')}
                    className={`w-full text-left px-4 py-3.5 rounded-xl transition-all flex items-center gap-3 font-mono text-xs ${activePortalTab === 'curriculum' ? 'bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
                  >
                    <Play className="w-4 h-4 shrink-0" />
                    <span>HD Course Curriculum</span>
                  </button>

                  <button
                    onClick={() => setActivePortalTab('handbook')}
                    className={`w-full text-left px-4 py-3.5 rounded-xl transition-all flex items-center gap-3 font-mono text-xs ${activePortalTab === 'handbook' ? 'bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
                  >
                    <BookOpen className="w-4 h-4 shrink-0" />
                    <span>Algorithmic Guide Hub</span>
                  </button>
                </div>
              </div>

              {/* Status footer inside sidebar */}
              <div className="pt-6 border-t border-white/5 mt-6 font-mono text-xs text-white/40">
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] text-emerald-400">User Session: ACTIVE</span>
                </div>
                <span>Kampala Student Base Hub</span>
              </div>
            </div>

            {/* Portal Content Area */}
            <div className="lg:col-span-3 p-6 sm:p-10 flex flex-col justify-between bg-[#161618]">
              
              {/* Tab 1: Signals Feed */}
              {activePortalTab === 'signals' && (
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
                    <div>
                      <h3 className="text-lg font-bold text-white font-mono">Daily VIP Signal Desk</h3>
                      <p className="text-xs text-white/50 font-sans mt-0.5">Real-time trading feeds broadcasted by Lead Analyst Ash Flipper</p>
                    </div>
                    <span className="px-2.5 py-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded">
                      LIVE STREAMING
                    </span>
                  </div>

                  <div className="space-y-4">
                    {LIVE_VIP_SIGNALS.map((sig, idx) => (
                      <div key={idx} className="bg-[#0c0c0e]/80 border border-white/5 p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-white/10 transition-all">
                        
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0">
                            <Sparkles className="w-5 h-5 text-[#FFD700]" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-sm font-bold text-white font-mono">{sig.pair}</span>
                              <span className={`px-2 py-0.5 text-[8px] font-mono font-extrabold rounded ${sig.direction.includes('BUY') ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                                {sig.direction}
                              </span>
                              <span className="text-[9px] text-[#00E5FF] font-mono ml-2">{sig.timestamp}</span>
                            </div>
                            <div className="mt-2.5 grid grid-cols-3 gap-x-5 font-mono text-[11px] text-white/50">
                              <span>Entry: <strong className="text-white">{sig.entry}</strong></span>
                              <span>Stop Loss: <strong className="text-white">{sig.sl}</strong></span>
                              <span>Target TP: <strong className="text-white text-[#00E5FF]">{sig.tp}</strong></span>
                            </div>
                          </div>
                        </div>

                        {/* Interact trigger: feed data directly into calculator */}
                        <div>
                          <button
                            onClick={() => {
                              // Dynamically fill page.tsx Position Sizer states!
                              setBalance(10000);
                              setRiskPercent(1);
                              setStopLoss(sig.risk);
                              const parsedPair = sig.pair.includes("GOLD") ? "XAUUSD" : sig.pair.includes("BTC") ? "BTCUSD" : "EURUSD";
                              setCalculatorPair(parsedPair);

                              // Scroll smooth down to calculator
                              const calcEl = document.getElementById("charts");
                              if (calcEl) calcEl.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="w-full sm:w-auto px-4 py-2 bg-[#00E5FF]/10 text-[#00E5FF] hover:bg-[#00E5FF]/20 text-xs font-bold rounded-xl border border-00E5FF transition-colors font-mono flex items-center justify-center gap-1.5"
                          >
                            <Calculator className="w-3.5 h-3.5" />
                            Feed Into Calculator
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 2: Curriculum List with Interactive Video Preview */}
              {activePortalTab === 'curriculum' && (
                <div>
                  <div className="pb-4 border-b border-white/5 mb-6">
                    <h3 className="text-lg font-bold text-white font-mono">Academy Course Video Curriculum</h3>
                    <p className="text-xs text-white/50 mt-0.5">Learn institutional strategies directly on Kampala mobile interfaces</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    
                    {/* Modular list */}
                    <div className="md:col-span-5 space-y-2 max-h-[400px] overflow-y-auto pr-2">
                      {STUDENT_LECTURES.map((lec, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveVideoIndex(idx)}
                          className={`w-full text-left p-3.5 rounded-xl transition-all border block relative ${activeVideoIndex === idx ? 'bg-[#00E5FF]/15 border-[#00E5FF]/40 text-white' : 'bg-transparent border-white/5 text-white/60 hover:bg-white/5'}`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-white/40">MODULE 0{idx + 1}</span>
                            {lec.isFree ? (
                              <span className="px-2 py-0.5 text-[7px] font-mono font-bold bg-emerald-500/15 text-emerald-400 rounded">FREE PREVIEW</span>
                            ) : (
                              <span className="text-white/40 text-[9px] flex items-center gap-1"><Lock className="w-2.5 h-2.5" /> Premium</span>
                            )}
                          </div>
                          <span className="font-semibold block text-xs truncate leading-snug">{lec.title}</span>
                          <span className="text-[9px] text-white/45 block mt-1 font-mono">{lec.duration}</span>
                        </button>
                      ))}
                    </div>

                    {/* Interactive Simulated Player */}
                    <div className="md:col-span-7 bg-[#0c0c0e] rounded-2xl border border-white/5 p-4">
                      <div className="aspect-video bg-neutral-900 rounded-lg overflow-hidden relative shadow-inner flex flex-col items-center justify-center group">
                        
                        {/* Video Mock Background */}
                        <img 
                          src={STUDENT_LECTURES[activeVideoIndex].videoPlaceholder} 
                          alt="Chart Background" 
                          className="absolute inset-0 w-full h-full object-cover opacity-20 filter blur-[1px] pointer-events-none"
                        />
                        
                        {/* Fake player status overlay details */}
                        <div className="absolute top-3 left-3 bg-black/70 px-2.5 py-1 rounded text-[9px] font-mono text-white/60 flex items-center gap-1.5 backdrop-blur">
                          <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse"></span>
                          ESTABLISHED KAMPALA STREAM
                        </div>

                        {/* Interactive Toggle button */}
                        <button
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="w-14 h-14 rounded-full bg-[#00E5FF] text-black hover:scale-115 active:scale-95 transition-all flex items-center justify-center shadow-lg shadow-[#00E5FF]/20 relative z-10"
                        >
                          {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
                        </button>

                        <div className="absolute bottom-4 left-4 right-4 z-10 bg-black/60 p-2.5 rounded-xl backdrop-blur">
                          <div className="flex items-center justify-between text-[10px] font-mono text-white/70 mb-1.5">
                            <span>{isPlaying ? 'Streaming Media...' : 'Paused'}</span>
                            <span>{playbackTime}% Completed</span>
                          </div>
                          
                          {/* Fake progress bar */}
                          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="bg-[#00E5FF] h-full transition-all duration-300" style={{ width: `${playbackTime}%` }}></div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4">
                        <h4 className="text-sm font-semibold text-white tracking-tight">{STUDENT_LECTURES[activeVideoIndex].title}</h4>
                        <p className="text-xs text-white/50 mt-1.5 leading-relaxed">{STUDENT_LECTURES[activeVideoIndex].description}</p>
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {/* Tab 3: Searchable Handbook */}
              {activePortalTab === 'handbook' && (
                <div>
                  <div className="pb-4 border-b border-white/5 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-white font-mono">Algorithmic Order Flow Handbook</h3>
                      <p className="text-xs text-white/50 mt-0.5">Query core concepts, liquidity sweeps definitions, and ICT parameters</p>
                    </div>

                    {/* Search frame */}
                    <div className="relative max-w-xs w-full">
                      <Search className="w-4 h-4 text-white/40 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        placeholder="Search handbook..."
                        value={handbookSearch}
                        onChange={(e) => setHandbookSearch(e.target.value)}
                        className="w-full bg-[#0c0c0e] border border-white/10 rounded-xl py-2 pl-9 pr-4 text-xs focus:border-[#00E5FF] focus:outline-none text-white placeholder:text-white/30"
                      />
                    </div>
                  </div>

                  <div className="space-y-4 max-h-[380px] overflow-y-auto pr-2">
                    {filteredHandbook.length > 0 ? (
                      filteredHandbook.map((ch, idx) => (
                        <div key={idx} className="bg-[#0c0c0e]/30 border border-white/5 hover:border-white/10 p-5 rounded-2xl transition-all">
                          <h4 className="text-sm font-bold text-[#FFD700] font-mono flex items-center gap-2">
                            <BookOpen className="w-3.5 h-3.5" /> {ch.title}
                          </h4>
                          <p className="text-xs text-white/60 font-sans mt-2.5 leading-relaxed">
                            {ch.body}
                          </p>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-12 border border-dashed border-white/10 rounded-2xl">
                        <span className="text-xs text-white/45 font-mono">No chapters found matching &quot;{handbookSearch}&quot;</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* THE 3-STEP BROKER FUNNEL */}
      <section id="broker" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00E5FF] text-xs font-mono font-semibold uppercase tracking-widest">[ REFERRAL INTEGRATION ]</span>
          <h2 className="font-semibold text-3xl sm:text-4.5xl text-white mt-3 font-mono leading-tight">
            Start Trading in <span className="text-[#00E5FF]">3 Simple Steps</span>
          </h2>
          <p className="mt-4 text-white/60">
            Aligned with premium referral funnel mechanics. Open your live account through our portal, make MTN/Airtel cash integrations, and unlock mentoring channels automatically.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Step 1 */}
          <div className="bg-[#161618] p-8 rounded-2xl border border-white/5 flex flex-col justify-between relative group hover:border-[#00E5FF]/20 transition-all">
            <span className="absolute top-4 right-8 font-mono text-4xl text-white/[0.04] font-black group-hover:text-[#00E5FF]/5 select-none">01</span>
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#00E5FF] mb-6">
                <MessageSquare className="w-6 h-6 animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight">Join Free Telegram Hub</h3>
              <p className="mt-3 text-white/60 text-sm leading-relaxed">
                Gain access to Ash Flipper&apos;s free public channel with daily market commentary. We post high-probability gold setups and instant risk layouts.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.05]">
              <button 
                onClick={() => setShowTelegramModal(true)}
                className="text-[#00E5FF] text-xs font-semibold uppercase tracking-wider hover:text-white flex items-center gap-1 group/btn font-mono"
              >
                Access Free Signals <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Recommended Broker Card */}
          <div className="bg-[#161618] p-8 rounded-2xl border border-[#00E5FF]/20 flex flex-col justify-between relative shadow-2xl select-none">
            <span className="absolute top-4 right-8 font-mono text-4xl text-white/[0.04] font-black">02</span>
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 flex items-center justify-center text-[#00E5FF] mb-6">
                <ShieldCheck className="w-6 h-6 text-[#00E5FF]" />
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight flex items-center gap-2">
                Register Recommended Broker
                <span className="bg-[#FFD700]/10 text-[#FFD700] text-[9px] px-2 py-0.5 rounded font-mono border border-[#FFD700]/25">OFFICIAL PARTNER</span>
              </h3>
              <p className="mt-3 text-white/60 text-sm leading-relaxed">
                Connect your workspace account with <strong className="text-[#00E5FF]">Exness</strong>, our regulated partner. Features ultra-low raw spread models and immediate local <strong>Ugandan MTN & Airtel Mobile Money cash rails</strong>.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.05]">
              <button 
                onClick={() => setShowBrokerModal(true)}
                className="w-full text-center py-3 rounded-lg bg-[#00E5FF] text-[#0C0C0E] font-bold text-xs hover:bg-[#00d0e6] transition-colors shadow-[0_0_20px_rgba(0,229,255,0.3)]"
              >
                Create Exness Uganda Account
              </button>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#161618] p-8 rounded-2xl border border-white/5 flex flex-col justify-between relative group hover:border-[#FFD700]/20 transition-all">
            <span className="absolute top-4 right-8 font-mono text-4xl text-white/[0.04] font-black group-hover:text-[#FFD700]/5 select-none">03</span>
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#FFD700] mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight">Unlock Inner Mentoring Chat</h3>
              <p className="mt-3 text-white/60 text-sm leading-relaxed">
                Fund your live broker account (min $100 recommended to maintain margin) and share your account UID with Ash Flipper via Telegram to secure your lifetime VIP Inner Circle credentials.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.05]">
              <a 
                href="https://t.me/ASHTRADERSHUB" 
                target="_blank"
                className="text-[#FFD700] text-xs font-semibold uppercase tracking-wider hover:text-white flex items-center gap-1 group/btn font-mono"
              >
                Apply Via Telegram Support <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* CORE OFFERINGS - PRICING GRID */}
      <section id="courses" className="py-24 bg-[#0C0C0E] border-t border-white/5 relative z-10 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#00E5FF] text-xs font-mono font-semibold uppercase tracking-widest">[ SECURE ENROLLMENT ]</span>
            <h2 className="font-semibold text-3xl sm:text-5xl text-white mt-3 font-mono">
              Premium Educational Programs
            </h2>
            <p className="mt-4 text-white/60 text-sm">
              Select the program that fits your trading trajectory. Connect via WhatsApp or initiate secure Kampala Mobile Money billing instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            
            {/* Offering 1: Mentorship Programs */}
            <div className="bg-[#161618] rounded-2xl border border-white/5 p-6 sm:p-8 flex flex-col justify-between hover:border-[#00E5FF]/20 transition-all shadow-xl">
              <div>
                <div className="flex items-center justify-between font-mono">
                  <span className="px-3 py-1 rounded bg-[#00E5FF]/10 text-[#00E5FF] text-xs font-semibold border border-[#00E5FF]/20">
                    🎓 MENTORSHIP PROGRAMS
                  </span>
                  <span className="text-[10px] text-[#FFD700] uppercase font-bold tracking-wider">SECTION 1</span>
                </div>

                <h3 className="text-xl font-bold text-white mt-5 font-sans">Structured Academy Courses</h3>
                <p className="text-xs text-white/50 mt-1.5 font-sans">
                  Comprehensive education with <strong className="text-white font-semibold">Ash Flipper</strong>
                </p>
                
                <p className="mt-4 text-white/60 text-xs leading-relaxed">
                  Start from complete market structures to institutional algorithmic execution. Our classes are fully optimized for East African traders.
                </p>

                {/* Sub Options in Mentorship */}
                <div className="mt-6 space-y-3 pt-6 border-t border-white/5">
                  <div className="bg-[#0c0c0e]/60 p-3 rounded-xl border border-white/5 flex items-center justify-between hover:border-[#00E5FF]/30 transition-colors">
                    <div>
                      <span className="text-xs text-white block font-medium">Beginner Course</span>
                      <span className="text-[10px] text-white/40 font-mono">Fundamental Elements</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#00E5FF] font-mono">$100</span>
                      <button 
                        onClick={() => initiateEnrollment("Beginner Course")}
                        className="px-2 py-1 bg-[#00E5FF] hover:bg-[#00d0e6] text-black font-extrabold text-[10px] font-mono rounded"
                      >
                        Buy
                      </button>
                    </div>
                  </div>

                  <div className="bg-[#0c0c0e]/60 p-3 rounded-xl border border-white/5 flex items-center justify-between hover:border-[#00E5FF]/30 transition-colors">
                    <div>
                      <span className="text-xs text-white block font-medium">Intermediate Course</span>
                      <span className="text-[10px] text-white/40 font-mono">Imbalances & Order Blocks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#00E5FF] font-mono">$250</span>
                      <button 
                        onClick={() => initiateEnrollment("Intermediate Course")}
                        className="px-2 py-1 bg-[#00E5FF] hover:bg-[#00d0e6] text-black font-extrabold text-[10px] font-mono rounded"
                      >
                        Buy
                      </button>
                    </div>
                  </div>

                  <div className="bg-[#0c0c0e]/60 p-3 rounded-xl border border-white/5 flex items-center justify-between hover:border-amber-500/30 transition-colors">
                    <div>
                      <span className="text-xs text-white block font-medium">Advanced Course</span>
                      <span className="text-[10px] text-white/40 font-mono">Algorithmic Trade Filters</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#FFD700] font-mono">$1,300</span>
                      <button 
                        onClick={() => initiateEnrollment("Advanced Course")}
                        className="px-2 py-1 bg-[#FFD700] hover:bg-[#ffe54d] text-black font-extrabold text-[10px] font-mono rounded"
                      >
                        Buy
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/5 space-y-2.5">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00E5FF] mt-0.5 shrink-0" />
                    <span className="text-white/70 text-xs">Full Price Action Core Lesson Library</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00E5FF] mt-0.5 shrink-0" />
                    <span className="text-white/70 text-xs">SMC Block Mitigation Setup Guides</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00E5FF] mt-0.5 shrink-0" />
                    <span className="text-white/70 text-xs">Direct Private Backtesting Chat Access</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-2.5 font-mono text-[11px]">
                <a 
                  href="https://wa.me/256756018739" 
                  target="_blank"
                  className="w-full text-center py-2.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/20 transition-all flex items-center justify-center gap-1"
                >
                  WhatsApp
                </a>
                <a 
                  href="tel:+256744496860" 
                  className="w-full text-center py-2.5 rounded-lg bg-[#00E5FF]/10 hover:bg-[#00E5FF]/20 text-[#00E5FF] font-bold border border-[#00E5FF]/20 transition-all flex items-center justify-center gap-1"
                >
                  Call Desk
                </a>
              </div>
            </div>

            {/* Offering 2: VIP Daily Signals */}
            <div className="bg-[#161618] rounded-2xl border border-[#00E5FF]/20 p-6 sm:p-8 flex flex-col justify-between relative shadow-2xl">
              <span className="absolute top-0 right-10 py-1 px-3 bg-[#00E5FF] text-black font-mono font-bold text-[9px] rounded-b-lg uppercase tracking-wider">
                LIVE FEEDS
              </span>

              <div>
                <div className="flex items-center justify-between font-mono">
                  <span className="px-3 py-1 rounded bg-[#00E5FF]/10 text-emerald-400 text-xs font-semibold border border-[#00E5FF]/20">
                    📈 VIP DAILY SIGNALS
                  </span>
                  <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">SECTION 2</span>
                </div>

                <h3 className="text-xl font-bold text-white mt-5 font-sans">VIP Daily Signals Feed</h3>
                <p className="text-xs text-white/50 mt-1.5 font-sans">
                  Signals curated by <strong className="text-white font-semibold">Ash Flipper (The Flip King)</strong>
                </p>
                
                <p className="mt-4 text-white/60 text-xs leading-relaxed">
                  Realtime premium orders on high leverage Gold, cryptocurrencies (BTCUSD), and global forex major setups.
                </p>

                {/* Sub Options in VIP Signals */}
                <div className="mt-6 space-y-3 pt-6 border-t border-white/5">
                  <div className="bg-[#0c0c0e]/60 p-3 rounded-xl border border-white/5 flex items-center justify-between hover:border-[#00E5FF]/30 transition-colors">
                    <div>
                      <span className="text-xs text-white block font-medium">Monthly signals pass</span>
                      <span className="text-[10px] text-white/40 font-mono">30 Days access key</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#00E5FF] font-mono">$35</span>
                      <button 
                        onClick={() => initiateEnrollment("VIP Signals - Monthly")}
                        className="px-2 py-1 bg-[#00E5FF] hover:bg-[#00d0e6] text-black font-extrabold text-[10px] font-mono rounded"
                      >
                        Buy
                      </button>
                    </div>
                  </div>

                  <div className="bg-[#0c0c0e]/60 p-3 rounded-xl border border-white/5 flex items-center justify-between hover:border-[#00E5FF]/30 transition-colors">
                    <div>
                      <span className="text-xs text-white block font-medium">6 Months Package</span>
                      <span className="text-[10px] text-white/40 font-mono">180 Days access key</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#00E5FF] font-mono">$150</span>
                      <button 
                        onClick={() => initiateEnrollment("VIP Signals - 6 Months")}
                        className="px-2 py-1 bg-[#00E5FF] hover:bg-[#00d0e6] text-black font-extrabold text-[10px] font-mono rounded"
                      >
                        Buy
                      </button>
                    </div>
                  </div>

                  <div className="bg-[#0c0c0e]/60 p-3 rounded-xl border border-white/5 flex items-center justify-between hover:border-[#FFD700]/30 transition-colors">
                    <div>
                      <span className="text-xs text-white block font-medium">Yearly Premium Pass</span>
                      <span className="text-[10px] text-white/40 font-mono">Full year access key</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#FFD700] font-mono">$250</span>
                      <button 
                        onClick={() => initiateEnrollment("VIP Signals - Yearly")}
                        className="px-2 py-1 bg-[#FFD700] hover:bg-[#ffe54d] text-black font-extrabold text-[10px] font-mono rounded"
                      >
                        Buy
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/5 space-y-2.5">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span className="text-white/70 text-xs">High-accuracy gold & major FX setup feeds</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span className="text-white/70 text-xs">Exact Stop Loss, Take Profit & entry values</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span className="text-white/70 text-xs">Delivered inside private VIP Discord / Slack</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-2.5 font-mono text-[11px]">
                <a 
                  href="https://wa.me/256756018739" 
                  target="_blank"
                  className="w-full text-center py-2.5 rounded-lg bg-emerald-500 text-black font-bold hover:bg-emerald-450 transition-colors flex items-center justify-center gap-1 shadow-lg shadow-emerald-500/10"
                >
                  WhatsApp
                </a>
                <a 
                  href="tel:+256744496860" 
                  className="w-full text-center py-2.5 rounded-lg bg-[#00E5FF] text-black font-bold hover:bg-[#00d0e6] transition-colors flex items-center justify-center gap-1 shadow-lg shadow-[#00E5FF]/15"
                >
                  Call
                </a>
              </div>
            </div>

            {/* Offering 3: One-on-One Sessions */}
            <div className="bg-[#161618] rounded-2xl border border-white/5 p-6 sm:p-8 flex flex-col justify-between hover:border-[#FFD700]/20 transition-all shadow-xl font-sans">
              <div>
                <div className="flex items-center justify-between font-mono">
                  <span className="px-3 py-1 rounded bg-[#FFD700]/10 text-[#FFD700] text-xs font-semibold border border-[#FFD700]/20">
                    🎯 ONE-ON-ONE SESSIONS
                  </span>
                  <span className="text-[10px] text-white/40 font-mono">SECTION 3</span>
                </div>

                <h3 className="text-xl font-bold text-white mt-5 font-sans">Private Custom Mentorship</h3>
                <p className="text-xs text-white/50 mt-1.5 font-sans">
                  Direct live classes with <strong className="text-white">Ash Flipper</strong>
                </p>
                
                <p className="mt-4 text-white/60 text-xs leading-relaxed">
                  Fastest route to individual algorithmic mastery. Includes direct prop challenge coaching, account audits, and daily backtesting classes.
                </p>

                {/* Sub Options in 1-on-1 */}
                <div className="mt-6 space-y-3 pt-6 border-t border-white/5">
                  <div className="bg-[#0c0c0e]/60 p-3 rounded-xl border border-white/5 flex items-center justify-between hover:border-[#FFD700]/30 transition-colors">
                    <div>
                      <span className="text-xs text-white block font-medium">Online Format Support</span>
                      <span className="text-[10px] text-white/40 font-mono">Zoom screen share class</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#FFD700] font-mono">$600</span>
                      <button 
                        onClick={() => initiateEnrollment("1-on-1 Online Session")}
                        className="px-2 py-1 bg-[#FFD700] hover:bg-[#ffe54d] text-black font-extrabold text-[10px] font-mono rounded"
                      >
                        Buy
                      </button>
                    </div>
                  </div>

                  <div className="bg-[#0c0c0e]/60 p-3 rounded-xl border border-white/5 flex items-center justify-between hover:border-[#FFD700]/30 transition-colors">
                    <div>
                      <span className="text-xs text-white block font-medium">Physical In-Person Kampala</span>
                      <span className="text-[10px] text-white/40 font-mono">Direct 1-on-1 clinic meet</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#FFD700] font-mono">$1,000</span>
                      <button 
                        onClick={() => initiateEnrollment("1-on-1 Physical Session")}
                        className="px-2 py-1 bg-[#FFD700] hover:bg-[#ffe54d] text-black font-extrabold text-[10px] font-mono rounded"
                      >
                        Buy
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-3 rounded bg-red-950/20 border border-red-500/20 text-[11px] text-orange-450 font-mono">
                  💼 Account Management support available for minimum equity of <strong>$500 USD</strong>.
                </div>

                <div className="mt-6 pt-6 border-t border-white/5 space-y-2.5">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FFD700] mt-0.5 shrink-0" />
                    <span className="text-white/70 text-xs">Direct Phone Hotline Support to Ash Flipper</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FFD700] mt-0.5 shrink-0" />
                    <span className="text-white/70 text-xs">Prop firm evaluation pass safeguards</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a 
                  href="https://t.me/ASHTRADERSHUB" 
                  target="_blank"
                  className="w-full text-center block py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold border border-white/10 transition-colors text-xs font-mono"
                >
                  Join Telegram Channel
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* LIVE BOOT CAMP BANNER */}
      <section id="bootcamp" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        <div className="bg-gradient-to-r from-[#FFD700] via-[#00E5FF] to-[#FFD700] p-[1.5px] rounded-3xl relative">
          <div className="relative rounded-[22px] overflow-hidden bg-[#161618] p-8 sm:p-12 md:p-16">
            <div className="absolute top-0 right-10 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/20 text-xs font-mono font-semibold text-[#FFD700] uppercase tracking-wider animate-pulse">
                  🚨 UPCOMING LIVE BOOT CAMP
                </span>
                <h2 className="font-semibold text-3xl sm:text-4.5xl text-white mt-6 font-sans leading-tight">
                  3-Day Live Crypto & Forex Virtual Boot Camp
                </h2>
                <p className="mt-4 text-white/60 text-base leading-relaxed">
                  Join Ash Flipper live as he dissects macro cryptocurrency cycles and FX liquidity pools. Perfect for East African traders ready to transition from retail chart patterns to true algorithmic execution.
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white/70 font-mono">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700]"></span>
                    Day 1: Retail Trap Liquidity Zones
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700]"></span>
                    Day 2: Prop Firm Risk Safeguards
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700]"></span>
                    Day 3: Live Session Stream Kampala
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700]"></span>
                    Live Indicator & Journal Giveaways
                  </div>
                </div>
              </div>

              {/* Simulated Live Countdown Tracker */}
              <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
                <div className="w-full max-w-sm bg-[#0C0C0E]/90 border border-white/5 p-6 rounded-2xl backdrop-blur-md text-center shadow-2xl">
                  <span className="text-white/40 font-mono text-xs uppercase tracking-widest block mb-4">VIRTUAL SEATS CLOSING IN</span>
                  
                  <div className="grid grid-cols-4 gap-2 mb-6 font-mono">
                    <div className="bg-[#161618] p-2.5 rounded-lg border border-white/5">
                      <span className="font-bold text-2.5xl text-[#FFD700] block">{days}</span>
                      <span className="text-[9px] text-white/30 uppercase block">Days</span>
                    </div>
                    <div className="bg-[#161618] p-2.5 rounded-lg border border-white/5">
                      <span className="font-bold text-2.5xl text-[#FFD700] block">{hours}</span>
                      <span className="text-[9px] text-white/30 uppercase block">Hours</span>
                    </div>
                    <div className="bg-[#161618] p-2.5 rounded-lg border border-white/5">
                      <span className="font-bold text-2.5xl text-[#FFD700] block">{mins}</span>
                      <span className="text-[9px] text-white/30 uppercase block">Mins</span>
                    </div>
                    <div className="bg-[#161618] p-2.5 rounded-lg border border-white/5">
                      <span className="font-bold text-2.5xl text-[#FFD700] block">{secs}</span>
                      <span className="text-[9px] text-white/30 uppercase block">Secs</span>
                    </div>
                  </div>

                  <a 
                    href="https://t.me/ASHTRADERSHUB" 
                    target="_blank"
                    className="w-full text-center block py-4 rounded-xl bg-[#00E5FF] hover:bg-[#00d0e6] text-black font-extrabold transition-colors text-sm shadow-[0_0_20px_rgba(0,229,255,0.3)]"
                  >
                    Secure Event Ticket
                  </a>
                  <span className="text-white/40 text-[10px] block mt-3 font-mono">MTN / Airtel cash integration accessible</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* EMBEDDED TRADINGVIEW SECTION */}
      <section id="charts" className="py-24 bg-[#0C0C0E] border-t border-white/5 relative z-10 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#00E5FF] text-xs font-mono font-semibold uppercase tracking-widest">[ COGNITIVE TRUST INDICATOR ]</span>
            <h2 className="font-semibold text-3xl sm:text-4.5xl text-white mt-3 font-mono">
              Live Advanced Forex Monitor
            </h2>
            <p className="mt-4 text-white/60">
              Track live algorithmic pricing, order zones, and volatility blocks across gold (XAUUSD), major currencies, and spot cryptocurrencies.
            </p>
          </div>

          {/* Active TRADINGVIEW Widget Frame Container */}
          <div className="bg-[#161618] p-4 rounded-2xl border border-white/5 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4 px-2 font-mono">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs text-white/45">TradingView API Feed: <strong>CONNECTED</strong></span>
              </div>
              <span className="text-[10px] text-[#00E5FF] bg-[#00E5FF]/10 border border-[#00E5FF]/20 px-2.5 py-0.5 rounded font-mono">Kampala Regional Server</span>
            </div>

            {/* TradingView Widget Embed container for Next.js */}
            <div className="w-full h-[550px] bg-[#0C0C0E] rounded-xl overflow-hidden shadow-inner relative">
              <div id="tv-chart-next" className="w-full h-full">
                <div className="w-full h-full flex flex-col items-center justify-center text-white/30 font-mono text-sm gap-3 bg-[#0C0C0E]">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-[#00E5FF]"></div>
                  <span>Pulling Realtime Asset Charts...</span>
                </div>
              </div>
            </div>
          </div>

          {/* Position Sizer Area */}
          <div className="mt-16 max-w-3xl mx-auto bg-[#161618] border border-white/5 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3.5 mb-8">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 text-[#00E5FF]">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white tracking-tight font-sans">Institutional Position Size Sizer</h3>
                <p className="text-xs text-white/60 font-sans">Apply rigorous mathematical risk calculations before submitting pending ticket logs</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-sm">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-white/45 mb-2">Account Balance ($)</label>
                <input 
                  type="number" 
                  value={balance}
                  onChange={(e) => setBalance(parseFloat(e.target.value) || 0)}
                  className="w-full px-4 py-3 bg-[#0C0C0E]/80 border border-white/10 rounded-xl text-white focus:border-[#00E5FF] focus:outline-none" 
                />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-white/45 mb-2">Percentage Loss Risk (%)</label>
                <input 
                  type="number" 
                  step="0.1"
                  value={riskPercent}
                  onChange={(e) => setRiskPercent(parseFloat(e.target.value) || 0)}
                  className="w-full px-4 py-3 bg-[#0C0C0E]/80 border border-white/10 rounded-xl text-white focus:border-[#00E5FF] focus:outline-none" 
                />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-white/45 mb-2">Volatility Stop (Pips)</label>
                <input 
                  type="number" 
                  value={stopLoss}
                  onChange={(e) => setStopLoss(parseFloat(e.target.value) || 1)}
                  className="w-full px-4 py-3 bg-[#0C0C0E]/80 border border-white/10 rounded-xl text-white focus:border-[#00E5FF] focus:outline-none" 
                />
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-2 gap-4 text-center font-mono">
              <div className="bg-[#0C0C0E] p-3.5 rounded-xl border border-white/5">
                <span className="block text-white/30 text-[10px] uppercase font-mono tracking-widest">Maximum Dollar Risk</span>
                <span className="font-bold text-lg sm:text-xl text-white mt-1 block">
                  ${calculatedRiskValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </div>
              <div className="bg-[#0C0C0E] p-3.5 rounded-xl border border-white/5">
                <span className="block text-white/30 text-[10px] uppercase font-mono tracking-widest">Calculated Lot Volume</span>
                <span className="font-bold text-lg sm:text-xl text-[#00E5FF] mt-1 block">
                  {calculatedLots.toLocaleString(undefined, { maximumFractionDigits: 2 })} Lots
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* REACT OFFICIAL SOCIAL HUB & CRYPTO EXCHANGE SEGMENT */}
      <section className="py-24 bg-[#0a0a0c]/80 border-t border-white/5 relative z-10 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 select-none">
            <span className="text-[#00E5FF] text-xs font-mono font-semibold uppercase tracking-widest">[ OFFICIAL SOCIAL CHANNELS & PARTNER EXCHANGE ]</span>
            <h2 className="font-semibold text-3xl sm:text-5xl text-white mt-3 font-mono">
              The Digital Ecosystem
            </h2>
            <p className="mt-4 text-white/50 text-sm leading-relaxed">
              Connect directly with C.E.O Miiro Ashiraf and Ash Traders Hub channels. Deposit & trade securely with our official companion crypto exchange, Bybit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Instagram */}
            <motion.a 
              whileHover={{ scale: 1.01, borderColor: "rgba(236,72,153,0.4)" }}
              href="https://www.instagram.com/ash_blord?igsh=enMwcnNzMXJpZjYw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[#161618] border border-white/5 flex items-center gap-4 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-500 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </div>
              <div>
                <span className="block text-xs font-mono text-pink-500 font-semibold tracking-wider uppercase">C.E.O Instagram</span>
                <span className="block text-sm font-bold text-white mt-0.5">@ash_blord</span>
                <span className="block text-[11px] text-white/45 mt-1">Lifestyle & Daily Kampala Seminars</span>
              </div>
            </motion.a>

            {/* TikTok CEO */}
            <motion.a 
              whileHover={{ scale: 1.01, borderColor: "rgba(34,211,238,0.4)" }}
              href="https://www.tiktok.com/@ash_flipper?_r=1&_t=ZS-979u6BUozRJ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[#161618] border border-white/5 flex items-center gap-4 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.76 4.05 1.13.97 2.61 1.44 4.1 1.55v3.91c-1.18-.08-2.35-.49-3.32-1.17-.67-.48-1.23-1.1-1.65-1.83V14.1c.05 1.76-.44 3.53-1.46 4.9-1.39 1.95-3.83 3.09-6.23 2.91-2.91-.11-5.61-2.27-6.22-5.12-.81-3.4 1.21-7.01 4.58-7.79 1.05-.28 2.16-.21 3.17.15v4.03c-.93-.42-2-.36-2.88.16-.94.51-1.55 1.52-1.58 2.6-.08 1.83 1.57 3.39 3.39 3.25 1.52-.02 2.79-1.21 2.95-2.72.07-1.12.02-2.25.04-3.37V.02zm0 0"/></svg>
              </div>
              <div>
                <span className="block text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">C.E.O TikTok</span>
                <span className="block text-sm font-bold text-white mt-0.5">@ash_flipper</span>
                <span className="block text-[11px] text-white/45 mt-1">Foundational Algorithmic Speeches</span>
              </div>
            </motion.a>

            {/* TikTok Academy */}
            <motion.a 
              whileHover={{ scale: 1.01, borderColor: "rgba(255,215,0,0.4)" }}
              href="https://www.tiktok.com/@ashtradershub?_r=1&_t=ZS-979uD7MrqD3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[#161618] border border-white/5 flex items-center gap-4 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[#FFD700] flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.76 4.05 1.13.97 2.61 1.44 4.1 1.55v3.91c-1.18-.08-2.35-.49-3.32-1.17-.67-.48-1.23-1.1-1.65-1.83V14.1c.05 1.76-.44 3.53-1.46 4.9-1.39 1.95-3.83 3.09-6.23 2.91-2.91-.11-5.61-2.27-6.22-5.12-.81-3.4 1.21-7.01 4.58-7.79 1.05-.28 2.16-.21 3.17.15v4.03c-.93-.42-2-.36-2.88.16-.94.51-1.55 1.52-1.58 2.6-.08 1.83 1.57 3.39 3.39 3.25 1.52-.02 2.79-1.21 2.95-2.72.07-1.12.02-2.25.04-3.37V.02zm0 0"/></svg>
              </div>
              <div>
                <span className="block text-xs font-mono text-[#FFD700] font-semibold tracking-wider uppercase">Academy TikTok</span>
                <span className="block text-sm font-bold text-white mt-0.5">@ashtradershub</span>
                <span className="block text-[11px] text-white/45 mt-1">SMC Setup Previews & Live Audits</span>
              </div>
            </motion.a>

            {/* Twitter / X */}
            <motion.a 
              whileHover={{ scale: 1.01, borderColor: "rgba(255,255,255,0.2)" }}
              href="https://x.com/Ash_Miiro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[#161618] border border-white/5 flex items-center gap-4 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 text-white flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </div>
              <div>
                <span className="block text-xs font-mono text-slate-400 font-semibold tracking-wider uppercase">Official X / Twitter</span>
                <span className="block text-sm font-bold text-white mt-0.5">@Ash_Miiro</span>
                <span className="block text-[11px] text-white/45 mt-1">Institutional Bias Broadcasting Feed</span>
              </div>
            </motion.a>

            {/* Facebook */}
            <motion.a 
              whileHover={{ scale: 1.01, borderColor: "rgba(59,130,246,0.3)" }}
              href="https://www.facebook.com/share/1AKdroeujN/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[#161618] border border-white/5 flex items-center gap-4 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/25 text-blue-500 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>
              </div>
              <div>
                <span className="block text-xs font-mono text-blue-400 font-semibold tracking-wider uppercase">Facebook Hub</span>
                <span className="block text-sm font-bold text-white mt-0.5">Ash Traders Academy</span>
                <span className="block text-[11px] text-white/45 mt-1">Community Social Support Groups</span>
              </div>
            </motion.a>

            {/* Bybit Affiliate crypto exchange option */}
            <motion.a 
              whileHover={{ scale: 1.01, borderColor: "rgba(255,215,0,0.5)" }}
              href="https://partner.bybit.com/b/106725" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[#161618] border border-[#FFD700]/30 hover:border-[#FFD700] flex items-center gap-4 transition-all group bg-gradient-to-br from-[#FFD700]/5 to-transparent shadow-[0_0_20px_rgba(255,215,0,0.04)]"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] flex items-center justify-center shrink-0 font-bold text-xs tracking-tight">
                BYBIT
              </div>
              <div>
                <span className="block text-xs font-mono text-[#FFD700] font-bold tracking-wider uppercase">CRYPTO EXCHANGER</span>
                <span className="block text-sm font-bold text-white mt-0.5">Bybit Partner Pro</span>
                <span className="block text-[11px] text-slate-300 mt-1">0% Deposit Markup, Deep Kampala Rails</span>
              </div>
            </motion.a>

          </div>

          {/* Location & Email Direct details banner */}
          <div className="mt-8 p-4.5 rounded-2xl bg-[#161618] border border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 font-mono gap-4 shadow-sm select-none">
            <span className="flex items-center gap-2"><strong className="text-white">🏢 Address Authority:</strong> Kampala, Uganda</span>
            <span className="flex items-center gap-2">
              <strong className="text-white">✉️ Direct Support Email:</strong> 
              <a href="mailto:trinityosmiiro@gmail.com" className="text-[#00E5FF] hover:underline">trinityosmiiro@gmail.com</a>
            </span>
          </div>
        </div>
      </section>

      {/* FOOTER & REGULATORY EDUCATION DISCLAIMER */}
      <footer className="bg-[#050505] border-t border-white/5 pt-16 pb-12 relative z-10 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/10 flex items-center justify-center bg-black relative shrink-0">
                  <img 
                    src="https://lh3.googleusercontent.com/d/14UHl8tYXk0aA4bxMw6nQdLnSSwZcoZfa" 
                    alt="Ash Traders Hub Logo" 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-base tracking-tight text-white font-sans leading-none">
                    ASH TRADERS <span className="text-[#00E5FF]">HUB</span>
                  </span>
                  <span className="text-[9px] font-mono tracking-widest text-[#FFD700] uppercase leading-none mt-1 font-bold">Miiro Ashiraf (C.E.O)</span>
                </div>
              </div>
              <p className="text-xs text-white/60 font-sans leading-relaxed max-w-sm">
                Uganda&apos;s premium learning community focusing on algorithmic market dynamics. Guided by certified technical analyst Miiro Ashiraf (Ash Flipper) from Kampala, Uganda.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 text-xs font-mono">
                <button onClick={() => setShowTelegramModal(true)} className="text-[#00E5FF] hover:underline text-left">&rarr; Join Free Telegram</button>
                <a href="https://partner.bybit.com/b/106725" target="_blank" rel="noopener noreferrer" className="text-[#FFD700] hover:underline text-left">&rarr; Bybit Exchange Partner</a>
              </div>
            </div>

            <div>
              <span className="block text-xs uppercase font-mono text-white/80 tracking-wider mb-4 font-semibold">Elite Materials</span>
              <ul className="space-y-2 text-xs text-white/50 font-mono">
                <li><a href="#courses" className="hover:text-[#00E5FF]">The Blueprint Course</a></li>
                <li><a href="#courses" className="hover:text-[#FFD700]">1-on-1 VIP Mentoring</a></li>
                <li><a href="#bootcamp" className="hover:text-[#FFD700]">Live 3-Day Boot Camp</a></li>
                <li><button onClick={() => setShowBrokerModal(true)} className="hover:text-[#00E5FF] text-left">Exness Ugandan Mobile Rails</button></li>
              </ul>
            </div>

            <div>
              <span className="block text-xs uppercase font-mono text-white/80 tracking-wider mb-4 font-semibold">Live Academy Audits</span>
              <ul className="space-y-2 text-xs text-white/50 font-mono">
                <li><span className="text-white/30">Student pass rate:</span> <strong className="text-emerald-400">92%+ certified</strong></li>
                <li><span className="text-white/30">Prop Capital passed:</span> <strong className="text-[#FFD700]">$500,000+ passed</strong></li>
                <li><span className="text-white/30">Uganda HQ Hub:</span> <strong className="text-white">Kampala, UG</strong></li>
              </ul>
            </div>

          </div>

          {/* Stat Disclaimer Segment with absolute professional formulation */}
          <div className="mt-16 pt-8 border-t border-white/5">
            <div className="p-6 rounded-xl bg-[#161618] border border-white/5 text-[11px] text-white/50 leading-relaxed font-sans space-y-4">
              <p className="font-semibold text-white/70 uppercase tracking-widest font-mono flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-[#FFD700]" />
                ⚠️ STATUTORY REGULATORY WARNING & FINANCIAL SAFETY DISCLOSURE (UGANDA REGIONAL ACADEMY)
              </p>
              <p>
                <strong>Education & Analysis, NOT Financial Solicitation:</strong> Ash Traders Hub operates purely as an educational resource center. Ash Flipper is a professional independent trader and Financial Analyst, not an asset manager, fiduciary financial advisor, or licensed stockbroker. We do not provide personalized financial, transactional, or direct investment tips under the Capital Markets Authority (CMA) of Uganda or Kampala central authorities. All educational materials, chat outputs, indicators, and lot sizing spreadsheets are distributed solely for classroom studies and backtesting cognitive exercises.
              </p>
              <p>
                <strong>High Leverage / Volatility Warnings:</strong> Margin trading Forex, spot cryptocurrency derivatives, and synthetic stocks involves extreme volatility danger. You can suffer total personal account drawdowns instantly. Leveraged financial contracts represent custom-tailored speculative tools that can work directly against your retained deposits. Never open market balances utilizing funds or capital you cannot afford to absolute lose. Past historical track records, student payouts, and simulated screenshots act solely as statistical observations, not guarantees of actual future performance.
              </p>
              <p>
                <strong>Affiliate / Broker Connection Details:</strong> Suggesting Exness as our official recommended broker relies entirely on execution latency, MTN/Airtel cash deposit utility record in Kampala/Entebbe, and raw spreads. We carry zero liability regarding live broker operations, liquidity errors, or software downtime. Students retain the primary statutory duty of carrying out independent broker health reviews before registering funds.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/30 font-mono border-t border-white/5 pt-6 gap-4">
              <span>🏢 Kampala, Uganda &nbsp;|&nbsp; ✉️ <a href="mailto:trinityosmiiro@gmail.com" className="text-[#00E5FF] hover:underline">trinityosmiiro@gmail.com</a></span>
              <span>&copy; 2026 Ash Traders Hub. All Sovereign Rights Reserved.</span>
            </div>
          </div>

        </div>
      </footer>

      {/* EXNESS UGANDA BROKER ACTION MODAL */}
      <AnimatePresence>
        {showBrokerModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowBrokerModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-[#161618] border border-white/10 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative z-10 shadow-2xl"
            >
              <button 
                onClick={() => setShowBrokerModal(false)} 
                className="absolute top-4 right-4 text-white/40 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center font-mono">
                <span className="text-[#00E5FF] text-[10px] uppercase block tracking-widest font-black">recommended regulated broker</span>
                <h3 className="text-2xl font-bold text-white mt-1.5 flex items-center justify-center gap-2">
                  Exness Uganda Gateway
                </h3>
                <p className="mt-3 text-xs text-white/60 leading-relaxed font-sans">
                  The primary choice for professional East African traders. Connect instantly using MTN & Airtel mobile money transfers.
                </p>
              </div>

              <div className="mt-6 space-y-4 text-sm font-mono text-white/70">
                <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-[#00E5FF]/10 flex items-center justify-center text-[#00E5FF] font-semibold shrink-0">1</div>
                  <span className="text-xs">Click the link below to open the official Exness onboarding portal.</span>
                </div>
                <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-[#00E5FF]/10 flex items-center justify-center text-[#00E5FF] font-semibold shrink-0">2</div>
                  <span className="text-xs">Create an account under Ash Traders Hub referral partner status to unlock the Inner Circle automatically.</span>
                </div>
                <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-[#00E5FF]/10 flex items-center justify-center text-[#00E5FF] font-semibold shrink-0">3</div>
                  <span className="text-xs">Deposit MTN or Airtel money instantly from your Ugandan phone number at standard local rates.</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 font-mono">
                <a 
                  href="https://one.exnessonelink.com/a/nbk7sqym7v" 
                  target="_blank" 
                  className="w-full text-center py-4 bg-[#00E5FF] text-black font-bold rounded-xl text-xs hover:bg-[#00d0e6] transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,229,255,0.3)]"
                >
                  Create Exness Account <ExternalLink className="w-4 h-4 text-black" />
                </a>
                <a 
                  href="https://puvip.co/la-partners/YsgxB7IN" 
                  target="_blank" 
                  className="w-full text-center py-3 bg-[#1e1e24] border border-white/5 text-white/80 hover:text-white rounded-xl text-xs hover:bg-[#25252c] transition-colors flex items-center justify-center gap-2"
                >
                  Alternative: PU Prime Account <ExternalLink className="w-4 h-4 text-white/80" />
                </a>
                <button 
                  onClick={() => setShowBrokerModal(false)}
                  className="w-full text-center py-3 text-white/40 hover:text-white text-xs"
                >
                  Cancel & Return
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FREE TELEGRAM GATEWAY MODAL */}
      <AnimatePresence>
        {showTelegramModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowTelegramModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-[#161618] border border-white/10 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative z-10 shadow-2xl"
            >
              <button 
                onClick={() => setShowTelegramModal(false)} 
                className="absolute top-4 right-4 text-white/40 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center font-mono">
                <div className="w-12 h-12 rounded-full bg-[#00E5FF]/10 flex items-center justify-center text-[#00E5FF] mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 fill-current text-[#00E5FF]" />
                </div>
                <span className="text-[#00E5FF] text-[10px] uppercase block tracking-widest font-black">join the trading community</span>
                <h3 className="text-2xl font-bold text-white mt-1.5 font-sans">
                  Ash Flipper Channel
                </h3>
                <p className="mt-3 text-xs text-white/60 leading-relaxed font-sans">
                  East Africa&apos;s fastest-growing Forex and Cryptocurrency community channel. Connect directly with over 2,500 active traders.
                </p>
              </div>

              <div className="mt-6 space-y-3.5 text-xs font-mono text-white/70">
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#00E5FF]" />
                  <span>Daily live gold and bitcoin scalping updates</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#00E5FF]" />
                  <span>Algorithmic session range metrics charts</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#00E5FF]" />
                  <span>Free webinars, strategy PDF notes & local events</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 font-mono">
                <a 
                  href="https://t.me/ASHTRADERSHUB" 
                  target="_blank"
                  className="w-full text-center py-4 bg-[#00E5FF] text-black font-bold rounded-xl text-xs hover:bg-[#00d0e6] transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,229,255,0.3)]"
                >
                  Join Free Telegram Setup <ExternalLink className="w-4 h-4 text-black" />
                </a>
                <button 
                  onClick={() => setShowTelegramModal(false)}
                  className="w-full text-center py-3 text-white/40 hover:text-white text-xs"
                >
                  Close & Continue
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      

      {/* KAMPALA LOCAL MOBILE MONEY SIMULATOR MODAL */}
      <AnimatePresence>
        {showPaymentModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPaymentModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-[#161618] border border-white/10 rounded-3xl max-w-md w-full p-6 sm:p-8 relative z-10 shadow-2xl overflow-hidden font-sans"
            >
              <button 
                onClick={() => setShowPaymentModal(false)} 
                className="absolute top-4 right-4 text-white/40 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Carrier theme background bars */}
              <div className={`absolute top-0 left-0 w-full h-2 ${mobileMoneyCarrier === 'mtn' ? 'bg-[#FFD700]' : 'bg-red-500'}`}></div>

              <div className="text-center font-mono mt-2 flex flex-col items-center">
                <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest block">Kampala Local MM Gateway</span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Enroll: {selectedEnrollCourse}
                </h3>
              </div>

              {paymentStep === 'details' && (
                <form onSubmit={handleMobileMoneySubmit} className="mt-6 space-y-5">
                  <div className="grid grid-cols-2 gap-3.5">
                    <button
                      type="button"
                      onClick={() => setMobileMoneyCarrier('mtn')}
                      className={`py-3 rounded-2xl font-mono text-xs font-bold border transition-all text-center flex flex-col items-center justify-center gap-1.5 ${mobileMoneyCarrier === 'mtn' ? 'bg-[#FFD700]/10 border-[#FFD700] text-[#FFD700]' : 'bg-[#0c0c0e]/50 border-white/5 text-white/40 hover:text-white hover:bg-white/5'}`}
                    >
                      <span className="h-2 w-2 rounded-full bg-[#FFD700]"></span>
                      MTN Mobile Money
                    </button>
                    <button
                      type="button"
                      onClick={() => setMobileMoneyCarrier('airtel')}
                      className={`py-3 rounded-2xl font-mono text-xs font-bold border transition-all text-center flex flex-col items-center justify-center gap-1.5 ${mobileMoneyCarrier === 'airtel' ? 'bg-red-500/10 border-red-500 text-red-500' : 'bg-[#0c0c0e]/50 border-white/5 text-white/40 hover:text-white hover:bg-white/5'}`}
                    >
                      <span className="h-2 w-2 rounded-full bg-red-500"></span>
                      Airtel Money
                    </button>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-white/45 mb-2 font-mono">Ugandan Phone Number</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-3 text-white/40 font-mono text-xs">+256</span>
                      <input
                        type="tel"
                        required
                        placeholder="770 123 456"
                        maxLength={13}
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value.replace(/[^0-9\s]/g, ""))}
                        className="w-full bg-[#0c0c0e]/80 border border-white/10 rounded-xl py-3 pl-14 pr-4 text-sm focus:border-[#00E5FF] focus:outline-none text-white font-mono"
                      />
                    </div>
                    <span className="text-[10px] text-white/30 block mt-1.5 font-mono">Accepts MTN lines (77, 78) and Airtel lines (70, 75)</span>
                  </div>

                  <div className="bg-[#0c0c0e] p-4 rounded-xl border border-white/5 font-mono text-xs text-white/50 space-y-1">
                    <div className="flex justify-between">
                      <span>Standard Rate:</span>
                      <span>${getCoursePriceAndUGX(selectedEnrollCourse).usd}.00 USD</span>
                    </div>
                    <div className="flex justify-between text-[#FFD700] font-bold">
                      <span>UGX Equivalent:</span>
                      <span>UGX {getCoursePriceAndUGX(selectedEnrollCourse).ugx}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`w-full py-4 rounded-xl font-bold font-mono text-xs text-black border transition-all flex items-center justify-center gap-2 ${mobileMoneyCarrier === 'mtn' ? 'bg-[#FFD700] hover:bg-[#ffe54d]' : 'bg-red-500 hover:bg-red-600 text-white'}`}
                  >
                    <Smartphone className="w-4 h-4" />
                    Initialize push PIN Request
                  </button>
                </form>
              )}

              {paymentStep === 'push_sim' && (
                <div className="mt-6 space-y-6 text-center font-sans">
                  <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl flex items-start gap-3 text-left">
                    <span className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse mt-1.5 shrink-0"></span>
                    <div className="text-xs">
                      <strong className="text-yellow-400 font-bold font-mono uppercase block mb-0.5">Simulated USSD Push Notification</strong>
                      <span>A payment trigger request has been sent to your simulated Ugandan handset. Enter standard credentials below to authorize.</span>
                    </div>
                  </div>

                  {/* Smartphone Prompt Mock Card */}
                  <div className="bg-[#0c0c0e] rounded-2xl border-2 border-white/10 p-5 max-w-xs mx-auto text-center font-mono text-xs shadow-inner">
                    <div className="pb-3 border-b border-white/5 mb-4 text-white/40 flex items-center justify-center gap-1.5">
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>{mobileMoneyCarrier.toUpperCase()} MM REQUEST</span>
                    </div>
                    
                    <p className="text-white/80 leading-relaxed mb-4">
                      Ash Traders Hub requests UGX {getCoursePriceAndUGX(selectedEnrollCourse).ugx} for course signup reference. Enter your {mobileMoneyCarrier === 'mtn' ? '5' : '4'}-digit Mobile Money PIN.
                    </p>

                    <input
                      type="password"
                      placeholder="• • • • •"
                      maxLength={5}
                      value={mpin}
                      onChange={(e) => setMpin(e.target.value.replace(/[^0-9]/g, ""))}
                      className="w-24 text-center bg-white/5 border border-white/10 rounded-lg py-1.5 mb-4 text-white focus:outline-none focus:border-[#00E5FF] tracking-wider text-sm font-bold"
                    />

                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <button 
                        onClick={() => setPaymentStep('details')}
                        className="py-1.5 rounded bg-white/5 hover:bg-white/10 text-white/50"
                      >
                        Reject
                      </button>
                      <button 
                        onClick={triggerMockMpesaMtnPush}
                        disabled={mpin.length < 4}
                        className={`py-1.5 rounded text-black font-bold font-mono ${mpin.length >= 4 ? 'bg-[#00E5FF]' : 'bg-white/10 text-white/30 cursor-not-allowed'}`}
                      >
                        Authorize PIN
                      </button>
                    </div>
                  </div>

                  <p className="text-[10px] text-white/30 font-mono">
                    This simulates a direct USSD push request on Ugandan carrier networks.
                  </p>
                </div>
              )}

              {paymentStep === 'processing' && (
                <div className="mt-8 py-12 text-center font-mono">
                  <RefreshCw className="w-12 h-12 text-[#00E5FF] animate-spin mx-auto mb-6" />
                  <span className="text-sm font-bold text-white block">Validating Carrier Transaction Logs...</span>
                  <span className="text-[10.5px] text-white/40 block mt-2 animate-pulse">Contacting {mobileMoneyCarrier.toUpperCase()} network cells...</span>
                </div>
              )}

              {paymentStep === 'success' && (
                <div className="mt-6 text-center font-mono">
                  <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8" />
                  </div>

                  <h4 className="text-xl font-bold text-emerald-400">Payment Certified</h4>
                  <span className="text-xs text-white/50 block mt-1.5">You are now a verified student of Ash Traders Hub!</span>

                  <div className="my-6 p-4 bg-[#0c0c0e] rounded-xl border border-white/5 text-[10.5px] text-white/50 text-left space-y-1.5">
                    <div className="flex justify-between">
                      <span>Receipt Ref:</span>
                      <span className="text-white font-bold">{txId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Authorized Carrier:</span>
                      <span className="text-white">{mobileMoneyCarrier.toUpperCase()} UG</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Enrollment status:</span>
                      <span className="text-emerald-400 font-bold uppercase block text-center">SUCCESSFULLY ACTIVATED</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setShowPaymentModal(false);
                      // Scroll to Student Portal
                      const workspaceEl = document.getElementById("courses");
                      if (workspaceEl) workspaceEl.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-3.5 bg-[#00E5FF] text-black font-extrabold text-xs rounded-xl hover:bg-[#00d0e6] transition-colors"
                  >
                    🔓 Open My Premium Student Portal Now
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FLOATING GEMINI AI LIVE SUPPORT BOT WIDGET */}
      <div className="fixed bottom-6 right-6 z-50 font-sans">
        <AnimatePresence>
          {chatOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              className="bg-[#161618] border border-white/10 rounded-2xl w-[320px] sm:w-[360px] h-[460px] shadow-2xl flex flex-col justify-between overflow-hidden relative mb-4"
            >
              {/* Gold gradient top header */}
              <div className="bg-gradient-to-r from-[#FFD700] to-[#00E5FF] p-[1.5px] shrink-0">
                <div className="bg-[#161618] px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-[#0c0c0e] border border-[#FFD700]/30 flex items-center justify-center text-xs font-bold text-[#FFD700]">
                        AF
                      </div>
                      <span className="h-2 w-2 rounded-full bg-emerald-500 border border-neutral-900 absolute bottom-0 right-0 animate-pulse"></span>
                    </div>
                    <div className="text-left font-mono">
                      <span className="text-xs font-bold text-white block">Ash Flipper Support Bot</span>
                      <span className="text-[9px] text-[#00E5FF]">Lead Kampala Analyst AI</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setChatOpen(false)}
                    className="text-white/40 hover:text-white p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Chat history list */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#0c0c0e]/50">
                {chatMessages.map((msg, idx) => (
                  <div 
                    key={idx} 
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] rounded-2xl p-3.5 text-xs ${msg.role === 'user' ? 'bg-[#00E5FF] text-black rounded-tr-none' : 'bg-[#161618] border border-white/5 text-white/85 rounded-tl-none'}`}>
                      {msg.content}
                    </div>
                  </div>
                ))}
                {isChatLoading && (
                  <div className="flex justify-start">
                    <div className="bg-[#161618] border border-[#FFD700]/10 rounded-2xl px-3.5 py-2.5 text-xs rounded-tl-none flex items-center gap-1.5 text-[#FFD700]/50 font-mono">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FFD700]/50 animate-bounce"></span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FFD700]/50 animate-bounce delay-100"></span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FFD700]/50 animate-bounce delay-200"></span>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat form */}
              <form onSubmit={sendChatMessage} className="p-3 bg-[#111113] border-t border-white/5 flex gap-2 shrink-0">
                <input
                  type="text"
                  placeholder="Ask about SMC setups, Exness..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  className="flex-1 bg-[#0c0c0e] border border-white/10 rounded-xl px-3.5 py-2 text-xs focus:border-[#00E5FF] focus:outline-none text-white font-sans"
                />
                <button
                  type="submit"
                  disabled={isChatLoading || !chatInput.trim()}
                  className="bg-[#00E5FF] hover:bg-[#00d0e6] font-extrabold text-xs text-black px-4 rounded-xl transition-colors disabled:opacity-45 disabled:cursor-not-allowed font-mono"
                >
                  Send
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle support bubble button */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="w-14 h-14 rounded-full bg-[#00E5FF] text-black hover:scale-105 active:scale-95 transition-all flex items-center justify-center shadow-lg shadow-[#00E5FF]/20 relative group select-none"
        >
          {chatOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6 fill-current text-black" />}
          
          {/* Online visual notification tag */}
          <span className="absolute -top-1.5 -right-0.5 bg-yellow-400 text-black text-[8px] font-extrabold px-1.5 py-0.5 rounded-full border border-[#0c0c0e] uppercase tracking-wider animate-pulse">
            LIVE
          </span>
        </button>
      </div>

    </div>
  );
}
