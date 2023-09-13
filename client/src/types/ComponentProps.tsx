import {Image} from './Types';



export type FabBtnProps = {
    icon?: string;
    className?: string;
    // onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
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