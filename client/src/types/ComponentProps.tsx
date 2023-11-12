import { Tag } from '../constants';
import {DropdownItem, NavMenuItem, UserInfo } from './Types';



export type FabBtnProps = {
    icon?: string;
    className?: string;
}


export type SearchBarProps = {
    title?: string;
    inputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    btnSearchClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    btnCloseClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export type ButtonIconProps = {
    className?: string;
    icon: string;
    size?: string;
    clickEvent?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}



export interface UserPanelProps extends UserInfo {
    className?: string;
}
export interface UserPanelInfoProps extends UserInfo {
    className?: string;
    items?: DropdownItem[];
    isOpened: boolean;
}

export type LogoProps = {
    text: string;
    url?: string;
    className?: string;
}


export type NavBarProps = {
    className?: string;
}

export type NavBarMenuProps = {
    className?: string;
    menuItems: NavMenuItem[];
    isNavLinks: boolean;
}

export type ChipTagProps = {
    className?:string;
    tag?: Tag;
}


export type DropdownOptionProps = {
    className?: string;
    items?: DropdownItem[];
    isOpened?: boolean;
}

export interface DropdownItemProps extends DropdownItem {
    className?: string;
}