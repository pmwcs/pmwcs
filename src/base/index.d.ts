/** HTML properties */
export type HTMLProps = {
  tag?: string;
  theme?: string;
  ref?: any;
  /* any html attribute */
  [key: string]: any;
}

export type PortalPropT = Element | string | boolean | undefined | null;

export class EventEmitter {
  events_: { [evtName: string]: Array<Function> };
  on(event: string, cb: Function) : any;
  off(event: string, cb: Function) : any;
  trigger(event: string, ...args: any) : any;
}

export class ArrayEmitter<T> extends EventEmitter {
  array: T[];
  push(...items: T[]) : T ;
  empty() : void;
  remove(item: T) : boolean;
}

// TODO: complete
