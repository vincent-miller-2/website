import React from 'react';
import './Header.scss';

export default function Header({ user }) {
  return (
    <header className="portfolio__header">
      <img className="portfolio__header__image" src={user.basics.picture} alt="self portrait" />
      <div className="portfolio__header__info">
        <h1 className="portfolio__header__info__name">{user.basics.name}</h1>
        <h3 className="portfolio__header__info__role">{user.basics.label}</h3>
        <h3 className="portfolio__header__info__location">{user.basics.region}</h3>
        <h3 className="portfolio__header__info__email">{user.basics.email}</h3>
        <h3 className="portfolio__header__info__phone">{user.basics.phone}</h3>
      </div>
    </header>
  )
}