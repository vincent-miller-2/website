import React from 'react';
import { Header, Image, Grid, Container } from 'semantic-ui-react';
import OhioStateImage from '../../Images/ohiostate.png';
import TEImage from '../../Images/techelevator.jpg';

export default function EducationItem({ education }) {
  const image = education.website === 'TEImage' ? TEImage : OhioStateImage;

  return (
    <Grid.Column className="portfolio__education__items__item">
      <Container text>
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
      </Container>
    </Grid.Column>
  )
}