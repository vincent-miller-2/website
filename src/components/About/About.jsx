import React from 'react';
import Skill from './Skill';
import './About.scss';

export default function About({ user }) {
  const skills = user.skills.map(skill => (
    <Skill skill={skill} />
  ));

  return (
    <div className="portfolio__about">
      <h1 className="portfolio__about__header">About Me</h1>

      <div className="portfolio__about__basics">
        <img className="portfolio__about__basics__image" src={user.basics.picture} alt="self portrait" />
        <div className="portfolio__about__basics__info">
          <h1 className="portfolio__about__basics__info__name">{user.basics.name}</h1>
          <h3 className="portfolio__about__basics__info__role">{user.basics.label}</h3>
          <h3 className="portfolio__about__basics__info__email">{user.basics.email}</h3>
          <h3 className="portfolio__about__basics__info__phone">{user.basics.phone}</h3>
        </div>
      </div>

      <div className="portfolio__about__skills">
        {skills}
      </div>
    </div>
  )
}