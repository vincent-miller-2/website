import React from 'react';
import { Container } from 'semantic-ui-react';
import WorkItem from './WorkItem';
import './Work.scss';

export default function Work({ work }) {
  const workItems = work.map(item => (
    <WorkItem key={item.company} experience={item} />
  ));

  return (
    <main className="portfolio__work">
      <Container text className="portfolio__work__items">
        {workItems}
      </Container>
    </main>
  )
}