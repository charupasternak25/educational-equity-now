import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import SidebarNav from '../../components/SidebarNav';
import Footer from '../../components/Footer';
import Cards from '../../components/Cards';
import transitionImage from '../../images/Transition.jpg';

import {
  vocationalSkillsImage,
  googleAppliedImage,
  googlePrimerImage
} from '../../images/EducationalResources/VocationalSkills/index.js';

const StyledConatiner = styled.div`
    padding-top: 20px;
`;

class VocationalSkills extends Component {
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
          <Navbar backgroundImage={vocationalSkillsImage} onToggleMenu={this.handleToggleMenu} height="500px" imagePosition="top" />
          <SidebarNav onToggleMenu={this.handleToggleMenu} />
          <StyledConatiner className="container">
            <div className="row">
              <Cards cardImage={googleAppliedImage} cardLink="https://applieddigitalskills.withgoogle.com/s/en/home" cardTitle="Applied Digital Skills" altText="Applied Digital Skills" target={externalTarget} />
              <Cards cardImage={googlePrimerImage} cardLink="https://yourprimer.com/" cardTitle="Google Primer" altText="Google Primer" target={externalTarget} />
              <Cards cardImage={transitionImage} cardLink="https://sites.google.com/mesd.k12.or.us/oregontransitioneducation/home" cardTitle="Oregon Transition Education" altText="Oregon Transition Education" target={externalTarget} />
            </div>
          </StyledConatiner>
          <Footer />          
        </div>
    );
  }
}

export default VocationalSkills;
