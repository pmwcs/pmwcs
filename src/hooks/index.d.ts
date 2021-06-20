
// fetchTimeout

declare class Request {
  /** The request method, e.g., GET, POST. */
  method: string;
  /** Any headers you want to add to your request, contained within a Headers object or an object literal with ByteString values. */
  headers: object;
  /** Any body that you want to add to your request: this can be a Blob, BufferSource, FormData, URLSearchParams, USVString, or ReadableStream object. Note that a request using the GET or HEAD method cannot have a body. */
  body: any;
  /**  The mode you want to use for the request, e.g., cors, no-cors, same-origin, or navigate. The default is cors. In Chrome the default is no-cors before Chrome 47 and same-origin starting with Chrome 47. */
  mode: string;
  /** The request credentials you want to use for the request: omit, same-origin, or include. The default is omit. In Chrome the default is same-origin before Chrome 47 and include starting with Chrome 47. */
  credentials: string;
  /** The cache mode you want to use for the request. */
  cache: string;
  /** redirect: The redirect mode to use: follow, error, or manual. In Chrome the default is follow (before Chrome 47 it defaulted to manual). */
  redirect: string;
  /**A USVString specifying no-referrer, client, or a URL. The default is client.*/
  referrer: string;
  /** Contains the subresource integrity value of the request */
  integrity: string;
  /** signal e.g. for AbortController */
  signal: any;
}

declare class RequestTimeout extends Request {
  /**
   * request timeout in milli seconds
   */
  timeout?: number;
}

declare class RequestRetry extends RequestTimeout {
  /**
   * number of retries
   * @default 2
   */
  retry?: number;
  /**
   * retry delay in milli seconds
   * @default 1000
   */
  retryDelay?: number;
}

declare class Response {
}

export function fetchTimeout (url: string, options: RequestTimeout) : Promise<Response>;

export function fetchRetry (url: string, options: RequestRetry): Promise<Response>;

// unstated

declare function hookFunction (initialState: any) : object

declare class Container {
  Provider: (props?: object) => Function;
  useContainer: () => any;
}

export function createContainer (useHook: typeof hookFunction) : Container

export function useContainer (container: any) : any

// useFetch

interface useFetchReturn {
  /** returned data from fetch */
  data?: any;
  /** fetch error */
  error?: Error;
  /** isLoading indicator */
  isLoading: boolean;
  /** change fetch url */
  setUrl: (url: string) => void;
  /** change fetch options */
  setOptions: (options: object) => void;
}

/** reduces the Response Body object */
declare function reducerFunction (res: Response) : object;

export function useFetch (initialUrl: string, initialOptions?: Request, reducer?: typeof reducerFunction) : useFetchReturn;
