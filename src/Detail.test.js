import React from 'react';
import ReactDOM from 'react-dom';
import Detail from './Detail';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Detail />, div);
  ReactDOM.unmountComponentAtNode(div);
});
