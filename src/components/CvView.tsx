import { CvConfig } from "../types/portfolio";
import "../styles/components/CvView.css";

interface CvViewProps { cv?: CvConfig; }

export default function CvView({ cv }: CvViewProps) {
    return (
        <div className="cv-view">
            {cv?.profile?.summary && <section className="cv-section"><h2>Kurzprofil</h2><p>{cv.profile.summary}</p>{cv.profile.facts?.length ? <ul className="cv-facts">{cv.profile.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul> : null}</section>}
            {cv?.experience?.length ? <section className="cv-section"><h2>Berufserfahrung</h2>{cv.experience.map((entry) => <article className="cv-entry" key={`${entry.company}-${entry.position}-${entry.period}`}><span className="cv-period">{entry.period}</span><h3>{entry.position}</h3><strong>{entry.company}</strong><p>{entry.description}</p>{entry.highlights?.length ? <ul>{entry.highlights.map((item) => <li key={item}>{item}</li>)}</ul> : null}</article>)}</section> : null}
            {cv?.skills?.length ? <section className="cv-section"><h2>Kenntnisse und Technologien</h2><div className="cv-tags">{cv.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div></section> : null}
            {cv?.projects?.length ? <section className="cv-section"><h2>Projekte</h2><ul>{cv.projects.map((project) => <li key={project}>{project}</li>)}</ul></section> : null}
            {cv?.research?.length ? <section className="cv-section"><h2>Forschung</h2>{cv.research.map((entry) => <article className="cv-entry" key={`${entry.title}-${entry.period}`}><span className="cv-period">{entry.period}</span><h3>{entry.title}</h3><strong>{entry.context}</strong><p>{entry.description}</p>{entry.links?.length ? <div className="cv-links">{entry.links.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div> : null}</article>)}</section> : null}
            {cv?.education?.length ? <section className="cv-section"><h2>Ausbildung</h2>{cv.education.map((entry) => <article className="cv-entry" key={`${entry.institution}-${entry.period}`}><span className="cv-period">{entry.period}</span><h3>{entry.qualification}</h3><strong>{entry.institution}</strong>{entry.description && <p>{entry.description}</p>}</article>)}</section> : null}
        </div>
    );
}
