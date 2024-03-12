import React from 'react';
import "./services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data =[
  {
    id: 1,
    image: Image1,
    title: "Web Development",
    description: "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
  },
  {
    id: 2,
    image: Image2,
    title: "Mobile App Development",
    description: "Our versatile app developers are always equipped to build mobile applications that are user-friendly and functional.",
  },
  {
    id: 3,
    image: Image3,
    title: "Graphic Design",
    description: "We offer unique and creative designs that are made to suit your brand’s requirements.",
  },
];



  const Services = () => {
    return (
      <section className="services container section" id='services'>
        <h2 className="section__title">Services</h2>

        <div className="services__container grid">
          {data.map(({id, image, title, description}) => {
            return (
              <div className="services__card" key={id}>
                <img src={image} alt="" className="services__img" />

                <h3 className="services__title">{title}</h3>
                <p className="services__description">{description}</p>
              </div>

            )
          })}
        </div>
      </section>
    )
  }

export default Services
