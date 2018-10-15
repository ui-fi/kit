import React from 'react';

type LayoutElementProperties = {
    slotId: string;
};

class LayoutElement extends React.Component<LayoutElementProperties> {
    constructor(props: LayoutElementProperties) {
        super(props);
    }

    public render(): React.ReactNode {
        return this.props.children;
    }

    public getSlogId(): string {
        return this.props.slotId;
    }
 }

 export { LayoutElement };