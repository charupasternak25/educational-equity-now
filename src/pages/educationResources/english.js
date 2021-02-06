import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import SidebarNav from '../../components/SidebarNav';
import Cards from '../../components/Cards';
import freeReadingProgramImage from '../../images/freeReadingProgram.png';
import starFallImage from '../../images/starfall.png';
import levarBurtonReadsImage from '../../images/levarBurtonReads.png';
import readingAtoZImage from '../../images/readingA-Z.svg';
import englishImage from '../../images/english.jpg';

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

    return(
        <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>          
          <Navbar backgroundImage={englishImage} linkColor={'#fff'} onToggleMenu={this.handleToggleMenu} height="500px" imagePosition="top" />
          <SidebarNav onToggleMenu={this.handleToggleMenu} />
          <StyledConatiner className="container">
            <div className="row">
              <Cards cardImage={freeReadingProgramImage} cardLink="https://www.freereadingprogram.com/" cardTitle="Free Reading Program" altText="Free reading program" />
              <Cards cardImage={starFallImage} cardLink="https://www.starfall.com/h/" cardTitle="Starfall" altText="Starfall" />
              <Cards cardImage={levarBurtonReadsImage} cardLink="https://www.levarburtonpodcast.com/" cardTitle="LeVar Burton Reads" altText="LeVar Burton Reads" />
              <Cards cardImage={readingAtoZImage} cardLink="https://www.readinga-z.com/" cardTitle="Reading A to Z" altText="Reading A to Z" />
            </div>
          </StyledConatiner>          
        </div>
    );
  }
}

export default English;
