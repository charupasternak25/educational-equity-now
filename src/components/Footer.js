import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">
            &copy; Educational Equity Now. 
            Design By: <a href="">Charu Pasternak</a>.
            In collaboration with: <a href="">SPED committee.</a> 
            Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a></p>
    </footer>
);

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer;
