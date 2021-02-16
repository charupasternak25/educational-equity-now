import React, { Component } from 'react';
import { isSafari, isIOS, isMobileSafari } from 'react-device-detect';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import SidebarNav from '../../components/SidebarNav';
import Footer from '../../components/Footer';
import Cards from '../../components/Cards';

import {
  mathMainImagePng,
  mathMainImageWebp,
  khanAcademyImage,
  toyTheaterImage
} from '../../images/EducationalResources/Math/index.js';

import {
  iReadyImage,
  ixlImage,
  mobyMaxImage
} from '../../images/EducationalResources/English/index.js';

const StyledConatiner = styled.div`
    padding-top: 20px;
`;

const isSafariBrowser = isSafari || isIOS || isMobileSafari;
const mathMainImage = isSafariBrowser ? mathMainImagePng : mathMainImageWebp;

class Math extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isMenuVisible: false,
        loading: 'is-loading'
    }
    this.handleToggleMenu = this.handleToggleMenu.bind(this);    
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' });
    }, 100);
  }

  componentWillUnmount () {
    if(this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  handleToggleMenu() {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible
    })
  }

  render() {
    const { children } = this.props;
    const externalTarget = "_blank";

    return(
        <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>          
          <Navbar backgroundImage={mathMainImage} linkColor={'#1b1f22'} onToggleMenu={this.handleToggleMenu} height="500px" imagePosition="center" />
          <SidebarNav onToggleMenu={this.handleToggleMenu} />
          <StyledConatiner className="container">
            <div className="row">
              <Cards cardImage={khanAcademyImage} cardLink="https://www.khanacademy.org/" cardTitle="Khan Academy" altText="Khan Academy" target={externalTarget} />
              <Cards cardImage={toyTheaterImage} cardLink="https://toytheater.com/" cardTitle="Toy Theater" altText="Toy Theater" target={externalTarget} />
              <Cards cardImage={mobyMaxImage} cardLink="https://www.mobymax.com/" cardTitle="MobyMax" altText="MobyMax" target={externalTarget} />
              <Cards cardImage={iReadyImage} cardLink="https://login.i-ready.com/" cardTitle="iReady" altText="iReady" target={externalTarget} />
              <Cards cardImage={ixlImage} cardLink="https://www.ixl.com/" cardTitle="IXL" altText="IXL" target={externalTarget} />              
            </div>
          </StyledConatiner>
          <Footer />
        </div>
    );
  }
}

export default Math;


