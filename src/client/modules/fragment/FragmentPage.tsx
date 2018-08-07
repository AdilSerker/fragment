import * as React from 'react';

import { FragmentParam } from './types'

export const FragmentPage = (params: { fragment: FragmentParam[] }) => {
    const text = JSON.stringify(params.fragment);
    return (
        <h1>{text}</h1>
    );
}

