import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import { Router } from '../router/Router';

export const App = (): JSX.Element => (
    <Provider store={store}>
        <Router />
    </Provider>
);
