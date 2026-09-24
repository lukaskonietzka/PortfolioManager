import { fireEvent, render, screen } from "@testing-library/react";
import PortfolioManager from "./PortfolioManager";

test("renders configured projects and opens the project modal", () => {
    render(<PortfolioManager />);
    expect(screen.getByText("Bauhof Aichach")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Bauhof Aichach"));
    expect(screen.getByRole("tab", { name: "Bild" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Beschreibung" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Quellcode" })).toBeInTheDocument();
});

test("switches modal content to the repository links", () => {
    render(<PortfolioManager />);
    fireEvent.click(screen.getByText("Bauhof Aichach"));
    fireEvent.click(screen.getByRole("tab", { name: "Quellcode" }));
    expect(screen.getByRole("link", { name: /Repository/ })).toHaveAttribute("href", "https://github.com/user/project");
});
