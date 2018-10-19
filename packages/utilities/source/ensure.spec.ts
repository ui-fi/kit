import 'mocha';
import { expect } from 'chai';

import { ensure } from './ensure';

const ERROR_MESSAGE = 'Error message';
const TEST_NUMBER = 2;
const TEST_STRING = 'test string';

describe('ensure', () => {
    it('Throws an error when the value is false', () => {
        expect(() => {
            ensure(false, ERROR_MESSAGE);
        }).throws(ERROR_MESSAGE);
    });

    it('Throws an error when the value is undefined', () => {
        expect(() => {
            ensure(undefined, ERROR_MESSAGE);
        }).throws(ERROR_MESSAGE);
    });

    it('Throws an error when the value is null', () => {
        expect(() => {
            ensure(null, ERROR_MESSAGE);
        }).throws(ERROR_MESSAGE);
    });

    it('Returns the value when it is a positive number', () => {
        expect(ensure(TEST_NUMBER, ERROR_MESSAGE)).to.be.eq(TEST_NUMBER);
    });

    it('Returns the value when it is a valid string', () => {
        expect(ensure(TEST_STRING, ERROR_MESSAGE)).to.be.eq(TEST_STRING);
    });
});
