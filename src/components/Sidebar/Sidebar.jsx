import React from 'react';
import { Link } from "react-router-dom";
// import './Sidebar.scss';

export default function Sidebar({ user }) {
  return (
    <aside>
      <Link to='/'>About Me</Link>
      <Link to='/work'>Work</Link>
    </aside>
  )
}