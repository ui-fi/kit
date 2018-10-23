/* tslint:disable:no-unused-expression */

import domino from 'domino';
import { JSDOM } from 'jsdom';
import 'mocha';

import React, { ChangeEvent } from 'react';

import { expect } from 'chai';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import moment from 'moment';

import { TextInput, TextInputType } from './TextInput';

configure({ adapter: new Adapter() });

const textInputType: TextInputType[] = ['text', 'password'];

const dom = new JSDOM();

describe('<TextInput />', () => {
    it('By default, renders a text input element with ui-fi_text-input clsss', () => {
        const component = shallow(<TextInput />);

        expect(component.type()).to.be.equal('input');
        expect(component.prop('type')).to.be.equal('text');
        expect(component.hasClass('ui-fi__text-input')).to.be.true;
    });

    textInputType.forEach((type: TextInputType) => it(`Applies the given type attribute ('${type}')`, () => {
        const component = shallow(<TextInput type={ type } />);

        expect(component.prop('type')).to.be.equal(type);
    }));

    it('Applies the given value attribute', () => {
        const VALUE: string = 'VALUE';

        const component = shallow(<TextInput value={ VALUE } />);

        expect(component.prop('value')).to.be.equal(VALUE);
    });

    it('Triggers onChange event handler', async () => {
        const VALUE: string = 'VALUE';

        return new Promise<React.ChangeEvent<HTMLInputElement>>((resolve, reject) => {
            const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
                resolve(event);
            };

            const component = shallow(<TextInput onChange={ changeHandler } />);

            component.simulate('change', { target: { value: VALUE } });
        }).then((event: React.ChangeEvent<HTMLInputElement>) => {
            expect(event && event.target && event.target.value).to.be.equal(VALUE);
        });
    });

    [undefined, null, ''].forEach((value: string | null | undefined) => {
        it(`Triggers onClear event handler when value changes to '${value}'`, async () => {
            const INITIAL_VALUE: string = 'VALUE';

            return new Promise<React.ChangeEvent<HTMLInputElement>>((resolve, reject) => {
                const clearHandler = () => {
                    resolve();
                };

                const component = shallow(<TextInput value={ INITIAL_VALUE } onClear={ clearHandler } />);

                component.simulate('change', { target: { value } });
            });
        });
    });

    [undefined, ''].forEach((initialValue: string | undefined) => {
        it(`Triggers onFill event handler when value changes from '${initialValue}'`, async () => {
            const VALUE: string = 'VALUE';

            return new Promise<React.ChangeEvent<HTMLInputElement>>((resolve, reject) => {
                const fillHandler = () => {
                    resolve();
                };

                const component = shallow(<TextInput value={ initialValue } onFill={ fillHandler } />);

                component.simulate('change', { target: { value: VALUE } });
            });
        });
    });

    it('Debounces change events by a given period', async () => {
        const VALUE: string = 'VALUE';
        const DEBOUNCE_PERIOD: moment.Duration = moment.duration(200, 'milliseconds');

        let eventTriggerMoment: moment.Moment;
        let eventHandlerCallMoment: moment.Moment;

        return new Promise<React.ChangeEvent<HTMLInputElement>>((resolve, reject) => {
            const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
                eventHandlerCallMoment = moment();

                resolve(event);
            };

            const component = shallow(
                <TextInput
                    debouncePeriod={ DEBOUNCE_PERIOD }
                    onChange={ changeHandler } />,
            );

            eventTriggerMoment = moment();

            component.simulate('change', { target: { value: VALUE } });
        }).then((event: React.ChangeEvent<HTMLInputElement>) => {
            expect(eventHandlerCallMoment.diff(eventTriggerMoment, 'milliseconds'))
                .to.be.greaterThan(DEBOUNCE_PERIOD.milliseconds());
        });
    });
});
