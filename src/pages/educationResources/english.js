import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import SidebarNav from '../../components/SidebarNav';
import Footer from '../../components/Footer';
import Cards from '../../components/Cards';
import {
  englishMainImage,
  freeReadingProgramImage,
  starFallImage,
  levarBurtonReadsImage,
  readingAtoZImage,
  stuffYouShouldKnowImage,
  textHelpImage,
  newselaImage,
  mobyMaxImage,
  iReadyImage,
  ixlImage,
  storyLineOnlineImage,
  n2yImage
} from '../../images/EducationalResources/English/index.js';

import { mrNussbaumImage } from '../../images/CommunityResources/index.js';

const StyledConatiner = styled.div`
    padding-top: 20px;
`;

class English extends Component {
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
          <Navbar backgroundImage={englishMainImage} linkColor={'#fff'} onToggleMenu={this.handleToggleMenu} height="500px" imagePosition="top" />
          <SidebarNav onToggleMenu={this.handleToggleMenu} />
          <StyledConatiner className="container">
            <div className="row">
              <Cards cardImage={freeReadingProgramImage} cardLink="https://www.freereadingprogram.com/" cardTitle="Free Reading Program" altText="Free reading program" target={externalTarget} />
              <Cards cardImage={starFallImage} cardLink="https://www.starfall.com/h/" cardTitle="Starfall" altText="Starfall" target={externalTarget} />
              <Cards cardImage={levarBurtonReadsImage} cardLink="https://www.levarburtonpodcast.com/" cardTitle="LeVar Burton Reads"altText="LeVar Burton Reads" target={externalTarget} />
              <Cards cardImage={readingAtoZImage} cardLink="https://www.readinga-z.com/" cardTitle="Reading A to Z" altText="Reading A to Z" target={externalTarget} />
              <Cards cardImage={stuffYouShouldKnowImage} cardLink="https://www.iheart.com/podcast/105-stuff-you-should-know-26940277/" cardTitle="Stuff you should know" altText="Stuff you should know" target={externalTarget} />
              <Cards cardImage={textHelpImage} cardLink="https://www.texthelp.com/en-us/products/read-write/" cardTitle="TextHelp" altText="TextHelp" target={externalTarget} />
              <Cards cardImage={newselaImage} cardLink="https://newsela.com/" cardTitle="Newsela" cardColor={'#fff'} altText="Newsela" target={externalTarget} />
              <Cards cardImage={mobyMaxImage} cardLink="https://www.mobymax.com/" cardTitle="MobyMax" altText="MobyMax" target={externalTarget} />
              <Cards cardImage={iReadyImage} cardLink="https://login.i-ready.com/" cardTitle="iReady" altText="iReady" target={externalTarget} />
              <Cards cardImage={ixlImage} cardLink="https://www.ixl.com/" cardTitle="IXL" altText="IXL" target={externalTarget} />
              <Cards cardImage={storyLineOnlineImage} cardLink="http://www.storylineonline.net" cardTitle="StoryLine Online" altText="StoryLine Online" target={externalTarget} />
              <Cards cardImage={n2yImage} cardLink="http://www.n2y.com" cardTitle="N2Y" altText="N2Y" target={externalTarget} />
              <Cards cardImage={mrNussbaumImage} cardLink="https://mrnussbaum.com/" cardTitle="Mr. Nussbaum" altText="Mr. Nussbaum" cardColor="#fff" />
            </div>
          </StyledConatiner>
          <Footer />
        </div>
    );
  }
}

export default English;
