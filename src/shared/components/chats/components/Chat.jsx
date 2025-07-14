import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useModal } from '../../../hooks/useModal.js';
import { useGetCorrespondenceById } from '../../../hooks/useGetCorrespondenceById.jsx';
import ModalLayout from '../../ModalLayout/ModalLayout.jsx';
import RegistrationTransferModal from '../../RegistrationTransferModal/RegistrationTransferModal.jsx';

const Chat = ({ userType }) => {
  const { id } = useParams();

  const { modalIsOpened, openModal, closeModal } = useModal();
  const [userInput, setUserInput] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [chatData, setChatData] = useState({
    name: '',
    online: false,
    avatar: null,
    date: '',
    messages: [],
  });

  const { loadingElement, navigate, data } = useGetCorrespondenceById(
    Number(id)
  );

  useEffect(() => {
    setChatData(data);
  }, [data]);

  if (loadingElement || !chatData) return loadingElement;

  const {
    name = '',
    online = false,
    avatar = null,
    date = '',
    messages = [],
  } = chatData;

  function sendMessage(e) {
    e.preventDefault();

    if (userInput === '') return;

    const templateData = {
      author: 'me',
      message: userInput,
      file: selectedFile ? selectedFile.name : null,
    };

    setChatData({
      ...chatData,
      messages: [...chatData.messages, templateData],
    });

    setUserInput('');
    setSelectedFile(null);
  }

  return (
    <div className="chat">
      <div className="header">
        <button onClick={() => navigate(-1)} className="back-btn">
          <img src="/assets/messages/arrow-left.svg" alt="" />
        </button>

        <div className="">
          <h3 className="name">{name}</h3>
          <p className="is-online">{online === false ? 'Офлайн' : 'Онлайн'}</p>
        </div>

        <img src={avatar} alt="" className="avatar" />
      </div>

      {userType === 'client' && (
        <div className="book-session">
          <p>Забронюйте сесію у фахівця</p>
          <button className="button" onClick={openModal}>
            Забронювати
          </button>
        </div>
      )}

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
              <p className="message-text">{message.message}</p>
            </div>
          ))}
        </div>
      </div>

      <form className="chat-inputs" onSubmit={sendMessage}>
        <input
          type="file"
          ref={(ref) => (window._fileInput = ref)}
          style={{ display: 'none' }}
          onChange={(e) => {
            if (e.target.files.length > 0) {
              const file = e.target.files[0];
              setSelectedFile(file);
            }
          }}
        />

        <button
          type="button"
          className="add-files"
          onClick={() => {
            window._fileInput && window._fileInput.click();
          }}
        >
          <img src="/assets/messages/add-files-btn.svg" alt="" />
        </button>
        <input
          type="text"
          placeholder="Введіть ваше повідомлення"
          className="chat-input"
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
          autoFocus
        />

        <button className="send-btn">
          <img src="/assets/messages/send-btn.svg" alt="" />
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
