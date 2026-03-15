import { Profile } from "../types/portfolio";
import "../styles/components/Header.css";

interface Props {
    profile: Profile;
}

export default function Header({ profile }: Props) {
    return (
        <div className="header">
            <div>
                <img src={profile.image}
                     alt={profile.name}
                     className="avatar" />
            </div>
            <div>
                <div className="header-text">
                    <h1>{profile.name}</h1>
                    <div className={"header-title"}>{profile.title}</div>
                </div>
                <p>{profile.intro}</p>
            </div>
        </div>
    );
}