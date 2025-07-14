import React, { useState } from 'react';
import RegTransMenu from './RegTransMenu.jsx';
import { useModal } from '../../../hooks/useModal.js';
import ModalLayout from '../../ModalLayout/ModalLayout.jsx';
import RegistrationTransferModal from '../../RegistrationTransferModal/RegistrationTransferModal.jsx';

const TemplateSpecialistCard = ({
  userType,
  date,
  avatar,
  name,
  role,
  time,
  session,
  status,
  cost,
  experience,
  likes,
}) => {
  const { modalIsOpened, openModal, closeModal } = useModal();
  const [isRegTransOpen, setIsRegTransOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  const openRegModal = () => {
    setModalType('registration');
    openModal();
  };

  const openTransferModal = () => {
    setModalType('transfer');
    openModal();
  };

  return (
    <div className="template-specialist-card">
      {userType === 'client' ? (
        <p className="scheduled-date">{date}</p>
      ) : (
        <br />
      )}

      <div className="specialist-card">
        <div className="specialist-content">
          <div className="specialist-about">
            <img
              src={avatar}
              alt=""
              className={`avatar ${status === 'cancelled' ? 'cancelled' : ''}`}
            />
            <div className="specialist-details">
              <p
                className={`specialist-name ${status === 'cancelled' ? 'cancelled' : ''}`}
              >
                {name}
              </p>

              {userType === 'client' ? (
                <p
                  className={`specialist-role ${status === 'cancelled' ? 'cancelled' : ''}`}
                >
                  {role}
                </p>
              ) : (
                <div className="specialist-date-time">
                  <p
                    className={`specialist-role ${status === 'cancelled' ? 'cancelled' : ''}`}
                  >
                    {date}
                  </p>
                  <p
                    className={`specialist-role ${status === 'cancelled' ? 'cancelled' : ''}`}
                  >
                    {time}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="session-status-wrapper">
            {status === 'passed' ? (
              <span className="session-status success">успішно</span>
            ) : status === 'cancelled' ? (
              <span className="session-status cancelled">скасовано</span>
            ) : status === 'available' || status === 'notAvailable' ? (
              <button
                className="context-menu"
                onClick={() => setIsRegTransOpen(true)}
              >
                ...
              </button>
            ) : null}
          </div>
        </div>

        <div className="specialist-footer">
          {userType === 'client' && (
            <div className="schedule-info">
              <p
                className={`scheduled-time ${status === 'cancelled' ? 'cancelled' : ''}`}
              >
                {time}
              </p>
              <p className="session-mode">{session}</p>
            </div>
          )}

          {userType === 'specialist' &&
          status !== 'passed' &&
          status !== 'cancelled' ? (
            <br />
          ) : null}

          {status === 'reserve' ? (
            <section className="specialist-info">
              <div className="specialist-info__item">
                <img src="/assets/icons/specialist-card/wallet.svg" alt="" />
                <p>{cost}</p>
              </div>
              <div className="specialist-info__item">
                <img src="/assets/icons/specialist-card/video.svg" alt="" />
                <p>{experience}</p>
              </div>
              <div className="specialist-info__item">
                <img src="/assets/icons/specialist-card/like.svg" alt="" />
                <p>{likes} відгуків</p>
              </div>
            </section>
          ) : null}

          {status === 'available' ? (
            <button className="button primary solid">Почати сеанс</button>
          ) : status === 'notAvailable' ? (
            <button className="button disabled solid">
              Сеанс ще недоступний
            </button>
          ) : status === 'passed' ? (
            userType === 'client' && (
              <button className="button gray solid" onClick={openRegModal}>
                Записатись знову
              </button>
            )
          ) : status === 'reserve' ? (
            <button className="button primary solid" onClick={openRegModal}>
              Забронювати сесію
            </button>
          ) : null}
        </div>
      </div>

      <RegTransMenu
        isOpen={isRegTransOpen}
        onClose={() => setIsRegTransOpen(false)}
        openTransferModal={openTransferModal}
      />

      <ModalLayout
        isOpen={modalIsOpened}
        onClose={closeModal}
        contentClassName={'registration-transfer'}
      >
        {modalType === 'registration' && (
          <RegistrationTransferModal registration />
        )}
        {modalType === 'transfer' && (
          <RegistrationTransferModal userType={userType} />
        )}
      </ModalLayout>
    </div>
  );
};

export default TemplateSpecialistCard;
