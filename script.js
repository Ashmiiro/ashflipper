/**
 * ASH TRADERS HUB - Static JS Component Controller
 * Author: Miiro Ashiraf (CEO) & Ash Flipper Support Engine
 */

// Core static databases
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

const HANDBOOK_CHAPTERS = [
  { title: "Chapter 1: The Liquidity Sweep Paradigm", body: "Central banks and market makers never operate on retail trendlines. They locate pools of sell-stop orders resting below visual swing lows, sweep them, and then disperse volume in the true directional expansion." },
  { title: "Chapter 2: Fair Value Gap (FVG) Anatomy", body: "An FVG is created by a highly displaced single-direction candle where order imbalance leaves pricing pocket gaps. Price historically returns to fill at least 50% of this imbalance before continuing." },
  { title: "Chapter 3: Market Structure shifts (MSS)", body: "Unlike a minor break of structure (BOS), an MSS is confirmed when a swing point is broken with a massive displacement candle, signifying bank-level interest shifting from bearish to bullish flow." },
  { title: "Chapter 4: MTN & Airtel Mobile Spread Mechanics", body: "Trading in Uganda means handling instant cash transitions. Maintain separate accounts on Exness matching localized mobile money, mitigating currency slippage on high-spread gold setups." }
];

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
      { text: "Wait for the news-driven liquidity sweeps to terminate, confirm structural order zones, and trade the subsequent algorithmic expansion.", score: 1, feedback: "Perfect. Letting institutions deliver first and trading their footprint is the footprint analyst pattern." }
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

// App State Management
let appState = {
  mobileMenuOpen: false,
  balance: 10000,
  riskPercent: 1.0,
  stopLoss: 15,
  calculatorPair: "XAUUSD",
  
  showBrokerModal: false,
  showTelegramModal: false,
  
  isEnrolled: false,
  selectedEnrollCourse: null,
  showPaymentModal: false,
  phoneNumber: "",
  mobileMoneyCarrier: "mtn",
  paymentStep: "details", // "details" | "push_sim" | "processing" | "success"
  mpin: "",
  currentTxId: "",

  activePortalTab: "signals", // "signals" | "curriculum" | "handbook"
  activeVideoIndex: 0,
  handbookSearch: "",
  playbackTime: 45,
  isPlaying: false,

  quizOpen: false,
  quizStep: 0,
  quizAnswers: [],
  quizScore: null,

  chatOpen: false,
  chatMessages: [
    { role: 'assistant', content: "Mambo, Expert! It's Ash Flipper support desk in Kampala. Are you ready to beat the retail trap and start executing with precision order flow? Ask me anything about our classes, SMC algorithmic setups, or setting up MTN mobile money on Exness." }
  ]
};

// Lifecycle Trigger
window.addEventListener('load', () => {
  initLocalStorage();
  initListeners();
  initCountdown();
  initTradingView();
  renderAll();
  lucide.createIcons();
});

// Load state from local storage
function initLocalStorage() {
  const savedEnroll = localStorage.getItem('ash_traders_enrolled');
  const savedScore = localStorage.getItem('ash_traders_quiz_score');
  
  if (savedEnroll === 'true') {
    appState.isEnrolled = true;
  }
  if (savedScore !== null && savedScore !== undefined) {
    appState.quizScore = parseInt(savedScore);
  }
}

// Attach generic interaction listeners
function initListeners() {
  // Calculator inputs
  const balanceInput = document.getElementById('calc-balance');
  const riskInput = document.getElementById('calc-risk');
  const slInput = document.getElementById('calc-sl');
  const pairSelect = document.getElementById('calc-pair');

  if (balanceInput) {
    balanceInput.addEventListener('input', (e) => {
      appState.balance = parseFloat(e.target.value) || 0;
      updateCalculator();
    });
  }
  if (riskInput) {
    riskInput.addEventListener('input', (e) => {
      appState.riskPercent = parseFloat(e.target.value) || 0;
      updateCalculator();
    });
  }
  if (slInput) {
    slInput.addEventListener('input', (e) => {
      appState.stopLoss = parseFloat(e.target.value) || 1;
      updateCalculator();
    });
  }
  if (pairSelect) {
    pairSelect.addEventListener('change', (e) => {
      appState.calculatorPair = e.target.value;
      updateCalculator();
    });
  }

  // Handbook Search Input
  const hbSearch = document.getElementById('hb-search');
  if (hbSearch) {
    hbSearch.addEventListener('input', (e) => {
      appState.handbookSearch = e.target.value;
      renderHandbook();
    });
  }

  // Chat message send form
  const chatForm = document.getElementById('chat-form');
  if (chatForm) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleSendChatMessage();
    });
  }
}

