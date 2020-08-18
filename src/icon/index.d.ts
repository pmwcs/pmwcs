import { AnyComponent } from 'preact'

export type IconSizeT = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

export type IconStrategyT =
  | 'auto'
  | 'ligature'
  | 'className'
  | 'url'
  | 'component'
  | 'custom';

export interface IconOptions {
  /** The icon to use. This can be a string for a font icon, a url, or whatever the selected strategy needs. */
  icon: AnyComponent;
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
  /** icon name for strategy ligature and component */
  children?: AnyComponent
  /** material icon variant outlined; basename needs to be set to material-icons */
  outlined?: boolean;
  /** material icon variant rounded; basename needs to be set to material-icons  */
  rounded?: boolean;
  /** material icon variant two-tone; basename needs to be set to material-icons  */
  twoTone?: boolean;
  /** material icon variant sharp; basename needs to be set to material-icons */
  sharp?: boolean;
  /** Additional props */
  [key: string]: any;
}

export type IconPropT = IconElementT | IconOptions;

/**
 * An Icon component.
 * Most of these options can be set once globally, read the documentation on Provider for more info.
 */
export interface IconProps extends IconOptions {
  /** The icon to use. This can be a string for a font icon, a url, or whatever the selected strategy needs. */
  icon?: IconPropT;
}
