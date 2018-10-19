import React, { CSSProperties } from 'react';

import CSS from 'csstype';

import applyClassesAndStyle from 'utilities/applyClassesAndStyle';
import wrapWithDiv from 'utilities/wrapWithDiv';

type OutlineProperties = {
    color?: CSS.Globals | CSS.Color;
};

const UI_FI__OUTLINE = 'ui-fi__outline';

class Outline extends React.Component<OutlineProperties> {
    constructor(props: OutlineProperties) {
        super(props);
    }

    public render(): React.ReactNode {
        return this._renderInternal(React.Children.count(this.props.children), this._prepareStyle());
    }

    private _prepareStyle(): CSSProperties {
        return this.props.color && {
            borderColor: this.props.color,
        } || {};
    }

    private _renderInternal(childCount: number, style: CSSProperties): React.ReactNode {
        return childCount && (
            childCount === 1 && React.isValidElement(this.props.children)
                ? applyClassesAndStyle(UI_FI__OUTLINE, style, this.props.children)
                : wrapWithDiv(UI_FI__OUTLINE, style, this.props.children)
        ) || null;
    }
}

export { Outline };
