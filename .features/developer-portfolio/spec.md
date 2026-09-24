# Spezifikation: Developer-Portfolio und Lebenslauf

## Problem Statement

Die bestehende Portfolio-Seite ist inhaltlich noch auf Architekturprojekte und PDF-Dokumente ausgerichtet. Für das Profil eines Softwareentwicklers mit Schwerpunkt Webanwendungen sollen vorhandene Kacheln, das visuelle Design und die Farben weiterverwendet werden, während Projektinformationen und ein Lebenslauf ergänzt werden.

## Solution

Die React-App erhält eine JSON-konfigurierbare Developer-Portfolio-Ansicht und eine zweite interne Ansicht für den Lebenslauf. Projektkacheln öffnen weiterhin ein Modal. Das Modal bietet rechts oben einen Dreifach-Toggle für Bild, Beschreibung und Quellcode. Nicht konfigurierte Inhalte werden nicht als leere Tabs angezeigt. Der Quellcode-Bereich verlinkt auf ein oder mehrere externe Repositories. PDF-Funktionalität entfällt.

Der Lebenslauf wird ohne eigene URL innerhalb der App umgeschaltet. Die Navigation befindet sich im bestehenden Header. Die CV-Kapitel werden in einer festen Reihenfolge dargestellt, ihre Inhalte kommen aus JSON.

## User Stories

1. Als Besucher möchte ich die Portfolio-Startansicht sehen, damit ich die Projekte des Entwicklers schnell überblicken kann.
2. Als Besucher möchte ich eine Projektkachel anklicken können, damit ich die Details des Projekts im bestehenden Modal sehe.
3. Als Besucher möchte ich im Projekt-Modal zwischen Bild, Beschreibung und Quellcode umschalten können, damit ich die für mich relevante Information auswählen kann.
4. Als Besucher möchte ich nur Tabs sehen, für die Inhalte vorhanden sind, damit das Modal keine leeren Bereiche anbietet.
5. Als Besucher möchte ich mehrere Repository-Referenzen pro Projekt öffnen können, damit ich beispielsweise Frontend- und Backend-Code getrennt erreichen kann.
6. Als Besucher möchte ich zwischen Portfolio und Lebenslauf wechseln können, damit ich neben Projekten auch den beruflichen Hintergrund ansehen kann.
7. Als Besucher möchte ich den Lebenslauf in einer klaren, festen Reihenfolge lesen können, damit die Informationen konsistent strukturiert sind.
8. Als Betreiber möchte ich Profil-, Projekt-, Navigations- und CV-Inhalte in JSON pflegen können, damit Inhaltsänderungen ohne Anpassung der UI-Logik möglich sind.
9. Als Betreiber möchte ich Projektbilder selbst austauschen können, damit ich die visuellen Inhalte unabhängig vom Layout aktualisieren kann.

## Implementation Decisions

- Die bestehende React-/TypeScript-App und das aktuelle visuelle Design werden erweitert, nicht durch eine parallele Portfolio-Implementierung ersetzt.
- Die Portfolio-Seite bleibt die Startansicht.
- Der Lebenslauf wird als interner Seitenzustand umgesetzt; eine eigene URL und ein Routing-System sind nicht erforderlich.
- Die Navigation zwischen „Portfolio“ und „Lebenslauf“ sitzt im bestehenden Header. Die Beschriftungen sind konfigurierbar.
- Das Projekt-Modal verwendet einen Dreifach-Toggle rechts oben für Bild, Beschreibung und Quellcode.
- Tabs ohne konfigurierte Inhalte werden automatisch ausgeblendet.
- Beschreibungen werden als einfache formatierte Textabsätze aus JSON dargestellt; ein Markdown- oder Rich-Text-System ist nicht vorgesehen.
- Ein Projekt unterstützt mehrere externe Repository-Referenzen.
- Die CV-Kapitel erscheinen in dieser Reihenfolge: Kurzprofil inklusive Kurzinformationen, Berufserfahrung, Kenntnisse und Technologien, Projekte, Forschung, Ausbildung.
- Berufserfahrung unterstützt Zeitraum, Position, Unternehmen, Kurzbeschreibung sowie optionale Technologien oder Schwerpunkte.
- Forschung unterstützt Titel, Zeitraum, Institution oder Projektbezug, Beschreibung sowie optionale weiterführende Links.
- Die Kapitelreihenfolge bleibt im UI festgelegt; Inhalte und optionale Einträge werden über JSON gepflegt.
- PDF-Anzeige und PDF-Viewer werden entfernt beziehungsweise nicht mehr als Portfolio-Funktion verwendet.

## Testing Decisions

Zu verifizieren sind insbesondere folgende beobachtbare Verhaltensweisen:

- Portfolio und Projektkacheln werden aus der JSON-Konfiguration gerendert.
- Ein Klick auf eine Kachel öffnet das Modal.
- Der Toggle zeigt nur verfügbare Tabs und wechselt korrekt zwischen den sichtbaren Inhalten.
- Mehrere Repository-Referenzen werden korrekt dargestellt und verlinkt.
- Die Navigation wechselt zwischen Portfolio- und CV-Ansicht innerhalb der App.
- Die CV-Kapitel erscheinen in der festgelegten Reihenfolge und rendern ihre JSON-Inhalte.
- Fehlende optionale Inhalte blenden den zugehörigen Tab oder Eintrag aus.
- Der Produktions-Build bleibt erfolgreich.

Die bestehenden React-Testing-Library-Tests sind der naheliegende Test-Seam für die sichtbaren Komponenten. Der aktuelle Smoke-Test ist noch auf den CRA-Beispielinhalt ausgerichtet und muss im Rahmen der Umsetzung angepasst werden.

## Out of Scope

- PDF-Upload, PDF-Viewer oder PDF-Darstellung
- Eigene URL oder Routing für den Lebenslauf
- Eingebetteter Quellcode-Viewer
- Externe Datenbank, CMS oder serverseitige Inhaltsverwaltung
- Grundlegende Neugestaltung von Farben und Layout
- Änderungen an den vom Benutzer selbst verwalteten Bilddateien

## Further Notes

- Die konkreten JSON-Feldnamen für Repository-Referenzen, CV-Einträge und Navigation werden bei der Umsetzung an die bestehenden TypeScript-Typen und Konventionen angepasst.
- Es ist noch nicht festgelegt, ob Repository-Referenzen zusätzlich einen Anbieter oder eine frei sichtbare Bezeichnung neben URL und Linktext benötigen.
- Es ist noch nicht festgelegt, ob die CV-Ansicht auf kleinen Bildschirmen eine abweichende Darstellung benötigt; die bestehende responsive Gestaltung soll als Ausgangspunkt dienen.
