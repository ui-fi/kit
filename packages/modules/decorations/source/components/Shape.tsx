import React, { CSSProperties } from 'react';

type TrivialShapeForm = 'rectrangular' | 'round';

type Length = string | 0;

type UniformBorderRadius = Length;

type TwoPartBorderRadius = [ Length, Length ];

type FourPartBorderRadius = [ Length, Length, Length, Length ];

type RoundedShape = {
    radius: UniformBorderRadius | TwoPartBorderRadius | FourPartBorderRadius;
};

type ShapeProperties = {
    form: TrivialShapeForm | RoundedShape;
};

class Shape extends React.Component<ShapeProperties> {
    public render(): React.ReactNode {
        const style: CSSProperties = this.props.form !== 'rectrangular'
            && this.props.form !== 'round'
            && this.props.form.radius
            && {
                borderRadius: Array.isArray(this.props.form.radius)
                    ? this.props.form.radius.join(' ')
                    : this.props.form.radius,
        } || {};

        return (
            <div className="ui-fi__shape" style={ style }>

            </div>
        );
    }
}

export { Shape };
