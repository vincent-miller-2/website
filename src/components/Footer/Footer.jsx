import React from 'react';
import { Segment, Container, Button } from 'semantic-ui-react';
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="portfolio__footer">
      <Segment inverted vertical className="portfolio__footer__content">
        <Container textAlign='center'>
          <p>Copyright © 2020 Vincent Miller</p>
          <Button
            as="a"
            href="https://www.linkedin.com/in/vincent-miller/"
            target="_blank"
            rel="noreferrer noopener"
            circular
            color="linkedin"
            icon="linkedin"
          />
          <Button
            as="a"
            href="mailto:vincentmiller027@gmail.com?subject=Hello, Nice To Meet You"
            circular
            color="teal"
            icon="mail"
          />
        </Container>
      </Segment>
    </footer>
  )
}