import React from 'react';

import avatar from '../../images/avatar.png';
import './About.css';

function About() {
  return (
    <div className="about side-padding">
      <div className="about__avatar">
        <img className="about__avatar-img" src={avatar} alt="avatar" />
      </div>
      <div className="about__content">
        <h1 className="about__title">Об авторе</h1>
        <p className="about__text-block">
          Это блок с описанием автора проекта. Здесь следует указать, как вас
          зовут, чем вы занимаетесь, какими технологиями разработки владеете.
        </p>
        <p className="about__text-block">
          Также можно рассказать о процессе обучения в Практикуме, чему вы тут
          научились, и чем можете помочь потенциальным заказчикам.
        </p>
      </div>
    </div>
  );
}

export default About;
