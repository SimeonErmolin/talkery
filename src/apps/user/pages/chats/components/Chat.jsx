import React from 'react';
import { useParams } from 'react-router';
import { useModal } from '../../../../../shared/hooks/useModal.js';
import { useGetCorrespondenceById } from '../../../../../shared/hooks/useGetCorrespondenceById.jsx';
import ModalLayout from '../../../../../shared/components/ModalLayout/ModalLayout.jsx';
import RegistrationTransferModal from '../../../../../shared/components/RegistrationTransferModal/RegistrationTransferModal.jsx';

const Chat = () => {
  const { id } = useParams();

  const { modalIsOpened, openModal, closeModal } = useModal();

  const { loadingElement, navigate, data } = useGetCorrespondenceById(
    Number(id)
  );

  if (loadingElement) return loadingElement;

  const { name, online, avatar, date, messages } = data;

  return (
    <div className="chat">
      <div className="header">
        <button onClick={() => navigate(-1)} className="back-btn">
          <img src="/src/assets/messages/arrow-left.svg" alt="" />
        </button>

        <div className="">
          <h3 className="name">{name}</h3>
          <p className="is-online">{online === false ? 'Офлайн' : 'Онлайн'}</p>
        </div>

        <img src={avatar} alt="" className="avatar" />
      </div>

      <div className="book-session">
        <p>Забронюйте сесію у фахівця</p>
        <button className="button" onClick={openModal}>
          Забронювати
        </button>
      </div>

      <div className="messages-window">
        <div className="date-wrapper">
          <p className="date">{date}</p>
        </div>

        <div className="messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.author === 'me' ? 'my-message' : ''}`}
            >
              <pre>
                <p className="message-text">{message.message}</p>
              </pre>
            </div>
          ))}
        </div>
      </div>

      <form className="chat-inputs">
        <button className="add-files">
          <img src="/src/assets/messages/add-files-btn.svg" alt="" />
        </button>
        <input
          type="text"
          placeholder="Введіть ваше повідомлення"
          className="chat-input"
        />
        <button className="send-btn">
          <img src="/src/assets/messages/send-btn.svg" alt="" />
        </button>
      </form>

      <ModalLayout
        onClose={closeModal}
        isOpen={modalIsOpened}
        contentClassName={'registration-transfer'}
      >
        <RegistrationTransferModal registration />
      </ModalLayout>
    </div>
  );
};

export default Chat;
