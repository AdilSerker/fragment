import * as React from 'react';
import * as ReactDOM from 'react-dom';

const root = document.getElementById('root');

const Test = () => (
    <div>
      <p>Are you sure?</p>
    </div>
);

ReactDOM.render(<Test />, root);