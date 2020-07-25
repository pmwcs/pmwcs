import { h } from 'preact'
import { useEffect, useState , useRef, useMemo} from 'preact/hooks'

import classNames from 'classnames';
import { eventsMap } from './utils/events-map';
import { toCamel } from './utils/strings';
import { MDCFoundation } from '@material/base';
import { handleRef } from './component';

const reactPropFromEventName = (evtName) => eventsMap[evtName] || evtName;

export class FoundationElement {
  constructor(onChange = null) {
    this._classes = new Set();
    this._events = {};
    this._style = {};
    this._props = {};
    this._ref = null;
    this._onChange = onChange;
    this.onChange = this.onChange.bind(this);
    this.addClass = this.addClass.bind(this);
    this.removeClass = this.removeClass.bind(this);
    this.hasClass = this.hasClass.bind(this);
    this.setProp = this.setProp.bind(this);
    this.getProp = this.getProp.bind(this);
    this.removeProp = this.removeProp.bind(this);
    this.setStyle = this.setStyle.bind(this);
    this.addEventListener = this.addEventListener.bind(this);
    this.removeEventListener = this.removeEventListener.bind(this);
    this.setRef = this.setRef.bind(this);
  }

  onChange() {
    this._onChange && this._onChange();
  }

  destroy() {
    this._onChange = null;
    this._events = {};
    this._style = {};
    this._props = {};
    this._classes = new Set();

    setTimeout(() => {
      this._ref = null;
    });
  }

  /**************************************************
   * Classes
   **************************************************/
  addClass(className) {
    if (!this._classes.has(className)) {
      this._classes.add(className);
      this.onChange();
    }
  }

  removeClass(className) {
    if (this._classes.has(className)) {
      this._classes.delete(className);
      this.onChange();
    }
  }

  hasClass(className) {
    return this._classes.has(className);
  }

  /**************************************************
   * Props
   **************************************************/
  setProp(propName, value, silent = false) {
    if (this._props[propName] !== value) {
      this._props[propName] = value;
      !silent && this.onChange();
    }
  }

  getProp(propName) {
    return this._props[propName];
  }

  removeProp(propName) {
    if (this._props[propName] !== undefined) {
      delete this._props[propName];
      this.onChange();
    }
  }

  props(propsToMerge) {
    const { className = '', style = {} } = propsToMerge;

    // handle merging events
    // the foundation should be able to pass something onClick as well as a user
    // This wraps them in a function that calls both
    const mergedEvents = Object.entries(propsToMerge).reduce(
      (acc, [key, possibleCallback]) => {
        const existingCallback = this._events[key];
        if (
          typeof possibleCallback === 'function' &&
          typeof existingCallback === 'function'
        ) {
          const wrappedCallback = (evt) => {
            existingCallback(evt);
            return possibleCallback(evt);
          };

          acc[key] = wrappedCallback;
        }
        return acc;
      },
      { ...this._events }
    );

    // handle className
    const mergedClasses = classNames(className, [...this._classes]);

    // handle styles
    const mergedStyles = {
      ...this._style,
      ...style
    };

    return {
      ...propsToMerge,
      ...this._props,
      ...mergedEvents,
      style: mergedStyles,
      className: mergedClasses
    };
  }

  /**************************************************
   * Styles
   **************************************************/
  setStyle(propertyName, value) {
    propertyName = propertyName.startsWith('--')
      ? propertyName
      : toCamel(propertyName);

    if (this._style[propertyName] !== value) {
      this._style[propertyName] = value;
      this.onChange();
    }
  }

  /**************************************************
   * Events
   **************************************************/
  addEventListener(evtName, callback) {
    const propName = reactPropFromEventName(evtName);
    if (this._events[propName] !== callback) {
      this._events[propName] = callback;
      this.onChange();
    }
  }

  removeEventListener(evtName/*, callback*/) {
    const propName = reactPropFromEventName(evtName);
    if (this._events[propName]) {
      delete this._events[propName];
      this.onChange();
    }
  }

  /**************************************************
   * Refs
   **************************************************/
  setRef(el) {
    if (el) {
      this._ref = el;
    }
  }

  get ref() {
    return this._ref;
  }
}

const emitFactory = (props) => (
  evtType,
  evtData,
  shouldBubble = false
) => {
  let evt;

  evt = new CustomEvent(evtType, {
    detail: evtData,
    bubbles: shouldBubble
  });

  // bugfix for events coming from form elements
  // and also fits with reacts form pattern better...
  // This should always otherwise be null since there is no target
  // for Custom Events
  Object.defineProperty(evt, 'target', {
    value: evtData,
    writable: false
  });

  Object.defineProperty(evt, 'currentTarget', {
    value: evtData,
    writable: false
  });

  // Custom handling for React
  const propName = evtType;

  props[propName] && props[propName](evt);

  return evt;
};

export const useFoundation = (
  {
    foundation: foundationFactory,
    props: inputProps,
    elements: elementsInput,
    api
  }
) => {
  const [, setIteration] = useState(0);

  const props = useRef(inputProps);
  props.current = inputProps;

  const elements = useMemo(
    () =>
      Object.keys(elementsInput).reduce((acc, key) => {
        acc[key] = new FoundationElement(() => {
          setIteration((val) => val + 1);
        });
        return acc;
      }, {}),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const foundation = useMemo(() => {
    // init foundation
    const f = foundationFactory({
      ...elements,
      getProps: () => props.current,
      emit: (...args) => emitFactory(props.current)(...args)
    });

    // handle apiRefs
    api && handleRef(props.current.apiRef, api({ foundation: f, ...elements }));

    return f;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const f = foundation;
    f.init();
    api && handleRef(props.current.apiRef, api({ foundation: f, ...elements }));
    handleRef(props.current.foundationRef, f);

    return () => {
      f.destroy();
      handleRef(props.current.apiRef, null);
      handleRef(props.current.foundationRef, null);
      Object.values(elements).map((element) => element.destroy());
      props.current = {};
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [foundation, elements]);

  return { foundation: foundation, ...elements };
};
