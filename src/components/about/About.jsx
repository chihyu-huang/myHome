import React from 'react';
import "./about.css";
import Image from "../../assets/Chih-Yu Huang.svg";
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img rounded" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I'm a software engineer based in Dublin, Irealnd specializing in building and designing exceptional,
               high-quality websites and applications.
            </p>
            <a href="" className="btn">Download CV</a>
          </div>

          <div className="about__skills grid">
            
            <div className="skills_data">
              <div className="skills__titles">
                <h3 className="skills__name">Software Development</h3>
                  <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>
            
            <div className="skills_data">
              <div className="skills__titles">
                <h3 className="skills__name">Data Analysis</h3>
                  <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage skill2"></span>
              </div>
            </div>
            
            <div className="skills_data">
              <div className="skills__titles">
                <h3 className="skills__name">Website Development</h3>
                  <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage skill3"></span>
              </div>
            </div>

            

          </div>
        </div>
      </div>

      <AboutBox/>
    </section>
  )
}

export default About
