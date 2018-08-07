import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { load, addFragment } from '../actions/fragment';
import { FragmentReducers } from './FragmentReducers';
import { FragmentParam } from '../types/fragment';

const fragments: FragmentParam[] = [];

const initialState = {
    fragments
};

export const fragmentReducer = reducerWithInitialState(initialState)
    .case(load, FragmentReducers.loadFragment)
    .case(addFragment, FragmentReducers.addNewFragment);
