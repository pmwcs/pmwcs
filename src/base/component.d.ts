import { AnyComponent, Ref } from 'preact'

import { FoundationElement } from './foundation-component';

type TagEl = HTMLElement;

export interface TagProps {
  tag?: TagEl = 'div';
  element?: FoundationElement<any, any>;
  ref?: Ref;
}

export declare const Tag : AnyComponent<TagProps>;

type ClassNamesInputT<Props> =
  | undefined
  | ((
      props: Props
    ) => Array<
      | string
      | undefined
      | null
      | { [className: string]: boolean | undefined | string | number }
    >)
  | string[]
  | Array<
      | string
      | undefined
      | null
      | { [className: string]: boolean | undefined | string | number }
    >;

export declare const useClassNames: <Props extends { [key: string]: any }>(
  props: Props,
  classnames: ClassNamesInputT<Props>
) => string;

export declare const mergeRefs: (
  ...refs: Array<Ref<any> | undefined | null>
) => (el: any) => void;

export declare const handleRef: <T extends any>(
  ref: Ref<T> | null | undefined,
  value: T
) => void;

export declare function createComponent<
  P extends {},
  ElementP extends {} = HTMLProps<HTMLElement>
>(Component: AnyComponent<any, P & ElementP>): {
  <Tag extends JSX.Element<any> = "div">(
    props: ComponentProps<P, ElementP, Tag>,
    ref: any
  ): JSX.Element;
  displayName: string;
};

export declare function createMemoComponent<
  P extends {},
  ElementP extends {} = HTMLProps<HTMLDivElement>
>(Component: AnyComponent<any, P & ElementP>): {
  <Tag extends JSX.Element<any> = "div">(
    props: ComponentProps<P, ElementP, Tag>, ref: any
  ): JSX.Element;
  displayName: string;
};
