import * as RMWC from '@rmwc/types';
import { h } from 'preact';
/** A collapsible list component. */
export interface CollapsibleListProps {
    /** The handle that opens and closes the collapsible section. Usually a ListItem. */
    handle: React.ReactElement<any>;
    /** Show the collapsible list as open. */
    open?: boolean;
    /** Starts the collapsible list as open. */
    defaultOpen?: boolean;
    /** Callback for when the collapsible list opens. */
    onOpen?: () => void;
    /** Callback for when the collapsible list closes. */
    onClose?: () => void;
}
interface CollapsibleState {
    open: boolean;
    childrenStyle: React.CSSProperties;
}
/** A collapsible list component. */
export declare class CollapsibleList extends React.Component<CollapsibleListProps & RMWC.HTMLProps, CollapsibleState> {
    static displayName: string;
    static getDerivedStateFromProps(props: CollapsibleListProps, state: CollapsibleState): CollapsibleState;
    childContainer: HTMLDivElement | null;
    root: HTMLDivElement | null;
    rafId: number | null;
    timerId: number | null;
    state: CollapsibleState;
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(prevProps: CollapsibleListProps, prevState: CollapsibleState): void;
    componentWillUnmount(): void;
    syncOpenState(): void;
    correctFocus(back: boolean): void;
    toggleOpen(isOpen: boolean): void;
    handleClick(evt: React.MouseEvent): void;
    handleKeydown(evt: React.KeyboardEvent): void;
    handleFocus(evt: React.FocusEvent): void;
    render(): JSX.Element;
}
export {};
