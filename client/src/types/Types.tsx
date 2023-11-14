import { Tag } from '../constants';

export type Theme = {
  textColor: string;
  textColorDark: string;
  backgroundColor: string;
  backgroundNavColor: string;
  backgroundSearchColor: string;
  accentColor: string;
  borderColor: string;
  hoverBackgroundColor: string;
  boxShadow: string;
};

export type Page = {
  title: string;
  contents?: HTMLDivElement;
};

export type Image = {
  src: string;
  altText: string;
};

export type Link = {
  href: string;
  text?: string;
};

export type UserInfo = {
  name: string;
  email: string;
  image: Image;
};

export type NavMenuItem = {
  title: string;
  icon?: string;
  url: string;
};

export type DropdownItem = {
  iconLeft?: string;
  title: string;
  titleColor?: string;
  clickEvent?: () => void;
};

export type TodoItem = {
  copy?: string;
  tag?: Tag;
  title: string;
};

export type TodoItems = TodoItem[];
