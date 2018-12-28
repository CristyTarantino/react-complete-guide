import React from 'react';
import ReactDOM from 'react-dom';
import FamilyApp from './FamilyApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FamilyApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
