import { FunctionComponent, useState } from "react";
import Logo from "../logo/logo";
import StyledNav from "./style";
import NavBarMenu from "../nav-bar-menu/nav-bar-menu";
import { NavBarProps } from "../../types/ComponentProps";
import config from '../../config.json';


const navMenu = [
    {
        title: 'Home',
        icon: 'home',
        url: '/'
    },
    {
        title: 'Todo',
        icon: 'check_box',
        url: 'todos'
    },
    {
        title: 'Reminder',
        icon: 'today',
        url: 'reminders'
    },
    {
        title: 'Notes',
        icon: 'note',
        url: 'notes'
    }
]


const NavBar: FunctionComponent<NavBarProps> = ({
    className
}) => {
    const [opened, setOpened] = useState<boolean>(true);

    return (
        <StyledNav className="nav-bar-wrapper">
            <div className={`${['nav-bar', className].join(' ')}`}>
                <div className="nav-bar__top-bar">
                    <button className="btn-nav" onClick={() => setOpened(!opened)}>
                        <span className="material-symbols-rounded">notes</span>
                    </button>
                    <Logo text="tasks" className={opened ? '' : 'dark'} />
                </div>

                <div className="nav-bar__center-bar">
                    <NavBarMenu menuItems={config["nav-bar-items"]} isNavLinks={true} />
                </div>

                <div className="nav-bar__bottom-bar">
                    <NavBarMenu menuItems={config["nav-bar-setting"]} isNavLinks={true} />
                </div>
            </div>
        </StyledNav>
    );
}


export default NavBar;