import React from 'react';

import { Frame } from '@ui-fi/decorations';

type ContentFrameWidthGuideValues = 'ultra-thin' | 'extra-thin' | 'thin' | 'medium'
    | 'thick' | 'extra-think' | 'ultra-thick';

type ContentFrameWidthGuide = ContentFrameWidthGuideValues;

type UniformContentFrameWidth = ContentFrameWidthGuide | [ContentFrameWidthGuide];
type TwoPartContentFrameWidth = [ContentFrameWidthGuide, ContentFrameWidthGuide];
type FourPartContentFrameWidth = [ContentFrameWidthGuide, ContentFrameWidthGuide
    , ContentFrameWidthGuide, ContentFrameWidthGuide];

type ContentFrameWidth = UniformContentFrameWidth | TwoPartContentFrameWidth | FourPartContentFrameWidth;

type GuidedContentFrameProperties = {
    width?: ContentFrameWidth;
};

const CLASS_NAME_PREFIX = 'ui-fi__frame__width';

const UNIFORM_CLASS_NAME_SUFFIXES = ['uniform'];
const TWO_PART_CLASS_NAME_SUFFIXES = ['vertical', 'horizontal'];
const FOUR_PART_CLASS_NAME_SUFFIXES = ['top', 'right', 'bottom', 'left'];

const SUFFIX_BY_FIELD_LENGTH: { [index: number]: string[] } = {
    1: UNIFORM_CLASS_NAME_SUFFIXES,
    2: TWO_PART_CLASS_NAME_SUFFIXES,
    4: FOUR_PART_CLASS_NAME_SUFFIXES,
};

class GuidedContentFrame extends React.Component<GuidedContentFrameProperties> {
    constructor(props: GuidedContentFrameProperties) {
        super(props);

        //  Convert width to an array even when it is a scalar value or undefined
        //  to make future operations involving with more straighforward.
        this._width = this.props.width
            ? !Array.isArray(this.props.width)
                ? [this.props.width]
                : this.props.width
            : ['medium'];
    }

    public render(): React.ReactNode {
        const classes: string[] = this._getClassSuffixes()
            .map((s: string, i: number) => this._composeClassName(CLASS_NAME_PREFIX, s, this._width[i]));

        return (
            <Frame classes={ classes }>
                { this.props.children }
            </Frame>
        );
    }

    private _getClassSuffixes(): string[] {
        const suffixes = SUFFIX_BY_FIELD_LENGTH[this._width.length];

        if (!suffixes) {
            throw Error(`Unexpected error: incorrect width ${this._width.length}`);
        }

        return suffixes;
    }

    private _composeClassName(prefix: string, suffix: string, value: string): string {
        return [prefix, suffix, value].join('__');
    }

    private _width: ContentFrameWidth;
}

export { GuidedContentFrame };
