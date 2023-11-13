import { FunctionComponent } from "react";
import { NavLink } from 'react-router-dom';
import { NavBarMenuProps } from "../../types/ComponentProps";
import StyledNavBarMenu from "./style";



const NavBarMenu: FunctionComponent<NavBarMenuProps> = ({
    className,
    menuItems,
    isNavLinks
}) => {
    return (
        <StyledNavBarMenu className={['nav-bar__menu-wrapper', className].join(' ')}>
            <ul className="nav-bar__menu">
                {
                    menuItems.map((item, i) => {
                        return (
                            <li key={i}>
                                {
                                    isNavLinks ? (
                                        <NavLink to={item.url}>
                                            {
                                                item.icon && (
                                                    <span className="material-symbols-rounded">
                                                        {item.icon}
                                                    </span>
                                                )
                                            }
                                            {item.title}
                                        </NavLink>
                                    ) : (
                                        <a href={item.url}>
                                            {
                                                item.icon && (
                                                    <span className="material-symbols-rounded">
                                                        {item.icon}
                                                    </span>
                                                )
                                            }
                                            {item.title}
                                        </a>
                                    )
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </StyledNavBarMenu>
    )
}


export default NavBarMenu;