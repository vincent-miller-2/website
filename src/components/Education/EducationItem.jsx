import React from 'react';
import { Header, Image, Segment } from 'semantic-ui-react';
import OhioStateImage from '../../assets/images/ohiostate.png';
import TEImage from '../../assets/images/techelevator.jpg'

export default function EducationItem({ education }) {
  const image = education.website === 'TEImage' ? TEImage : OhioStateImage;

  return (
    <Segment text className="portfolio__education__items__item">
        <Image className="portfolio__education__items__item__image" src={image} wrapped ui={false} />
        <Header as='h2'>{education.institution}</Header>
        <Header as='h3'>{education.area}</Header>
        <div className="portfolio__education__items__item__basic">
          <span className="portfolio__education__items__item__basic__location">
            Columbus, OH
          </span>
          <span className="portfolio__education__items__item__basic__time">
            {`${education.start.month}/${education.start.year} - ${education.isCurrentRole ? 'present' : `${education.end.month}/${education.end.year}`}`}
          </span>
        </div>
        <p className="portfolio__education__items__item__descripton">{education.description}</p>
    </Segment>
  )
}