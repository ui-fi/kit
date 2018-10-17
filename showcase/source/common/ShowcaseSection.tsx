import React from 'react';

import './ShowcaseSection.less';

type ShowcaseSectionProperties = {
    caption: string;
};

class ShowcaseSection extends React.Component<ShowcaseSectionProperties> {
    public render(): React.ReactNode {
        return (
            <div className="ui-fi__showcase-section">
                <div className="ui-fi__showcase-section__header">
                    { this.props.caption }
                </div>
                <div className="ui-fi__showcase-section__body">
                    { this.props.children }
                </div>
            </div>
        );
    }
}

export { ShowcaseSection };