// Render everything based on appState
function renderAll() {
  renderPortalTabs();
  renderSignalsList();
  renderLecturesList();
  renderHandbook();
  renderQuiz();
  renderEnrolledStatus();
  updateCalculator();
}

// Dynamic Counter Clock
function initCountdown() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 3);
  targetDate.setHours(targetDate.getHours() + 12);

  function tick() {
    const now = new Date().getTime();
    const difference = targetDate.getTime() - now;
    if (difference <= 0) {
      document.getElementById('count-days').innerText = '00';
      document.getElementById('count-hours').innerText = '00';
      document.getElementById('count-mins').innerText = '00';
      document.getElementById('count-secs').innerText = '00';
      return;
    }
    const d = Math.floor(difference / (1000 * 60 * 60 * 24));
    const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((difference % (1000 * 60)) / 1000);

    const pad = (num) => String(num).padStart(2, '0');
    
    document.getElementById('count-days').innerText = pad(d);
    document.getElementById('count-hours').innerText = pad(h);
    document.getElementById('count-mins').innerText = pad(m);
    document.getElementById('count-secs').innerText = pad(s);
  }
  tick();
  setInterval(tick, 1000);
}

// Load TradingView dynamic widget
function initTradingView() {
  if (typeof TradingView !== 'undefined') {
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
}

// Enrolled/Lifetime lock status UI modifier
function renderEnrolledStatus() {
  const overlay = document.getElementById('student-portal-overlay');
  const lockIndicators = document.querySelectorAll('.lock-indicator');
  const unlockedTrigger = document.getElementById('unlocked-trigger-area');
  
  if (appState.isEnrolled) {
    if (overlay) overlay.classList.add('hidden');
    
    lockIndicators.forEach(indicator => {
      indicator.innerHTML = '<span class="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] uppercase font-bold tracking-wider">UNLOCKED</span>';
    });

    if (unlockedTrigger) {
      unlockedTrigger.innerHTML = `
        <div class="px-4 py-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center gap-2 text-emerald-400 font-mono text-xs shadow-lg animate-fade-in">
          <span class="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Verified Lifetime Access Unlocked! Excellent trades, Boss.
        </div>
      `;
    }
  } else {
    if (overlay) overlay.classList.remove('hidden');
    lockIndicators.forEach((indicator, index) => {
      if (index === 0) {
        indicator.innerHTML = '<span class="px-2 py-0.5 rounded bg-[#00E5FF]/10 text-[#00E5FF] text-[10px] uppercase font-bold tracking-wider">FREE TRIAL</span>';
      } else {
        indicator.innerHTML = '<i data-lucide="lock" class="w-3.5 h-3.5 text-white/30"></i>';
      }
    });
    lucide.createIcons();
  }
}

// Tab Switching in Workspace Portal
function switchPortalTab(tabName) {
  appState.activePortalTab = tabName;
  renderPortalTabs();
}

function renderPortalTabs() {
  const tabNames = ['signals', 'curriculum', 'handbook'];
  tabNames.forEach(t => {
    const btn = document.getElementById(`tab-${t}`);
    const section = document.getElementById(`portal-${t}`);
    if (btn && section) {
      if (t === appState.activePortalTab) {
        btn.className = "px-4 py-2 bg-[#00E5FF] text-black text-xs font-semibold rounded-md transition-all";
        section.classList.remove('hidden');
      } else {
        btn.className = "px-4 py-2 bg-white/5 hover:bg-white/10 text-white/70 text-xs font-semibold rounded-md transition-all";
        section.classList.add('hidden');
      }
    }
  });
}

// Signals List renderer
function renderSignalsList() {
  const container = document.getElementById('signals-container');
  if (!container) return;

  container.innerHTML = LIVE_VIP_SIGNALS.map((sig, idx) => {
    const isLmd = sig.status === 'ACTIVE';
    const statusBg = sig.status === 'TARGET HIT' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 
                     sig.status === 'ACTIVE' ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' : 
                     'bg-yellow-500/10 text-yellow-500/20 border-yellow-500/20';

    return `
      <div class="bg-[#0C0C0E]/50 border border-white/5 p-4 sm:p-5 rounded-2xl flex flex-col justify-between hover:border-white/10 transition-colors">
        <div>
          <div class="flex items-center justify-between mb-3.5">
            <span class="font-bold text-sm text-white">${sig.pair}</span>
            <span class="px-2.5 py-0.5 rounded-full text-[10px] border font-semibold tracking-wider ${statusBg}">${sig.status}</span>
          </div>

          <div class="grid grid-cols-2 gap-3 mb-4 font-mono text-xs">
            <div>
              <span class="block text-white/30 text-[10px]">DIRECTION</span>
              <span class="font-bold text-red-400">${sig.direction}</span>
            </div>
            <div>
              <span class="block text-white/30 text-[10px]">ENTRY ZONE</span>
              <span class="font-bold text-slate-100">${sig.entry}</span>
            </div>
            <div>
              <span class="block text-white/30 text-[10px]">STOP LOSS (SL)</span>
              <span class="font-semibold text-red-500/70">${sig.sl}</span>
            </div>
            <div>
              <span class="block text-white/30 text-[10px]">TAKE PROFIT (TP)</span>
              <span class="font-semibold text-emerald-400">${sig.tp}</span>
            </div>
          </div>
        </div>

        <div class="pt-3.5 border-t border-white/5 flex items-center justify-between">
          <span class="text-[10px] text-white/40 font-mono">${sig.timestamp}</span>
          <button 
            onclick="feedSignalIntoCalculator('${sig.pair}', ${sig.risk})"
            class="px-2.5 py-1 rounded bg-[#00E5FF]/10 text-[#00E5FF] hover:bg-[#00E5FF]/20 text-[11px] font-semibold border border-[#00E5FF]/15 transition-colors flex items-center gap-1.5"
          >
            <i data-lucide="calculator" class="w-3.5 h-3.5"></i>
            Feed Into Calculator
          </button>
        </div>
      </div>
    `;
  }).join('');
  lucide.createIcons();
}

// Feed signal parameter cleanly into positional math calculator
function feedSignalIntoCalculator(pair, slValue) {
  let matchedPair = "XAUUSD";
  if (pair.includes("BTC")) matchedPair = "BTCUSD";
  if (pair.includes("EUR")) matchedPair = "EURUSD";

  appState.calculatorPair = matchedPair;
  appState.stopLoss = slValue;

  document.getElementById('calc-pair').value = matchedPair;
  document.getElementById('calc-sl').value = slValue;

  updateCalculator();

  const calcSection = document.getElementById('institutional-calculator');
  if (calcSection) {
    calcSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Math calculation engine for Position Sizing
function updateCalculator() {
  let multiplier = 10;
  if (appState.calculatorPair === "BTCUSD" || appState.calculatorPair === "US30") {
    multiplier = 1;
  }
  
  const riskDollarVal = appState.balance * (appState.riskPercent / 100);
  const correctLots = riskDollarVal / (appState.stopLoss * multiplier);

  document.getElementById('calc-dollar-risk').innerText = `$${riskDollarVal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
  document.getElementById('calc-output-lots').innerText = `${correctLots.toFixed(2)} Lots`;
}

// Classroom curriculum videos list
function renderLecturesList() {
  const container = document.getElementById('lectures-list');
  if (!container) return;

  container.innerHTML = STUDENT_LECTURES.map((lec, idx) => {
    const isActive = idx === appState.activeVideoIndex;
    const isLocked = !lec.isFree && !appState.isEnrolled;
    
    // Classes
    let wrapperClass = "w-full text-left p-3.5 rounded-xl transition-all border block ";
    if (isActive) {
      wrapperClass += "bg-[#00E5FF]/10 border-[#00E5FF]/30 text-white";
    } else {
      wrapperClass += "bg-[#161618] hover:bg-white/5 border-white/5 text-slate-300";
    }

    return `
      <button 
        onclick="selectLecture(${idx})"
        class="${wrapperClass} relative flex items-center justify-between group"
      >
        <div class="flex flex-col text-left">
          <span class="text-xs font-semibold leading-relaxed">${lec.title}</span>
          <span class="text-[10px] text-white/40 mt-1 font-mono">${lec.duration}</span>
        </div>
        <div>
          ${isLocked ? `
            <i data-lucide="lock" class="w-3.5 h-3.5 text-white/30"></i>
          ` : `
            <i data-lucide="play-circle" class="w-4 h-4 text-[#00E5FF] opacity-0 group-hover:opacity-100 transition-opacity"></i>
          `}
        </div>
      </button>
    `;
  }).join('');
  lucide.createIcons();
}

function selectLecture(idx) {
  const lec = STUDENT_LECTURES[idx];
  if (!lec.isFree && !appState.isEnrolled) {
    openPaymentModal(lec.title);
    return;
  }

  appState.activeVideoIndex = idx;
  appState.isPlaying = false;
  appState.playbackTime = 0;
  clearInterval(window.playbackTimerInterval);

  // Update large active player layout
  document.getElementById('player-placeholder-img').src = lec.videoPlaceholder;
  document.getElementById('player-title').innerText = lec.title;
  document.getElementById('player-desc').innerText = lec.description;
  document.getElementById('video-progress-bar').style.width = '0%';
  document.getElementById('playback-play-icon').classList.remove('hidden');
  document.getElementById('playback-pause-icon').classList.add('hidden');

  renderLecturesList();
}

// Classroom video progress timer simulation
function toggleLecturePlay() {
  const isLocked = !STUDENT_LECTURES[appState.activeVideoIndex].isFree && !appState.isEnrolled;
  if (isLocked) {
    openPaymentModal(STUDENT_LECTURES[appState.activeVideoIndex].title);
    return;
  }

  appState.isPlaying = !appState.isPlaying;
  const playIcon = document.getElementById('playback-play-icon');
  const pauseIcon = document.getElementById('playback-pause-icon');

  if (appState.isPlaying) {
    playIcon.classList.add('hidden');
    pauseIcon.classList.remove('hidden');

    window.playbackTimerInterval = setInterval(() => {
      appState.playbackTime += 1;
      if (appState.playbackTime >= 100) {
        appState.playbackTime = 0;
      }
      document.getElementById('video-progress-bar').style.width = appState.playbackTime + '%';
    }, 1000);
  } else {
    playIcon.classList.remove('hidden');
    pauseIcon.classList.add('hidden');
    clearInterval(window.playbackTimerInterval);
  }
}

// Handbook chapter search filtering DOM re-builder
function renderHandbook() {
  const container = document.getElementById('handbook-container');
  if (!container) return;

  const filtered = HANDBOOK_CHAPTERS.filter(ch => 
    ch.title.toLowerCase().includes(appState.handbookSearch.toLowerCase()) || 
    ch.body.toLowerCase().includes(appState.handbookSearch.toLowerCase())
  );

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="text-center py-10 text-white/30 font-mono text-xs">
        No specific handbook logs matched your bias query.
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(ch => {
    return `
      <div class="p-5 rounded-xl bg-[#0C0C0E] border border-white/5 animate-fade-in">
        <h4 class="font-bold text-sm text-[#00E5FF] mb-2 font-mono">${ch.title}</h4>
        <p class="text-xs text-slate-350 leading-relaxed font-sans">${ch.body}</p>
      </div>
    `;
  }).join('');
}

// MOBILE MONEY ENROLLMENT MODAL TRIGGER CONTROLS
function openPaymentModal(courseName) {
  appState.selectedEnrollCourse = courseName;
  appState.phoneNumber = "";
  appState.mpin = "";
  appState.paymentStep = "details";
  
  // Calculate pricing values
  const prices = getCoursePriceValues(courseName);
  
  // Show modal container
  document.getElementById('mm-price-converted').innerText = `${prices.ugx} UGX ($${prices.usd} USD)`;
  document.getElementById('mm-selected-course-title').innerText = courseName;
  document.getElementById('modal-mobile-money').classList.remove('hidden');
  
  resetPaymentStepUI();
}

function chooseCarrier(carrierName) {
  appState.mobileMoneyCarrier = carrierName;
  
  const mtnBtn = document.getElementById('carrier-btn-mtn');
  const airtelBtn = document.getElementById('carrier-btn-airtel');
  
  if (carrierName === 'mtn') {
    mtnBtn.className = "p-3.5 rounded-xl border-2 border-[#FFD700] bg-[#FFD700]/10 flex flex-col items-center justify-center transition-all cursor-pointer";
    airtelBtn.className = "p-3.5 rounded-xl border border-white/5 bg-[#161618] opacity-60 flex flex-col items-center justify-center transition-all cursor-pointer";
  } else {
    mtnBtn.className = "p-3.5 rounded-xl border border-white/5 bg-[#161618] opacity-60 flex flex-col items-center justify-center transition-all cursor-pointer";
    airtelBtn.className = "p-3.5 rounded-xl border-2 border-red-500 bg-red-500/10 flex flex-col items-center justify-center transition-all cursor-pointer";
  }
}

function closePaymentModal() {
  document.getElementById('modal-mobile-money').classList.add('hidden');
}

function getCoursePriceValues(courseName) {
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
      return { usd: 100, ugx: "370,000" };
  }
}

function submitPaymentDetails() {
  const phoneVal = document.getElementById('mm-phone-input').value.trim();
  if (phoneVal.length < 9) {
    alert("Please enter a valid Ugandan mobile number, Boss.");
    return;
  }
  appState.phoneNumber = phoneVal;
  appState.paymentStep = "push_sim";
  
  document.getElementById('mm-step-details').classList.add('hidden');
  document.getElementById('mm-step-pin').classList.remove('hidden');
  document.getElementById('mm-display-phone').innerText = `+256 ${phoneVal}`;
}

function submitPaymentPin() {
  const pinVal = document.getElementById('mm-pin-input').value.trim();
  if (pinVal.length < 4) {
    alert("Security requires a 4 or 5-digit PIN.");
    return;
  }
  appState.mpin = pinVal;
  appState.paymentStep = "processing";

  document.getElementById('mm-step-pin').classList.add('hidden');
  document.getElementById('mm-step-processing').classList.remove('hidden');

  // Trigger processing finish with random TXN and enrollment unlock
  setTimeout(() => {
    appState.paymentStep = "success";
    appState.isEnrolled = true;
    localStorage.setItem('ash_traders_enrolled', 'true');

    const randNum = Math.floor(100000 + Math.random() * 900000);
    appState.currentTxId = `TXN-KLA-${appState.mobileMoneyCarrier.toUpperCase()}-${randNum}`;

    document.getElementById('mm-step-processing').classList.add('hidden');
    document.getElementById('mm-step-success').classList.remove('hidden');
    document.getElementById('mm-success-course-label').innerText = appState.selectedEnrollCourse;
    document.getElementById('mm-success-txid').innerText = appState.currentTxId;

    renderEnrolledStatus();
    renderLecturesList();
  }, 2300);
}

function resetPaymentStepUI() {
  document.getElementById('mm-step-details').classList.remove('hidden');
  document.getElementById('mm-step-pin').classList.add('hidden');
  document.getElementById('mm-step-processing').classList.add('hidden');
  document.getElementById('mm-step-success').classList.add('hidden');
  
  document.getElementById('mm-phone-input').value = "";
  document.getElementById('mm-pin-input').value = "";
  chooseCarrier('mtn');
}

function handleResetPurchase() {
  appState.isEnrolled = false;
  localStorage.removeItem('ash_traders_enrolled');
  renderEnrolledStatus();
  renderLecturesList();
  alert("Student enrollment status reset to demo locked mode!");
}


// DIAGNOSTIC QUIZ LOGIC AND UI
function openQuiz() {
  appState.quizOpen = true;
  appState.quizStep = 0;
  appState.quizAnswers = [];
  appState.quizScore = null;
  
  document.getElementById('quiz-intro-pane').classList.add('hidden');
  document.getElementById('quiz-questions-pane').classList.remove('hidden');
  document.getElementById('quiz-results-pane').classList.add('hidden');
  
  renderQuiz();
}

function renderQuiz() {
  const qPane = document.getElementById('quiz-questions-pane');
  const rPane = document.getElementById('quiz-results-pane');
  
  if (appState.quizScore !== null) {
    qPane.classList.add('hidden');
    rPane.classList.remove('hidden');
    
    document.getElementById('quiz-final-score').innerText = `${appState.quizScore} / ${QUIZ_QUESTIONS.length}`;
    
    const lowScoreEl = document.getElementById('quiz-score-low');
    const highScoreEl = document.getElementById('quiz-score-high');
    const enrollmentActionBtn = document.getElementById('quiz-enrollment-action');
    
    if (appState.quizScore < 3) {
      lowScoreEl.classList.remove('hidden');
      highScoreEl.classList.add('hidden');
      enrollmentActionBtn.innerText = "Initiate MTN / Airtel Student Enrollment with Beginner Guidance";
      enrollmentActionBtn.onclick = () => { openPaymentModal("Beginner Course"); };
    } else {
      lowScoreEl.classList.add('hidden');
      highScoreEl.classList.remove('hidden');
      enrollmentActionBtn.innerText = "Unlock VIP Signal & Institutional Dynamic Intake Channel";
      enrollmentActionBtn.onclick = () => { openPaymentModal("Intermediate Course"); };
    }
  } else {
    // Progress calculation
    const progressPercent = ((appState.quizStep + 1) / QUIZ_QUESTIONS.length) * 100;
    document.getElementById('quiz-progress-text').innerText = `Question ${appState.quizStep + 1} of ${QUIZ_QUESTIONS.length}`;
    document.getElementById('quiz-progress-bar').style.width = `${progressPercent}%`;
    
    // Render Question Title
    const activeQ = QUIZ_QUESTIONS[appState.quizStep];
    document.getElementById('quiz-question-title').innerText = activeQ.q;
    
    // Render Options Buttons
    const optsContainer = document.getElementById('quiz-options-container');
    optsContainer.innerHTML = activeQ.options.map((option, idx) => {
      const letter = idx === 0 ? 'A' : 'B';
      return `
        <button 
          onclick="submitQuizAnswer(${idx})"
          class="w-full text-left p-5 rounded-2xl bg-[#0c0c0e]/80 border border-white/5 hover:border-[#00E5FF]/40 hover:bg-[#00E5FF]/5 transition-all group relative flex items-start gap-4"
        >
          <div class="w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-mono text-xs text-white/50 group-hover:bg-[#00E5FF] group-hover:text-black group-hover:border-transparent transition-all shrink-0 mt-0.5">
            ${letter}
          </div>
          <span class="text-white/80 text-sm font-sans font-medium leading-relaxed group-hover:text-white transition-colors">
            ${option.text}
          </span>
        </button>
      `;
    }).join('');
  }
}

function submitQuizAnswer(idx) {
  const activeQ = QUIZ_QUESTIONS[appState.quizStep];
  const score = activeQ.options[idx].score;
  const feedback = activeQ.options[idx].feedback;

  // Show immediate option feedback using localized alert (graceful interaction)
  alert(`Ash Flipper feedback: ${feedback}`);

  appState.quizAnswers.push(score);

  if (appState.quizStep < QUIZ_QUESTIONS.length - 1) {
    appState.quizStep += 1;
    renderQuiz();
  } else {
    const finalScore = appState.quizAnswers.reduce((a, b) => a + b, 0);
    appState.quizScore = finalScore;
    localStorage.setItem('ash_traders_quiz_score', finalScore);
    renderQuiz();
  }
}

function resetQuiz() {
  appState.quizScore = null;
  appState.quizStep = 0;
  appState.quizAnswers = [];
  localStorage.removeItem('ash_traders_quiz_score');
  
  document.getElementById('quiz-intro-pane').classList.remove('hidden');
  document.getElementById('quiz-questions-pane').classList.add('hidden');
  document.getElementById('quiz-results-pane').classList.add('hidden');
}


// SIMULATED CO_CHAT DESK - NLP BOT
function toggleChat() {
  appState.chatOpen = !appState.chatOpen;
  const widget = document.getElementById('trading-chat-widget');
  if (appState.chatOpen) {
    widget.classList.remove('hidden');
    scrollToBottomChat();
  } else {
    widget.classList.add('hidden');
  }
}

function scrollToBottomChat() {
  const container = document.getElementById('html-chat-messages');
  if (container) {
    container.scrollTop = container.scrollHeight;
  }
}

// Custom Local Match NLP responses to ensure 100% offline static functional robustness!
const NLP_RESPONSES = [
  {
    keys: ["fee", "price", "how much", "cost", "dollar", "usd"],
    reply: "Boss! The Ultimate Algorithmic course fee is only $100 USD (370,000 UGX). For intermediate-level setups, the course fee is $250 USD, and elite 1-on-1 VIP Mentorship is available for expert traders. Secure access securely using your MTN or Airtel Money line!"
  },
  {
    keys: ["mtn", "airtel", "mobile money", "telecom", "pay", "deposit", "withdraw"],
    reply: "MTN Mobile Money and Airtel Money are fully live at Ash Traders Hub! Enter your phone number in our Uganda Payment Simulator located on the page. Transactions settle securely with direct API pushes!"
  },
  {
    keys: ["exness", "broker", "spread", "register"],
    reply: "We recommend Exness because of its razor-thin spreads and native Uganda mobile money integrations. Register an account under our official analyst link to gain access to optimized local networks!"
  },
  {
    keys: ["smc", "ict", "order block", "fvg", "structure", "bias"],
    reply: "Smart Money Concepts (SMC) are the secret behind our trade setups. We filter out lagging indicators like EMAs or RSI, and trade solely on liquidity sweeps, market shifts, and high-probability order imbalance blocks."
  },
  {
    keys: ["whatsapp", "telegram", "contact", "support", "ash"],
    reply: "Access our leading analyst Ash Flipper on our official Telegram channel today! Click the 'Join Telegram Free' button on our header to consult our daily trade logs."
  }
];

function fallbackChatBot(userMsgLower) {
  for (let match of NLP_RESPONSES) {
    if (match.keys.some(k => userMsgLower.includes(k))) {
      return match.reply;
    }
  }
  return "That is a great trading query, expert! Master SMC algorithmic order blocks to beat the retail trap. Try your skills on our 'Retail Liquidity Trap' diagnostic test on the page, or secure enrollment via Mobile Money!";
}

async function handleSendChatMessage() {
  const inputEl = document.getElementById('chat-input-field');
  const msgText = inputEl.value.trim();
  if (!msgText) return;

  inputEl.value = "";
  
  // Append user message
  const msgContainer = document.getElementById('html-chat-messages');
  const userBox = document.createElement('div');
  userBox.className = "flex justify-end mb-3.5";
  userBox.innerHTML = `
    <div class="max-w-[85%] rounded-2xl p-3.5 text-xs bg-[#00E5FF] text-black rounded-tr-none leading-relaxed font-sans text-left font-medium">
      ${escapeHTML(msgText)}
    </div>
  `;
  msgContainer.appendChild(userBox);
  scrollToBottomChat();

  // Show loading indicator
  const loadBox = document.createElement('div');
  loadBox.id = "chat-loading-placeholder";
  loadBox.className = "flex justify-start mb-3.5";
  loadBox.innerHTML = `
    <div class="max-w-[85%] rounded-2xl p-3 bg-white/[0.03] border border-white/5 text-slate-400 rounded-tl-none text-xs flex items-center gap-2">
      <span class="flex h-2 w-2 relative">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
      </span>
      Ash support is compiling analysis bias...
    </div>
  `;
  msgContainer.appendChild(loadBox);
  scrollToBottomChat();

  // Standard API request + fallback logic
  const quizString = appState.quizScore !== null ? `Score: ${appState.quizScore}/5` : "";
  const conversationPayload = [
    { role: 'user', content: msgText }
  ];

  let botReply = "";
  try {
    const response = await fetch('/api/support', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: conversationPayload, quizContext: quizString })
    });
    
    if (response.ok) {
      const data = await response.json();
      botReply = data.text;
    } else {
      botReply = fallbackChatBot(msgText.toLowerCase());
    }
  } catch (err) {
    botReply = fallbackChatBot(msgText.toLowerCase());
  }

  // Remove loading and render bot reply
  const checkLoader = document.getElementById('chat-loading-placeholder');
  if (checkLoader) checkLoader.remove();

  const botBox = document.createElement('div');
  botBox.className = "flex justify-start mb-3.5 animate-fade-in";
  botBox.innerHTML = `
    <div class="max-w-[85%] rounded-2xl p-3.5 text-xs bg-[#161618] border border-white/5 text-slate-200 rounded-tl-none leading-relaxed text-left font-sans">
      ${botReply}
    </div>
  `;
  msgContainer.appendChild(botBox);
  scrollToBottomChat();
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

// MODAL TOGGLERS
function setShowBrokerModal(val) {
  appState.showBrokerModal = val;
  const modal = document.getElementById('modal-exness-guide');
  if (val) {
    modal.classList.remove('hidden');
  } else {
    modal.classList.add('hidden');
  }
}

function setShowTelegramModal(val) {
  appState.showTelegramModal = val;
  const modal = document.getElementById('modal-telegram-channel');
  if (val) {
    modal.classList.remove('hidden');
  } else {
    modal.classList.add('hidden');
  }
}

function toggleMobileMenu() {
  appState.mobileMenuOpen = !appState.mobileMenuOpen;
  const panel = document.getElementById('mobile-nav-panel');
  if (appState.mobileMenuOpen) {
    panel.classList.remove('hidden');
  } else {
    panel.classList.add('hidden');
  }
}
