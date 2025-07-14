import React from 'react';
import './EditProfileTemplate.scss';
import HeaderGoToBack from '../HeaderGoToBack.jsx';

const EditProfileTemplate = ({ userType, avatarUrl }) => {
  return (
    <div className={'app-container'}>
      <HeaderGoToBack />
      <div className={'user-edit'}>
        <button className="avatar">
          <img src={avatarUrl} alt="" />
        </button>

        <div className="input-forms">
          <div className="input-form">
            <h2 className="label">Номер телефону</h2>
            <div className="input-wrapper">
              <div className="flag">
                <img src="/src/assets/language/ua-flag.png" alt="" />
              </div>
              <input type="text" placeholder="+380" />
            </div>
          </div>
          <div className="input-form">
            <h2 className="label">Email адреса</h2>
            <div className="input-wrapper">
              <input type="text" placeholder="Вкажіть свою email адресу" />
            </div>
          </div>
          <div className="input-form">
            <h2 className="label">Ім’я</h2>
            <div className="input-wrapper">
              <input type="text" placeholder="Вкажіть своє ім’я" />
            </div>
          </div>
          <div className="input-form">
            <h2 className="label">Прізвище</h2>
            <div className="input-wrapper">
              <input type="text" placeholder="Вкажіть своє прізвище" />
            </div>
          </div>

          {userType === 'client' && (
            <div className="input-form">
              <h2 className="label">Ваш вік</h2>
              <div className="input-wrapper">
                <input type="text" placeholder="Вкажіть свій у цифрах" />
              </div>
            </div>
          )}

          {userType === 'specialist' && (
            <>
              <div className="input-form">
                <h2 className="label">Криптовалютний рахунок для виплат</h2>
                <div className="input-wrapper">
                  <input
                    type="text"
                    placeholder="Вкажіть номер гаманця USDT TRC20"
                  />
                </div>
              </div>

              <div className="input-form">
                <h2 className="label">Банківський рахунок для виплат</h2>
                <div className="input-wrapper">
                  <input
                    type="text"
                    placeholder="Вкажіть номер банківської картки або IBAN"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        <div className="confirm-block">
          <button className="button primary">Зберегти</button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileTemplate;
