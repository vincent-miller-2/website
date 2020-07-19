import React from 'react';

export default function WorkItem({ experience }) {
  const workItems = experience.highlights.map(highlight => (
    <li className="portfolio__work__items__item__highlights__highlight">{highlight}</li>
  ));

  return (
    <div className="portfolio__work__items__item">
      <h1>{experience.company}</h1>
      <h3>{experience.position}</h3>
      <div className="portfolio__work__items__item__basic">
        <p>{experience.location}</p>
        <p>{`${experience.start.month}/${experience.start.year} - ${experience.isCurrentRole ? 'present' : `${experience.end.month}/${experience.end.year}`}`}</p>
      </div>
      <ul className="portfolio__work__items__item__highlights">
        {workItems}
      </ul>
    </div>
  )
}