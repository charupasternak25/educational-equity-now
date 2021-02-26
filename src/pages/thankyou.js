import React, { Component } from 'react';
import styled from 'styled-components'; 
import SkinnyNavbar from '../components/SkinnyNavbar';
import SidebarNav from '../components/SidebarNav';

import Footer from '../components/Footer';

const StyledConatiner = styled.div`
    padding: 5rem 0;
    .padding {
        padding: 5rem 2rem 1rem 2rem;
    }
    a {
        border-bottom: none;
    }
`;

const StyledThankYouHeader = styled.div`    
    font-size: 4.8rem;
    font-family: 'Dancing Script', cursive;    
    padding-top: 0;
    padding-bottom: 1rem;
    font-weight: 400;
`;

const StyledThankYouDescription = styled.div`
    font-size: 1.8rem;
    letter-spacing: 0.03px;
    padding-bottom: 2rem;
`;

class ThankYou extends Component {
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
    
    return(
        <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>          
            <SkinnyNavbar onToggleMenu={this.handleToggleMenu} />
            <SidebarNav onToggleMenu={this.handleToggleMenu} />
            <StyledConatiner className="container">
                <div className="row card padding center">
                    <StyledThankYouHeader>Thank you for contacting us!</StyledThankYouHeader>                    
                    <StyledThankYouDescription>We will get back to you within 24 business hours. <br />Until then, <a href="/">Keep learning!!</a></StyledThankYouDescription>
                </div>
            </StyledConatiner>
          <Footer />
        </div>
    );
  }
}

export default ThankYou;
