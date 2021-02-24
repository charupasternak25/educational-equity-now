import React, { Component } from 'react';
import { isSafari, isIOS, isMobileSafari } from 'react-device-detect';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import SidebarNav from '../../components/SidebarNav';
import Footer from '../../components/Footer';
import Cards from '../../components/Cards';

import {
  exerciseMainImagePng,
  exerciseMainImageWebp,
  danceAbilityImage,
  goNoodleImage
} from '../../images/EducationalResources/Exercise/index.js';

const isSafariBrowser = isSafari || isIOS || isMobileSafari;
const exerciseMainImage = isSafariBrowser ? exerciseMainImagePng : exerciseMainImageWebp;

const StyledConatiner = styled.div`
    padding-top: 20px;
`;

class Exercise extends Component {
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
          <Navbar backgroundImage={exerciseMainImage} linkColor={'#fff'} onToggleMenu={this.handleToggleMenu} height="500px" imagePosition="center" />
          <SidebarNav onToggleMenu={this.handleToggleMenu} />
          <StyledConatiner className="container">
            <div className="row">
              <Cards cardImage={danceAbilityImage} cardLink="https://www.danceability.com/" cardTitle="Dance Ability" altText="Dance Ability" target={externalTarget} />
              <Cards cardImage={goNoodleImage} cardLink="https://www.gonoodle.com" cardTitle="Go Noodle" altText="Go Noodle" target={externalTarget} cardColor="#fff" />                          
            </div>
          </StyledConatiner>
          <Footer />
        </div>
    );
  }
}

export default Exercise;


