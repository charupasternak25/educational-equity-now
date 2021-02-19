import React, { Component } from 'react';
import { isSafari, isIOS, isMobileSafari } from 'react-device-detect';
import Navbar from '../components/Navbar';
import SidebarNav from '../components/SidebarNav';
import ContentforCommunity from '../components/ContentforCommunity.js';
import Footer from '../components/Footer';

import communityResourcesImagePng from '../images/MainPageImages/communityResources.png';
import communityResourcesImageWebp from '../images/MainPageImages/communityResources.webp';

const isSafariBrowser = isSafari || isIOS || isMobileSafari;
const communityResourcesImage = isSafariBrowser ? communityResourcesImagePng : communityResourcesImageWebp;

class CommunityResources extends Component {
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
    const LinkColor = "#fff";

    return(
        <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>          
          <Navbar backgroundImage={communityResourcesImage} linkColor={LinkColor} onToggleMenu={this.handleToggleMenu} height="500px" imagePosition="center" />
          <SidebarNav onToggleMenu={this.handleToggleMenu} />
          <ContentforCommunity />
          <Footer />
        </div>
    );
  }
}

export default CommunityResources;
