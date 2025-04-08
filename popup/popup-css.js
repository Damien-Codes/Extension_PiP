// Animation au chargement
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
      document.body.style.transition = 'opacity 0.3s';
      document.body.style.opacity = '1';
    }, 100);
  });
  
  // Gestion PiP
  document.getElementById('pipButton').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
      if (!tab) return;
      
      // Feedback visuel
      const btn = document.getElementById('pipButton');
      btn.innerHTML = '<span class="icon">⏳</span><span class="text">Chargement...</span>';
      
      chrome.tabs.sendMessage(tab.id, { action: "activate-pip" }, (response) => {
        btn.innerHTML = '<span class="icon">🎥</span><span class="text">Activer le Mode PiP</span>';
        
        if (chrome.runtime.lastError || !response?.success) {
          btn.style.background = '#ff6666';
          setTimeout(() => {
            btn.style.background = 'linear-gradient(135deg, #ff3333, #cc0000)';
          }, 1000);
        }
      });
    });
  });
  
  // Gestion QR Code
  document.getElementById('qrButton').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
      if (!tab) return;
      
      chrome.tabs.sendMessage(tab.id, { action: "get-video-info" }, (response) => {
        if (response?.currentTime) {
          QRCode.toDataURL(
            JSON.stringify({
              url: tab.url,
              time: response.currentTime
            }),
            { width: 180, margin: 2, color: { dark: '#FF3333', light: '#1E1E1E' } },
            (err, url) => {
              if (!err) {
                document.getElementById('qrImage').src = url;
                document.getElementById('qrModal').style.display = 'flex';
              }
            }
          );
        }
      });
    });
  });
  
  // Fermeture modal
  document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('qrModal').style.display = 'none';
  });