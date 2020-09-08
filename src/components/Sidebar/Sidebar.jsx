import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { push as Menu } from 'react-burger-menu';
import './Sidebar.scss';

export default function Sidebar({ user }) {
  const location = useLocation().pathname;

  return (
    <Menu pageWrapId="page-wrap" outerContainerId="outer-container">
      <Link to="/">About Me</Link>

      <Link to="/work">Work</Link>

      <Link to="/education">Education</Link>

      <a
        href="https://docs.google.com/document/d/1G_gXDmzU_6OTMR9ZbY_wKsNrpNVhROaZGkK2DWgcUCo/edit?usp=sharing"
        target="_blank"
        rel="noreferrer noopener"
      >
        Resume
      </a>

      {/* <Menu.Item header position="right">
            <Image size='mini' src={user.basics.picture} alt="self portrait" style={{borderRadius: '50%' }} />
            Vincent Miller - Full Stack Developer
          </Menu.Item> */}
    </Menu>
  );
}
