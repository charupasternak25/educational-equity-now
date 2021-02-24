import React, { Component } from 'react';
import { isSafari, isIOS, isMobileSafari } from 'react-device-detect';

import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import SidebarNav from '../../components/SidebarNav';
import Footer from '../../components/Footer';
import Cards from '../../components/Cards';

import {
    empowerBannerImagePng,
    empowerBannerImageWebp,
    healthImage
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
                <div class="col s12 m6 l4">
                    <div class="card">
                        <div class="card-image">
                            <img src={healthImage} />
                            <a href="https://drive.google.com/drive/folders/1pwlzP9b1AYB9B3U54Fi5tTakOSgNO9DW" target="_blank" rel="noopener noreferrer" download class="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">download</i></a>                            
                        </div>
                        <div class="card-content">
                            <span className="card-title white-text center">Health & Hygeine</span>
                            <p className="center">Health and hygeine resources. Please click the download button to use the resources.</p>                            
                        </div>                        
                    </div>
                </div>
            </div>
            <div>
                <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQQtis_uAOS-kFNbwYKkg7sH19jhKrUe40eYt3LYHa3PWj3o2cHfMqiTgfkZrbIARAb-PzG0tGFpqqr/embed?start=true&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>    
            </div>            
          </StyledConatiner>
          <Footer />
        </div>
    );
  }
}

export default CustomLessons;
