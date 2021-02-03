import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import SidebarNav from '../components/SidebarNav';
import Content from '../components/Content';

class EducationalResources extends Component {
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
          <Navbar onToggleMenu={this.handleToggleMenu} />
          <SidebarNav onToggleMenu={this.handleToggleMenu} />
          <Content />          
        </div>
    );
  }
}

export default EducationalResources;
