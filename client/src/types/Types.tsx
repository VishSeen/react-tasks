
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


export type Theme = {
    textColor: string;
    textColorDark: string;
    backgroundColor: string;
    backgroundNavColor: string;
    backgroundSearchColor: string;
    accentColor: string;
}

export type NavMenuItem = {
    title: string;
    icon?: string;
    url: string;
}



