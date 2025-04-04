function findVideoElement() {
  // Détection optimisée pour YouTube 2024
  const selectors = [
    '#movie_player video',
    'ytd-player video',
    '.html5-main-video',
    'video.stream-engine',
    'video'
  ];

  for (const selector of selectors) {
    const video = document.querySelector(selector);
    if (video && video.readyState > 0) return video;
  }
  return null;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "activate-pip") {
    const video = findVideoElement();
    
    if (video && !video.disablePictureInPicture) {
      video.requestPictureInPicture()
        .then(() => {
          console.log('[PiP] Activé avec succès');
          sendResponse({success: true});
        })
        .catch(error => {
          console.error('[PiP] Erreur:', error);
          sendResponse({error: error.message});
        });
      return true; // Garde le canal ouvert pour la réponse asynchrone
    } else {
      const errorMsg = video ? "PiP désactivé pour cette vidéo" : "Aucune vidéo trouvée";
      console.warn('[PiP]', errorMsg);
      sendResponse({error: errorMsg});
    }
  }
});