import React from 'react';

import { Frame } from '@ui-fi/decorations';

type ContentFrameWidthGuideValues = 'ultra-thin' | 'extra-thin' | 'thin' | 'medium'
    | 'thick' | 'extra-think' | 'ultra-thick';

type ContentFrameWidthGuide = ContentFrameWidthGuideValues;

type UniformContentFrameWidth = ContentFrameWidthGuide | [ContentFrameWidthGuide];
type TwoPartContentFrameWidth = [ContentFrameWidthGuide, ContentFrameWidthGuide];
type FourPartContentFrameWidth = [ContentFrameWidthGuide, ContentFrameWidthGuide
    , ContentFrameWidthGuide, ContentFrameWidthGuide];

type GuidedContentFrameProperties = {
    width: UniformContentFrameWidth | TwoPartContentFrameWidth | FourPartContentFrameWidth;
};

const CLASS_NAME_PREFIX = 'ui-fi__frame__width';

const UNIFORM_CLASS_NAME_SUFFIXES = ['uniform'];
const TWO_PART_CLASS_NAME_SUFFIXES = ['vertical', 'horizontal'];
const FOUR_PART_CLASS_NAME_SUFFIXES = ['top', 'right', 'bottom', 'left'];

class GuidedContentFrame extends React.Component<GuidedContentFrameProperties> {
    constructor(props: GuidedContentFrameProperties) {
        super(props);

        this._width = this.props.width && !Array.isArray(this.props.width)
            ? [this.props.width]
            : this.props.width;
    }

    public render(): React.ReactNode {
        const suffixes = !Array.isArray(this._width)
            ? UNIFORM_CLASS_NAME_SUFFIXES
            : this._width.length === 2
                ? TWO_PART_CLASS_NAME_SUFFIXES
                : FOUR_PART_CLASS_NAME_SUFFIXES;

        const classes: string[] = suffixes
            .map((s: string, i: number) => [CLASS_NAME_PREFIX, s, this._width[i]].join('__'));

        return (
            <Frame classes={ classes }>
                { this.props.children }
            </Frame>
        );
    }

    private _width: UniformContentFrameWidth | TwoPartContentFrameWidth | FourPartContentFrameWidth;
}

export { GuidedContentFrame };
