/**********************************************************************************************************************/
/*      IMPORTS                                                                                                       */
/**********************************************************************************************************************/
//  React
import React, { Attributes } from 'react';

import { Breakpoints } from 'common/Breakpoints';
import { ReactContextProvider } from 'common/ReactContext';

type ResponsiveContextProperties = {
    breakpoint: Breakpoints;
};

class ResponsiveContext extends React.Component<ResponsiveContextProperties> {
    constructor(props: ResponsiveContextProperties) {
        super(props);
    }

    public render(): React.ReactNode {
        return (
            <ReactContextProvider value={ this.props.breakpoint }>
                { this.props.children }
            </ReactContextProvider>
        );
    }
}

export { ResponsiveContext };
