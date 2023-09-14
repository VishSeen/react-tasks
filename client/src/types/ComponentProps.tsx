import {Image, NavMenuItem } from './Types';



export type FabBtnProps = {
    icon?: string;
    className?: string;
    // onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}


export type SearchBarProps = {
    title?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBtnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}



export type UserPanelProps = {
    name: string;
    image: Image;
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

