import React from 'react';
import FilterSection from './FilterSection.jsx';

const DropdownFilter = ({
  data,
  toggleExpand,
  expanded,
  selectedItems,
  toggleSelect,
}) => {
  return (
    <div className="drop-list">
      {data.map((topic) => (
        <div key={topic.category} className="drop-item">
          <div
            className="drop-item__header"
            onClick={() => toggleExpand(topic.category)}
          >
            <p>{topic.category}</p>
            <button>
              <img
                src={`/src/assets/icons/search/modal/${expanded[topic.category] ? 'minus' : 'plus'}.svg`}
                alt=""
              />
            </button>
          </div>
          {expanded[topic.category] && (
            <FilterSection
              itemsList={topic.items}
              selectedItems={selectedItems}
              toggleSelect={toggleSelect}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default DropdownFilter;
