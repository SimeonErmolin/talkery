import React from 'react';
import './TemplateSpecialistCard.scss';

const TemplateSpecialistCard = ({
  date,
  time,
  isOnline,
  available,
  notAvailable,
  passed,
  cancelled,
}) => {
  let btn = undefined;

  if (available) {
    btn = <button className="button primary solid">Почати сеанс</button>;
  } else if (notAvailable) {
    btn = (
      <button className="button disabled solid">Сеанс ще недоступний</button>
    );
  } else if (passed) {
    btn = <button className="button gray solid">Записатись знову</button>;
  } else if (cancelled) {
    btn = undefined;
  }

  let contextMenu = <span className="context-menu">...</span>;
  if (passed) {
    contextMenu = <span className="session-status">успішно</span>;
  } else if (cancelled) {
    contextMenu = <span className="session-status cancelled">скасовано</span>;
  }

  return (
    <div>
      <p className="sheduled-date">{date}</p>
      <div className={'specialist-card'}>
        <span>
          {cancelled ? (
            <img
              src="/src/assets/mockPhotos/Katerina.jpeg"
              alt="avatar"
              className="avatar cancelled"
            />
          ) : (
            <img
              src="/src/assets/mockPhotos/Katerina.jpeg"
              alt="avatar"
              className="avatar"
            />
          )}

          <div>
            {cancelled ? (
              <p className="name cancelled">Катерина Іваненко</p>
            ) : (
              <p className="name">Катерина Іваненко</p>
            )}
            {cancelled ? (
              <p className="description cancelled">Психолог, Психотерапевт</p>
            ) : (
              <p className="description">Психолог, Психотерапевт</p>
            )}
          </div>
          {contextMenu}
        </span>

        <span>
          {cancelled ? (
            <p className="scheduled-time cancelled">{time}</p>
          ) : (
            <p className="scheduled-time">{time}</p>
          )}
          <p className="status">{isOnline ? 'онлайн' : ''}</p>
        </span>

        {btn}
      </div>
    </div>
  );
};

export default TemplateSpecialistCard;
