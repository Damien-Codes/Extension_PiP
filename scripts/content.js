function findVideoElement() {
  const selectors = [
    '#movie_player video',
    'ytd-player video',
    '.html5-main-video',
    'video'
  ];
  
  for (const selector of selectors) {
    const video = document.querySelector(selector);
    if (video && video.readyState > 0) return video;
  }
  return null;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('[Content] Message reçu:', request.action);

  // Ajout de la gestion PiP manquante
  if (request.action === "activate-pip") {
    const video = findVideoElement();
    if (video && !video.disablePictureInPicture) {
      video.requestPictureInPicture()
        .then(() => sendResponse({ success: true }))
        .catch(error => sendResponse({ error: error.message }));
      return true;
    }
    sendResponse({ error: "Aucune vidéo compatible trouvée" });
    return true;
  }

  if (request.action === "get-video-info") {
    const video = findVideoElement();
    if (video) {
      sendResponse({ 
        success: true, 
        currentTime: video.currentTime,
        duration: video.duration
      });
    } else {
      sendResponse({ error: "Aucune vidéo détectée" });
    }
    return true;
  }
});