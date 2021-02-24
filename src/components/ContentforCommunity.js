import React, { Component } from 'react';
import styled from 'styled-components';
import Cards from './Cards';
import {
    ableFindImage,
    cognotopiaImage,
    mrNussbaumImage,
    northStarImage,
    seMattersImage
} from '../images/CommunityResources/index.js';

import transitionImage from '../images/Transition.jpg';

const StyledConatiner = styled.div`
    padding-top: 20px;
`;

class ContentforCommunity extends Component {
    render() {
        return(
            <StyledConatiner className="container">
                <div className="row">
                    <Cards cardImage={ableFindImage} cardLink="https://www.ablefind.org/" cardTitle="Able Find" altText="Able Find" cardColor={'#666'} paddingTop={'5rem'} paddingBottom={'5rem'} />
                    <Cards cardImage={cognotopiaImage} cardLink="https://www.cognitopia.com/apps/MyLife/viewPortfolioShare/Gvep6hDyRHQPPQK_3GEY5599iOie_HqwZ6k_GHFxRSO/portfolio" cardTitle="Cognotopia" altText="Cognotopia" cardColor={'#fff'} paddingTop={'5rem'} paddingBottom={'5rem'}  />
                    <Cards cardImage={mrNussbaumImage} cardLink="https://mrnussbaum.com/" cardTitle="Mr. Nussbaum" altText="Mr. Nussbaum" cardColor={'#fff'} />
                    <Cards cardImage={northStarImage} cardLink="http://www.northstarpathways.org/" cardTitle="North Star Pathways" altText="North Star Pathways" cardColor={'#fff'} paddingTop={'2rem'} paddingBottom={'2rem'} />
                    <Cards cardImage={seMattersImage} cardLink="https://podcasts.apple.com/us/podcast/special-education-matters/id1326044291" cardTitle="Special Education Matters" altText="Special Education Matters" />
                    <Cards cardImage={transitionImage} cardLink="https://sites.google.com/mesd.k12.or.us/oregontransitioneducation/home" cardTitle="Oregon Transition Education" altText="Oregon Transition Education" />                    
                </div>                
          </StyledConatiner>
        );
    }
}

export default ContentforCommunity;