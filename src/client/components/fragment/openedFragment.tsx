import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Photo } from '../photo/photo';
import { FragmentInterview } from './fragmentInterview'

interface OpenedFragmentProps {
    allPhotos: string[];
    interview: string[];
}

export const OpenedFragment = (props: OpenedFragmentProps) => {
    console.log(props.interview);
    return <div>
        <section className="all-photos">
            { props.allPhotos.map((link, i) => 
                <Photo key={i} link={ link } />
            )}
        </section>
        <section>
            { props.interview.map((text, i) => 
                <FragmentInterview key={i} text={ text } />
            )}
        </section>
    </div>
}