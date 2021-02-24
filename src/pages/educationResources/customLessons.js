import React, { Component } from 'react';
import { isSafari, isIOS, isMobileSafari } from 'react-device-detect';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import SidebarNav from '../../components/SidebarNav';
import Footer from '../../components/Footer';
import CardsWithDownload from '../../components/CardsWithDownload';
import Cards from '../../components/Cards';

import {
    empowerBannerImagePng,
    empowerBannerImageWebp,
    healthImage,
    positiveLifeSkillsImage,
    walking1Image,
    walking2Image,
    walking3Image,
    ridingBus1Image,
    ridingBus2Image,
    ridingBus3Image    
} from '../../images/EducationalResources/LifeSkills/index.js';

const isSafariBrowser = isSafari || isIOS || isMobileSafari;
const customLessonsMainImage = isSafariBrowser ? empowerBannerImagePng : empowerBannerImageWebp;

const StyledConatiner = styled.div`
    padding-top: 20px;
`;

class CustomLessons extends Component {
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
          <Navbar backgroundImage={customLessonsMainImage} linkColor={'#fff'} onToggleMenu={this.handleToggleMenu} height="500px" imagePosition="bottom" />
          <SidebarNav onToggleMenu={this.handleToggleMenu} />
          <StyledConatiner className="container">
            <div class="row">
            <CardsWithDownload 
              cardImage={healthImage} 
              cardLink="https://drive.google.com/drive/folders/1pwlzP9b1AYB9B3U54Fi5tTakOSgNO9DW" 
              cardTitle="Health & Hygeine" 
              altText="Health & Hygeine" 
              target={externalTarget}              
              icon="download"
            />

            <CardsWithDownload 
              cardImage={positiveLifeSkillsImage} 
              cardLink="https://drive.google.com/drive/folders/1x3rIZnib7_O0TjgTVYBxuePQb9UUrTG7" 
              cardTitle="Positive life skills" 
              altText="Positive life skills" 
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

export default CustomLessons;
