<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Beloveeth Realty | AI-Powered Real Estate</title>
  <!-- Tailwind CSS CDN for styling -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            maroon: {
              100: '#fbe8eb',
              800: '#7a0016',
              900: '#52000e',
            }
          }
        }
      }
    }
  </script>
  <style>
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-12px) rotate(4deg); }
    }
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
    @keyframes pulse-ring {
      0% { transform: scale(0.95); opacity: 0.8; }
      50% { transform: scale(1.1); opacity: 0.4; }
      100% { transform: scale(0.95); opacity: 0.8; }
    }
    .pulse-ring {
      animation: pulse-ring 2s infinite ease-in-out;
    }
  </style>
</head>
<body class="bg-amber-50/30 text-slate-900 font-sans min-h-screen relative overflow-x-hidden pb-32">

  <!-- Top Interactive Banner -->
  <div class="bg-gradient-to-r from-amber-500 via-maroon-800 to-maroon-900 text-white py-2 px-4 text-xs font-black flex justify-between items-center shadow-md">
    <div class="flex items-center space-x-2 animate-pulse">
      <span>🔥 HOT OPPORTUNITY:</span>
      <span class="hidden sm:inline">Abeokuta Land Expansion corridor yields up 15%!</span>
    </div>
    <button id="streakBtn" onclick="claimStreak()" class="px-3 py-1 bg-yellow-400 text-slate-900 rounded-full text-[11px] font-black transition-all hover:bg-yellow-300 active:scale-95 shadow">
      🎁 Claim Day 1 Bonus
    </button>
  </div>

  <!-- Header with Extra Large Logo -->
  <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-amber-200 shadow-md">
    <div class="max-w-7xl mx-auto px-6 h-28 md:h-36 flex items-center justify-between">
      <a href="#" class="flex items-center space-x-3 py-2">
        <img src="/logo.png" alt="Beloveeth Realty Logo" class="h-24 md:h-32 w-auto object-contain hover:scale-105 transition-transform duration-300" onError="this.onerror=null; this.src='https://via.placeholder.com/300x120?text=BELOVEETH+REALTY';" />
      </a>

      <nav class="hidden md:flex space-x-8 text-base font-extrabold text-slate-800">
        <a href="#properties" class="hover:text-maroon-800 hover:scale-105 transition-all">Properties</a>
        <a href="#invest" class="hover:text-maroon-800 hover:scale-105 transition-all">Invest & Yield</a>
        <a href="#pulse" class="hover:text-maroon-800 hover:scale-105 transition-all">Pulse AI</a>
        <a href="#ceo" class="hover:text-maroon-800 hover:scale-105 transition-all">Leadership</a>
      </nav>

      <div class="flex items-center space-x-3">
        <button class="px-5 py-2.5 text-sm font-extrabold text-maroon-800 border-2 border-maroon-800 rounded-2xl hover:bg-maroon-100 transition-colors">Sign In</button>
        <button class="px-6 py-2.5 text-sm font-black bg-maroon-800 text-white rounded-2xl hover:bg-maroon-900 transition-all shadow-lg active:scale-95">Explore Live</button>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="max-w-7xl mx-auto px-6 py-12 md:py-20">
    <div class="grid md:grid-cols-12 gap-10 items-center">
      <div class="md:col-span-7 space-y-6">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-100 border border-amber-300 text-maroon-900 text-xs font-black rounded-full shadow-sm">
          <span class="animate-spin text-sm">✨</span> Next-Gen Interactive Real Estate
        </div>
        
        <h1 class="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          PROPERTY IS MORE THAN A PLACE.<br />
          <span class="text-maroon-800 underline decoration-amber-400 decoration-wavy decoration-4">IT'S A DECISION.</span>
        </h1>
        
        <p class="text-base md:text-lg text-slate-600 font-medium max-w-xl">
          Discover verified homes, track real-time yield signals, and chat with Prop—your comic AI buddy guiding your every step!
        </p>

        <!-- Search Bar -->
        <div class="bg-white p-3 rounded-3xl shadow-2xl border-2 border-amber-200 max-w-2xl">
          <div class="flex items-center gap-2">
            <span class="pl-3 text-xl">🔍</span>
            <input id="searchInput" type="text" placeholder="e.g., '3-bedroom in Ikoyi under ₦150M'" class="w-full px-2 py-3 text-sm focus:outline-none font-semibold text-slate-800" />
            <button onclick="handleSearch()" class="bg-maroon-800 text-white px-7 py-3.5 rounded-2xl text-sm font-black hover:bg-maroon-900 transition-all shadow-md active:scale-95">Search</button>
          </div>
        </div>
      </div>

      <!-- Hero Visual Card -->
      <div class="md:col-span-5 bg-gradient-to-br from-maroon-900 to-slate-900 rounded-3xl p-8 text-white relative shadow-2xl border-4 border-amber-300/40">
        <div class="space-y-4 relative z-10">
          <span class="bg-emerald-500 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider inline-block">
            ⚡ Pulse Signal Live
          </span>
          <h3 class="text-3xl font-black">Lagos Residential Demand Index</h3>
          <p class="text-sm text-gray-300 font-medium">Lekki Phase 1 rental yield is up 12% Q3. Investors are securing units fast.</p>
          
          <div class="pt-4 flex items-center justify-between border-t border-white/20">
            <div>
              <p class="text-xs text-gray-400 font-bold">Median Asking Price</p>
              <p class="text-2xl font-black text-amber-400">₦110,000,000</p>
            </div>
            <button onclick="openPropChat('Tell me more about Lekki rental yields!')" class="bg-amber-400 text-slate-900 font-black text-xs px-4 py-2.5 rounded-xl hover:bg-yellow-300 transition-all shadow-md">
              Ask Prop About This →
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CEO Leadership Section -->
  <section id="ceo" class="bg-white py-16 border-y-2 border-amber-100">
    <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
      <div class="w-full md:w-1/3 flex justify-center">
        <div class="relative w-80 h-[400px] overflow-hidden rounded-3xl shadow-2xl border-4 border-maroon-800 bg-amber-50">
          <img src="/ceo.png" alt="Philip - CEO" class="w-full h-full object-cover object-center" onError="this.onerror=null; this.src='https://via.placeholder.com/400x500?text=CEO+Philip';" />
        </div>
      </div>
      <div class="w-full md:w-2/3 space-y-5 text-center md:text-left">
        <span class="text-xs font-black text-maroon-800 tracking-widest uppercase bg-maroon-100 px-3 py-1 rounded-full">
          Executive Leadership
        </span>
        <h2 class="text-4xl md:text-5xl font-black text-slate-900">Philip</h2>
        <p class="text-lg font-bold text-maroon-800">Chief Executive Officer, Beloveeth Realty</p>
        <p class="text-slate-600 text-base max-w-2xl leading-relaxed font-medium">
          Transforming property investments across Nigeria through transparency, AI-guided market intelligence, and institutional excellence.
        </p>
        <div class="pt-4 border-t border-gray-200 flex flex-col sm:flex-row justify-center md:justify-start gap-6 text-sm font-bold text-slate-800">
          <p class="flex items-center justify-center gap-2">📞 <span>09052286312</span></p>
          <p class="flex items-center justify-center gap-2">✉️ <span>philipdarejohnson@gmail.com</span></p>
        </div>
      </div>
    </div>
  </section>

  <!-- FLYING GOOFY COMIC AI MASCOT (PROP) -->
  <div id="propContainer" class="fixed bottom-6 right-6 z-50 flex flex-col items-end">
    
    <!-- Comic Speech Bubble -->
    <div id="propBubble" onclick="togglePropChat()" class="bg-white text-slate-900 p-4 rounded-3xl shadow-2xl border-4 border-maroon-800 max-w-xs text-xs font-black relative animate-float mb-3 cursor-pointer transform hover:scale-105 transition-transform">
      <div class="flex items-center gap-2 mb-1">
        <span class="bg-amber-400 text-slate-900 px-2 py-0.5 rounded-md text-[10px] font-black uppercase">Prop says:</span>
      </div>
      <p id="propDialogueText">Psst! Over here! Want to find a house that actually fits your budget? 🏠✨</p>
      <div class="absolute -bottom-3 right-8 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[12px] border-t-maroon-800"></div>
    </div>

    <!-- Cartoon Mascot Button -->
    <button id="propAvatarBtn" onclick="togglePropChat()" class="w-20 h-20 rounded-full bg-gradient-to-tr from-maroon-800 via-amber-500 to-yellow-400 p-1 shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 relative group">
      <div class="w-full h-full bg-slate-900 rounded-full flex flex-col items-center justify-center relative overflow-hidden border-2 border-white">
        <span class="absolute -top-1 text-sm animate-bounce">👑</span>
        <span id="propEmoji" class="text-3xl mt-2 group-hover:rotate-12 transition-transform">🤖</span>
        <span class="absolute bottom-1 text-[9px] font-black text-amber-300 uppercase tracking-tighter">PROP AI</span>
      </div>
      <span class="absolute top-0 right-0 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white pulse-ring"></span>
      <span class="absolute top-0 right-0 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white"></span>
    </button>

    <!-- Interactive Chat Window (Hidden by Default) -->
    <div id="propChatWindow" class="hidden w-80 md:w-96 bg-white rounded-3xl shadow-2xl border-4 border-maroon-800 overflow-hidden flex-col h-[480px]">
      <div class="bg-maroon-800 text-white p-4 flex items-center justify-between shadow-md">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center text-xl font-black border-2 border-white">👑</div>
          <div>
            <h4 class="text-base font-black leading-tight flex items-center gap-1.5">
              Prop <span class="bg-amber-400 text-slate-900 text-[10px] px-2 py-0.5 rounded-full font-black">Goofy AI</span>
            </h4>
            <span class="text-[11px] text-amber-200 font-bold">Your Comic Realty Mascot</span>
          </div>
        </div>
        <button onclick="togglePropChat()" class="w-8 h-8 rounded-full bg-maroon-900 hover:bg-black text-white font-black text-sm flex items-center justify-center transition-colors">✕</button>
      </div>

      <!-- Messages Area -->
      <div id="chatMessages" class="flex-1 p-4 overflow-y-auto space-y-3 bg-amber-50/50 text-xs">
        <div class="flex justify-start">
          <div class="max-w-[85%] p-3.5 rounded-2xl font-bold bg-white border-2 border-amber-300 text-slate-800 rounded-bl-none shadow-sm">
            YOOO! 👋 I'm Prop! Not your corporate chatbot. I'm your energetic real estate sidekick! What are we searching for today?
          </div>
        </div>
      </div>

      <!-- Chat Input -->
      <form onsubmit="handleSendMsg(event)" class="p-3 border-t-2 border-amber-200 bg-white flex gap-2">
        <input id="chatInput" type="text" placeholder="Ask Prop anything funny or market-related..." class="flex-1 text-xs font-bold border-2 border-gray-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-maroon-800" />
        <button type="submit" class="bg-amber-400 text-slate-900 text-xs px-4 py-2.5 rounded-xl font-black hover:bg-yellow-300 transition-colors active:scale-95">Send!</button>
      </form>
    </div>
  </div>

  <!-- Footer with Large Logo -->
  <footer class="bg-slate-900 text-white py-16 border-t-4 border-maroon-800">
    <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-sm">
      <div class="flex flex-col items-center md:items-start space-y-3">
        <img src="/logo.png" alt="Beloveeth Realty" class="h-20 w-auto object-contain brightness-0 invert" onError="this.onerror=null; this.src='https://via.placeholder.com/250x100?text=BELOVEETH+REALTY';" />
        <p class="text-gray-400 font-medium text-xs">Transforming real estate decisions through AI and transparency.</p>
      </div>
      <p class="text-gray-400 font-bold">© 2026 Beloveeth Realty. All rights reserved.</p>
    </div>
  </footer>

  <script>
    let isChatOpen = false;
    let streakCount = 1;
    let streakClaimed = false;

    const quotes = [
      "👀 Hey boss! Are we inspecting Lekki mansions or eating Suya today?",
      "🚀 Fun Fact: If you bought land in Ogun 5 years ago, you'd be smiling right now!",
      "🤪 Stop scrolling and talk to me! I don't bite... I just find deals!",
      "👑 Philip (The CEO) told me to make sure you get the best deal today!",
      "💰 Tap me! I have secret market insights hidden in my hat!"
    ];

    setInterval(() => {
      if (!isChatOpen) {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        document.getElementById("propDialogueText").innerText = randomQuote;
      }
    }, 6000);

    function togglePropChat() {
      isChatOpen = !isChatOpen;
      const bubble = document.getElementById("propBubble");
      const avatarBtn = document.getElementById("propAvatarBtn");
      const windowEl = document.getElementById("propChatWindow");

      if (isChatOpen) {
        bubble.classList.add("hidden");
        avatarBtn.classList.add("hidden");
        windowEl.classList.remove("hidden");
        windowEl.classList.add("flex");
      } else {
        bubble.classList.remove("hidden");
        avatarBtn.classList.remove("hidden");
        windowEl.classList.add("hidden");
        windowEl.classList.remove("flex");
      }
    }

    function openPropChat(customPrompt) {
      if (!isChatOpen) togglePropChat();
      if (customPrompt) {
        document.getElementById("chatInput").value = customPrompt;
      }
    }

    function handleSendMsg(e) {
      e.preventDefault();
      const input = document.getElementById("chatInput");
      const val = input.value.trim();
      if (!val) return;

      const chatMessages = document.getElementById("chatMessages");

      // User Message
      chatMessages.innerHTML += `
        <div class="flex justify-end">
          <div class="max-w-[85%] p-3.5 rounded-2xl font-bold bg-maroon-800 text-white rounded-br-none shadow-sm">
            ${val}
          </div>
        </div>
      `;
      input.value = "";

      // Prop Goofy Reply
      setTimeout(() => {
        const goofyReplies = [
          `Haha! "${val}"? Say no more! My AI brain is running calculations... 🧮 Boom! High-yield areas in Lagos & Ogun are popping off right now!`,
          `Omo! Searching for "${val}" is a big move! Let's get you something with crazy ROI potential before someone else grabs it! 🏃‍♂️💨`,
          `I checked the radar! 📡 "${val}" looks super promising. Need me to break down the estimated yield or call the CEO for a discount? 😉`
        ];
        const reply = goofyReplies[Math.floor(Math.random() * goofyReplies.length)];

        chatMessages.innerHTML += `
          <div class="flex justify-start">
            <div class="max-w-[85%] p-3.5 rounded-2xl font-bold bg-white border-2 border-amber-300 text-slate-800 rounded-bl-none shadow-sm">
              ${reply}
            </div>
          </div>
        `;
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 500);
    }

    function claimStreak() {
      const btn = document.getElementById("streakBtn");
      if (!streakClaimed) {
        streakCount++;
        streakClaimed = true;
        btn.innerHTML = `⚡ Day ${streakCount} Streak Active!`;
        btn.className = "px-3 py-1 bg-emerald-500 text-white rounded-full text-[11px] font-black transition-all shadow";
        document.getElementById("propDialogueText").innerText = "🎉 WOOHOO! Daily Streak Claimed! You get +100 Investor Luck!";
      }
    }

    function handleSearch() {
      const query = document.getElementById("searchInput").value;
      if (query) {
        openPropChat(`Help me find: ${query}`);
      }
    }
  </script>
</body>
</html>
