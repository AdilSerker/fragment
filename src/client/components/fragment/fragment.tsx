import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { FragmentProps, FragmentState } from './types';
import { ClosedFragment } from './closedFragment';
import { OpenedFragment } from './openedFragment';

export class Fragment extends React.Component<FragmentProps, FragmentState> {
    public constructor(props: any) {
        super(props);

        this.state = {
            isOpen: false
        };

        this.onOpen = this.onOpen.bind(this);
    }

    public render() {
        const fragment = (this.state.isOpen) ?
            <OpenedFragment
                allPhotos = { this.props.allPhotos }
                interview = { this.props.interview}
            /> :
            <ClosedFragment
                headerPhoto = { this.props.headerPhoto }
                firstName = { this.props.firstName }
                lastName = { this.props.lastName }
                nickName = { this.props.nickName }
                status = { this.props.status }
                quote = { this.props.quote }
            />

        return (
            <div onClick={this.onOpen}>
                { fragment }
            </div>
        );
    }

    private onOpen() {
        this.setState({ isOpen: !this.state.isOpen });
    }
}