import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { Container, Image, Menu } from 'semantic-ui-react';
import './Sidebar.scss';

export default function Sidebar({ user }) {
  const location = useLocation().pathname;

  return (
    <header className="portfolio__nav">
      <Menu inverted>
        <Container>
          <Menu.Item
            name='about'
            active={location === '/'}
          >
            <Link to='/'>About Me</Link>
          </Menu.Item>

          <Menu.Item
            name='work'
            active={location === '/work'}
          >
            <Link to='/work'>Work</Link>
          </Menu.Item>

          <Menu.Item
            name='contact'
            active={location === '/contact'}
          >
            <Link to='/contact'>Contact</Link>
          </Menu.Item>

          <Menu.Item header position="right">
            <Image size='mini' src={user.basics.picture} alt="self portrait" style={{borderRadius: '50%' }} />
            Vincent Miller - Full Stack Developer
          </Menu.Item>
        </Container>
      </Menu>
    </header>
  )
}