import React from 'react';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <header className="layout-header">
        <h1>Cocktail Catalog</h1>
      </header>
      <main className="layout-main">
        {children}
      </main>
      <footer className="layout-footer">
        <p>© 2024 Cocktail Catalog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
