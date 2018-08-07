import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface PhotoPropTypes {
    link: string;
    headerPhoto?: boolean;
}

export const Photo = (props: PhotoPropTypes) => {
    return (
        <div className={ props.headerPhoto ? 'headerPhoto' : 'photo' }>
            <img 
                src={ props.link }
                alt=""
                className={ props.headerPhoto ? 'headerPhoto' : 'photo' }
            />
        </div>
    );
}