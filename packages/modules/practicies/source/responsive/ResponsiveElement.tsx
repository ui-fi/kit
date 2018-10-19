import React from 'react';

import classnames from 'classnames';

import { Breakpoints } from 'common/Breakpoints';
import { ReactContextConsumer } from 'common/ReactContext';

class ResponsiveElement extends React.Component {
    public render(): React.ReactNode {
        return (
            <ReactContextConsumer>
                {
                    (b: Breakpoints): React.ReactNode => {
                        return React.Children.map(this.props.children, ((c: React.ReactChild, i: number) =>
                            (React.isValidElement(c) ? this._applyBreakpointClass(c, b) : c )));
                    }
                }
            </ReactContextConsumer>
        );
    }

    private _applyBreakpointClass(element: React.ReactElement<React.HTMLAttributes<any>>
        , breakpoint: Breakpoints): React.ReactNode {
        return React.cloneElement(element, {
            className: classnames(element.props.className, `ui-fi__responsive-${breakpoint}`),
        });
    }
}

export { ResponsiveElement };
