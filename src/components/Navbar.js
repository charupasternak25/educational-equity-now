import React from 'react';
import { Link } from 'gatsby';
import HelmetScripts from './HelmetScripts';
import styled from 'styled-components';

// const LinkColor = "#1b1f22";

const StyledHeroImage = styled.header`
  background: url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: ${props => props.imagePosition};  
  min-height: ${props => props.height};

  @media screen and (max-width: 670px) {
    min-height: 400px;
  }

  nav {
    background-color: #1b1f22 !important;
  }

  .linkColor {
    color: #fff;
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
        <StyledHeroImage backgroundImage = {props.backgroundImage} height={props.height} linkColor={props.linkColor} imagePosition={props.imagePosition}>
          <nav className="nav-wrapper">
          <div class="container">
            <a className="menu-link hide-on-med-and-up" onClick={props.onToggleMenu} href="javascript:;"><i class="material-icons">menu</i></a>              
              <ul class="right hide-on-small-only">
                <li><Link to="/educationalResources" className="linkColor">Educational Resources</Link></li>
                <li><Link to="/communityResources" className="linkColor">Community Resources</Link></li>
                <li><Link to="/professionalDevelopment" className="linkColor">Professional Development</Link></li>
                <li><Link to="/contactUs" className="linkColor">Contact</Link></li>
              </ul>              
            </div>
          </nav>
        </StyledHeroImage>
    </div>
  );
};

export default Navbar;
