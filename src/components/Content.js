import React, { Component } from 'react';
import styled from 'styled-components';
import Cards from '../components/Cards';

import englishImage from '../images/english.jpg';
import mathImage from '../images/math.jpg';
import scienceImage from  '../images/science.jpg';

import danceImage from '../images/dance.jpg';
import fineMotorSkillsImage from '../images/fine-motorskills.jpg';
import socialSkillsImage from  '../images/social-skills.jpeg';

import computerScienceImage from '../images/computerscience.jpeg';
import socialStudiesImage from '../images/socialStudies.jpeg';
import vocationalSkillsImage from  '../images/vocational.jpeg';

const StyledConatiner = styled.div`
    padding-top: 20px;
`;

class Content extends Component {
    render() {
        return(
            <StyledConatiner className="container">
                <div className="row">
                    <Cards cardImage={englishImage} cardLink="/educationResources/english" cardTitle="English Language Arts" altText="English Language image" />
                    <Cards cardImage={mathImage} cardLink="/educationResources/math" cardTitle="Math" altText="Math image" />
                    <Cards cardImage={scienceImage} cardLink="/educationResources/science" cardTitle="Science" altText="Science image" />
                    <Cards cardImage={danceImage} cardLink="/educationResources/dance" cardTitle="Dance/Music" altText="Dance image" />
                    <Cards cardImage={fineMotorSkillsImage} cardLink="/educationResources/exercise" cardTitle="Exercise/Motor Skills" altText="Exercise and Motor Skills image" />
                    <Cards cardImage={socialSkillsImage} cardLink="/educationResources/socialSkills" cardTitle="Social Skills/Self Regulation" altText="Social Skills and Self Regulation image" />
                    <Cards cardImage={computerScienceImage} cardLink="/educationResources/computerSkills" cardTitle="Computer Skills" altText="Computer Skills image" />
                    <Cards cardImage={socialStudiesImage} cardLink="/educationResources/socialStudies" cardTitle="Social Studies/Current Events" altText="Social Studies/Current image" />
                    <Cards cardImage={vocationalSkillsImage} cardLink="/educationResources/vocationalSkills" cardTitle="Vocational/Transition Skills" altText="Vocational and Transition Skills image" />
                </div>                
          </StyledConatiner>
        );
    }
}

export default Content;