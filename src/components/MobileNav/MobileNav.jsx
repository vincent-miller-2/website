import React, { useState } from 'react';
import { Container, Sidebar, Menu, Segment, Icon } from 'semantic-ui-react';
import { Link, useLocation } from "react-router-dom";
import AppContent from '../AppContent';
// import './Sidebar.scss';

export default function MobileNav({ user }) {
  const [sidebarOpened, setSideBar] = useState(false);
  const location = useLocation().pathname;

  const handleSidebarHide = () => setSideBar(false);
  const handleToggle = () => setSideBar(true);

  return (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation='overlay'
        inverted
        onHide={handleSidebarHide}
        vertical
        visible={sidebarOpened}
      >
        <Menu.Item
            name='about'
            active={location === '/'}
            onClick={handleSidebarHide}
          >
            <Link to='/'>About Me</Link>
          </Menu.Item>

          <Menu.Item
            name='work'
            active={location === '/work'}
            onClick={handleSidebarHide}
          >
            <Link to='/work'>Work</Link>
          </Menu.Item>

          <Menu.Item
            name='education'
            active={location === '/education'}
            onClick={handleSidebarHide}
          >
            <Link to='/education'>Education</Link>
          </Menu.Item>

          <Menu.Item
            name='resume'
          >
            <a
              href="https://docs.google.com/document/d/1G_gXDmzU_6OTMR9ZbY_wKsNrpNVhROaZGkK2DWgcUCo/edit?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
            >
              Resume
            </a>
          </Menu.Item>
      </Sidebar>

      <Sidebar.Pusher dimmed={sidebarOpened}>
        <Segment
          inverted
          textAlign='center'
          style={{ padding: '1em 0em' }}
          vertical
        >
          <Container>
            <Menu inverted pointing secondary size='large'>
              <Menu.Item onClick={handleToggle}>
                <Icon name='sidebar' />
              </Menu.Item>
              <Menu.Item header position="right">
                Vincent Miller - Full Stack Developer
              </Menu.Item>
            </Menu>
          </Container>
        </Segment>
        <AppContent user={user} />
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  )
}