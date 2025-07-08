import React from 'react';
import './TemplateCatalogCard.scss';
import { Link } from 'react-router';
import { useSpecialistById } from '../../hooks/useSpecialistById';
import Achievements from './components/Achievements.jsx';
import Avatar from './components/Avatar.jsx';
import Overview from './components/Overview.jsx';
import Info from './components/Info.jsx';

const TemplateCatalogCard = ({ id, place }) => {
  const { specialist, isLoading } = useSpecialistById(id);

  if (isLoading || !specialist)
    return <div className="catalog-card--skeleton">...Loading...</div>;

  const {
    selection,
    avatar,
    name,
    verified,
    experience,
    specialties,
    records,
    watching,
    cost,
    sessions,
    likes,
  } = specialist;

  return (
    <article className={`catalog-card ${place === 'card' ? '' : selection}`}>
      <header className="catalog-card__header">
        <Avatar avatar={avatar} />

        <Info
          {...{
            name,
            verified,
            experience,
            specialties,
            records,
            watching,
          }}
        />
      </header>

      <Achievements selection={selection} />

      <Overview cost={cost} sessions={sessions} likes={likes} />

      <Link to={place === 'catalog' ? `/search/${id}` : `/chats`}>
        <button className="button primary catalog-card__button">
          {place === 'catalog' ? 'Подивитись профіль' : 'Написати фахівцю'}
        </button>
      </Link>
    </article>
  );
};

export default TemplateCatalogCard;
