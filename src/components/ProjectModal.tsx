import { useEffect } from "react";
import { Project } from "../types/portfolio";
import "../styles/components/ProjectModal.css";

interface ProjectModalProps { project: Project; onClose: () => void; }

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) { if (event.key === "Escape") onClose(); }
        document.addEventListener("keydown", handleKeyDown);
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = previousOverflow;
        };
    }, [onClose]);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(event) => event.stopPropagation()}>
                <button className="modal-close" onClick={onClose} aria-label="Modal schließen">✕</button>
                <div className="modal-header">
                    <div>
                        <h2>{project.title}</h2>
                        {project.technologies?.length ? <div className="modal-tags">{project.technologies.map((item) => <span className="tag" key={item}>{item}</span>)}</div> : null}
                    </div>
                </div>
                <div className="modal-body">
                    {project.image && <img className="modal-image" src={`${process.env.PUBLIC_URL}/${project.image}`} alt={project.title} />}
                    <div className="modal-copy">
                        {project.description?.length ? project.description.map((paragraph, index) => <p key={`${paragraph}-${index}`}>{paragraph}</p>) : <p className="modal-empty">Beschreibung folgt.</p>}
                        {project.repositories?.length ? <div className="repository-list">{project.repositories.map((repository) => <a key={repository.url} className="repository-link" href={repository.url} target="_blank" rel="noreferrer">{repository.label} <span aria-hidden="true">↗</span></a>)}</div> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}
