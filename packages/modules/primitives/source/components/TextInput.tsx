/**********************************************************************************************************************/
/*      LINTER                                                                                                       */
/**********************************************************************************************************************/

/**********************************************************************************************************************/
/*      IMPORTS                                                                                                       */
/**********************************************************************************************************************/
//  React
import React, { Attributes } from 'react';

import debounce from 'debounce';
import moment from 'moment';

import { noOp } from '@ui-fi/common';

/**********************************************************************************************************************/
/*      DECLARATIONS                                                                                                  */
/**********************************************************************************************************************/

type TextInputType = 'text' | 'password';

interface ITextInputProperties {
    type?: TextInputType;
    value?: string;
    debouncePeriod?: moment.Duration | 0;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClear?: () => void;
    onFill?: () => void;
}

interface ITextInputState {
    value?: string;
}

const NO_OP_EVENT_TRIGGER = noOp;

type ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;

class TextInput extends React.Component<ITextInputProperties, ITextInputState> {
    public static readonly defaultProps: ITextInputProperties = {
        debouncePeriod: 0,
        type: 'text',
    };

    constructor(props: ITextInputProperties) {
        super(props);

        this.state = {
            value: props.value,
        };

        this._debouncePeriodMsec = props.debouncePeriod && props.debouncePeriod.milliseconds() || 0;

        this._immediateChangeHandler = this._handleChangeImmediate.bind(this);

        this._changeHandler = debounce<ChangeEventHandler>(
            this._immediateChangeHandler, this._debouncePeriodMsec);

        this._clearEventTrigger = props.onClear || NO_OP_EVENT_TRIGGER;
        this._fillEventTrigger = props.onFill || NO_OP_EVENT_TRIGGER;
        this._changeEventTrigger = props.onChange || NO_OP_EVENT_TRIGGER;
    }

    public render(): React.ReactNode {
        return (
            <input
                className="ui-fi__text-input"
                type={ this.props.type }
                value={ this.state.value }
                onChange={ this._changeHandler } />
        );
    }

    private _handleChangeImmediate(event: React.ChangeEvent<HTMLInputElement>): void {
        const previousValue = this.state.value;

        this.setState({ value: event.target.value }, () => {
            this._clearEventTrigger(!!previousValue && !event.target.value);
            this._fillEventTrigger(!previousValue && !!event.target.value);
            this._changeEventTrigger(event);
        });
    }

    private _clearEventTrigger: (condition: boolean) => void;
    private _fillEventTrigger: (condition: boolean) => void;
    private _changeEventTrigger: ChangeEventHandler;

    private _debouncePeriodMsec: number;

    private _changeHandler: ChangeEventHandler;
    private _immediateChangeHandler: ChangeEventHandler;
}

/**********************************************************************************************************************/
/*      EXPORTS                                                                                                       */
/**********************************************************************************************************************/
export { TextInput, ITextInputProperties, TextInputType };
