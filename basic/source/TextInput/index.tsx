import React from 'react';

type TextInputType = 'text' | 'password'

type TextInputProperties = {
    value?: string;
    type: TextInputType;
};

type TextInputState = {
    value?: string;
};

class TextInput extends React.Component<TextInputProperties, TextInputState> {
    constructor(props: TextInputProperties) {
        super(props);

        this.state = {
            value: props.value
        };
    }

    public render(): React.ReactNode {
        return (
            <input value={ this.state.value } type={ this.props.type } />
        );
    }
}

export { TextInput };