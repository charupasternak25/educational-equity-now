import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const SidebarNav = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/educationalResources">Educational Resources</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/communityResources">Community Resources</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/professionalDevelopment">Professional Development</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/contactUs">Contact</Link></li>
            </ul>            
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

SidebarNav.propTypes = {
    onToggleMenu: PropTypes.func
}

export default SidebarNav
