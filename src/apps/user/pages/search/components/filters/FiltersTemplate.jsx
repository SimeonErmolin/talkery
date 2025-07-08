import React from 'react';
import FilterSection from './FilterSection.jsx';
import DropdownFilter from './DropdownFilter.jsx';

const FiltersTemplate = ({
  sections,
  selectedItems,
  toggleExpand,
  expanded,
  toggleSelect,
  clearFilters,
}) => {
  return (
    <div className="filters-modal">
      <div className="filters-modal__body">
        <div className="header">
          <h3>Фільтр</h3>
        </div>

        {sections.map((section, index) => (
          <div key={index}>
            {section.type === 'dropdown' ? (
              <>
                <h3>{section.title}</h3>
                <p className="choice-description">{section.description}</p>
                <DropdownFilter
                  data={section.items}
                  toggleExpand={toggleExpand}
                  expanded={expanded}
                  selectedItems={selectedItems}
                  toggleSelect={toggleSelect}
                />
              </>
            ) : (
              <FilterSection
                title={section.title}
                specificClassH3={section.classNameH3}
                specificClassDiv={section.classNameDiv}
                itemsList={section.items}
                selectedItems={selectedItems}
                toggleSelect={toggleSelect}
              />
            )}
          </div>
        ))}
      </div>

      <div className="bottom-buttons">
        <button className="button secondary" onClick={clearFilters}>
          Очистити
        </button>
        <button className="button primary">Застосувати</button>
      </div>
    </div>
  );
};

export default FiltersTemplate;
