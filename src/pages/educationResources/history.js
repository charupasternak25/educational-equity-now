import React, { Component } from 'react';
import { isSafari, isIOS, isMobileSafari } from 'react-device-detect';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import SidebarNav from '../../components/SidebarNav';
import Footer from '../../components/Footer';
import Cards from '../../components/Cards';

import {
    historyMainImagePng,
    historyMainImageWebp,
    nationalArchivesImage,
    docsTeachImage,
    fordhamImage,
    lifeLogoImage,
    spartacusImage,
    yaleLawSchoolImage
} from '../../images/EducationalResources/History/index.js';

import {
    historyClassPodcastImage
} from '../../images/EducationalResources/SocialStudies/index.js';

const isSafariBrowser = isSafari || isIOS || isMobileSafari;
const historyMainImage = isSafariBrowser ? historyMainImagePng : historyMainImageWebp;

const StyledConatiner = styled.div`
    padding-top: 20px;
`;

class History extends Component {
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
          <Navbar backgroundImage={historyMainImage} linkColor={'#fff'} onToggleMenu={this.handleToggleMenu} height="500px" imagePosition="center" />
          <SidebarNav onToggleMenu={this.handleToggleMenu} />
          <StyledConatiner className="container">
            <div className="row">
              <Cards cardImage={nationalArchivesImage} cardLink="https://www.archives.gov/education/research/primary-sources" cardTitle="National Archives" altText="National Archives" target={externalTarget} />
              <Cards cardImage={docsTeachImage} cardLink="https://www.docsteach.org/documents" cardTitle="Docs Teach" altText="Docs Teach" target={externalTarget} cardColor="#666" paddingTop={'5rem'} paddingBottom={'5rem'} />
              <Cards cardImage={fordhamImage} cardLink="https://sourcebooks.fordham.edu/mod/modsbookfull.asp" cardTitle="Fordham University" altText="Fordham University" target={externalTarget} cardColor="#fff" paddingTop={'5rem'} paddingBottom={'5rem'} />
              <Cards cardImage={lifeLogoImage} cardLink="http://images.google.com/hosted/life" cardTitle="LIFE photos archive by Google" altText="LIFE photos archive by Google" target={externalTarget} />
              <Cards cardImage={spartacusImage} cardLink="https://spartacus-educational.com/" cardTitle="Spartacus Educational" altText="Spartacus Educational" target={externalTarget} cardColor="#fff" paddingTop={'5rem'} paddingBottom={'5rem'} />
              <Cards cardImage={yaleLawSchoolImage} cardLink="https://avalon.law.yale.edu/" cardTitle="Avalon project by Yale Law School" altText="Avalon project by Yale Law School" target={externalTarget} />
              <Cards cardImage={historyClassPodcastImage} cardLink="https://podcasts.apple.com/us/podcast/stuff-you-missed-in-history-class/id283605519" cardTitle="History class podcast" altText="History class podcast" target={externalTarget} />
            </div>
          </StyledConatiner>
          <Footer />
        </div>
    );
  }
}

export default History;
