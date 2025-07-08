import React from 'react';

const FilterSection = ({
  title,
  specificClassH3,
  specificClassDiv,
  itemsList,
  selectedItems,
  toggleSelect,
}) => {
  return (
    <div>
      {title ? (
        <h3 className={`item-header ${specificClassH3}`}>{title}</h3>
      ) : null}
      <div className={`item__list ${specificClassDiv}`}>
        {itemsList.map((item) => (
          <label key={item} className="item">
            <input
              type="checkbox"
              checked={selectedItems.includes(item)}
              onChange={() => toggleSelect(item)}
            />
            <span className="checkbox"></span>
            {item}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
