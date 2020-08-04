import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import EducationItem from './EducationItem';
import './Education.scss';

export default function Education({ education }) {
  const educationItems = education.map(item => (
    <EducationItem key={item.institution} education={item} />
  ));

  return (
    <main className="portfolio__education">
      <Segment>
        <Grid
          celled='internally'
          columns='equal'
          stackable
          textAlign="center"
          className="portfolio__education__items"
        >
          <Grid.Row verticalAlign='middle'>
            {educationItems}
          </Grid.Row>
        </Grid>
      </Segment>
    </main>
  )
}