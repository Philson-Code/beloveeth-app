/* FLOATING PROP AI CHAT WIDGET */
(function() {
  // Create styles dynamically
  const style = document.createElement('style');
  style.innerHTML = `
    .prop-ai-floating-btn {
      position: fixed;
      bottom: 28px;
      right: 28px;
      width: 68px;
      height: 68px;
      border-radius: 50%;
      background: linear-gradient(135deg, #5A1725 0%, #D4AF37 100%);
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 10px 25px rgba(90, 23, 37, 0.5), 0 0 15px rgba(212, 175, 55, 0.4);
      cursor: pointer;
      z-index: 9999;
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      animation: floatWobble 4s ease-in-out infinite;
    }

    .prop-ai-floating-btn:hover {
      transform: scale(1.1) rotate(5deg);
    }

    @keyframes floatWobble {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-10px) rotate(-3deg); }
    }

    .prop-ai-badge {
      position: absolute;
      top: -2px;
      right: -2px;
      background: #10B981;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 2px solid #000;
    }

    .prop-ai-window {
      position: fixed;
      bottom: 108px;
      right: 28px;
      width: 380px;
      height: 520px;
      background: #0F172A;
      border: 1px solid rgba(212, 175, 55, 0.4);
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.6);
      display: none;
      flex-direction: column;
      z-index: 9999;
      overflow: hidden;
      font-family: 'Plus Jakarta Sans', sans-serif;
    }

    .prop-ai-window.open {
      display: flex;
      animation: popUp 0.3s ease forwards;
    }

    @keyframes popUp {
      from { opacity: 0; transform: translateY(20px) scale(0.95); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }

    .prop-ai-header {
      background: linear-gradient(135deg, #5A1725 0%, #1A070B 100%);
      padding: 16px 20px;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(212, 175, 55, 0.2);
    }

    .prop-ai-header h4 { font-size: 15px; color: #D4AF37; margin: 0; }
    .prop-ai-header p { font-size: 11px; color: #94A3B8; margin: 0; }
    
    .prop-ai-close {
      background: none; border: none; color: white; font-size: 20px; cursor: pointer;
    }

    .prop-ai-messages {
      flex: 1;
      padding: 16px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 12px;
      background: #0B0F17;
    }

    .msg {
      max-width: 85%;
      padding: 10px 14px;
      border-radius: 12px;
      font-size: 13px;
      line-height: 1.5;
    }

    .msg.ai {
      background: rgba(255, 255, 255, 0.08);
      color: #E2E8F0;
      align-self: flex-start;
      border-left: 3px solid #D4AF37;
    }

    .msg.user {
      background: #5A1725;
      color: white;
      align-self: flex-end;
    }

    .prop-ai-input {
      padding: 12px;
      background: #0F172A;
      border-top: 1px solid rgba(255,255,255,0.1);
      display: flex;
      gap: 8px;
    }

    .prop-ai-input input {
      flex: 1;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 10px;
      padding: 10px 14px;
      color: white;
      font-size: 13px;
    }

    .prop-ai-input input:focus { outline: none; border-color: #D4AF37; }

    .prop-ai-input button {
      background: #D4AF37;
      color: #5A1725;
      border: none;
      padding: 10px 16px;
      border-radius: 10px;
      font-weight: 800;
      cursor: pointer;
    }
  `;
  document.head.appendChild(style);

  // Build Floating UI Elements
  const floatingBtn = document.createElement('div');
  floatingBtn.className = 'prop-ai-floating-btn';
  floatingBtn.innerHTML = `🤖<div class="prop-ai-badge"></div>`;

  const chatWindow = document.createElement('div');
  chatWindow.className = 'prop-ai-window';
  chatWindow.innerHTML = `
    <div class="prop-ai-header">
      <div>
        <h4>💡 PROP AI Assistant</h4>
        <p>Live Real Estate & Material Intelligence</p>
      </div>
      <button class="prop-ai-close" id="closePropAi">&times;</button>
    </div>
    <div class="prop-ai-messages" id="propAiBox">
      <div class="msg ai">
        Hello! I am <strong>Prop AI</strong>. I continuously track economic trends, cement & steel prices, tax rates, and property values across Nigeria. How can I assist your investment today?
      </div>
    </div>
    <form class="prop-ai-input" id="propAiForm">
      <input type="text" id="propAiInput" placeholder="Ask about land, cement prices, Ikoyi..." required />
      <button type="submit">Send</button>
    </form>
  `;

  document.body.appendChild(floatingBtn);
  document.body.appendChild(chatWindow);

  // Toggle Window Visibility
  floatingBtn.addEventListener('click', () => {
    chatWindow.classList.toggle('open');
  });

  document.getElementById('closePropAi').addEventListener('click', () => {
    chatWindow.classList.remove('open');
  });

  // Handle Dynamic Interactions
  document.getElementById('propAiForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('propAiInput');
    const box = document.getElementById('propAiBox');
    const val = input.value.trim();
    if(!val) return;

    // Append User Message
    const userMsg = document.createElement('div');
    userMsg.className = 'msg user';
    userMsg.innerText = val;
    box.appendChild(userMsg);
    input.value = '';

    box.scrollTop = box.scrollHeight;

    // Simulate AI Response based on queries
    setTimeout(() => {
      const aiMsg = document.createElement('div');
      aiMsg.className = 'msg ai';

      const lower = val.toLowerCase();
      if(lower.includes('cement') || lower.includes('material') || lower.includes('roof') || lower.includes('wood')) {
        aiMsg.innerHTML = `<strong>Prop AI Material Report:</strong> Current cement rates are hovering around ₦10,500/bag. Roof sheets are +0.4% higher this week. Recommending hedging supply contracts before month-end.`;
      } else if(lower.includes('ikoyi') || lower.includes('buy')) {
        aiMsg.innerHTML = `<strong>Prop AI Signal:</strong> High buy rating for Ikoyi! Rental yields currently sit at +18.4% due to foreign investment inflows.`;
      } else {
        aiMsg.innerHTML = `<strong>Prop AI Signal:</strong> Ingesting historical recession data, current interest rates, and construction cost changes. Yield projection for this corridor stands at 16.2% confidence.`;
      }

      box.appendChild(aiMsg);
      box.scrollTop = box.scrollHeight;
    }, 800);
  });
})();