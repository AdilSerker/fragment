import * as React from 'react';
import { connect } from 'react-redux';
import {
    FragmentLoadParams,
    FragmentParam,
    FragmentState as State
} from '../../store/fragment/types/fragment';
import { StoreState } from '../../store';
import { load, addFragment } from '../../store/fragment/actions/fragment';
import { FragmentApi } from '../../api/fragment/FragmentApi';
import { FragmentPage } from './FragmentPage';

export interface Props extends MapProps, DispatchProps {
    pageLabel: string;
}

interface MapProps {
    fragments: FragmentParam[];
}

interface DispatchProps {
    load: (params: FragmentLoadParams) => void;
    addFragment: (fragment: FragmentParam) => void;
}

@(connect(mapStateToProps, mapDispatchToProps) as any)
export class FragmentPageContainer extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            fragments: [],
            selected: false
        }
    }

    public async componentDidMount() {
        const frags = await FragmentApi.getFragments();
        this.props.load(frags);
    }

    public render() {
        return (
            <FragmentPage fragment={this.props.fragments} />
        );
    }


}

function mapStateToProps(state: StoreState, ownProps: Props): MapProps {
    return {
        fragments: state.fragment.fragments
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        load: (params: FragmentLoadParams) => dispatch(load(params)),
        addFragment: (param: FragmentParam) => dispatch(addFragment(param))
    }
}
