import { h } from 'preact';
import { ListApi } from '@rmwc/list';
import { MenuSurfaceApi } from '../menu-surface';
import { MenuProps } from './';
export declare const useMenuFoundation: (props: MenuProps & React.HTMLProps<any>) => {
    rootEl: import("@rmwc/base").FoundationElement<any, HTMLElement>;
    setListApi: (api: ListApi | null) => void;
    setMenuSurfaceApi: (api: MenuSurfaceApi) => void;
};
