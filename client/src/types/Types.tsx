

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
    backgroundColor: string;
    accentColor: string;
}

export type NavMenuItem = {
    title: string;
    icon?: string;
    url: string;
}