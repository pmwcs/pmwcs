/// <reference types="react" />
/**
 * Theming
 */
export declare type ThemeOptionT = 'primary' | 'secondary' | 'background' | 'surface' | 'error' | 'primaryBg' | 'secondaryBg' | 'onPrimary' | 'onSecondary' | 'onSurface' | 'onError' | 'textPrimaryOnBackground' | 'textSecondaryOnBackground' | 'textHintOnBackground' | 'textDisabledOnBackground' | 'textIconOnBackground' | 'textPrimaryOnLight' | 'textSecondaryOnLight' | 'textHintOnLight' | 'textDisabledOnLight' | 'textIconOnLight' | 'textPrimaryOnDark' | 'textSecondaryOnDark' | 'textHintOnDark' | 'textDisabledOnDark' | 'textIconOnDark' | undefined;
export declare type ThemePropT = ThemeOptionT | ThemeOptionT[];
/**
 * Ripples
 */
export declare type RipplePropT = boolean | {
    accent?: boolean;
    surface?: boolean;
    unbounded?: boolean;
};
export interface WithRippleProps {
    /** Adds a ripple effect to the component */
    ripple?: RipplePropT;
}
/**
 * Components
 */
export declare type TagT = string | React.ComponentType<any>;
export declare type CustomEventT<T> = CustomEvent<T> & React.SyntheticEvent<EventTarget>;
declare type IconElementT = React.ReactNode;
export declare type IconSizeT = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
export declare type IconStrategyT = 'auto' | 'ligature' | 'className' | 'url' | 'component' | 'custom';
export interface IconOptions {
    icon: IconElementT;
    /**
     * Handle multiple methods of embedding an icon.
     * 'ligature' uses ligature style embedding like material-icons,
     * 'className' adds a class onto the element for libraries like glyphicons and ion icons,
     * 'url' will load a remote image, and
     * 'component' will render content as children like SVGs or any other React node.
     * 'custom' allows you to specify your own render prop.
     * If not set, 'auto' will be used or the defaults set inside of PMWCProvider.
     * */
    strategy?: IconStrategyT;
    /**
     * A className prefix to use when using css font icons that use prefixes,
     * i.e. font-awesome-, ion-, glyphicons-.
     * This only applies when using the 'className' strategy.
     **/
    prefix?: string;
    /** A base className for the icon namespace, i.e. material-icons. */
    basename?: string;
    /** A render function to use when using the 'custom' strategy. */
    render?: (props: {
        content: IconElementT;
        className: string;
    }) => React.ReactNode;
    /** A size to render the icon  */
    size?: IconSizeT;
    /** Additional props */
    [key: string]: any;
}
export declare type IconPropT = IconElementT | IconOptions;
export declare type HTMLProps<T = HTMLElement, A = React.AllHTMLAttributes<T>> = A & React.ClassAttributes<T> & {
    tag?: TagT;
    theme?: ThemePropT;
    ref?: React.HTMLProps<T>['ref'];
};
export declare type ComponentProps<Props extends {}, ElementProps extends {}, Tag extends React.ElementType> = Props & (ElementProps | (React.ComponentPropsWithRef<Tag> & {
    tag?: Tag;
    theme?: ThemePropT;
}));
export declare type ComponentType<Props, ElementProps, Element extends React.ElementType<any>> = {
    <Tag extends React.ElementType<any> = Element>(props: ComponentProps<Props, ElementProps, Tag>, ref: any): JSX.Element;
    displayName?: string;
};
export {};
