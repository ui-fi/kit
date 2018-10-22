import React from 'react';
import { IMock, Mock } from 'typemoq';
import { ChangeEventMockBase } from './types/ChangeEventMockBase';

const mockChangeEvent = <T extends Element>(value: string): React.ChangeEvent<T> =>  {
    throw new Error('Method not implemented');
}