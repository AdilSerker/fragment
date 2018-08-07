import { Action, combineReducers, createStore, Store } from 'redux';
import { FragmentState } from './fragment/types/fragment';
import { fragmentReducer } from './fragment/reducers/fragment';

export interface StoreState {
    fragment: FragmentState
}

const rootReducer = combineReducers({
    fragment: fragmentReducer
});

const reducer = (state: StoreState, action: Action) => {
    return rootReducer(state, action);
};

export const store: Store<StoreState> = createStore(reducer);
