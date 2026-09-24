import { Project } from "../types/portfolio";
import "../styles/components/ProjectCard.css"

interface ProjectCardProps {
    project: Project;
    onClick: () => void;
}

export default function ProjectCard(props: ProjectCardProps) {
    const tech = props.project.technologies ?? [];
    const summary =
        props.project.shortDescription?.trim() ||
        props.project.description?.trim() ||
        "Projektbeschreibung folgt in Kürze.";

    return (
        <div className="card" onClick={props.onClick}>
            <div className="card-image">
                <img
                    src={props.project.image}
                    alt={props.project.title}
                />
                {props.project.pdf && <span className="card-badge">PDF</span>}
            </div>

            <div className="card-content">
                <div className="card-title-row">
                    <h3>{props.project.title}</h3>
                    <span className="card-arrow">↗</span>
                </div>
                <p>{summary}</p>
                <div className="card-tags">
                    {tech.slice(0, 4).map((item) => (
                        <span className="tag" key={item}>{item}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}
