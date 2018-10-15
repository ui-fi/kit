import React from 'react';
import { LogInForm, LogInFormSlotId } from '../../../LogInForm';
import { LayoutElement } from '@ui-fi/core';
import { ShowcaseSection } from '../../common/ShowcaseSection';

type LogInFormSectionProperties = {
    caption: string;
}

class LogInFormSection extends React.Component<LogInFormSectionProperties> {
    constructor(props: LogInFormSectionProperties) {
        super(props);
    }
    render(): React.ReactNode {
        return (
            <ShowcaseSection caption='Log-in form'>
                <LogInForm>
                    <LayoutElement slotId='header'>
                        THIS IF YOUR LOG IN FORM HEADER
                    </LayoutElement>
                    
                    <LayoutElement slotId='identity'>
                        <div className="log-in-form__field">
                            <div className="log-in-form__field-header">
                                E-mail
                            </div>
                            <div className="log-in-form__field-input-frame">
                                <input type='text' name='identity' />
                            </div>
                        </div>
                    </LayoutElement>

                    <LayoutElement slotId='password'>
                        <div className="log-in-form__field">
                            <div className="log-in-form__field-header">
                                E-mail
                            </div>
                            <div className="log-in-form__field-input-frame">
                                <input type='password' name='password' />
                            </div>
                        </div>
                    </LayoutElement>

                    <LayoutElement slotId='footer'>
                    THIS IF YOUR LOG IN FORM FOOTER
                    </LayoutElement>
                </LogInForm>
            </ShowcaseSection>
        );
    }
}

export { LogInFormSection };