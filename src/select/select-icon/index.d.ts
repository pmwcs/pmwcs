/// <reference types="react" />
import * as RMWC from '@pmwc/types';
import { MDCSelectIconFoundation } from '@material/select';
import { IconProps } from '@pmwc/icon';
export interface SelectIconApi {
    getFoundation: () => MDCSelectIconFoundation;
}
/** An Icon in a Select */
export interface SelectIconProps extends IconProps {
    apiRef?: (api: SelectIconApi | null) => void;
}
export declare const SelectIcon: (props: SelectIconProps & RMWC.HTMLProps) => JSX.Element;
