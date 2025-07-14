import React from 'react';
import './ClientsPage.scss';
import { useGetClientsById } from '../../../../shared/api/api.js';
import NoDataMessage from '../../../../shared/components/NoDataMessage.jsx';

const ClientsPage = ({ userId }) => {
  const { data: clientsData, isLoading } = useGetClientsById(userId);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="ClientsPage">
      <div className="ClientsPage__header">
        <p className="ClientsPage__header--title">Мої клієнти</p>

        <div className="ClientsPage__header--total-clients">
          <img src="/assets/icons/clients.svg" alt="" />
          <p className="count">{clientsData.totalClients || '0'}</p>
          <p className="desc">
            всього <br />
            клієнтів
          </p>
        </div>
      </div>

      {clientsData?.list?.length > 0 ? (
        <>
          <div className="ClientsPage__body">
            {clientsData.list.map((client) => (
              <div className="client-item" key={client.id}>
                <div className="client-item__user-info">
                  <img src={client.avatar} alt="" />

                  <div className="client-item__user-info--user">
                    <p>{client.name}</p>
                    <p>{client.age}</p>
                  </div>
                </div>

                <div className="client-item__payment-info">
                  <img
                    src="/assets/icons/specialist-card/wallet.svg"
                    alt=""
                    className="client-item__payment-info--wallet"
                  />
                  <p className="client-item__payment-info--cost">
                    {client.cost}
                  </p>
                  <img
                    src="/assets/icons/new-chat.svg"
                    alt=""
                    className="client-item__payment-info--chat"
                  />
                </div>
              </div>
            ))}
          </div>

          <button className="ClientsPage__btn">Показати більше</button>
        </>
      ) : (
        <NoDataMessage place={'data on clients'} margin />
      )}
    </div>
  );
};

export default ClientsPage;
