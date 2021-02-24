import React, { Component } from 'react';
import { isSafari, isIOS, isMobileSafari } from 'react-device-detect';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import SidebarNav from '../../components/SidebarNav';
import Footer from '../../components/Footer';
import Cards from '../../components/Cards';

import {
  socialEmotionalSkillsMainImagePng,
  socialEmotionalSkillsMainImageWebp,
  centerventionImage,
  childMindInstituteImage,
  gratefulnessImage,
  insightToBehaviorImage,
  OTPImage,
  therapistAidImage,
  usableKnowledgeImage,
  veryWellFamilyImage
} from '../../images/EducationalResources/SocialEmotionalSkills/index.js';

const isSafariBrowser = isSafari || isIOS || isMobileSafari;
const socialEmotionalSkillsMainImage = isSafariBrowser ? socialEmotionalSkillsMainImagePng : socialEmotionalSkillsMainImageWebp;

const StyledConatiner = styled.div`
    padding-top: 20px;
`;

class SocialSkills extends Component {
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
          <Navbar backgroundImage={socialEmotionalSkillsMainImage} linkColor={'#fff'} onToggleMenu={this.handleToggleMenu} height="500px" imagePosition="top" />
          <SidebarNav onToggleMenu={this.handleToggleMenu} />
          <StyledConatiner className="container">
            <div className="row">
              <Cards cardImage={centerventionImage} cardLink="https://www.centervention.com/" cardTitle="Centervention" altText="Centervention" cardColor={'#fff'} target={externalTarget} paddingTop={'5rem'} paddingBottom={'5rem'} />
              <Cards cardImage={childMindInstituteImage} cardLink="https://childmind.org/article/best-childrens-books-about-mental-health/" cardTitle="Bibliotherapy" altText="Bibliotherapy" target={externalTarget} />
              <Cards cardImage={gratefulnessImage} width={'70%'} marginLeft={'50px'} cardLink="https://gratefulness.org/" cardTitle="Gratefulness" altText="Gratefulness" cardColor={'#fff'} target={externalTarget} />
              <Cards cardImage={insightToBehaviorImage} cardLink="https://insightstobehavior.com/blog/impact-classroom-management-social-emotional-learning/" cardColor={'#fff'} cardTitle="Insights to Behavior" altText="Insights to Behavior" target={externalTarget}/>
              <Cards cardImage={OTPImage} cardLink="https://otperspective.com/remote-learning-brain-breaks-for-kids/" cardTitle="OT Perspective" altText="OT Perspective" cardColor={'#fff'} target={externalTarget} />
              <Cards cardImage={therapistAidImage} cardLink="https://www.therapistaid.com/interactive-therapy-tools" cardTitle="Therapist Aid" altText="Therapist Aid" target={externalTarget} cardColor={'#666'} paddingTop={'5rem'} paddingBottom={'5rem'}  />
              <Cards cardImage={usableKnowledgeImage} cardLink="https://www.gse.harvard.edu/news/uk/17/11/resilience-anxious-students" cardTitle="Resilience for students" altText="Resilience for Anxious students" target={externalTarget} cardColor={'#fff'} paddingTop={'5rem'} paddingBottom={'5rem'} />
              <Cards cardImage={veryWellFamilyImage} cardLink="https://www.verywellfamily.com/ways-to-teach-children-impulse-control-1095035" cardTitle="Impulse control skill building" altText="Impulse control skill building" target={externalTarget} cardColor={'#fff'} paddingTop={'5rem'} paddingBottom={'5rem'} />
            </div>
          </StyledConatiner>
          <Footer />          
        </div>
    );
  }
}

export default SocialSkills;
