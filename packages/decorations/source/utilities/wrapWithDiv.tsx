import React, { CSSProperties } from 'react';

const wrapWithDiv = (classes: string, style: CSSProperties, children: React.ReactNode) => {
    return (
        <div className={ classes } style={ style }>
            { children }
        </div>
    );
};

export default wrapWithDiv;
