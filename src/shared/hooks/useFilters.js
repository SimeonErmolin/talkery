import { useState } from 'react';

const useFilters = () => {
  const [expanded, setExpanded] = useState({});
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleExpand = (category) => {
    setExpanded((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const toggleSelect = (item) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const clearFilters = () => {
    setSelectedItems([]);
  };

  return {
    expanded,
    selectedItems,
    toggleExpand,
    toggleSelect,
    clearFilters,
  };
};

export default useFilters;
