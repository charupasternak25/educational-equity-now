import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
  <header id="header">    
    <div className="logo"><span className="icon fa-graduation-cap"></span></div>
    <div className="content">
      <div className="inner">
        <h1>Educational Equity NOW</h1>
        <p>
          EDUCATIONAL EQUITY NOW IS DESIGNED TO SUPPORT STUDENTS, EDUCATORS, PARENTS, AND OTHER ALLIES. WE OFFER SUPPORT BY PROVIDING LINKS TO A VARIETY OF EDUCATIONAL, COMMUNITY, & PROFESSIONAL DEVELOPMENT RESOURCES FOR STUDENTS, EDUCATORS, AND PARENTS, AND A FORUM FOR EDUCATIONAL COLLABORATION  AND PROMOTING EQUITY. 
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
