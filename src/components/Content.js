import React, { Component } from 'react';
import Cards from '../components/Cards';

import englishImage from '../images/english.jpg';
import mathImage from '../images/math.jpg';
import scienceImage from  '../images/science.png';

import danceImage from '../images/dance.jpg';
import fineMotorSkillsImage from '../images/fine-motorskills.jpg';
import socialSkillsImage from  '../images/social-skills.jpeg';

import computerScienceImage from '../images/computerscience.jpeg';
import socialStudiesImage from '../images/social-studies.png';
import vocationalSkillsImage from  '../images/vocational.jpg';


class Content extends Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <Cards cardImage={englishImage} cardTitle="English Language" altText="English Language image" />
                    <Cards cardImage={mathImage} cardTitle="Math" altText="Math image" />
                    <Cards cardImage={scienceImage} cardTitle="Science" altText="Science image" />
                </div>
                <div className="row">
                    <Cards cardImage={danceImage} cardTitle="Dance and Music" altText="Dance image" />
                    <Cards cardImage={fineMotorSkillsImage} cardTitle="Exercise and Motor Skills" altText="Exercise and Motor Skills image" />
                    <Cards cardImage={socialSkillsImage} cardTitle="Social Skills and Self Regulation" altText="Social Skills and Self Regulation image" />
                </div>
                <div className="row">
                    <Cards cardImage={computerScienceImage} cardTitle="Computer Skills" altText="Computer Skills image" />
                    <Cards cardImage={socialStudiesImage} cardTitle="Social Studies/Current Events" altText="Social Studies/Current image" />
                    <Cards cardImage={vocationalSkillsImage} cardTitle="Vocational and Transition Skills" altText="Vocational and Transition Skills image" />
                </div>
          </div>
        );
    }
}

export default Content;