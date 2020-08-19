import { AnyComponent } from 'preact'

export interface FloatingLabelProps {
  shake?: boolean;
  float?: boolean;
}

export interface FloatingLabelApi {
  getWidth: () => number;
}

export declare const FloatingLabel : AnyComponent<
  FloatingLabelProps & { apiRef?: (api: FloatingLabelApi | null) => void }
>
