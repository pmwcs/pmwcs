import { useState, useRef, useEffect } from 'preact/compat';
import { useFoundation } from '@rmwc/base';
import { MDCTextFieldFoundation } from '@material/textfield';

export const useTextFieldFoundation = (props) => {
  const [lineRippleActive, setLineRippleActive] = useState(false);
  const [lineRippleCenter, setLineRippleCenter] = useState(0);
  const [notchWidth, setNotchWidth] = useState();
  const [shakeLabel, setShakeLabel] = useState(false);
  const [floatLabel, setFloatlabel] = useState(false);

  const characterCounter = useRef();
  const setCharacterCounter = (api) =>
    (characterCounter.current = api);

  const leadingIcon = useRef();
  const setLeadingIcon = (api) =>
    (leadingIcon.current = api);

  const trailingIcon = useRef();
  const setTrailingIcon = (api) =>
    (trailingIcon.current = api);

  const floatingLabel = useRef();
  const setFloatingLabel = (api) =>
    (floatingLabel.current = api);

  const { foundation, ...elements } = useFoundation({
    props,
    elements: { rootEl: true, inputEl: true },
    foundation: ({ rootEl, inputEl, getProps }) => {
      const getLabelAdapterMethods = () => {
        return {
          shakeLabel: (shouldShake) => setShakeLabel(shouldShake),
          floatLabel: (shouldFloat) => {
            setFloatlabel(getProps().floatLabel ?? shouldFloat);
          },
          hasLabel: () => {
            return !!getProps().label;
          },
          getLabelWidth: () => floatingLabel.current?.getWidth() || 0
        };
      };

      const getLineRippleAdapterMethods = () => {
        return {
          activateLineRipple: () => {
            setLineRippleActive(true);
          },
          deactivateLineRipple: () => {
            setLineRippleActive(false);
          },
          setLineRippleTransformOrigin: (normalizedX) => {
            setLineRippleCenter(normalizedX);
          }
        };
      };

      const getOutlineAdapterMethods = () => {
        return {
          notchOutline: (labelWidth) => {
            setNotchWidth(labelWidth);
          },
          closeOutline: () => {
            getProps().floatLabel ?? setNotchWidth(undefined);
          },
          hasOutline: () => {
            return !!getProps().outlined;
          }
        };
      };

      const getInputAdapterMethods = () => {
        return {
          registerInputInteractionHandler: (
            evtType,
            handler
          ) => inputEl.addEventListener(evtType, handler),
          deregisterInputInteractionHandler: (
            evtType,
            handler
          ) => inputEl.removeEventListener(evtType, handler),
          getNativeInput: () => inputEl.ref
        };
      };

      const getFoundationMap = () => {
        return {
          characterCounter: characterCounter.current
            ? characterCounter.current.getFoundation()
            : undefined,
          helperText: undefined,
          leadingIcon: leadingIcon.current
            ? leadingIcon.current.getFoundation()
            : undefined,
          trailingIcon: trailingIcon.current
            ? trailingIcon.current.getFoundation()
            : undefined
        };
      };

      return new MDCTextFieldFoundation(
        {
          addClass: (className) => rootEl.addClass(className),
          removeClass: (className) => rootEl.removeClass(className),
          hasClass: (className) => rootEl.hasClass(className),
          registerTextFieldInteractionHandler:(
            evtType,
            handler
          ) => rootEl.addEventListener(evtType, handler),
          deregisterTextFieldInteractionHandler:(
            evtType,
            handler
          ) => rootEl.removeEventListener(evtType, handler),
          registerValidationAttributeChangeHandler: (handler) => {
            const getAttributesList = (mutationsList) =>
              mutationsList.map((mutation) => mutation.attributeName);
            if (inputEl.ref) {
              const observer = new MutationObserver((mutationsList) =>
                handler(getAttributesList(mutationsList))
              );
              const targetNode = inputEl.ref;
              const config = { attributes: true };
              targetNode && observer.observe(targetNode, config);
              return observer;
            }

            return {};
          },
          deregisterValidationAttributeChangeHandler: (
            observer
          ) => {
            observer && observer.disconnect();
          },
          isFocused: () => {
            return document.activeElement === inputEl.ref;
          },
          ...getInputAdapterMethods(),
          ...getLabelAdapterMethods(),
          ...getLineRippleAdapterMethods(),
          ...getOutlineAdapterMethods()
        },
        getFoundationMap()
      );
    }
  });

  // Fixes bug #362
  // MDC breaks Reacts unidirectional data flow...
  // We have to capture the value before render
  // and then compare it to props.value after render in order to set
  // the appropriate foundation value without breaking its initial state
  const foundationValue = foundation.getValue();
  useEffect(() => {
    if (props.value !== undefined && props.value !== foundationValue) {
      foundation.setValue(String(props.value));
    }
  }, [props.value, foundation, foundationValue]);

  // Allow the user to float the label themselves
  useEffect(() => {
    if (props.floatLabel !== undefined) {
      foundation.notchOutline(props.floatLabel);
      // @ts-ignore unsafe adapter access
      foundation.adapter_.floatLabel(props.floatLabel);
    }
  }, [foundation, props.floatLabel]);

  return {
    shakeLabel,
    floatLabel,
    notchWidth,
    lineRippleActive,
    lineRippleCenter,
    setCharacterCounter,
    setLeadingIcon,
    setTrailingIcon,
    setFloatingLabel,
    ...elements
  };
};
