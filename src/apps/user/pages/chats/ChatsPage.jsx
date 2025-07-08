import React from 'react';
import './ChatsPage.scss';
import { Link } from 'react-router';
import { useGetMessages } from '../../../../shared/hooks/api.js';
import NoDataMessage from '../../../../shared/components/NoDataMessage.jsx';

const ChatsPage = () => {
  const { data: messages, isLoading } = useGetMessages();

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
                  <pre>
                    <p className="message-text">{message.message}</p>
                  </pre>

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
