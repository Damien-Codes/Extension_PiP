// Gestion des clics sur l'icône
chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.sendMessage(tab.id, { action: "activate-pip" });
});

// Gestion des alertes
chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "show-alert") {
    chrome.tabs.executeScript({
      code: "alert('Veuillez démarrer une vidéo avant de cliquer !')"
    });
  }
});