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

        <div className="about__data">
          <div className="about__info">
            <p className="about__description">
              {/* I'm a software engineer based in Dublin, Irealnd specializing in building and designing exceptional,
               high-quality websites and applications. */}
               
               Hi, I'm Chih-Yu (Joy) Huang, a freelance software engineer based in Dublin, Ireland. 
               With a passion for crafting robust and scalable solutions, 
               I specialize in designing and developing microservices with a variety of technologies including Java, Python, JavaScript, PHP, React.js, and C#. 
               My dedication to quality and customer satisfaction drives me to deliver end-to-end solutions that meet the unique needs of each project. 
               

            </p>
            <a href="" className="btn" >Download CV</a>
          </div>

          {/* <div className="about__skills grid">
            
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
                <h3 className="skills__name">Website Development</h3>
                  <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage skill2"></span>
              </div>
            </div>
            
            <div className="skills_data">
              <div className="skills__titles">
                <h3 className="skills__name">Data Analysis</h3>
                  <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage skill3"></span>
              </div>
            </div>

            

          </div> */}
        </div>
      </div>

      <AboutBox/>
    </section>
  )
}

export default About
