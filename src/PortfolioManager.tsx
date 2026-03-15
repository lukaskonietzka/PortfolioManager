import { useState } from "react";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import ProjectModal from "./components/ProjectModal";
import config from "./config/portfolio.json";
import { PortfolioConfig, Project } from "./types/portfolio";

const typedConfig = config as PortfolioConfig;

function PortfolioManager() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <div
            style={{
                background: typedConfig.theme.backgroundColor,
                padding: "40px",
            }}
        >
            <Header profile={typedConfig.profile} />

            <h1>Meine Projekte</h1>

            <div className="grid">
                {typedConfig.projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        headline="Meine Projekte"
                        project={project}
                        onClick={() => setSelectedProject(project)}
                        backgroundColor={typedConfig.theme.cardColor}
                        borderColor={typedConfig.theme.cardBorderColor}
                    />
                ))}
            </div>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    );
}

export default PortfolioManager;