import React, { Component } from 'react';
import { isSafari, isIOS, isMobileSafari } from 'react-device-detect';
import Navbar from '../components/Navbar';
import SidebarNav from '../components/SidebarNav';
import Content from '../components/ContentforEducation';
import Footer from '../components/Footer';
import educationalResourcesImagePng from '../images/MainPageImages/educationalResources.png';
import educationalResourcesImageWebp from '../images/MainPageImages/educationalResources.webp';

const isSafariBrowser = isSafari || isIOS || isMobileSafari;

const educationalResourcesImage = isSafariBrowser ? educationalResourcesImagePng : educationalResourcesImageWebp;

class EducationalResources extends Component {
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
    const LinkColor = "#1b1f22";

    return(
        <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>          
          <Navbar backgroundImage={educationalResourcesImage} linkColor={LinkColor} onToggleMenu={this.handleToggleMenu} height="500px" imagePosition="center" />
          <SidebarNav onToggleMenu={this.handleToggleMenu} />
          <Content />
          <Footer />
        </div>
    );
  }
}

export default EducationalResources;
