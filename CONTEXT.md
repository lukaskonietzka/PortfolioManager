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

### CV-Timeline

Die CV-Kapitel erhalten eine visuelle Timeline mit den Nummern 01–06 in der
festen Kapitelreihenfolge. Die Nummern sind anklickbar und scrollen zum jeweils
zugehörigen Kapitel. Die Timeline dient damit sowohl der Orientierung als auch
als interne Navigation innerhalb der CV-Ansicht.

Der aktive Timeline-Punkt wird während des Scrollens automatisch anhand des
aktuell sichtbaren CV-Kapitels aktualisiert.

Die Timeline steht links neben dem CV-Inhalt und bleibt beim Scrollen als
sticky Orientierungselement sichtbar.

Auf kleinen Bildschirmen wird sie als kompakte horizontale Nummernleiste
oberhalb der CV-Inhalte dargestellt. Auch dort bleiben die Punkte anklickbar
und der aktive Abschnitt wird automatisch aktualisiert.

Das Anklicken eines Timeline-Punkts scrollt weich zum zugehörigen Kapitel.
Die automatische Aktivierung orientiert sich am Kapitel, das den zentralen
Bereich des sichtbaren Viewports erreicht; dafür soll eine
`IntersectionObserver`-basierte Beobachtung verwendet werden.

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

## Responsive Verhalten

Die gesamte App soll responsiv funktionieren, nicht nur die CV-Ansicht. Das
umfasst Portfolio-Layout und Projektkarten, Header und Navigation, das
Projekt-Modal sowie die CV-Ansicht inklusive Timeline. Inhalte und
Interaktionen müssen auch auf kleinen Bildschirmen ohne horizontales
Überlaufen nutzbar bleiben.
