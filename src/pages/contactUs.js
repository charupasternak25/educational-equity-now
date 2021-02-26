import React, { Component } from 'react';
import SkinnyNavbar from '../components/SkinnyNavbar';
import SidebarNav from '../components/SidebarNav';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

class ContactUs extends Component {
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
          
          {/* <form name="contact" netlify netlify-honeypot="bot-field" hidden>
            <input type="text" name="name" />
            <input type="email" name="email" />
            <textarea name="message"></textarea>
          </form>           */}
          <SkinnyNavbar onToggleMenu={this.handleToggleMenu} />
          <SidebarNav onToggleMenu={this.handleToggleMenu} />          
          <ContactForm />
          <Footer />
        </div>
    );
  }
}

export default ContactUs;
