# Lukas Konietzka – Portfolio

Persönliche Portfolio-Seite für Lukas Konietzka mit Portfolio- und Lebenslaufansicht.

## Entwicklung

```bash
npm install
npm start
```

Die Anwendung ist anschließend unter `http://localhost:3000` erreichbar.

## Tests und Build

```bash
npm test -- --watchAll=false --runInBand
npm run build
```

## Inhalte bearbeiten

Portfolio-, Profil- und Lebenslaufinhalte werden in [`src/config/portfolio.json`](src/config/portfolio.json) gepflegt. Bilder liegen unter `public/img`.

## Deployment

Ein Push oder gemergter Pull Request auf `main` startet den Workflow unter `.github/workflows/deploy-pages.yml`. Dieser führt Tests und Build aus und veröffentlicht die Anwendung auf GitHub Pages.
