import { FragmentState, FragmentLoadParams, FragmentParam } from "../types/fragment";

export class FragmentReducers {
    public static loadFragment(state: FragmentState, params: FragmentLoadParams) {
        return { ...state, ...params };
    }

    public static addNewFragment(state: FragmentState, payload: FragmentParam) {
        const isInclude = !!state.fragments.find(fragment => fragment.id == payload.id);
        let fragments;
        if (isInclude) {
            fragments = state.fragments.map(
                fragment => fragment.id == payload.id
                    ? {...fragment, ...payload}
                    : fragment
            );
        } else {
            fragments = [ ...state.fragments, payload ];
        }

        return {
            ...state,
            fragments
        };
    }
}