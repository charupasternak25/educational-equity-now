import React from 'react';
import { Link } from 'gatsby';
import HelmetScripts from './HelmetScripts';
import styled from 'styled-components';

const EENImage = require('../images/een.jpg');
const LinkColor = "#1b1f22";

const StyledHeroImage = styled.header`
  background: url(${EENImage});
  background-size: cover;
  background-position: center;
  min-height: 750px;

  @media screen and (max-width: 670px) {
    min-height: 400px;
  }

  .linkColor {
    color: ${LinkColor};
    font-weight: 600;
    font-size: 16px;
    border-bottom: none !important;
    @media screen and (max-width: 768px) {
      padding: 0 5px;
    }
  }
}
`;

const Navbar = (props) => {
  return (
    <div>
        <HelmetScripts />
        <StyledHeroImage>
          <nav className="nav-wrapper transparent">
          <div class="container">
            <a className="menu-link hide-on-med-and-up" onClick={props.onToggleMenu} href="javascript:;"><i class="material-icons">menu</i></a>              
              <ul class="right hide-on-small-only">
                <li><Link to="/educationalResources" className="linkColor">Educational Resources</Link></li>
                <li><Link to="/communityResources" className="linkColor">Community Resources</Link></li>
                <li><Link to="/professionalDevelopment" className="linkColor">Professional Development</Link></li>
                <li><Link to="/contact" className="linkColor">Contact</Link></li>                
              </ul>              
            </div>
          </nav>
        </StyledHeroImage>
    </div>
  );
};

export default Navbar;
