
export type Theme = {
    color: Color;
    background: Background;
    hover: Hover;
    boxShadow: BoxShadow;
}


export type Font = {
    primary: string;
    secondary: string;
}
export type BoxShadow = {
    todoItem: string;
    userPanel: string;
    fabBtn: string;
    dropdownOption: string;
}
export type Background = {
    body: string;
    navBar: string;
    searchBar: string;
    fabBtnClose: string;
    overlay: string;
}
export type Color = {
    white: string;
    dark: string;
    text: Text;
    border: string;
    accent: string;
}
export type Hover = {
    fabBtn: string;
    dropdownItem: string;
    navMenuItem: string;
}
export type Text = {
    textColor: string;
    textColorDark: string;
}



export type Page = {
    title: string;
    contents?: HTMLDivElement;
}

export type Image = {
    src: string;
    altText: string;
}

export type Link = {
    href: string;
    text?: string;
}

export type UserInfo = {
    name: string;
    email: string;
    image: Image;
}




export type NavMenuItem = {
    title: string;
    icon?: string;
    url: string;
}


export type DropdownItem = {
    iconLeft?: string;
    title: string;
    titleColor?: string;
    clickEvent?: () => void;
}

