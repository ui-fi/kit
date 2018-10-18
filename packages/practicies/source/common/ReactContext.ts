import React from 'react';

import { Breakpoints } from './Breakpoints';

const { Provider, Consumer } = React.createContext<Breakpoints>('m');

export { Provider as ReactContextProvider, Consumer as ReactContextConsumer};
