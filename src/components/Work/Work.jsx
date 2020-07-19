import React from 'react';
import WorkItem from './WorkItem';
import './Work.scss';

export default function Work({ work }) {
  const workItems = work.map(item => (
    <WorkItem key={item.company} experience={item} />
  ));

  return (
    <div className="portfolio__work">
      <h1 className="portfolio__work__header">Work</h1>
      <div className="portfolio__work__items">
        {workItems}
      </div>
    </div>
  )
}