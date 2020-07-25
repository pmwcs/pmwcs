import { h } from 'preact';
export interface DocPropsI {
    src: any;
    components: Array<{
        displayName: string;
        component: React.ComponentType<any>;
    }>;
}
export declare class DocProps extends React.Component<DocPropsI> {
    docs: {
        [key: string]: any;
    };
    shouldComponentUpdate(): boolean;
    render(): JSX.Element[];
}
export declare function Docs({ children, title, lead, module, styles, docsLink, examples, addon }: {
    children: React.ReactNode;
    title: string;
    lead: string;
    module: string;
    styles: string[];
    docsLink?: string;
    examples: string[];
    addon?: boolean;
}): JSX.Element;
export declare function DocsSubtitle({ children }: {
    children: React.ReactNode;
}): JSX.Element;
export declare function DocsP({ children }: {
    children: React.ReactNode;
}): JSX.Element;
export declare function DocsExample({ index, ...rest }: {
    children: React.ReactNode;
    index?: number;
    label?: string;
    codeOnly?: boolean;
    iframe?: boolean;
    center?: boolean;
}): JSX.Element;
export declare namespace DocsExample {
    var displayName: string;
}
export declare function DocsMarkdown({ fileSrc }: {
    fileSrc: string;
}): JSX.Element;
