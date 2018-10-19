import { CSSProperties } from "react";

type Style = {
    name: string;
    properties: CSSProperties;
};

const cssPropertiesToString = (properties: CSSProperties): string => {
    throw new Error('Not implemented'); 
};

const compileStyles = (...styles: Style[]): string => {
    return styles.reduce((previous, current) => (
        `${previous} .${current.name} { ${cssPropertiesToString(current.properties)} }`
    ), '');
};

const renderStyles = (...styles: Style[]): void => {
    if (!document) {
        throw new Error('Document is not defined. Cannot render styles outside browser context.');
    }

    const element = document.createElement('style');
    
    element.type = 'text/css';
    element.innerHTML = compileStyles(...styles);

    document.getElementsByTagName('head')[0].appendChild(element);
};

export default renderStyles;