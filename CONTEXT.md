# Portfolio Manager Context

## Initiative

Die Portfolio-Seite wird auf das Profil eines Softwareentwicklers mit Schwerpunkt
Webanwendungen angepasst. Das bestehende visuelle Design, die Farben und die
Projektkacheln bleiben grundsätzlich erhalten.

## Portfolio

- Die Portfolio-Seite ist die Startansicht.
- Projektkacheln öffnen weiterhin ein Modal.
- Das Modal enthält rechts oben einen Dreifach-Toggle für:
  - Bild
  - Beschreibung
  - Quellcode
- Tabs ohne Inhalt werden automatisch ausgeblendet.
- Beschreibungen bestehen aus einfachen formatierten Textabsätzen aus JSON.
- Ein Projekt kann mehrere Repository-Referenzen enthalten, zum Beispiel für
  Frontend, Backend oder Dokumentation.
- Repository-Referenzen werden aus JSON geladen und verlinkt; Quellcode wird
  nicht direkt im Modal eingebettet.
- Projektbilder bleiben über JSON konfigurierbar und werden vom Benutzer selbst
  ausgetauscht.
- PDF-Funktionen und PDF-Viewer gehören nicht zum Zielumfang.

## Lebenslauf

Der Lebenslauf wird als zweite Ansicht innerhalb derselben React-App umgesetzt.
Eine eigene URL oder Routing-Lösung ist nicht erforderlich. Die Navigation
zwischen „Portfolio“ und „Lebenslauf“ befindet sich im bestehenden Header; die
Beschriftungen sind konfigurierbar.

Die Kapitel erscheinen in dieser festen Reihenfolge:

1. Kurzprofil inklusive Kurzinformationen
2. Berufserfahrung
3. Kenntnisse und Technologien
4. Projekte
5. Forschung
6. Ausbildung

Alle Inhalte werden über JSON gepflegt. Die Kapitelreihenfolge bleibt im UI
festgelegt, um die Konfiguration einfach zu halten.

### Berufserfahrung

Jeder Eintrag kann enthalten:

- Zeitraum
- Position
- Unternehmen
- Kurzbeschreibung
- optionale Technologien oder Schwerpunkte

### Forschung

Jeder Forschungseintrag kann enthalten:

- Titel
- Zeitraum
- Institution oder Projektbezug
- Beschreibung
- optionale weiterführende Links

## Konfigurationsprinzip

Portfolio-, Profil-, Navigations- und Lebenslaufinhalte werden aus der zentralen
JSON-Konfiguration geladen. Fehlende optionale Inhalte führen dazu, dass der
entsprechende Bereich oder Tab nicht angezeigt wird.

## Nicht-Ziele

- Keine PDFs oder PDF-Darstellung.
- Keine eigene URL für den Lebenslauf.
- Kein eingebetteter Quellcode-Viewer.
- Keine externe Datenbank oder CMS-Anbindung.
