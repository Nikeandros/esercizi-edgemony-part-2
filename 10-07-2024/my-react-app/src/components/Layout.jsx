
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div style={{ border: '2px solid blue', padding: '20px' }}>
      <h1>My Layout</h1>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
