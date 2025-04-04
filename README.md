# Extension Picture-in-Picture pour YouTube 🎥

[![Version](https://img.shields.io/badge/version-2.0-blue)]()
[![Compatibilité](https://img.shields.io/badge/navigateurs-Chrome%20|%20Edge%20|%20Firefox-success)]()

Une extension légère pour activer le mode Picture-in-Picture sur YouTube en un clic. Parfaite pour le multitâche !

## Fonctionnalités ✨

- **Activation manuelle du PiP** via un bouton dédié
- Compatible avec la nouvelle interface YouTube (2024)
- Détection intelligente des vidéos dans les Shadow DOM et iframes
- Interface minimaliste et intuitive
- Alertes contextuelles en cas d'erreur

## Installation 🛠️

### Pour Chrome/Edge (Chromium)
1. Téléchargez les fichiers de l'extension
2. Accédez à `chrome://extensions` ou `edge://extensions`
3. Activez le **Mode développeur** 🧑💻
4. Cliquez sur "Charger l'extension non empaquetée"
5. Sélectionnez le dossier contenant les fichiers

### Pour Firefox
1. Téléchargez les fichiers
2. Accédez à `about:debugging#/runtime/this-firefox`
3. Cliquez sur "Charger un module temporaire"
4. Sélectionnez le fichier `manifest.json`

## Utilisation 🚀

1. Ouvrez une vidéo YouTube
2. Cliquez sur l'icône de l'extension dans la barre d'outils
3. Deux options :
   - **Clic direct** sur l'icône 🖱️
   - Ouverture du popup et clic sur "Activer PiP" 🎬

La vidéo apparaît instantanément en fenêtre flottante !

## Structure des fichiers 📂

| Fichier          | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| `manifest.json`  | Configuration principale de l'extension                                     |
| `content.js`     | Détection des vidéos et gestion du PiP (inclut traversée du Shadow DOM)     |
| `popup.js`       | Gestion de l'interface utilisateur du popup                                 |
| `background.js`  | Communication entre les composants de l'extension                           |
| `popup.html`     | Structure HTML du menu popup                                                |
| `icons/`         | Dossier contenant les icônes de l'extension (16px, 48px, 128px)            |

## Dépannage 🔧

**Problème** | **Solution** 
---|---
"Aucune vidéo trouvée" | Actualisez la page et attendez 5s avant de cliquer
Le PiP ne s'active pas | Vérifiez que la vidéo est en lecture
Erreurs de permissions | Rechargez l'extension en mode développeur

Pour le débogage avancé :
1. Ouvrez la console (F12) sur YouTube
2. Filtrez les logs par "[Extension]"
3. Vérifiez les messages d'erreur

## Développement 💻

### Prérequis
- Connaissance basique du JavaScript
- Navigateur moderne (Chrome 90+ recommandé)

### Architecture clé :
```plaintext
📦extension-pip
├── 📄manifest.json
├── 📄content.js       # Cœur de la détection vidéo
├── 📄popup.js         # Gestion des interactions
├── 📄background.js    # Communication cross-context
└── 📂icons            # Assets visuels# Extension_PiP
"# Extension_PiP" 
"# Extension_PiP" 
"# Extension_PiP" 
