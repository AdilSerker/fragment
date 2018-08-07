import { IFragmentModel, Fragment } from '../../models/fragment/FragmentModel';
import { IFragment } from '../../models/fragment/IFragment';

export class FragmentFactory {
    public static create(params: IFragment) {
        return new Fragment(params);
    }
}