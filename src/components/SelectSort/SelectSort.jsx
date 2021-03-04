import React from "react";

const SelectSort = ({ handleSortChange, sort }) => {
  return (
    <select
      name="sort"
      id="sort"
      className="form-select"
      aria-label="Sort"
      value={sort}
      onChange={handleSortChange}
    >
      <option value="">По умолчанию</option>
      <option value="lowest">Цена (низкая > высокая)</option>
      <option value="highest">Цена (высокая > низкая)</option>
    </select>
  );
};

export default SelectSort;
