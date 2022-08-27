import React from 'react';

const Logo = () => {
    return (
      <div className="logo">
        {/* images importés depuis la balise IMG access ds "public" */}
        <img src="./logo192.png" alt="logoReact" />
        <h3>React World</h3>
      </div>
    );
};

export default Logo;