import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Fragment, FragmentProps } from './fragment';

import axios, { } from 'axios';

interface AppState {
    fragments: FragmentProps[];
    loading: boolean
}

export class App extends React.Component<{}, AppState> {
    public constructor(props: any) {
        super(props);

        this.state = {
            fragments: [],
            loading: false
        }
    }

    public async componentDidMount() {
        this.setState({ loading: true });
        const fragmentProps = await axios.get('http://localhost:3000/fragment');
        this.setState({
            fragments: fragmentProps.data.fragments,
            loading: false
        });

    }

    public render() {
        const { fragments, loading } = this.state;
        return (
            <div>
                {(loading) ?
                    <span>Loading...</span> :
                    fragments.map((item, i) =>
                        <Fragment key={i} {...item} />
                    )
                }
            </div>
        );
    }
}

