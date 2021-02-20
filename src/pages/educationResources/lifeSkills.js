import React, { Component } from 'react';
import { isSafari, isIOS, isMobileSafari } from 'react-device-detect';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import SidebarNav from '../../components/SidebarNav';
import Footer from '../../components/Footer';
import Cards from '../../components/Cards';

import {
    lifeSkillsImagePng,
    lifeSkillsImageWebp,
    conoverImage,
    EmpowerSmallImage
} from '../../images/EducationalResources/LifeSkills/index.js';

import transitionImage from '../../images/Transition.jpg';

const isSafariBrowser = isSafari || isIOS || isMobileSafari;
const lifeSkillsMainImage = isSafariBrowser ? lifeSkillsImagePng : lifeSkillsImageWebp;

const StyledConatiner = styled.div`
    padding-top: 20px;
`;

class LifeSkills extends Component {
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
          <Navbar backgroundImage={lifeSkillsMainImage} linkColor={'#fff'} onToggleMenu={this.handleToggleMenu} height="500px" imagePosition="center" />
          <SidebarNav onToggleMenu={this.handleToggleMenu} />
          <StyledConatiner className="container">
            <div className="row">
              <Cards cardImage={EmpowerSmallImage} cardLink="/educationResources/customLessons" cardTitle="Lessons by Niels Pasternak" altText="Lessons by Niels Pasternak" target={externalTarget} cardColor="#fff" />
              <Cards cardImage={transitionImage} cardLink="https://sites.google.com/mesd.k12.or.us/oregontransitioneducation/independent-living?authuser=0" cardTitle="Oregon transition education" altText="Oregon transition education" target={externalTarget} />
              <Cards cardImage={conoverImage} cardLink="http://www.conoverlifeskills.com/" cardTitle="Conover Resources" altText="Conover Resources" target={externalTarget} />
            </div>
          </StyledConatiner>
          <Footer />
        </div>
    );
  }
}

export default LifeSkills;
