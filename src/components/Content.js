import React, { Component } from 'react';
import styled from 'styled-components';
import Cards from '../components/Cards';

import englishImage from '../images/EducationalResources/English/english.jpg';
import mathImage from '../images/EducationalResources/Math/math.png';
import scienceImage from  '../images/EducationalResources/Science/science.jpg';
import socialSkillsImage from  '../images/EducationalResources/SocialEmotionalSkills/socialSkills.png';
import STEMSkillsImage from '../images/EducationalResources/Computer/computerSkills.png';
import socialStudiesImage from '../images/EducationalResources/SocialStudies/socialStudies.jpeg';

// import danceImage from '../images/dance.jpg';
// import fineMotorSkillsImage from '../images/fine-motorskills.jpg';

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
                    {/* <Cards cardImage={danceImage} cardLink="/educationResources/dance" cardTitle="Dance/Music" altText="Dance image" /> */}
                    {/* <Cards cardImage={fineMotorSkillsImage} cardLink="/educationResources/exercise" cardTitle="Exercise & Motor Skills" altText="Exercise and Motor Skills image" /> */}
                    <Cards cardImage={socialSkillsImage} cardLink="/educationResources/socialSkills" cardTitle="Social & Emotional Skills" altText="Social Skills and Self Regulation image" />
                    <Cards cardImage={STEMSkillsImage} cardLink="/educationResources/STEMskills" cardTitle="STEM Resources" altText="STEM" />
                    <Cards cardImage={socialStudiesImage} cardLink="/educationResources/socialStudies" cardTitle="Social Studies" altText="Social Studies/Current image" />
                    <Cards cardImage={vocationalSkillsImage} cardLink="/educationResources/vocationalSkills" cardTitle="Vocational & Transition Skills" altText="Vocational and Transition Skills image" />
                </div>                
          </StyledConatiner>
        );
    }
}

export default Content;