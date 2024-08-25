import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Category = ({ isVisible }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const navigate = useNavigate();

  const categories = {
    Electronics: ["Phone", "Computer", "Headphone", "Gamepad"],
    Sports: ["Fitness & Training", "Sports Equipment", "Football", "Jersey"],
    Beauty: ["Hair Care", "Skin Care", "Makeup", "Fragrance"],
    Fashion: ["Cloth", "Footwear", "Jewelry"],
    Office: ["Office Equipment", "Furniture", "Office Supplies"],
  };

  const handleSubCategoryClick = (category, subCategory) => {
    // Navigate to the sub-category route
    navigate(`/products/${category}/${subCategory}`);
  };

  if (!isVisible) return null;

  return (
    <div className="absolute top-100 bg-white shadow-lg p-4 rounded-md z-50 flex gap-4">
      <ul className="w-48 border-r">
        {Object.keys(categories).map((category) => (
          <li
            key={category}
            onMouseEnter={() => setActiveCategory(category)}
            className="p-2 hover:text-customred cursor-pointer"
          >
            <span>{category}</span>
          </li>
        ))}
      </ul>
      <ul className="w-48 ml-4">
        {activeCategory &&
          categories[activeCategory].map((subCategory) => (
            <li
              key={subCategory}
              onClick={() => handleSubCategoryClick(activeCategory, subCategory)}
              className="p-2 hover:text-customred cursor-pointer"
            >
              <em>{subCategory}</em>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Category;
