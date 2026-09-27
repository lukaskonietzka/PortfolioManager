import { Profile } from "../types/portfolio";
import "../styles/components/Header.css";

interface Props {
    profile: Profile;
    view: "portfolio" | "cv";
    onViewChange: (view: "portfolio" | "cv") => void;
}

export default function Header({ profile, view, onViewChange }: Props) {
    return (
        <div className="header">
            <div className="header-media">
                <div className="avatar-ring" />
                <img
                    src={`${process.env.PUBLIC_URL}/${profile.image}`}
                    alt={profile.name}
                    className="avatar"
                />
            </div>
            <div className="header-content">
                <nav className="header-navigation" aria-label="Hauptnavigation">
                    <button className={view === "portfolio" ? "active" : ""} onClick={() => onViewChange("portfolio")} aria-current={view === "portfolio" ? "page" : undefined}>Portfolio</button>
                    <button className={view === "cv" ? "active" : ""} onClick={() => onViewChange("cv")} aria-current={view === "cv" ? "page" : undefined}>Lebenslauf</button>
                </nav>
                <div className="header-eyebrow">{view === "cv" ? "Lebenslauf" : "Portfolio"}</div>
                <div className="header-text">
                    <h1>{profile.name}</h1>
                    <span className="header-title">{profile.title}</span>
                </div>
                <p className="header-intro">{profile.intro}</p>
            </div>
        </div>
    );
}
