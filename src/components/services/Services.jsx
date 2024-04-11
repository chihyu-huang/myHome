import React from 'react';
import "./services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data =[
  {
    id: 1,
    image: Image1,
    title: "Software Development",
    description: "Equipped to build user-friendly and functional mobile applications. From sleek interfaces to complex functionalities to ensure your app meets the highest standards",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description: "Craft websites as powerful marketing tools, delivering memorable brand experiences. With responsive designs and robust backend systems, I create sites that leave a lasting impression",
  },
  {
    id: 3,
    image: Image3,
    title: "Data Analysis",
    description: "Offer unique and creative designs tailored to the needs of brands. Uncovering valuable insights for informed decision-making and providing actionable recommendations to drive your business forward",
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
