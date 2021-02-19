import React, { Component } from 'react';
import { isSafari, isIOS, isMobileSafari } from 'react-device-detect';
import styled from 'styled-components';
import Cards from './Cards';

import englishImage from '../images/EducationalResources/English/english.jpg';
import mathImagePng from '../images/EducationalResources/Math/mathSmall.png';
import mathImageWebp from '../images/EducationalResources/Math/math.webp';
import scienceImage from  '../images/EducationalResources/Science/science.jpg';
import socialSkillsImagePng from  '../images/EducationalResources/SocialEmotionalSkills/socialSkills.png';
import socialSkillsImageWebp from  '../images/EducationalResources/SocialEmotionalSkills/socialSkills.webp';
import STEMSkillsImagePng from '../images/EducationalResources/Computer/computerSkills.png';
import STEMSkillsImageWebp from '../images/EducationalResources/Computer/computerSkills.webp';
import socialStudiesImage from '../images/EducationalResources/SocialStudies/socialStudies.jpeg';
import exerciseImagePng from '../images/EducationalResources/Exercise/exercise.png';
import exerciseImageWebp from '../images/EducationalResources/Exercise/exercise.webp';
import { 
    historyMainImagePng,
    historyMainImageWebp
 } from '../images/EducationalResources/History/index.js';

 import { 
    lifeSkillsImagePng,
    lifeSkillsImageWebp
 } from '../images/EducationalResources/LifeSkills/index.js';

import vocationalSkillsImage from  '../images/vocational.jpeg';
const isSafariBrowser = isSafari || isIOS || isMobileSafari;

const mathImage = isSafariBrowser ? mathImagePng : mathImageWebp;
const socialSkillsImage = isSafariBrowser ? socialSkillsImagePng : socialSkillsImageWebp;
const STEMSkillsImage = isSafariBrowser ? STEMSkillsImagePng : STEMSkillsImageWebp;
const exerciseImage = isSafariBrowser ? exerciseImagePng : exerciseImageWebp;
const historyImage = isSafariBrowser ? historyMainImagePng : historyMainImageWebp;
const lifeSkillsImage = isSafariBrowser ? lifeSkillsImagePng : lifeSkillsImageWebp;

const StyledConatiner = styled.div`
    padding-top: 20px;
`;

class ContentforEducation extends Component {
    render() {
        return(
            <StyledConatiner className="container">
                <div className="row">
                    <Cards cardImage={lifeSkillsImage} cardLink="/educationResources/lifeSkills" cardTitle="Life Skills" altText="Life Skills" />
                    <Cards cardImage={exerciseImage} cardLink="/educationResources/exercise" cardTitle="Exercise & Motor Skills" altText="Exercise & Motor Skills" />
                    <Cards cardImage={englishImage} cardLink="/educationResources/english" cardTitle="English Language Arts" altText="English Language image" />
                    <Cards cardImage={historyImage} cardLink="/educationResources/history" cardTitle="History" altText="History" />
                    <Cards cardImage={mathImage} cardLink="/educationResources/math" cardTitle="Math" altText="Math image" />
                    <Cards cardImage={scienceImage} cardLink="/educationResources/science" cardTitle="Science" altText="Science image" />
                    <Cards cardImage={socialSkillsImage} cardLink="/educationResources/socialSkills" cardTitle="Social & Emotional Skills" altText="Social Skills and Self Regulation image" />
                    <Cards cardImage={STEMSkillsImage} cardLink="/educationResources/STEMskills" cardTitle="STEM Resources" altText="STEM" />
                    <Cards cardImage={socialStudiesImage} cardLink="/educationResources/socialStudies" cardTitle="Social Studies" altText="Social Studies/Current image" />
                    <Cards cardImage={vocationalSkillsImage} cardLink="/educationResources/vocationalSkills" cardTitle="Vocational & Transition Skills" altText="Vocational and Transition Skills image" />
                </div>                
          </StyledConatiner>
        );
    }
}

export default ContentforEducation;