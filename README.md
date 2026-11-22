# World Knowledge Academy

Culture générale mondiale, anglais, espagnol et vie pratique. L'application tient dans un seul fichier, `index.html`, et s'installe sur un téléphone comme une application. Après la première ouverture, elle fonctionne sans connexion.

![Logo](logo.png)

## Contenu du dépôt

| Fichier | Rôle |
|---|---|
| `index.html` | L'application complète : données, moteur et interface |
| `manifest.webmanifest` | Nom, couleurs et icônes de l'application installée |
| `sw.js` | Service worker qui permet l'usage hors ligne |
| `icons/` | Icônes (192 et 512 px, version « maskable » pour Android, icône iPhone) |

## Publier sur GitHub Pages

1. Sur github.com, créez un dépôt **public** nommé `world-knowledge-academy`.
2. Dans le dépôt, cliquez sur **Add file → Upload files**, déposez tous les fichiers et le dossier `icons` (le contenu du zip, pas le zip lui-même), puis cliquez sur **Commit changes**.
3. Allez dans **Settings → Pages**. Sous « Build and deployment », choisissez **Deploy from a branch**, puis la branche **main** et le dossier **/ (root)**, et cliquez sur **Save**.
4. Une à deux minutes plus tard, l'adresse s'affiche en haut de la page : `https://VOTRE-NOM.github.io/world-knowledge-academy/`.

## Installer sur le téléphone

**iPhone (Safari obligatoire)** : ouvrez l'adresse dans Safari, touchez le bouton **Partager** (carré avec une flèche), puis **Sur l'écran d'accueil**, puis **Ajouter**.

**Android (Chrome)** : ouvrez l'adresse dans Chrome. Touchez **Installer l'application** si le bandeau apparaît, sinon passez par le menu **⋮ → Installer l'application** (ou **Ajouter à l'écran d'accueil**).

L'icône apparaît alors sur l'écran d'accueil, et l'application s'ouvre en plein écran, sans barre de navigateur.

## Mettre à jour

Remplacez les fichiers dans le dépôt (Upload files, même nom). Le téléphone récupère la nouvelle version à la prochaine ouverture avec une connexion.

## Bon à savoir

- Votre progression est enregistrée **sur le téléphone**. Une mise à jour ne l'efface pas, mais si vous supprimez l'application ou les données de Safari ou de Chrome, elle est perdue. Pour la garder, passez par **Profil → Exporter une sauvegarde**.
- Le code source, les bases de données et leurs scripts sont fournis à part (archive « sources »).
