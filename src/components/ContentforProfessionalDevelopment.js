import React, { Component } from 'react';
import styled from 'styled-components';
import Cards from './Cards';
import {
    IRISLogoImage,
    afirmLogoImage,
    intensiveInterventionLogoImage,
    UFLLogoImage
} from '../images/ProfessionalDevelopment/index.js';

const StyledConatiner = styled.div`
    padding-top: 20px;
`;

class ContentforProfessionalDevelopment extends Component {
    render() {
        return(
            <StyledConatiner className="container">
                <div className="row">
                    <Cards cardImage={IRISLogoImage} cardLink="https://iris.peabody.vanderbilt.edu/" cardTitle="IRIS Center" altText="IRIS Center" cardColor={'#fff'} />
                    <Cards cardImage={afirmLogoImage} cardLink="https://afirm.fpg.unc.edu/afirm-modules" cardTitle="AFIRM" altText="AFIRM" cardColor={'#fff'} paddingTop={'5rem'} paddingBottom={'5rem'} />
                    <Cards cardImage={intensiveInterventionLogoImage} cardLink="https://intensiveintervention.org/audience/educators" cardTitle="Intensive Intervention" altText="Intensive Intervention" cardColor={'#fff'} paddingTop={'5rem'} paddingBottom={'5rem'} />
                    <Cards cardImage={UFLLogoImage} cardLink="https://education.ufl.edu/ufli/virtual-teaching/main/" cardTitle="UF College of Education" altText="UF College of Education" />                    
                </div>                
          </StyledConatiner>
        );
    }
}

export default ContentforProfessionalDevelopment;