import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import ProjectModal from "./components/ProjectModal";
import config from "./config/portfolio.json";
import { PortfolioConfig, Project } from "./types/portfolio";

const typedConfig = config as PortfolioConfig;

function PortfolioManager() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const themeVars = useMemo(() => {
        const theme = typedConfig.theme ?? {};

        const accent = theme.accent ?? theme.primaryColor ?? "#ff6b3d";
        const accentSoft = theme.accentSoft ?? "rgba(255, 107, 61, 0.16)";
        const pageBackground =
            theme.pageBackground ??
            "radial-gradient(1200px 600px at 10% -10%, #ffe6dc 0%, rgba(255, 230, 220, 0) 60%)," +
            "radial-gradient(900px 500px at 90% 0%, #e6f0ff 0%, rgba(230, 240, 255, 0) 55%)," +
            "linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%)";

        return {
            "--accent": accent,
            "--accent-soft": accentSoft,
            "--page-bg": pageBackground,
            "--surface": theme.surface ?? theme.cardColor ?? "rgba(255, 255, 255, 0.86)",
            "--surface-strong": theme.surfaceStrong ?? "#ffffff",
            "--text": theme.text ?? "#0f172a",
            "--muted": theme.mutedText ?? "#475569",
            "--border": theme.border ?? (theme.cardBorder ? theme.cardBorderColor : "rgba(15, 23, 42, 0.08)") ?? "rgba(15, 23, 42, 0.08)",
            "--radius": `${theme.cardRadius ?? 22}px`,
            "--shadow": theme.shadow ?? "0 18px 40px rgba(15, 23, 42, 0.12)",
        } as CSSProperties;
    }, []);

    return (
        <div className="app" style={themeVars}>
            <div className="app-noise" aria-hidden="true" />
            <div className="container">
                <Header profile={typedConfig.profile} />

                <section className="section">
                    <div className="section-header">
                        <div>
                            <h2>Ausgewählte Projekte</h2>
                            <p>Konzept, Visualisierung und Umsetzung aus einer Hand.</p>
                        </div>
                        <div className="section-meta">
                            {typedConfig.projects.length} Projekte
                        </div>
                    </div>

                    <div className="grid">
                        {typedConfig.projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onClick={() => setSelectedProject(project)}
                            />
                        ))}
                    </div>
                </section>

                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </div>
        </div>
    );
}

export default PortfolioManager;
