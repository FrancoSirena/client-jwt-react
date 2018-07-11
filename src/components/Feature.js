import React from 'react';
import securedComponent from './securedComponent';

class Feature extends React.Component {
  render = () => <span> This is your area, it's secured throught a High Order Component. </span>;
}

export default securedComponent(Feature);