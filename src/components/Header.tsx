import { Profile } from "../types/portfolio";
import "../styles/components/Header.css";

interface Props {
    profile: Profile;
}

export default function Header({ profile }: Props) {
    return (
        <div className="header">
            <div className="header-media">
                <div className="avatar-ring" />
                <img
                    src={profile.image}
                    alt={profile.name}
                    className="avatar"
                />
            </div>
            <div className="header-content">
                <div className="header-eyebrow">Portfolio</div>
                <div className="header-text">
                    <h1>{profile.name}</h1>
                    <span className="header-title">{profile.title}</span>
                </div>
                <p className="header-intro">{profile.intro}</p>
            </div>
        </div>
    );
}
