import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    .copyright {
        font-size: 0.8rem !important;
        opacity: 1 !important;
        padding-top: 1rem !important;
        padding-bottom: 2rem !important;
    }
    a {
        border-bottom: none;
    }
`;


const Footer = (props) => (
    <StyledFooter id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">
            &copy; Educational Equity Now. 
            Design By: <a href="https://github.com/charupasternak25">Charu Pasternak</a>.
            In collaboration with: <a href="">SPED committee. </a> 
            Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a></p>
    </StyledFooter>
);

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer;
