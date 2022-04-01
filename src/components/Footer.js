import React from 'react';
import LogoTrybe from '../images/logo-trybe.png';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <img src={LogoTrybe} alt="Logo da Trybe" />
      </footer>
    );
  }
}

export default Footer;
