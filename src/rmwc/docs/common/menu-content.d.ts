import { h } from 'preact';
export declare type MenuItemT = {
    label: string;
    url?: string;
    gallery?: React.ReactNode;
    component?: () => JSX.Element;
    options?: MenuItemT[];
};
export declare const menuContent: MenuItemT[];
export declare const galleryContent: MenuItemT[];
