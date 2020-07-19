import React from 'react';
import { Link } from "react-router-dom";
import './Sidebar.scss';

export default function Sidebar({ user }) {
  return (
    <nav className="portfolio__sidebar">
      <div className="portfolio__sidebar__static">
        <img className="portfolio__sidebar__static__image" src={user.basics.picture} alt="self portrait" />
        <h1 className="portfolio__sidebar__static__name">{user.basics.name}</h1>
        <p className="portfolio__sidebar__static__role">{user.basics.label}</p>
      </div>

      <div className="portfolio__sidebar__nav">
        <Link to='/'>About Me</Link>
        <Link to='/work'>Work</Link>
      </div>
    </nav>
  )
}