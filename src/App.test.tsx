import { fireEvent, render, screen } from "@testing-library/react";
import PortfolioManager from "./PortfolioManager";
import ProjectModal from "./components/ProjectModal";

test("renders configured projects and opens the project modal", () => {
    render(<PortfolioManager />);
    expect(screen.getByText("Slicer")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Slicer"));
    expect(screen.getAllByRole("heading", { name: "Slicer" })).toHaveLength(2);
});

test("switches modal content to multiple repository links", () => {
    render(<ProjectModal project={{
        id: "repositories",
        title: "Repository project",
        shortDescription: "",
        technologies: [],
        repositories: [
            { label: "Frontend", url: "https://github.com/user/project-frontend" },
            { label: "Backend", url: "https://github.com/user/project-backend" },
        ],
    }} onClose={() => undefined} />);
    expect(screen.getByRole("link", { name: /Frontend/ })).toHaveAttribute("href", "https://github.com/user/project-frontend");
    expect(screen.getByRole("link", { name: /Backend/ })).toHaveAttribute("href", "https://github.com/user/project-backend");
});

test("hides tabs when optional project content is missing", () => {
    render(<ProjectModal project={{
        id: "minimal",
        title: "Minimal project",
        shortDescription: "Only an image",
        image: "img/example.png",
        technologies: [],
    }} onClose={() => undefined} />);

    expect(screen.queryByRole("tab")).not.toBeInTheDocument();
    expect(screen.getByText("Beschreibung folgt.")).toBeInTheDocument();
    expect(screen.queryByRole("tab", { name: "Beschreibung" })).not.toBeInTheDocument();
    expect(screen.queryByRole("tab", { name: "Quellcode" })).not.toBeInTheDocument();
});

test("switches between portfolio and the configured CV view", () => {
    render(<PortfolioManager />);
    fireEvent.click(screen.getByRole("button", { name: "Lebenslauf" }));

    expect(screen.getByRole("heading", { name: "Kurzprofil" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Berufserfahrung" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Kenntnisse und Technologien" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Projekte" })).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Forschung" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Ausbildung" })).toBeInTheDocument();
    expect(screen.queryByText("Ausgewählte Projekte")).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Portfolio" }));
    expect(screen.getByText("Ausgewählte Projekte")).toBeInTheDocument();
});

test("provides a numbered, keyboard-accessible CV timeline", () => {
    HTMLElement.prototype.scrollIntoView = jest.fn();
    render(<PortfolioManager />);
    fireEvent.click(screen.getByRole("button", { name: "Lebenslauf" }));

    const timelineButton = screen.getByRole("button", { name: "01 Kurzprofil" });
    expect(timelineButton).toHaveAttribute("aria-current", "step");
    expect(screen.queryByRole("button", { name: /Projekte/ })).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "02 Berufserfahrung" }));
    expect(screen.getByRole("button", { name: "02 Berufserfahrung" })).toHaveAttribute("aria-current", "step");
    expect(HTMLElement.prototype.scrollIntoView).toHaveBeenCalled();
});
