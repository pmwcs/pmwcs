import { h } from 'preact'

import { Tag } from '@pmwc/base';
import { useTabScrollerFoundation } from './tab-scroller-foundation';

export function TabScroller(props) {
  const { children, apiRef, ...rest } = props;
  const { rootEl, areaEl, contentEl } = useTabScrollerFoundation(props);
  return (
    <Tag {...rest} ref={null} element={rootEl} className="mdc-tab-scroller">
      <Tag element={areaEl} className="mdc-tab-scroller__scroll-area">
        <Tag element={contentEl} className="mdc-tab-scroller__scroll-content">
          {children}
        </Tag>
      </Tag>
    </Tag>
  );
}
