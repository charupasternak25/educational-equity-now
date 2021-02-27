import React, { Component } from 'react';
import { isSafari, isIOS, isMobileSafari } from 'react-device-detect';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import SidebarNav from '../../components/SidebarNav';
import Footer from '../../components/Footer';
import Cards from '../../components/Cards';

import {
  stemSkillsMainImagePng,
  stemSkillsMainImageWebp,
  hourofCodeImage,
  interlandImage,
  tynkerImage,
  csFirstLogo,
  microsoftLogo
} from '../../images/EducationalResources/Computer/index.js';

import { khanAcademyImage } from '../../images/EducationalResources/Math/index.js';

const isSafariBrowser = isSafari || isIOS || isMobileSafari;
const stemSkillsMainImage = isSafariBrowser ? stemSkillsMainImagePng : stemSkillsMainImageWebp;

const StyledConatiner = styled.div`
    padding-top: 20px;
`;

class ComputerSkills extends Component {
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
          <Navbar backgroundImage={stemSkillsMainImage} linkColor={'#1b1f22'} onToggleMenu={this.handleToggleMenu} height="500px" imagePosition="center" />          
          <SidebarNav onToggleMenu={this.handleToggleMenu} />
          <StyledConatiner className="container">
            <div className="row">
              <Cards cardImage={interlandImage} cardLink="https://beinternetawesome.withgoogle.com/en_us/interland" cardTitle="Interland by Google" altText="Interland by Google" target={externalTarget} />
              <Cards cardImage={hourofCodeImage} cardLink="https://hourofcode.com/us" cardTitle="Hour of code" altText="Hour of code" target={externalTarget} />
              <Cards cardImage={csFirstLogo} cardLink="https://csfirst.withgoogle.com/s/en/home" cardTitle="CS First | Google" altText="CS First | Google" target={externalTarget} />
              <Cards cardImage={microsoftLogo} cardLink="https://www.microsoft.com/en-us/makecode" cardTitle="Make Code | Microsoft" altText="Make Code | Microsoft" target={externalTarget} />
              <Cards cardImage={tynkerImage} cardLink="https://www.tynker.com/" cardTitle="Tynker" altText="Tynker" target={externalTarget} />
              <Cards cardImage={khanAcademyImage} cardLink="https://www.khanacademy.org/hourofcode" cardTitle="Khan Academy" altText="Khan Academy" target={externalTarget} />
            </div>
          </StyledConatiner>
          <Footer />          
        </div>
    );
  }
}

export default ComputerSkills;

