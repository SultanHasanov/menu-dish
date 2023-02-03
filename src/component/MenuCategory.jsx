import axios from "axios";
import React, { useEffect } from "react";

const MenuCategory = ({category, setCategory, setDish}) => {
  const API = `http://localhost:3001/menuCategories`;

  const getMenu = async () => {
    const { data } = await axios.get(API);
    setCategory(data);
  };

  useEffect(() => {
    getMenu();
  }, []);

  const handleCategoryClick = (catCode) => {
    const foundDish = category.find((dish) => dish.catCode === catCode);
    if (foundDish !== undefined) {
      setDish(foundDish.menuItems);
    }
  };

  return (
    <>
      {category.map((el) => {
        return (
          <div key={el.catCode}>
            <li onClick={() => handleCategoryClick(el.catCode)}>
              {el.catName}
            </li>
          </div>
        );
      })}
    </>
  );
};

export default MenuCategory;
