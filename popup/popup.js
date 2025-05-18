document.addEventListener('DOMContentLoaded', () => {
  // Animation d'entrée
  document.body.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300 });

  // Gestion du bouton PiP
  document.getElementById('pipButton').addEventListener('click', async () => {
    const button = document.getElementById('pipButton');
    const originalHTML = button.innerHTML;
    
    try {
      button.innerHTML = '⏳ Chargement...';
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      
      // Injection explicite du script
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['scripts/content.js']
      });

      // Envoi du message
      const response = await chrome.tabs.sendMessage(tab.id, { action: "activate-pip" });
      
      if (response?.success) {
        button.innerHTML = '🎥 PiP Activé';
        setTimeout(() => button.innerHTML = originalHTML, 2000);
      } else {
        throw new Error(response?.error || 'Échec inconnu');
      }
      
    } catch (error) {
    }
  });
});