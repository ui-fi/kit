/**********************************************************************************************************************/
/*      LINTER                                                                                                       */
/**********************************************************************************************************************/

/**********************************************************************************************************************/
/*      IMPORTS                                                                                                       */
/**********************************************************************************************************************/
//  React
import React, { Attributes } from 'react';

/**********************************************************************************************************************/
/*      DECLARATIONS                                                                                                  */
/**********************************************************************************************************************/

type TextInputType = 'text' | 'password';

interface TextInputProperties {
    type?: TextInputType;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClear?: () => void;
    onFill?: () => void;
};

interface TextInputState {
    value?: string;
}

const NO_OP_EVENT_TRIGGER = (...args: any[]) => {};

class TextInput extends React.Component<TextInputProperties, TextInputState> {
    constructor(props: TextInputProperties) {
        super(props);

        this.state = {
            value: props.value
        };

        this._clearEventTrigger = props.onClear || NO_OP_EVENT_TRIGGER;
        this._fillEventTrigger = props.onFill || NO_OP_EVENT_TRIGGER;
        this._changeEventTrigger = props.onChange || NO_OP_EVENT_TRIGGER;
    }

    public render(): React.ReactNode {
        return (
            <input
                type={ this.props.type }
                value={ this.state.value }
                onChange={ this._changeHandler} />
        );
    }

    private _handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        const previousValue = this.state.value;
        
        this.setState(state => {
            value: event.target.value
        }, () => {
            this._clearEventTrigger(!!previousValue && !event.target.value);
            this._fillEventTrigger(!previousValue && !!event.target.value);
            this._changeEventTrigger(event);
        });
    }

    private _clearEventTrigger: (condition: boolean) => void;
    private _fillEventTrigger: (condition: boolean) => void;
    private _changeEventTrigger: (event: React.ChangeEvent<HTMLInputElement>) => void;

    private _changeHandler = this._handleChange.bind(this);
}

/**********************************************************************************************************************/
/*      EXPORTS                                                                                                       */
/**********************************************************************************************************************/
export { TextInput, TextInputProperties, TextInputType };
