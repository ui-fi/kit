import React from 'react';

import classnames from 'classnames';

type ButtonProperties = {
    caption?: string;
    classes?: string | string[];
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
};

class Button extends React.Component<ButtonProperties> {
    constructor(props: ButtonProperties) {
        super(props);
    }

    public render(): React.ReactNode {
        return (
            <div
                className= { this.props.classes ? classnames('ui-fi__button', this.props.classes) : 'ui-fi__button' }
                style={ this.props.style }
                onClick={ this.props.onClick }>
                { this.props.caption }
            </div>
        );
    }
}

export { Button };
