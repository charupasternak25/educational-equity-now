import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import SidebarNav from '../components/SidebarNav';
import Footer from '../components/Footer';

import professionalDevelopmentImage from '../images/MainPageImages/professionalDevelopment.png';

class ProfessionalDevelopment extends Component {
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
    const LinkColor = "#fff";

    return(
        <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>          
          <Navbar backgroundImage={professionalDevelopmentImage} linkColor={LinkColor} onToggleMenu={this.handleToggleMenu} height="600px" imagePosition="center" />
          <SidebarNav onToggleMenu={this.handleToggleMenu} />
          <Footer />
        </div>
    );
  }
}

export default ProfessionalDevelopment;
