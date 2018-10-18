import React, { Component } from 'react';

interface ILayoutSlotProperties<S> {
    id: string;
    elements?: { [id: string]: React.ReactNode };
}

class LayoutSlot<T> extends React.Component<ILayoutSlotProperties<T>> {
    constructor(props: ILayoutSlotProperties<T>) {
        super(props);
    }

    public render(): React.ReactNode {
        return this.props.elements && this.props.elements[this.props.id];
    }
}

export { LayoutSlot };
