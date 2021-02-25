import React, { Component } from 'react';
import styled from 'styled-components';

const StyledConatiner = styled.div`
    padding-top: 5rem;
`;

class ContactUsForm extends Component {
    render() {
        return(
            <StyledConatiner className="container">
                <div className="row card">
                    <form name="contact-us" method="POST" data-netlify="true" className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input placeholder="" id="first_name" type="text" className="validate" />
                                <label for="first_name">First name</label>
                            </div>
                            <div className="input-field col s6">
                                <input placeholder="" id="last_name" type="text" className="validate" />
                                <label for="last_name">Last name</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s6">
                                <input placeholder="" id="email" type="email" className="validate" />
                                <label for="email" data-error="wrong" data-success="right">Email</label>
                            </div>
                            <div className="input-field col s6">
                                <input placeholder="" id="phone" type="tel" pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$" className="validate" />
                                <label for="phone">Phone</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <textarea id="message" className="materialize-textarea" />
                                <label for="message">Message</label>
                            </div>
                            
                        </div>
                    </form>
                </div>

               
          </StyledConatiner>
        );
    }
}

export default ContactUsForm;