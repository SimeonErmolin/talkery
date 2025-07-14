import React from 'react';
import './ChatsPage.scss';
import { Link } from 'react-router';
import { useGetMessagesById } from '../../api/api.js';
import NoDataMessage from '../NoDataMessage.jsx';

const ChatsPage = ({ userId }) => {
  const { data: messages, isLoading } = useGetMessagesById(userId);
  if (isLoading) return <p>...Loading</p>;

  return (
    <div className="chats-page">
      <h1>Чат</h1>

      {messages?.length > 0 ? (
        <div className="chat-messages">
          {messages.map((message) => (
            <div className="chat-messages__item" key={message.id}>
              <img src={message.avatar} alt="" className="avatar" />

              <Link to={`/chats/${message.id}`}>
                <div className="main-block">
                  <div className="name-block">
                    <p className="name">{message.name}</p>
                    {message.count === 0 ? (
                      ''
                    ) : (
                      <p className="messages-count">{message.count}</p>
                    )}
                  </div>

                  <p className="message-text">{message.message}</p>

                  <span className="date-time">
                    <p>{message.date}</p>
                    <p>{message.time}</p>
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <NoDataMessage place={'chats'} margin />
      )}
    </div>
  );
};

export default ChatsPage;
