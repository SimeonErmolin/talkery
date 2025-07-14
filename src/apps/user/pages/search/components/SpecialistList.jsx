import React from 'react';
import { Link } from 'react-router';
import { useGetSpecialists } from '../../../../../shared/api/api.js';
import TemplateCatalogCard from '../../../../../shared/components/TemplateSpecialistCard/TemplateCatalogCard.jsx';

const SpecialistList = ({ activeTab, userType }) => {
  const { data: specialists, isLoading } = useGetSpecialists();

  if (isLoading) return <p>Загрузка...</p>;

  const specialistsList = specialists[activeTab];

  return (
    <div className="cards-container">
      {specialistsList.slice(0, 3).map((item) => (
        <TemplateCatalogCard
          key={item.id}
          id={item.id}
          place={'catalog'}
          userType={userType}
        />
      ))}

      {activeTab === 'psychologists' ? (
        <div className="quiz-card">
          <p>
            Знайдіть ідеального <br /> психолога за 3 хвилини
          </p>
          <Link to={'/quiz'}>
            <button className="button primary">Пройти анкету</button>
          </Link>
        </div>
      ) : null}

      {specialistsList.slice(3).map((item) => (
        <TemplateCatalogCard
          key={item.id}
          id={item.id}
          place={'catalog'}
          userType={userType}
        />
      ))}
    </div>
  );
};

export default SpecialistList;
