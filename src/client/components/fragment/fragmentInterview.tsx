import * as React from 'react';
import * as ReactDOM from 'react-dom';

export const FragmentInterview = (prop: { text: string }) => {
    const arrayWords = prop.text.split(' ');
    const boldText = arrayWords.slice(0, 4).join(' ');
    const text = arrayWords.slice(4).join(' ');

    return <div className="interview-fragment">
        <p><b>{ `${boldText} ` }</b>{`${text}`}</p>
    </div>
}