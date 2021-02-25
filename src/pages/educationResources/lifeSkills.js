import React, { Component } from 'react';
import { isSafari, isIOS, isMobileSafari } from 'react-device-detect';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import SidebarNav from '../../components/SidebarNav';
import Footer from '../../components/Footer';
import Cards from '../../components/Cards';
import CardsWithDownload from '../../components/CardsWithDownload';

import {
    lifeSkillsImagePng,
    lifeSkillsImageWebp,
    conoverImage,
    EmpowerSmallImage,
    walking1Image,
    walking2Image,
    walking3Image,
    ridingBus1Image,
    ridingBus2Image,
    ridingBus3Image,
    healthImage
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
              <Cards cardImage={conoverImage} cardLink="http://www.conoverlifeskills.com/" cardTitle="Conover Resources" altText="Conover Resources" target={externalTarget} cardColor="#fff" paddingTop={'5rem'} paddingBottom={'5rem'} />
            </div>
            <div className="row">
            <CardsWithDownload 
              cardImage={healthImage} 
              cardLink="https://drive.google.com/drive/folders/1pwlzP9b1AYB9B3U54Fi5tTakOSgNO9DW" 
              cardTitle="Health & Hygeine" 
              altText="Health & Hygeine" 
              target={externalTarget}              
              icon="download"
            />
              <CardsWithDownload cardImage={walking1Image} cardLink="https://www.youtube.com/watch?v=2H1iEAk-9Rg" cardTitle="Walking Safely Near Traffic" altText="Walking Safely Near Traffic" target={externalTarget} icon="video_library" />
              <CardsWithDownload cardImage={walking2Image} cardLink="https://www.youtube.com/watch?v=_jCpBH5zehI" cardTitle="Crossing Streets Safely" altText="Crossing Streets Safely" target={externalTarget} icon="video_library" />
              <CardsWithDownload cardImage={walking3Image} cardLink="https://www.youtube.com/watch?v=bQVcdaW2TuY" cardTitle="Crossing Intersections Safely" altText="Crossing Intersections Safely" target={externalTarget} icon="video_library" />
              
              <CardsWithDownload cardImage={ridingBus1Image} cardLink="https://www.youtube.com/watch?v=YiI8bnDwkcE" cardTitle="How to Ride the Bus" altText="How to Ride the Bus" target={externalTarget} icon="video_library" />
              <CardsWithDownload cardImage={ridingBus2Image} cardLink="https://www.youtube.com/watch?v=2mxUr_Tp2Rg" cardTitle="National Fragile X Foundation" altText="National Fragile X Foundation" target={externalTarget} icon="video_library" />
              <CardsWithDownload cardImage={ridingBus3Image} cardLink="https://www.youtube.com/watch?v=-gSkwbXbWdU" cardTitle="How to Ride the City Bus" altText="How to Ride the City Bus" target={externalTarget} icon="video_library" />
            </div>
          </StyledConatiner>
          <Footer />
        </div>
    );
  }
}

export default LifeSkills;
