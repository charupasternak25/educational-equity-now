import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import SidebarNav from '../../components/SidebarNav';
import Footer from '../../components/Footer';
import Cards from '../../components/Cards';

import {
  socialStudiesMainImage,
  historyClassPodcastImage,
  kidNuzImage
} from '../../images/EducationalResources/SocialStudies/index.js';

import {
  newselaImage,
  mobyMaxImage,
  ixlImage,
  n2yImage
} from '../../images/EducationalResources/English/index.js';

const StyledConatiner = styled.div`
    padding-top: 20px;
`;

class SocialStudies extends Component {
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
          <Navbar backgroundImage={socialStudiesMainImage} linkColor={'#1b1f22'} onToggleMenu={this.handleToggleMenu} height="500px" imagePosition="center" />
          <SidebarNav onToggleMenu={this.handleToggleMenu} />
          <StyledConatiner className="container">
            <div className="row">
              <Cards cardImage={kidNuzImage} cardLink="https://www.kidnuz.org/" cardTitle="Kid Nuz" altText="Kid Nuz" target={externalTarget} />
              <Cards cardImage={n2yImage} cardLink="https://www.n2y.com/" cardTitle="n2y" altText="n2y" target={externalTarget} />
              <Cards cardImage={historyClassPodcastImage} cardLink="https://www.iheart.com/podcast/stuff-you-missed-in-history-cl-21124503/" cardTitle="iHeart Radio" altText="iHeart Radio" target={externalTarget} />              
              <Cards cardImage={newselaImage} cardLink="https://newsela.com/" cardTitle="Newsela" altText="Newsela" target={externalTarget} />
              <Cards cardImage={mobyMaxImage} cardLink="https://www.mobymax.com/" cardTitle="MobyMax" altText="MobyMax" target={externalTarget} />
              <Cards cardImage={ixlImage} cardLink="https://www.ixl.com/" cardTitle="IXL" altText="IXL" target={externalTarget} />              
            </div>
          </StyledConatiner>
          <Footer />          
        </div>
    );
  }
}

export default SocialStudies;

