import React from 'react';
import { Button } from '../../../Button';
import { ShowcaseSection } from '../../common/ShowcaseSection';

type ButtonsSectionProperties = {
    caption: string;
}

class ButtonsSection extends React.Component<ButtonsSectionProperties> {
    constructor(props: ButtonsSectionProperties) {
        super(props);
    }

    public render(): React.ReactNode {
        return (
            <ShowcaseSection caption='Buttons'>
                <Button caption={ 'I\'m your UI-FI button' } />  
            </ShowcaseSection>
        );
    }    
}

export { ButtonsSection };