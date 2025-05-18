document.addEventListener('DOMContentLoaded', () => {
  const qrModal = document.getElementById('qrModal');
  const qrImage = document.getElementById('qrImage');
  const qrButton = document.getElementById('qrButton');
  const closeBtn = document.querySelector('.close-btn');

  qrButton.addEventListener('click', async () => {
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (!tab?.id) return;

      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['scripts/content.js']
      });

      const response = await chrome.tabs.sendMessage(tab.id, { action: "get-video-info" });
      
      if (!response?.currentTime) throw new Error(response?.error || "Aucune donnée vidéo");
      
      // Modification ici pour les couleurs rouge/noir
      const videoId = new URL(tab.url).searchParams.get('v');
      const qrUrl = `https://www.youtube.com/watch?v=${videoId}&t=${Math.floor(response.currentTime)}s`;
      qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?` + 
        `size=200x200&` +
        `data=${encodeURIComponent(qrUrl)}&` +
        `color=FF3333&` +  // Rouge
        `bgcolor=000000&` + // Fond noir
        `qzone=1&` +        // Réduire la marge blanche
        `format=png`;       // Meilleure qualité

      qrModal.style.display = 'flex';

    } catch (error) {
      console.error('[QR] Erreur:', error);
      alert(`Erreur : ${error.message}\n\nOuvrez une vidéo YouTube et réessayez.`);
    }
  });

  closeBtn.addEventListener('click', () => qrModal.style.display = 'none');
  qrModal.addEventListener('click', (e) => e.target === qrModal && (qrModal.style.display = 'none'));
});