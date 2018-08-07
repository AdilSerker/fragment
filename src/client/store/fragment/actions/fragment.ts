import { actionCreatorFactory } from 'typescript-fsa';

import { FragmentLoadParams, FragmentParam } from '../types/fragment';

const actionCreator = actionCreatorFactory('FRAGMENT');

const load = actionCreator<FragmentLoadParams>('LOAD');
const addFragment = actionCreator<FragmentParam>('ADD');

export {
    load,
    addFragment
};
