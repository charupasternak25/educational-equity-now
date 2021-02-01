import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
  <header id="header">    
    <div className="logo"><span className="icon fa-graduation-cap"></span></div>
    <div className="content">
      <div className="inner">
        <h1>Educational Equity NOW</h1>
        <p>
          Educational Equity Now is a website that was created by Niels and Charu Pasternak. 
          It is designed to support people who experience disabilities, educators who work in 
          Special Education, and other allies. This website offers support by providing a variety 
          of free educational resources and a forum for asking questions and making positive connections 
          with others.          
        </p>
      </div>
    </div>
    <nav>
      <ul>        
        <li><Link to="/educationalResources" className="button">Educational Resources</Link></li>
        <li><Link to="/communityResources" className="button">Community Resources</Link></li>
        <li><Link to="/professionalDevelopment" className="button">Professional Development</Link></li>          
        {/* <li><Link to="/publicForum" className="button">Public Forum</Link></li> */}
        <li><Link to="/contactUs" className="button">Contact</Link></li>  
      </ul>
    </nav>
  </header>
);

export default Header;
