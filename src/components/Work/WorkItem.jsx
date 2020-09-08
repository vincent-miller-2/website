import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

export default function WorkItem({ experience }) {
  const workItems = experience.highlights.map(highlight => (
    <li className="portfolio__work__items__item__highlights__highlight">{highlight}</li>
  ));

  return (
    <Segment className="portfolio__work__items__item">
      <div className="portfolio__work__items__item__headers">
        <Header as='h2'>{experience.company}</Header>
        <Header as='h3'>{experience.position}</Header>
      </div>
      <div className="portfolio__work__items__item__basic">
        <span className="portfolio__work__items__item__basic__location">
          {experience.location}
        </span>
        <span className="portfolio__work__items__item__basic__time">
          {`${experience.start.month}/${experience.start.year} - ${experience.isCurrentRole ? 'present' : `${experience.end.month}/${experience.end.year}`}`}
        </span>
      </div>
      <ul className="portfolio__work__items__item__highlights">
        {workItems}
      </ul>
    </Segment>
  )
}