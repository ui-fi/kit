import React from 'react';

import classnames from 'classnames';

import 'styles/Frame.less';

interface IFrameProperties {
    classes?: string | string[];
}

class Frame extends React.Component<IFrameProperties> {
    public render(): React.ReactNode {
        return (
            <div className={ classnames('ui-fi__frame__outer', this.props.classes) }>
                <div className="ui-fi__frame__inner">
                    { this.props.children }
                </div>
            </div>
        );
    }
}

export { Frame };
