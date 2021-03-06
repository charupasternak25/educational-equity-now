import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import SidebarNav from '../../components/SidebarNav';
import Footer from '../../components/Footer';
import Cards from '../../components/Cards';
import {
  scienceMainImage,
  mysteryScienceImage,
  showAboutScienceImage,
  climateCastImage
} from '../../images/EducationalResources/Science/index.js';

import {
  ixlImage
} from '../../images/EducationalResources/English/index.js';

import { mrNussbaumImage } from '../../images/CommunityResources/index.js';

const StyledConatiner = styled.div`
    padding-top: 20px;
`;

class Science extends Component {
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
          <Navbar backgroundImage={scienceMainImage} linkColor={'#1b1f22'} onToggleMenu={this.handleToggleMenu} height="500px" imagePosition="top" />
          <SidebarNav onToggleMenu={this.handleToggleMenu} />
          <StyledConatiner className="container">
            <div className="row">
              <Cards cardImage={showAboutScienceImage} cardLink="https://theshowaboutscience.com/" cardTitle="The show about Science" altText="The show about Science" target={externalTarget} />
              <Cards cardImage={mysteryScienceImage} cardLink="https://mysteryscience.com/" cardTitle="Mystery Science" altText="Mystery Science" cardColor={'#fff'} target={externalTarget} paddingTop={'5rem'} paddingBottom={'5rem'} />
              <Cards cardImage={ixlImage} cardLink="https://www.ixl.com/" cardTitle="IXL" altText="IXL" target={externalTarget} />
              <Cards cardImage={mrNussbaumImage} cardLink="https://mrnussbaum.com/" cardTitle="Mr. Nussbaum" altText="Mr. Nussbaum" cardColor="#fff" />
              <Cards cardImage={climateCastImage} cardLink="https://podcasts.apple.com/us/podcast/climate-cast/id628455920" cardTitle="Climate Cast" altText="Climate Cast" />
            </div>
          </StyledConatiner>
          <Footer />
        </div>
    );
  }
}

export default Science;


