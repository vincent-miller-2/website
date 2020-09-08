import React from 'react';
import { NavLink } from 'react-router-dom';
import { push as Menu } from 'react-burger-menu';
import { Icon } from 'semantic-ui-react';
import './Sidebar.scss';

export default function Sidebar() {

  return (
    <Menu pageWrapId="page-wrap" outerContainerId="outer-container">
      <NavLink
        exact
        to="/"
        activeStyle={{
          fontWeight: "bold",
          color: "gray"
        }}
      >
        <Icon name='user' />
        About Me
      </NavLink>

      <NavLink
        to="/work"
        activeStyle={{
          fontWeight: "bold",
          color: "gray"
        }}
      >
        <Icon name='briefcase' />
        Work
      </NavLink>

      <NavLink
        to="/education"
        activeStyle={{
          fontWeight: "bold",
          color: "gray"
        }}
      >
        <Icon name='graduation cap' />
        Education
      </NavLink>

      <a
        href="https://docs.google.com/document/d/1G_gXDmzU_6OTMR9ZbY_wKsNrpNVhROaZGkK2DWgcUCo/edit?usp=sharing"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Icon name='file alternate' />
        Resume
      </a>

      {/* <Menu.Item header position="right">
            <Image size='mini' src={user.basics.picture} alt="self portrait" style={{borderRadius: '50%' }} />
            Vincent Miller - Full Stack Developer
          </Menu.Item> */}
    </Menu>
  );
}
