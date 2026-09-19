<!DOCTYPE1 html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Beloveeth Realty | AI-Native PropTech Ecosystem</title>
  
  <!-- Leaflet CSS for World & Lagos Spatial Mapping -->
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <!-- Chart.js for Data Analytics -->
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>

  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            maroon: {
              DEFAULT: '#5A1725',
              hover: '#42101B',
              light: '#7A2234',
              soft: '#8C2B3F'
            },
            ivory: {
              DEFAULT: '#FCFBF8',
              card: '#FFFFFF',
              border: '#E8E5DF'
            },
            dark: '#14171A'
          }
        }
      }
    }
  </script>

  <style>
    body { background-color: #FCFBF8; color: #14171A; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
    .pulse-ring {
      border: 3px solid #5A1725;
      background: rgba(90, 23, 37, 0.25);
      border-radius: 50%;
      height: 90px;
      width: 90px;
      position: absolute;
      left: -25px;
      top: -25px;
      animation: pulsate 2s ease-out infinite;
    }
    @keyframes pulsate {
      0% { transform: scale(0.1, 0.1); opacity: 0.0; }
      50% { opacity: 1.0; }
      100% { transform: scale(1.2, 1.2); opacity: 0.0; }
    }
    #worldMap, #lagosMap { height: 100%; width: 100%; z-index: 1; }
    .custom-scroll::-webkit-scrollbar { width: 6px; }
    .custom-scroll::-webkit-scrollbar-thumb { background: #5A1725; border-radius: 4px; }
  </style>
</head>
<body class="min-h-screen flex flex-col">

  <!-- TOP BRANDING & ROLE AUTH HEADER -->
  <header class="bg-maroon text-white sticky top-0 z-50 shadow-xl border-b border-maroon-hover">
    <div class="max-w-7xl mx-auto px-4 py-3 flex flex-wrap justify-between items-center gap-4">
      <div class="flex items-center space-x-3">
        <div class="bg-white text-maroon font-black px-3 py-1.5 rounded-lg text-lg tracking-wider border border-amber-300">
          BELOVEETH
        </div>
        <div>
          <span class="text-xs tracking-widest text-amber-200 block font-bold uppercase">Realty Platform v2.6</span>
          <span class="text-[11px] text-gray-200">Lagos Spatial & Market Intelligence</span>
        </div>
      </div>

      <!-- Live Role Switcher / Authentication Status -->
      <div class="flex items-center space-x-2 bg-black/30 p-1.5 rounded-xl border border-white/10">
        <span class="text-xs text-amber-200 font-bold px-2">Active Persona:</span>
        <button onclick="switchPortalRole('CLIENT')" id="btn-CLIENT" class="role-btn text-xs font-bold px-3 py-1.5 rounded-lg bg-white text-maroon shadow transition">
          🏢 Investor/Client
        </button>
        <button onclick="switchPortalRole('PARTNER')" id="btn-PARTNER" class="role-btn text-xs font-bold px-3 py-1.5 rounded-lg text-white hover:bg-white/10 transition">
          🤝 Partner / Developer
        </button>
        <button onclick="switchPortalRole('WORKER')" id="btn-WORKER" class="role-btn text-xs font-bold px-3 py-1.5 rounded-lg text-white hover:bg-white/10 transition">
          ⚙️ Internal Staff / CRM
        </button>
      </div>

      <button onclick="openModal('authModal')" class="bg-amber-400 hover:bg-amber-300 text-maroon font-black text-xs px-4 py-2 rounded-lg shadow-md transition flex items-center gap-1">
        🔐 Switch Role Login
      </button>
    </div>
  </header>

  <!-- PUBLIC MARKET INTELLIGENCE TICKER (For Informed Decision Making) -->
  <section class="bg-maroon-hover text-amber-100 text-xs py-2 px-4 border-b border-maroon-light overflow-x-auto whitespace-nowrap flex justify-between items-center">
    <div class="flex items-center space-x-6 animate-pulse">
      <span>🌐 <strong>Lagos Market Index 2026:</strong> Lekki Corridor Yield +18.5% p.a.</span>
      <span>|</span>
      <span>🚦 <strong>Congestion Index:</strong> Lekki-Epe Expressway High Traffic (78/100)</span>
      <span>|</span>
      <span>📈 <strong>Short-Let Revenue:</strong> ₦264B Annualized</span>
      <span>|</span>
      <span>🏗️ <strong>Infrastructure Surge:</strong> Lagos-Calabar Coastal Hwy Driving Land Value</span>
    </div>
    <span class="bg-emerald-500 text-black text-[10px] font-black px-2 py-0.5 rounded uppercase">Live Data Feed</span>
  </section>

  <!-- MAIN CONTENT CONTAINER -->
  <main class="flex-grow max-w-7xl w-full mx-auto p-4 md:p-6 space-y-8">

    <!-- GEOGRAPHIC / WORLD SPATIAL TARGETING SECTION -->
    <section class="bg-white rounded-2xl p-6 border-2 border-maroon shadow-lg space-y-4">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 class="text-xl font-black text-maroon flex items-center gap-2">
            🌍 Global Focus & West Africa Hub Radius
          </h2>
          <p class="text-xs text-gray-600">
            Open GIS spatial targeting highlighting Lagos, Nigeria as the high-yield capital investment zone.
          </p>
        </div>
        <div class="flex items-center gap-2 text-xs font-bold">
          <span class="w-3 h-3 rounded-full bg-maroon inline-block"></span>
          <span>Beloveeth Target Zone (50km Radius)</span>
        </div>
      </div>

      <!-- Map Element -->
      <div class="relative w-full h-80 rounded-xl overflow-hidden border border-gray-300 shadow-inner">
        <div id="worldMap"></div>
      </div>
    </section>

    <!-- PUBLIC ANALYTICS & INFORMED INVESTMENT DECISION HUB -->
    <section class="grid md:grid-cols-3 gap-6">
      
      <!-- Traffic Congestion & Traffic Analytics -->
      <div class="bg-white p-5 rounded-2xl border border-ivory-border shadow-md space-y-3">
        <div class="flex justify-between items-center">
          <h3 class="font-extrabold text-sm text-maroon">🚦 Real-Time Congestion Index</h3>
          <span class="text-[10px] font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded">Google API Feed</span>
        </div>
        <p class="text-xs text-gray-500">Commute friction directly influences short-let rental rates and land value growth.</p>
        <div class="h-44 relative">
          <canvas id="trafficChart"></canvas>
        </div>
      </div>

      <!-- ROI & Yield Trends -->
      <div class="bg-white p-5 rounded-2xl border border-ivory-border shadow-md space-y-3">
        <div class="flex justify-between items-center">
          <h3 class="font-extrabold text-sm text-maroon">📈 5-Year Capital Yield Trend</h3>
          <span class="text-[10px] font-bold bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded">Verified 2026 Data</span>
        </div>
        <p class="text-xs text-gray-500">Comparing traditional residential leases vs. short-let serviced properties.</p>
        <div class="h-44 relative">
          <canvas id="yieldChart"></canvas>
        </div>
      </div>

      <!-- Open Property Web Scraping / Live Aggregator -->
      <div class="bg-white p-5 rounded-2xl border border-ivory-border shadow-md space-y-3 flex flex-col justify-between">
        <div>
          <div class="flex justify-between items-center mb-2">
            <h3 class="font-extrabold text-sm text-maroon">📡 Open Real Estate Aggregator</h3>
            <span class="text-[10px] font-bold bg-sky-100 text-sky-900 px-2 py-0.5 rounded">Live Scraper</span>
          </div>
          <p class="text-xs text-gray-500 mb-3">
            Real-time open web prices compiled across Nigeria Property Centre & BusinessDay indices.
          </p>
          
          <div class="space-y-2 text-xs">
            <div class="p-2.5 bg-gray-50 rounded-lg flex justify-between items-center border border-gray-200">
              <div>
                <p class="font-bold text-gray-800">Ikoyi Luxury 3-Bed</p>
                <p class="text-[10px] text-gray-500">Prime Capital Preservation</p>
              </div>
              <span class="font-black text-maroon">₦850M</span>
            </div>
            
            <div class="p-2.5 bg-gray-50 rounded-lg flex justify-between items-center border border-gray-200">
              <div>
                <p class="font-bold text-gray-800">Lekki Phase 1 Terrace</p>
                <p class="text-[10px] text-emerald-600 font-semibold">+18.2% Short-Let Yield</p>
              </div>
              <span class="font-black text-maroon">₦350M</span>
            </div>

            <div class="p-2.5 bg-gray-50 rounded-lg flex justify-between items-center border border-gray-200">
              <div>
                <p class="font-bold text-gray-800">Ibeju-Lekki Commercial Plot</p>
                <p class="text-[10px] text-amber-600 font-semibold">Coastal Hwy Corridor</p>
              </div>
              <span class="font-black text-maroon">₦35M</span>
            </div>
          </div>
        </div>

        <button onclick="switchPortalRole('CLIENT')" class="w-full mt-3 py-2 bg-maroon text-white text-xs font-bold rounded-lg hover:bg-maroon-hover transition">
          Analyze Portfolio Investment →
        </button>
      </div>
    </section>

    <!-- DYNAMIC DUAL ROLE DASHBOARDS CONTAINER -->
    <!-- 1. CLIENT DASHBOARD -->
    <section id="dashboard-CLIENT" class="role-dashboard space-y-6">
      <div class="bg-maroon text-white p-6 rounded-2xl shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span class="bg-amber-400 text-maroon font-black text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider">Client & Investor Portal</span>
          <h2 class="text-2xl font-black mt-2">Investments & Market GIS Analytics</h2>
          <p class="text-xs text-amber-100">Tailored property models, land verification status, and capital growth tools.</p>
        </div>
        <div class="flex gap-2">
          <button onclick="alert('Downloading Beloveeth 2026 Market Analysis PDF')" class="bg-white text-maroon font-bold text-xs px-4 py-2 rounded-lg hover:bg-gray-100 transition">
            📄 Download Report
          </button>
          <a href="https://wa.me/2349052286312" target="_blank" class="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs px-4 py-2 rounded-lg transition">
            💬 Speak to CEO (Philip)
          </a>
        </div>
      </div>

      <!-- Interactive Calculator & GIS Map -->
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-white p-6 rounded-2xl border border-ivory-border shadow-md space-y-4">
          <h3 class="font-black text-base text-maroon">🧮 Investor Yield & Appreciation Calculator</h3>
          <div class="space-y-3 text-xs">
            <div>
              <label class="block font-bold text-gray-700 mb-1">Select Target Investment Corridor:</label>
              <select id="calcCorridor" onchange="calculateYield()" class="w-full p-2.5 border border-gray-300 rounded-lg font-bold text-gray-800">
                <option value="lekki">Lekki Phase 1 (Short-Let / High Liquidity)</option>
                <option value="ibeju">Ibeju-Lekki (Free Trade Zone / High Appreciation)</option>
                <option value="ikeja">Ikeja GRA (Mainland Prime / Stable Rental)</option>
              </select>
            </div>
            <div>
              <label class="block font-bold text-gray-700 mb-1">Capital Amount (₦ Millions):</label>
              <input type="number" id="calcAmount" value="150" oninput="calculateYield()" class="w-full p-2.5 border border-gray-300 rounded-lg font-bold text-gray-800">
            </div>
            <div class="p-4 bg-maroon/5 rounded-xl border border-maroon/20 space-y-2">
              <div class="flex justify-between font-bold">
                <span class="text-gray-600">Projected 3-Yr Value:</span>
                <span id="resAppreciation" class="text-maroon text-sm font-black">₦232.5M</span>
              </div>
              <div class="flex justify-between font-bold">
                <span class="text-gray-600">Est. Annual Rental Yield:</span>
                <span id="resYield" class="text-emerald-700 text-sm font-black">₦27.0M / yr (18%)</span>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-2xl border border-ivory-border shadow-md space-y-3">
          <h3 class="font-black text-base text-maroon">🗺️ Lagos Micro-Location Heatmap</h3>
          <p class="text-xs text-gray-500">Live zone bounds showing land acquisition hotspots and infrastructure projects.</p>
          <div id="lagosMap" class="h-64 rounded-xl border border-gray-200"></div>
        </div>
      </div>
    </section>

    <!-- 2. PARTNER DASHBOARD -->
    <section id="dashboard-PARTNER" class="role-dashboard space-y-6 hidden">
      <div class="bg-slate-900 text-white p-6 rounded-2xl shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span class="bg-sky-400 text-black font-black text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider">Partner & Joint Venture Portal</span>
          <h2 class="text-2xl font-black mt-2">Joint-Venture & Land Syndicate Pipeline</h2>
          <p class="text-xs text-slate-300">Co-investment tools, real-time listing feeds, and joint development tracking.</p>
        </div>
        <button onclick="openModal('jvSubmitModal')" class="bg-sky-400 hover:bg-sky-300 text-black font-black text-xs px-4 py-2 rounded-lg shadow transition">
          ➕ Submit JV Land Plot
        </button>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-white p-5 rounded-2xl border border-ivory-border shadow-sm space-y-2">
          <span class="text-[10px] font-bold text-gray-400 uppercase">Active Joint Ventures</span>
          <p class="text-2xl font-black text-maroon">12 Projects</p>
          <p class="text-xs text-emerald-600 font-bold">₦4.2B Combined Value</p>
        </div>
        <div class="bg-white p-5 rounded-2xl border border-ivory-border shadow-sm space-y-2">
          <span class="text-[10px] font-bold text-gray-400 uppercase">Average Commission Share</span>
          <p class="text-2xl font-black text-maroon">15% - 25%</p>
          <p class="text-xs text-gray-500 font-bold">Partner Return Rate</p>
        </div>
        <div class="bg-white p-5 rounded-2xl border border-ivory-border shadow-sm space-y-2">
          <span class="text-[10px] font-bold text-gray-400 uppercase">Title Verification SLA</span>
          <p class="text-2xl font-black text-maroon">48 Hours</p>
          <p class="text-xs text-sky-600 font-bold">Governor's Consent Checked</p>
        </div>
      </div>
    </section>

    <!-- 3. WORKER / INTERNAL CRM DASHBOARD -->
    <section id="dashboard-WORKER" class="role-dashboard space-y-6 hidden">
      <div class="bg-maroon-hover text-white p-6 rounded-2xl shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span class="bg-amber-400 text-maroon font-black text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider">Internal Operations & CRM</span>
          <h2 class="text-2xl font-black mt-2">Beloveeth Internal Property & Lead CRM</h2>
          <p class="text-xs text-amber-200">Manage client inquiries, scraper feeds, and GIS data enrichment for internal workers.</p>
        </div>
        <div class="flex gap-2">
          <button onclick="alert('Syncing Google Places API & Real Estate Scrape Feeds...')" class="bg-amber-400 text-maroon font-black text-xs px-3 py-2 rounded-lg shadow">
            🔄 Refresh Scrapers
          </button>
        </div>
      </div>

      <!-- CRM Table -->
      <div class="bg-white rounded-2xl border border-ivory-border shadow-md overflow-hidden">
        <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 class="font-black text-maroon text-sm">📥 Inbound Client Leads & Market Inquiries</h3>
          <span class="text-xs bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-full">8 Active Today</span>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs text-gray-700">
            <thead class="bg-gray-50 text-gray-500 uppercase font-extrabold text-[10px]">
              <tr>
                <th class="p-3.5">Client Name</th>
                <th class="p-3.5">Interest Zone</th>
                <th class="p-3.5">Budget</th>
                <th class="p-3.5">Status</th>
                <th class="p-3.5">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr>
                <td class="p-3.5 font-bold text-gray-900">Dr. Damilola A. (Diaspora)</td>
                <td class="p-3.5">Lekki Phase 1 Shortlet</td>
                <td class="p-3.5 font-bold text-emerald-700">₦250,000,000</td>
                <td class="p-3.5"><span class="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded">Hot Lead</span></td>
                <td class="p-3.5"><button class="bg-maroon text-white font-bold px-2.5 py-1 rounded text-[10px]">Assign Agent</button></td>
              </tr>
              <tr>
                <td class="p-3.5 font-bold text-gray-900">Chief Kenneth O.</td>
                <td class="p-3.5">Ibeju-Lekki Commercial Land</td>
                <td class="p-3.5 font-bold text-emerald-700">₦120,000,000</td>
                <td class="p-3.5"><span class="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">Inspection Booked</span></td>
                <td class="p-3.5"><button class="bg-maroon text-white font-bold px-2.5 py-1 rounded text-[10px]">Send C of O</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

  </main>

  <!-- THREE-WAY ROLE SWITCHER MODAL -->
  <div id="authModal" class="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 hidden">
    <div class="bg-white max-w-md w-full rounded-2xl p-6 space-y-6 shadow-2xl border-2 border-maroon relative">
      <button onclick="closeModal('authModal')" class="absolute top-4 right-4 text-gray-400 hover:text-gray-800 font-bold">✕</button>
      
      <div class="text-center space-y-1">
        <div class="w-10 h-10 bg-maroon/10 text-maroon rounded-full flex items-center justify-center mx-auto text-xl font-black">🔐</div>
        <h3 class="text-xl font-black text-maroon">Three-Way Portal Login</h3>
        <p class="text-xs text-gray-500">Access role-specific analytics, CRM tools, or investor dashboards.</p>
      </div>

      <div class="space-y-3">
        <label class="block text-xs font-bold text-gray-700">Select Portal Role:</label>
        <select id="loginRoleSelect" class="w-full p-3 border border-gray-300 rounded-xl font-bold text-xs text-gray-800">
          <option value="CLIENT">🏢 Investor / Client Portal</option>
          <option value="PARTNER">🤝 Partner / Developer JV Portal</option>
          <option value="WORKER">⚙️ Staff / Internal CRM Dashboard</option>
        </select>

        <div>
          <label class="block text-xs font-bold text-gray-700 mb-1">Access Passcode or Client Email:</label>
          <input type="text" placeholder="e.g. client@beloveeth.com" class="w-full p-3 border border-gray-300 rounded-xl text-xs font-bold">
        </div>

        <button onclick="executeModalLogin()" class="w-full py-3 bg-maroon hover:bg-maroon-hover text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition">
          Authenticate Access →
        </button>
      </div>
    </div>
  </div>

  <!-- Leaflet JS -->
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

  <script>
    // 1. Role Switching Dynamic Functionality
    function switchPortalRole(role) {
      document.querySelectorAll('.role-dashboard').forEach(el => el.classList.add('hidden'));
      document.getElementById(`dashboard-${role}`).classList.remove('hidden');

      document.querySelectorAll('.role-btn').forEach(btn => {
        btn.classList.remove('bg-white', 'text-maroon', 'shadow');
        btn.classList.add('text-white');
      });
      const activeBtn = document.getElementById(`btn-${role}`);
      if(activeBtn) {
        activeBtn.classList.add('bg-white', 'text-maroon', 'shadow');
        activeBtn.classList.remove('text-white');
      }
    }

    function openModal(id) { document.getElementById(id).classList.remove('hidden'); }
    function closeModal(id) { document.getElementById(id).classList.add('hidden'); }

    function executeModalLogin() {
      const selected = document.getElementById('loginRoleSelect').value;
      switchPortalRole(selected);
      closeModal('authModal');
    }

    // 2. Investment Calculator
    function calculateYield() {
      const corridor = document.getElementById('calcCorridor').value;
      const amount = parseFloat(document.getElementById('calcAmount').value) || 0;
      
      let appRate = 0.15;
      let yieldRate = 0.12;

      if(corridor === 'ibeju') { appRate = 0.28; yieldRate = 0.08; }
      if(corridor === 'lekki') { appRate = 0.18; yieldRate = 0.18; }
      if(corridor === 'ikeja') { appRate = 0.12; yieldRate = 0.10; }

      const totalApp = amount * Math.pow((1 + appRate), 3);
      const annualYield = amount * yieldRate;

      document.getElementById('resAppreciation').innerText = `₦${totalApp.toFixed(1)}M`;
      document.getElementById('resYield').innerText = `₦${annualYield.toFixed(1)}M / yr (${(yieldRate*100).toFixed(0)}%)`;
    }

    // 3. Initialize Open GIS Leaflet Maps
    window.addEventListener('DOMContentLoaded', () => {
      // Map 1: World Map Centered on Lagos Nigeria with Maroon Radar Pulsing Range
      const worldMap = L.map('worldMap').setView([6.5244, 3.3792], 6);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(worldMap);

      // Lagos Center Pin & Pulsing Range Circle
      const lagosCoords = [6.5244, 3.3792];
      
      L.circle(lagosCoords, {
        color: '#5A1725',
        fillColor: '#5A1725',
        fillOpacity: 0.25,
        radius: 65000 // 65km range
      }).addTo(worldMap).bindPopup("<b>Beloveeth Core High-Yield Zone</b><br>Lagos State Corridor Range");

      L.marker(lagosCoords).addTo(worldMap)
        .bindPopup("<b>Lagos Hub</b><br>Primary Property & Infrastructure Engine")
        .openPopup();

      // Map 2: Micro Lagos Heatmap Map
      const lagosMap = L.map('lagosMap').setView([6.45, 3.60], 10);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap'
      }).addTo(lagosMap);

      L.circle([6.45, 3.47], { color: '#5A1725', radius: 4000 }).addTo(lagosMap).bindPopup("Lekki Phase 1: High Short-Let Yield");
      L.circle([6.46, 3.90], { color: '#D97706', radius: 9000 }).addTo(lagosMap).bindPopup("Ibeju-Lekki: Infrastructure Appreciation Target");

      // 4. Initialize Chart.js Analytics (Traffic & ROI)
      // Traffic Chart
      new Chart(document.getElementById('trafficChart'), {
        type: 'bar',
        data: {
          labels: ['7 AM', '10 AM', '1 PM', '5 PM', '8 PM'],
          datasets: [{
            label: 'Lekki Corridor Traffic Score',
            data: [85, 45, 30, 92, 60],
            backgroundColor: '#5A1725'
          }]
        },
        options: { responsive: true, maintainAspectRatio: false }
      });

      // Yield Chart
      new Chart(document.getElementById('yieldChart'), {
        type: 'line',
        data: {
          labels: ['2022', '2023', '2024', '2025', '2026'],
          datasets: [
            { label: 'Short-Let Yield %', data: [11, 13, 15, 17, 18.5], borderColor: '#10B981', fill: false },
            { label: 'Standard Lease %', data: [6, 6.5, 7, 7, 7.5], borderColor: '#6B7280', fill: false }
          ]
        },
        options: { responsive: true, maintainAspectRatio: false }
      });
    });
  </script>
</body>
</html>
