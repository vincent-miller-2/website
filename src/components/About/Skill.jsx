import React from 'react';
import { Label } from 'semantic-ui-react';

export default function Skill({ skill }) {
  return (
    <div className="portfolio__about__skills__skill">
      <Label>{skill.name}</Label>
    </div>
  )
}