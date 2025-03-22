import React, { useState } from "react";
import "./list.css";

const CategoriesToggle = () => {
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);

  const handleToggleCategories = () => {
    setIsCategoriesVisible(!isCategoriesVisible);
  };

  return (
    <li className="lbj2n6v">
      <button className="nvlm710" onClick={handleToggleCategories}>
        categories
      </button>

      {/* Conditional rendering of categories */}
      {isCategoriesVisible && (
        <ul className="categories-list">
          <li>Category 1</li>
          <li>Category 2</li>
          <li>Category 3</li>
          {/* Add more categories here */}
        </ul>
      )}
    </li>
  );
};

export default CategoriesToggle;
