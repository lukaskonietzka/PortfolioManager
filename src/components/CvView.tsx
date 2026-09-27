import { useEffect, useMemo, useRef, useState } from "react";
import { CvConfig } from "../types/portfolio";
import "../styles/components/CvView.css";

interface CvViewProps { cv?: CvConfig; }

const chapters = [
    { id: "profile", label: "Kurzprofil" },
    { id: "experience", label: "Berufserfahrung" },
    { id: "skills", label: "Kenntnisse und Technologien" },
    { id: "projects", label: "Projekte" },
    { id: "research", label: "Forschung" },
    { id: "education", label: "Ausbildung" },
] as const;
type ChapterId = typeof chapters[number]["id"];

export default function CvView({ cv }: CvViewProps) {
    const availableChapters = useMemo(() => chapters.filter((chapter) => {
        if (chapter.id === "profile") return Boolean(cv?.profile?.summary);
        if (chapter.id === "experience") return Boolean(cv?.experience?.length);
        if (chapter.id === "skills") return Boolean(cv?.skills?.length);
        if (chapter.id === "projects") return Boolean(cv?.projects?.length);
        if (chapter.id === "research") return Boolean(cv?.research?.length);
        return Boolean(cv?.education?.length);
    }), [cv]);
    const [activeChapter, setActiveChapter] = useState<ChapterId>(availableChapters[0]?.id ?? chapters[0].id);
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

    useEffect(() => {
        if (typeof IntersectionObserver === "undefined") return;
        const observer = new IntersectionObserver((entries) => {
            const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
            if (visible[0]) setActiveChapter(visible[0].target.id as ChapterId);
        }, { rootMargin: "-15% 0px -65%", threshold: [0.1, 0.5, 1] });

        availableChapters.forEach(({ id }) => {
            const section = sectionRefs.current[id];
            if (section) observer.observe(section);
        });
        return () => observer.disconnect();
    }, [availableChapters]);

    function goToChapter(id: ChapterId) {
        setActiveChapter(id);
        sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    return (
        <section className="section cv-section-wrapper">
            <div className="section-header cv-section-header">
                <div>
                    <h2>Lebenslauf</h2>
                    <p>Beruflicher Werdegang, Kenntnisse und Forschung.</p>
                </div>
            </div>
            <div className="cv-layout">
                <nav className="cv-timeline" aria-label="CV-Kapitel">
                {availableChapters.map((chapter, index) => <button
                    key={chapter.id}
                    className={activeChapter === chapter.id ? "active" : ""}
                    onClick={() => goToChapter(chapter.id)}
                    aria-label={`${String(index + 1).padStart(2, "0")} ${chapter.label}`}
                    aria-current={activeChapter === chapter.id ? "step" : undefined}
                ><span>{String(index + 1).padStart(2, "0")}</span><strong>{chapter.label}</strong></button>)}
                </nav>
                <div className="cv-view">
                {cv?.profile?.summary && <section id="profile" ref={(element) => { sectionRefs.current.profile = element; }} className="cv-section"><h2>Kurzprofil</h2><p>{cv.profile.summary}</p>{cv.profile.facts?.length ? <ul className="cv-facts">{cv.profile.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul> : null}</section>}
                {cv?.experience?.length ? <section id="experience" ref={(element) => { sectionRefs.current.experience = element; }} className="cv-section"><h2>Berufserfahrung</h2>{cv.experience.map((entry) => <article className="cv-entry" key={`${entry.company}-${entry.position}-${entry.period}`}><span className="cv-period">{entry.period}</span><h3>{entry.position}</h3><strong>{entry.company}</strong><p>{entry.description}</p>{entry.highlights?.length ? <ul>{entry.highlights.map((item) => <li key={item}>{item}</li>)}</ul> : null}</article>)}</section> : null}
                {cv?.skills?.length ? <section id="skills" ref={(element) => { sectionRefs.current.skills = element; }} className="cv-section"><h2>Kenntnisse und Technologien</h2><div className="cv-tags">{cv.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div></section> : null}
                {cv?.projects?.length ? <section id="projects" ref={(element) => { sectionRefs.current.projects = element; }} className="cv-section"><h2>Projekte</h2><ul>{cv.projects.map((project) => <li key={project}>{project}</li>)}</ul></section> : null}
                {cv?.research?.length ? <section id="research" ref={(element) => { sectionRefs.current.research = element; }} className="cv-section"><h2>Forschung</h2>{cv.research.map((entry) => <article className="cv-entry" key={`${entry.title}-${entry.period}`}><span className="cv-period">{entry.period}</span><h3>{entry.title}</h3><strong>{entry.context}</strong><p>{entry.description}</p>{entry.links?.length ? <div className="cv-links">{entry.links.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div> : null}</article>)}</section> : null}
                {cv?.education?.length ? <section id="education" ref={(element) => { sectionRefs.current.education = element; }} className="cv-section"><h2>Ausbildung</h2>{cv.education.map((entry) => <article className="cv-entry" key={`${entry.institution}-${entry.period}`}><span className="cv-period">{entry.period}</span><h3>{entry.qualification}</h3><strong>{entry.institution}</strong>{entry.description && <p>{entry.description}</p>}</article>)}</section> : null}
                </div>
            </div>
        </section>
    );
}
