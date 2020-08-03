import React from 'react';
import { Container, Header, Label, Card, Button, Segment } from 'semantic-ui-react';
import Skill from './Skill';
import './About.scss';

export default function About({ user }) {
  const skills = user.skills.map(skill => (
    <Skill skill={skill} />
  ));

  return (
    <main className="portfolio__about">
      <Container text>
        <Segment className="portfolio__about__bio">
          <Header as='h2'>Full stack developer with an eye for detail and writing quality code</Header>
          <p>
            I am a dedicated full stack web developer who has worked closely with clients on projects that include building a new website for a large national company.
            Also, I have a knack for learning new technologies on the fly and have in depth experience working on both front and back end components of an application.
          </p>
          <p>
            Over the past few years, as a consultant I have multiple jobs daily which have me touch almost all aspects of the software development life cycle.
            I have consistently been working as a true full stack developer. I have absolute dedication to all of my work, which includes taking any recommendations and mentoring to make myself a better developer.
          </p>
        </Segment>

        <Card.Group centered>
          <Card>
            <Card.Content>
              <Card.Header>Skills Include:</Card.Header>
              <Label.Group size="large" className="portfolio__about__skills">
                {skills}
              </Label.Group>
            </Card.Content>
          </Card>
          <Card className="portfolio__about__contact">
            <Card.Content>
              <Card.Header>Contact</Card.Header>
              <Card.Description className="portfolio__about__contact__link">
                <Button
                  as="a"
                  href={`mailto:${user.basics.emai}?subject=Hello, Nice To Meet You`}
                  circular
                  color="teal"
                  icon="mail"
                />
                <a href={`mailto:${user.basics.emai}?subject=Hello, Nice To Meet You`}>{user.basics.email}</a>
              </Card.Description>
              <Card.Description className="portfolio__about__contact__link">
                <Button
                  as="a"
                  href="https://www.linkedin.com/in/vincent-miller/"
                  target="_blank"
                  rel="noreferrer noopener"
                  circular
                  color="linkedin"
                  icon="linkedin"
                />
                <a href="https://www.linkedin.com/in/vincent-miller/" target="_blank" rel="noreferrer noopener">linkedin.com/in/vincent-miller</a>
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
        
      </Container>
    </main>
  )
}