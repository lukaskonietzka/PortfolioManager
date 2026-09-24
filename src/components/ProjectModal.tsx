import { useEffect, useMemo, useState } from "react";
import { Project } from "../types/portfolio";
import "../styles/components/ProjectModal.css";

interface ProjectModalProps { project: Project; onClose: () => void; }
type ModalTab = "image" | "description" | "repositories";

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    const availableTabs = useMemo(() => {
        const tabs: ModalTab[] = [];
        if (project.image) tabs.push("image");
        if (project.description?.length) tabs.push("description");
        if (project.repositories?.length) tabs.push("repositories");
        return tabs;
    }, [project]);
    const [activeTab, setActiveTab] = useState<ModalTab>(availableTabs[0] ?? "image");

    useEffect(() => setActiveTab(availableTabs[0] ?? "image"), [availableTabs]);
    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) { if (event.key === "Escape") onClose(); }
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(event) => event.stopPropagation()}>
                <button className="modal-close" onClick={onClose} aria-label="Modal schließen">✕</button>
                <div className="modal-header">
                    <div>
                        <h2>{project.title}</h2>
                        <div className="modal-tags">{project.technologies?.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
                    </div>
                    {availableTabs.length > 0 && <div className="modal-tabs" role="tablist" aria-label="Projektansicht">
                        {availableTabs.map((tab) => <button key={tab} className={activeTab === tab ? "active" : ""} onClick={() => setActiveTab(tab)} role="tab" aria-selected={activeTab === tab}>
                            {tab === "image" ? "Bild" : tab === "description" ? "Beschreibung" : "Quellcode"}
                        </button>)}
                    </div>}
                </div>
                <div className="modal-body">
                    {activeTab === "image" && project.image && <img className="modal-image" src={project.image} alt={project.title} />}
                    {activeTab === "description" && project.description && <div className="modal-description">{project.description.map((paragraph, index) => <p key={`${paragraph}-${index}`}>{paragraph}</p>)}</div>}
                    {activeTab === "repositories" && project.repositories && <div className="repository-list">{project.repositories.map((repository) => <a key={repository.url} className="repository-link" href={repository.url} target="_blank" rel="noreferrer">{repository.label} <span aria-hidden="true">↗</span></a>)}</div>}
                </div>
            </div>
        </div>
    );
}
