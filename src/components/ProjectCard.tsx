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
        props.project.description?.[0]?.trim() ||
        "Projektbeschreibung folgt in Kürze.";

    return (
        <div className="card" onClick={props.onClick}>
            <div className="card-image">
                {props.project.image ? <img src={`${process.env.PUBLIC_URL}/${props.project.image}`} alt={props.project.title} /> : <div className="card-image-placeholder" aria-hidden="true" />}
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
