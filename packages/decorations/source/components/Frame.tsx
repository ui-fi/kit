import React from 'react';

import 'styles/Frame.less';

class Frame extends React.Component {
    public render(): React.ReactNode {
        return (
            <div className="ui-fi__frame__outer">
                <div className="ui-fi__frame__inner">
                    { this.props.children }
                </div>
            </div>
        );
    }
}

export { Frame };
