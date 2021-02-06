import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import SidebarNav from '../../components/SidebarNav';
import Cards from '../../components/Cards';

import SocialStudiesImage from '../../images/socialStudies.jpeg';
import kidNuzImage from '../../images/kidNuz.webp';
import n2yImage from '../../images/n2y.svg';
import historyClassImage from '../../images/historyClassPodcast.webp';

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

    return(
        <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>          
          <Navbar backgroundImage={SocialStudiesImage} linkColor={'#1b1f22'} onToggleMenu={this.handleToggleMenu} height="500px" imagePosition="center" />
          <SidebarNav onToggleMenu={this.handleToggleMenu} />
          <StyledConatiner className="container">
            <div className="row">
              <Cards cardImage={kidNuzImage} cardLink="https://www.kidnuz.org/" cardTitle="Kid Nuz" altText="Kid Nuz" />
              <Cards cardImage={n2yImage} cardLink="https://www.n2y.com/" cardTitle="n2y" altText="n2y" />
              <Cards cardImage={historyClassImage} cardLink="https://www.iheart.com/podcast/stuff-you-missed-in-history-cl-21124503/" cardTitle="iHeart Radio" altText="iHeart Radio" />              
            </div>
          </StyledConatiner>          
        </div>
    );
  }
}

export default SocialStudies;

