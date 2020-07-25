import { h, createElement } from 'preact';
import classNames from 'classnames';
import { toDashCase } from './utils/strings';
/**
 * Actually parses the theme options
 */
export const parseThemeOptions = function (theme) {
    const themeItems = Array.isArray(theme) ? theme : [theme];
    return themeItems
        .filter(function (v) { return !!v; })
        .map(function (v) { return "mdc-theme--" + toDashCase(v); });
};

/**
 * HOC that adds themeability to any component
 */
export const withTheme = function (Component) {
  const HOC = function (props) {
    const { theme, className, ...rest } = props
    if (theme) {
      const classes = classNames(className, parseThemeOptions(theme));
      return createElement(Component, { className: classes, ...rest })
    }
    return createElement(Component, { className, ...rest });
  };
  HOC.displayName = 'withTheme';
  return HOC;
};
