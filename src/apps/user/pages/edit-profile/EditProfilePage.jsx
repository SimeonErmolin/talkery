import React from 'react';
import './EditProfilePage.scss';
import HeaderGoToBack from '../../../../shared/components/HeaderGoToBack.jsx';

const EditProfilePage = () => {
  return (
    <div className={'app-container'}>
      <HeaderGoToBack />
      <div className={'user-edit'}>
        <button className="avatar">
          <img src="/src/assets/mockPhotos/Alex.png" alt="" />
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
          <div className="input-form">
            <h2 className="label">Ваш вік</h2>
            <div className="input-wrapper">
              <input type="text" placeholder="Вкажіть свій у цифрах" />
            </div>
          </div>
        </div>

        <div className="confirm-block">
          <button className="button primary">Зберегти</button>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
