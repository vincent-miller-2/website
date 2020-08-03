import React from 'react';
import { Container } from 'semantic-ui-react';
// import './Contact.scss';

export default function Contact({ user }) {

  return (
    <main className="portfolio__contact">
      <Container text>
        <h3 className="portfolio__contact__email">{user.basics.email}</h3>
        <h3 className="portfolio__contact__phone">{user.basics.phone}</h3>
      </Container>
    </main>
  )
}