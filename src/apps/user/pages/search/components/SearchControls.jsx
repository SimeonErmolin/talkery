import React from 'react';
import PsychologistFilters from './filters/PsychologistFilters.jsx';
import EsotericFilters from './filters/EsotericFilters.jsx';
import { useModal } from '../../../../../shared/hooks/useModal.js';
import ModalLayout from '../../../../../shared/components/ModalLayout/ModalLayout.jsx';

const SearchControls = ({ activeTab }) => {
  const { modalIsOpened, openModal, closeModal } = useModal();

  const filters = {
    psychologists: <PsychologistFilters />,
    esoterics: <EsotericFilters />,
  };

  return (
    <>
      <div className="search-buttons">
        <button className="filter-button" onClick={openModal}>
          Фільтри
        </button>
        <div className="search-buttons__input">
          <input
            type="text"
            className="filter-button search-input"
            placeholder="Пошук по імені"
          />
          <button className="search-button">
            <img src="/src/assets/icons/search/search.png" alt="search" />
          </button>
        </div>
        <hr />
      </div>
      <ModalLayout
        onClose={closeModal}
        isOpen={modalIsOpened}
        contentClassName={'filters-modal'}
      >
        {filters[activeTab]}
      </ModalLayout>
    </>
  );
};

export default SearchControls;
