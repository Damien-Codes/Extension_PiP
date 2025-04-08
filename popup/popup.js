document.addEventListener('DOMContentLoaded', () => {
  console.log('Popup.js chargé');

  // Animation au chargement
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.3s';
    document.body.style.opacity = '1';
  }, 100);

  // Gestion PiP
  document.getElementById('pipButton').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
      if (!tab) return;
      
      const pipButton = document.getElementById('pipButton');
      pipButton.innerHTML = '<span class="icon">⏳</span><span class="text">Chargement...</span>';
      
      chrome.tabs.sendMessage(tab.id, { action: "activate-pip" }, (response) => {
        pipButton.innerHTML = '<span class="icon">🎥</span><span class="text">Activer le Mode PiP</span>';
        
        if (chrome.runtime.lastError || !response?.success) {
          pipButton.style.background = '#ff6666';
          setTimeout(() => {
            pipButton.style.background = 'linear-gradient(135deg, #ff3333, #cc0000)';
          }, 1000);
        }
      });
    });
  });
});