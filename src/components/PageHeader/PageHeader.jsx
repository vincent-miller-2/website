import React from 'react';
import { useLocation } from "react-router-dom"
import { Segment, Header } from 'semantic-ui-react';
import './PageHeader.scss';

export default function PageHeader () {
  const location = useLocation().pathname;
  const headertext = location === '/' ? 'About Me' : location.charAt(1).toUpperCase() + location.slice(2)

  return (
    <Segment inverted vertical className="portfolio_header">
      <Header
        as="h1"
        content={headertext}
        inverted
      />
    </Segment>
  )
}