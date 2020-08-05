import React from 'react';
import { Container } from 'semantic-ui-react';
import EducationItem from './EducationItem';
import './Education.scss';

export default function Education({ education }) {
  const educationItems = education.map(item => (
    <EducationItem key={item.institution} education={item} />
  ));

  return (
    <main className="portfolio__education">
      <Container text className="portfolio__education__items">
        {educationItems}
      </Container>
    </main>
  )
}