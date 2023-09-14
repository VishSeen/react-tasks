import { FunctionComponent, useState } from "react";
import { Image } from "../../types/Types";
import Logo from "../logo/logo";
import StyledNav from "./nav-bar.style";
import NavBarMenu from "../nav-bar-menu/nav-bar-menu";
import { NavBarProps } from "../../types/ComponentProps";


const navMenu = [
    {
        title: 'Home',
        icon: 'home_filled',
        url: '/'
    },
    {
        title: 'Todo',
        icon: 'check_box',
        url: 'todos'
    },
    {
        title: 'Reminder',
        icon: 'event_note',
        url: 'reminders'
    },
    {
        title: 'Notes',
        icon: 'border_color',
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
                        <span className="material-icons">notes</span>
                    </button>
                    <Logo text="tasks" className={opened ? '' : 'dark'}/>
                </div>

                <div className="nav-bar__center-bar">
                    <NavBarMenu menuItems={navMenu} isNavLinks={true} />
                </div>
            </div>
        </StyledNav>
    );
}


export default NavBar;