import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Photo } from '../photo/photo';

interface ClosedFragmentProps {
    headerPhoto: string;
    firstName?: string;
    lastName?: string;
    nickName?: string;
    status: string[];
    quote: string;
    date?: Date;
}

export const ClosedFragment = (props: ClosedFragmentProps) => {
    return (
        <div className="closed-fragment">
            <Photo link={ props.headerPhoto } headerPhoto={ true } />
            <div>
                <section>
                    <h1>{ props.firstName } { props.lastName }</h1>
                    <h2>{ props.nickName }</h2>
                    <h3>{ props.status }</h3>
                </section>
                <section>
                    <p>
                        { props.quote }
                    </p>
                </section>
            </div>
        </div>
    );
}