import React from 'react';
import { Link } from 'gatsby';
import HelmetScripts from './HelmetScripts';
import styled from 'styled-components';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

// const LinkColor = "#1b1f22";

const StyledHeroImage = styled.header`
    background: url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: ${props => props.imagePosition};  
  min-height: ${props => props.height};
  margin: 0 auto;
  max-width: 100rem;
  align-item: center;

  @media screen and (max-width: 670px) {
    min-height: 400px;
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

a {
  border-bottom: none;
}

@media (max-width: 1070px) and (min-width: 601px) {
  .logoHide {
    display: none;
  }
}

.width-alignment {
  max-width: 100rem !important;
  align-items: center;
}

`;

const SkinnyNavbarStyles = styled.header`
    margin: 0 auto;
    max-width: 100rem;
    align-item: center;
    
    nav {
        background-color: #1b1f22 !important;
    }

    a {
        border-bottom: none;
    }

    .width-alignment {
        max-width: 100rem !important;
        align-items: center;
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

      @media (max-width: 1070px) and (min-width: 601px) {
        .logoHide {
          display: none;
        }
      }

`;

const SkinnyNavbar = (props) => {  
  return (
    <div>
        <HelmetScripts />

            <SkinnyNavbarStyles>
        
          
            <div className="navbar-fixed width-alignment">
              <nav className="nav-wrapper width-alignment">
                <div class="container">
                <div className="logo logoHide">
                  <a href="/" className="brand-logo">
                    <span className="icon fa-graduation-cap"></span>&nbsp;&nbsp;EEN
                  </a>
                  </div>
                  <a className="menu-link hide-on-med-and-up" onClick={props.onToggleMenu} href="javascript:;"><i class="material-icons">menu</i></a>              
                  <ul class="right hide-on-small-only">
                    <li><Link to="/educationalResources" className="linkColor">Educational Resources</Link></li>
                    <li><Link to="/communityResources" className="linkColor">Community Resources</Link></li>
                    <li><Link to="/professionalDevelopment" className="linkColor">Professional Development</Link></li>
                    <li><Link to="/contactUs" className="linkColor">Contact</Link></li>
                  </ul>
                </div>
              </nav>
            </div>
            </SkinnyNavbarStyles>
        
    </div>
  );
};

export default SkinnyNavbar;
