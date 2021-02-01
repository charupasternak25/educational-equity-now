import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import SidebarNav from '../components/SidebarNav';

const ELAImage = require('../images/ELA.jpg');

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
          <div className="container">
            <div className="row">
              <div className="col s12 m6 l4">
                <div className="card">
                  <div className="card-image">
                    <img src={ELAImage} alt="" />
                  </div>
                  <div className="card-content">
                    <span className="card-title green-text">English Language</span>                                        
                  </div>
                </div>
              </div>
              <div className="col s12 m6 l4">
                <div className="card">
                  <div className="card-image">
                    <img src={ELAImage} alt="" />
                  </div>
                  <div className="card-content">
                    <span className="card-title green-text">Math</span>                                        
                  </div>
                </div>
              </div>
              <div className="col s12 m6 l4">
                <div className="card">
                  <div className="card-image">
                    <img src={ELAImage} alt="" />
                  </div>
                  <div className="card-content">
                    <span className="card-title green-text">Science</span>                                        
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default EducationalResources;
