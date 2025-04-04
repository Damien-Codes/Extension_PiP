// Recherche récursive dans le DOM complet
function findVideoElement(root = document.body) {
  // 1. Vérifier les iframes
  if (root.tagName === 'IFRAME') {
    try {
      return findVideoElement(root.contentDocument.body);
    } catch (e) {
      return null; // Bloque les cross-origin
    }
  }

  // 2. Vérifier les Shadow DOM
  if (root.shadowRoot) {
    const shadowResult = findVideoElement(root.shadowRoot);
    if (shadowResult) return shadowResult;
  }

  // 3. Vérifier si c'est une vidéo valide
  if (root.tagName === 'VIDEO' && root.readyState > 0) {
    return root;
  }

  // 4. Parcourir les enfants
  for (const child of root.children) {
    const result = findVideoElement(child);
    if (result) return result;
  }

  return null;
}

// Écouteur pour les messages de l'extension
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "activate-pip") {
    const video = findVideoElement();
    
    if (video && !video.disablePictureInPicture) {
      video.requestPictureInPicture()
        .then(() => console.log('[Extension] PiP activé avec succès'))
        .catch(error => console.error('[Extension] Erreur PiP:', error));
    } else {
      console.warn('[Extension] Aucune vidéo trouvée ou PiP désactivé');
      chrome.runtime.sendMessage({ action: "show-alert" });
    }
  }
});