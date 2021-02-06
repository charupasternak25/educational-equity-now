import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import SidebarNav from '../../components/SidebarNav';
import Cards from '../../components/Cards';

import ScienceImage from '../../images/science.jpg';
import showAboutScienceImage from '../../images/showAboutScience.jpeg';
import mysteryScience from '../../images/mysteryScience.png';

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

    return(
        <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>          
          <Navbar backgroundImage={ScienceImage} linkColor={'#1b1f22'} onToggleMenu={this.handleToggleMenu} height="500px" imagePosition="top" />
          <SidebarNav onToggleMenu={this.handleToggleMenu} />
          <StyledConatiner className="container">
            <div className="row">
              <Cards cardImage={showAboutScienceImage} cardLink="https://theshowaboutscience.com/" cardTitle="The show about Science" altText="The show about Science" />
              <Cards cardImage={mysteryScience} cardLink="https://mysteryscience.com/" cardTitle="Mystery Science" altText="Mystery Science" />                    
            </div>
          </StyledConatiner>
        </div>
    );
  }
}

export default Science;


