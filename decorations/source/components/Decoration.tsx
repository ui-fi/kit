import React from 'react';

type DecorationProperties = {
    prefix?: any;
    postfix?: any;
}

class Decoration extends React.Component<DecorationProperties> {
    constructor(props: DecorationProperties) {
        super(props);
    }

    public render(): React.ReactNode {
        return [
            this.props.prefix,
            this.props.children,
            this.props.postfix
        ];
    }
}

export { Decoration };