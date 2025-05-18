# Extension YouTube PiP & QR 🎥📱

[![Version](https://img.shields.io/badge/version-3.1-blue)]()  
[![Manifest V3](https://img.shields.io/badge/Manifest-V3-9cf)](https://developer.chrome.com/docs/extensions/mv3/)  
[![Compatibilité](https://img.shields.io/badge/navigateurs-Chrome_105+%20|%20Edge_105+%20|%20Firefox_Bêta-success)]()

Une extension légère et moderne pour activez le mode Picture-in-Picture et partagez des vidéos via QR Code en un clic ! Parfaite pour le multitâche !

## Fonctionnalités ✨

- **Mode PiP instantané**  
  - Compatible avec les live streams et les shorts
  - Détection automatique des vidéos dans les iframes
- **Partage intelligent**  
  - QR Code personnalisable (🔴 rouge/noir ⚫)
  - Timestamp préservé pour la reprise de lecture
- **Optimisé pour MV3**  
  - Service worker non persistant
  - Sécurité renforcée
  - Performances améliorées

## Nouveautés v3 🚀
- 🎨 Thème visuel repensé
- 🔒 Conforme aux dernières normes Chrome
- 📦 Structure de fichiers simplifiée
- 🐛 Correctifs de stabilité

## Installation 🛠️

### Pour Chrome/Edge (Chromium)

1. **Téléchargez** les fichiers de l'extension (.ZIP)
2. **Décompressez** l'archive dans un dossier
3. Accédez à :  
   `chrome://extensions` (Chrome)  
   `edge://extensions` (Edge)  
4. Activez le **Mode développeur** (toggle en haut à droite)
5. Cliquez sur **"Charger l'extension non empaquetée"**
6. Sélectionnez le dossier décompressé

### Pour Firefox

1. **Téléchargez** les fichiers de l'extension
2. Accédez à :  
   `about:debugging#/runtime/this-firefox`  
3. Cliquez sur **"Charger un module temporaire"**
4. Sélectionnez le fichier `manifest.json`

## Utilisation 🚀

1. **Sur YouTube** :  
   - Lancez la lecture d'une vidéo  
   - Attendez 2-3 secondes que le lecteur se charge  

2. **Cliquez** sur l'icône 🔴 de l'extension  

3. **Menu Popup** :  
   - 🎥 **Bouton PiP** : Active/désactive le mode Picture-in-Picture  
   - 📱 **Bouton QR Code** : Ouvre le générateur avec :  
     • Lien vers la vidéo  
     • Position actuelle de lecture préservée  

4. **Fermeture** :  
   - Cliquez en dehors du popup ou sur la croix ×  
   - Pour le PiP : fermez la fenêtre flottante normalement  

*Conseil* : Le QR Code reste valable même si vous quittez YouTube !


## Dépannage 🛠️

**Problème courant** | **Solution rapide**
---|---
"Vidéo non détectée" | 1. Actualisez la page<br>2. Patientez 3s avant de cliquer
PiP inactif | • Vérifiez que la vidéo n'est pas en pause<br>• Testez sur une autre vidéo
QR Code non généré | Autorisez les requêtes vers `api.qrserver.com`