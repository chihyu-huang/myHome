import React from 'react';
import "./home.css";
import Me from "../../assets/Chih-Yu Huang.svg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        
        <img src={Me} alt="" className="home__img rounded" />
        <h1 className="home_name">Chih-Yu (Joy) Huang</h1>
        <span className="home_education">Software Engineer <br></br>Dublin, Ireland</span>

        <HeaderSocials/>

        <a href="#contact" className="btn">Contact Me</a>
        
        <ScrollDown/>

      </div>
    </section>
  )
}

export default Home
