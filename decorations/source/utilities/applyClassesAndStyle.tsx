import React, { CSSProperties, HTMLAttributes } from 'react';

import classnames from 'classnames';

const applyClassesAndStyle = (classes: string
    , style: CSSProperties
    , element: React.ReactElement<HTMLAttributes<HTMLElement>>) => {
    return React.cloneElement(element, {
        className: classnames(element.props.className, classes),
        style: {
            ...element.props.style,
            ...style,
        },
    });
};

export default applyClassesAndStyle;
