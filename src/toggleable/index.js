import {h} from 'preact';
import { useId } from '@pmwc/base';
import { FormField } from '@pmwc/formfield';

export function useToggleFoundation(props) {
  const { className, style, rootProps, label, children, disabled } = props;
  const hasLabel = props.label || props.children;
  const id = useId('toggle-', props);

  const renderToggle = (toggle) => {
    /**
     * We have to conditionally wrap our checkbox in a formfield
     * If we have a label
     */
    if (hasLabel) {
      return (
        <FormField {...(rootProps)} className={className} style={style}>
          {toggle}
          <label id={id + 'label'} htmlFor={id}>
            {label}
            {children}
          </label>
        </FormField>
      );
    } else {
      return toggle;
    }
  };

  const toggleRootProps = hasLabel
    ? { disabled }
    : {
        className,
        style,
        disabled,
        ...rootProps
      };

  return {
    id,
    renderToggle,
    toggleRootProps
  };
}
