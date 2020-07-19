import React from 'react';

export default function Skill({ skill }) {
  return (
    <div className="portfolio__about__skills__skill">
      {skill.name}
    </div>
  )
}