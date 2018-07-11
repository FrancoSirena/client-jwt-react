import React from 'react';
import Header from './Header';
import '../styles/styles.scss';

export default ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}