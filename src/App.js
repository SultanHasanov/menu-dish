import { useState } from "react";
import "./App.css";
import GetDish from "./component/GetDish";
import MenuCategory from "./component/MenuCategory";

function App() {
  const [category, setCategory] = useState([]);
  const [dish, setDish] = useState([]);

  return (
    <div className="App">
      <div className="menu">
        <MenuCategory
          category={category}
          setCategory={setCategory}
          setDish={setDish}
        />
      </div>
      <div className="dish">
        <GetDish dish={dish} setDish={setDish} />
      </div>
    </div>
  );
}

export default App;
