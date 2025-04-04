document.getElementById('pipButton').addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, ([tab]) => {
    if (!tab) return;
    
    chrome.tabs.sendMessage(tab.id, {action: "activate-pip"}, (response) => {
      if (chrome.runtime.lastError || !response) {
        alert("Erreur : Extension non autorisée ou page non prise en charge");
        return;
      }
      

    });
  });
});