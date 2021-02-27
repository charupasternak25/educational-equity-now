import React, { Component } from 'react';
import styled from 'styled-components';

const encode = (data) => {    
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");        
    }

const StyledConatiner = styled.div`
    padding-top: 5rem;
    .padding-5 {
        padding: 5rem 2rem 1rem 2rem;
    }
`;

const StyledThankYouHeader = styled.div`    
    font-size: 4rem;    
    padding-top: 0;
    padding-bottom: 1rem;
    font-weight: 400;
`;

const StyledThankYouDescription = styled.div`
    font-size: 1.8rem;
    letter-spacing: 0.03px;
    padding-bottom: 2rem;
`;

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            message: ""            
        };
    }

    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "educationform", ...this.state })
        })
        .then(() => {
                console.log('Submitted');            
                window.location.href = 'https://educationalequitynow.com/';
            }
        )
        .catch(error => alert(error));
        e.preventDefault();
    };

    handleChange = (e) => {        
        this.setState({ [e.target.name]: e.target.value });        
    }

    render() {        
        const { firstname, lastname, email, phone, message } = this.state;        
        return (
            <StyledConatiner className="container">                
                <div className="row card padding-5">
                    <form className="col s12" onSubmit={this.handleSubmit}>
                    <input type="hidden" name="form-name" value="educationform" />
                        <div className="row">
                            <div className="input-field col s6">
                                <input name="firstname" value={firstname} id="firstname" type="text" className="validate" onChange={this.handleChange} />
                                <label htmlFor="firstname">First name</label>
                            </div>
                            <div className="input-field col s6">
                                <input name="lastname" value={lastname} id="lastname" type="text" className="validate" onChange={this.handleChange} />
                                <label htmlFor="lastname">Last name</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s6">
                                <input name="email" value={email} id="email" type="email" className="validate" onChange={this.handleChange} />
                                <label htmlFor="email" data-error="wrong" data-success="right">Email</label>
                            </div>
                            <div className="input-field col s6">
                                <input name="phone" value={phone} id="phone" type="tel" pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$" className="validate" onChange={this.handleChange} />
                                <label htmlFor="phone">Phone</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <textarea name="message" value={message} id="message" className="materialize-textarea" onChange={this.handleChange} />
                                <label htmlFor="message">Message</label>
                            </div>                            
                        </div>

                        <div className="row">
                            <div className="input-field col s12 center">
                            <button type="sumbit" className="btn waves-effect waves-light">Submit
                                <i class="material-icons right">send</i>
                            </button>
                            </div>                            
                        </div>
                    </form>
                </div>   
                {/* }             */}
            </StyledConatiner>
        );
    }
}

export default ContactForm;
