import { Project } from "../types/portfolio";
import "../styles/components/ProjectCard.css"

interface ProjectCardProps {
    img?: string;
    headline: string;
    project: Project;
    onClick: () => void;
    backgroundColor: string;
    borderColor: string;
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <div className="card"
             onClick={props.onClick}
             style={{ background: props.backgroundColor, border: 'solid 1px ' + props.borderColor}}>
            <img src={props.project.image}
                 alt={props.project.title}/>

            <div className="card-content">
                <h3>{props.project.title}</h3>
                <p>{props.project.shortDescription}</p>
            </div>
        </div>
    );
}