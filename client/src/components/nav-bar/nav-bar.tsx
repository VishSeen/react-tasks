import { FunctionComponent, useState } from "react";
import Config from "../../config.json";
import { Image } from "../../types/Types";
import Logo from "../logo/logo";
import StyledNav from "./nav-bar.style";



type LinkItem = {
    icon: Image;
    name: string;
}

type Sections = {
    linkItems: LinkItem[];
}

type NavBarProps = {
    className?: string;
    section?: Sections;
}


const NavBar: FunctionComponent<NavBarProps> = ({
    className,
    section
}) => {
    const [opened, setOpened] = useState<boolean>(true);

    return (
        <StyledNav className="nav-bar-wrapper">
            <div className={`${['nav-bar', className].join(' ')}`}>
                <div className="nav-bar__top-bar">
                    <button className="btn-nav" onClick={() => setOpened(!opened)}>
                        <span className="material-icons">notes</span>
                    </button>
                    <Logo text="tasks" className={opened ? '' : 'dark'}/>
                </div>
            </div>
        </StyledNav>
    );
}


export default NavBar;