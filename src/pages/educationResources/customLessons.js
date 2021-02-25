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
    positiveLifeSkillsImage,    
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
              cardImage={positiveLifeSkillsImage} 
              cardLink="https://drive.google.com/drive/folders/1x3rIZnib7_O0TjgTVYBxuePQb9UUrTG7" 
              cardTitle="Positive life skills" 
              altText="Positive life skills" 
              target={externalTarget}              
              icon="download"
            />            
            </div>                      
          </StyledConatiner>
          <Footer />
        </div>
    );
  }
}

export default CustomLessons;
