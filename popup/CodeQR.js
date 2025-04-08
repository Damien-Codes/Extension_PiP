document.addEventListener('DOMContentLoaded', () => {
    console.log('CodeQR.js chargé');
    const qrModal = document.getElementById('qrModal');
    const qrImage = document.getElementById('qrImage');
    const qrButton = document.getElementById('qrButton');
    const closeBtn = document.querySelector('.close-btn');
  
    qrButton.addEventListener('click', () => {
      console.log('Bouton QR Code cliqué');
      chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
        if (!tab) return;
  
        if (!tab.url.includes('youtube.com')) {
          alert('Ouvrez une page YouTube d\'abord !');
          return;
        }
  
        chrome.tabs.sendMessage(tab.id, { action: "get-video-info" }, (response) => {
          console.log('Réponse de content.js :', response);
          if (chrome.runtime.lastError || !response?.currentTime) {
            alert('Aucune vidéo en cours de lecture détectée');
            return;
          }
  
          const videoUrl = formatMobileUrl(tab.url, response.currentTime);
          console.log('URL vidéo formatée :', videoUrl);
  
          const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(videoUrl)}&color=FF3333&bgcolor=1E1E1E`;
          console.log('URL QR :', qrApiUrl);
  
          qrImage.src = qrApiUrl;
          qrModal.style.display = 'flex';
          qrButton.disabled = true;
        });
      });
    });
  
    closeBtn.addEventListener('click', () => {
      qrModal.style.display = 'none';
      qrButton.disabled = false;
      qrImage.src = '';
    });
  
    qrModal.addEventListener('click', (e) => {
      if (e.target === qrModal) {
        qrModal.style.display = 'none';
        qrButton.disabled = false;
        qrImage.src = '';
      }
    });
  
    function formatMobileUrl(url, timestamp) {
      const urlObj = new URL(url);
      const videoId = urlObj.searchParams.get('v');
      if (!videoId) return url;
      return `https://www.youtube.com/watch?v=${videoId}&t=${Math.floor(timestamp)}s`;
    }
  });