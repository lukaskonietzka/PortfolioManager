import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import ProjectModal from "./components/ProjectModal";
import CvView from "./components/CvView";
import config from "./config/portfolio.json";
import { PortfolioConfig, Project } from "./types/portfolio";

const typedConfig = config as PortfolioConfig;

function PortfolioManager() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [view, setView] = useState<"portfolio" | "cv">("portfolio");

    const themeVars = useMemo(() => {
        const theme = typedConfig.theme ?? {};

        const accent = theme.accent ?? theme.primaryColor ?? "#087f6f";
        const accentSoft = theme.accentSoft ?? "rgba(8, 127, 111, 0.10)";
        const pageBackground =
            theme.pageBackground ??
            "radial-gradient(1200px 600px at 10% -10%, #dff5ef 0%, rgba(223, 245, 239, 0) 60%)," +
            "radial-gradient(900px 500px at 90% 0%, rgba(214, 168, 79, 0.12) 0%, rgba(214, 168, 79, 0) 55%)," +
            "linear-gradient(180deg, #ffffff 0%, #f2faf8 100%)";

        return {
            "--accent": accent,
            "--accent-soft": accentSoft,
            "--butterscotch": theme.butterscotch ?? "#d6a84f",
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
                <Header profile={typedConfig.profile} view={view} onViewChange={setView} />

                {view === "cv" ? <CvView cv={typedConfig.cv} /> : <section className="section">
                    <div className="section-header">
                        <div>
                            <h2>Meine Projekte</h2>
                            <p>Hier findest du einige der Projekte, die ich allein, im Team oder als Teil einer Open-Source-Community entwickelt habe und weiterentwickle.</p>
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
                </section>}

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
