import React from 'react';
import { ButtonsSection } from './sections/ButtonsSection';
import { LogInFormSection } from './sections/LogInFormSection';

import './Application.less';

class Application extends React.Component {
    public render(): React.ReactNode {
        return (
            <div className="ui-fi__showcase__application">
                <ButtonsSection caption='Buttons' />
                <LogInFormSection caption='Log-in form' />
            </div>
        );
    }
}

export { Application }