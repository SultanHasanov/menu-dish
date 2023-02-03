import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import GetDish from "./GetDish";

function App() {
  const [category, setCategory] = useState([]);
  const [dish, setDish] = useState([]);
  console.log({ dish });
  // const [count, setCount] = useState(0);
  const [categoryId, setCategoryId] = useState();
  const [productId, setProductId] = useState();

  const API = `http://localhost:3001/menuCategories`;

  const getMenu = async () => {
    const { data } = await axios.get(API);
    setCategory(data);
  };

  useEffect(() => {
    getMenu();
  }, []);

  useEffect(() => {
    const newObj = category?.map((el) => {
      if (el.catCode === categoryId) {
        return {
          ...el,
          menuItems: el.menuItems?.map((item) => {
            if (item.itemCode === productId) {
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            }
            return item;
          }),
        };
      }
      return el;
    });
    setCategory(newObj);
  }, [productId]);

  function handleDishClick(catCode) {
    const foundDish = category.find((dish) => dish.catCode === catCode);

    setCategoryId(catCode);

    if (foundDish !== undefined) {
      setDish(foundDish.menuItems);
    }
  }

  return (
    <div className="App">
      <div className="menu">
        {category.map((el) => {
          return (
            <div key={el.catCode}>
              <li onClick={() => handleDishClick(el.catCode)}>{el.catName}</li>
            </div>
          );
        })}
      </div>
      <div className="dish">
        <GetDish dish={dish} category={category} setProductId={setProductId} />
      </div>
    </div>
  );
}

export default App;
