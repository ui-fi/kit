import React, { Attributes } from 'react';

import classnames from 'classnames';

namespace Responsive {
    export type Breakpoint = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

    const { Provider, Consumer } = React.createContext<Breakpoint>('m');

    export type ContextProperties = {
        breakpoint: Breakpoint;
    }

    export class Context extends React.Component<ContextProperties> {
        constructor(props: ContextProperties) {
            super(props);
        }

        public render(): React.ReactNode {
            return (
                <Provider value={ this.props.breakpoint }>
                    { this.props.children }
                </Provider>
            );
        }
    }

    export class Element extends React.Component {
        public render(): React.ReactNode {
            return (
                <Consumer>
                    {
                        (b: Breakpoint): React.ReactNode => {
                            return React.Children.map(this.props.children, ((c: React.ReactChild, i: number) => 
                                (React.isValidElement(c) ? this._applyWithBreakpointClass(c, b) : c )))
                        }
                    }
                </Consumer>
            );
        }

        private _applyWithBreakpointClass(element: React.ReactElement<React.HTMLAttributes<any>>, breakpoint: Breakpoint): React.ReactNode {
            return React.cloneElement(element, {
                className: classnames(element.props.className, `ui-fi__responsive-breakpoint-${breakpoint}`) 
            });
        }
    }
}

export default Responsive;