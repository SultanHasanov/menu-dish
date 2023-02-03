import React, { useState } from "react";

const GetDish = ({ dish, setProductId }) => {
  const [count, setCount] = useState(0);

  const plusClick = (itemCode) => {
    // setProductId(el.itemCode);

    const foundDish = dish.find((dish) => dish.itemCode === itemCode);
    console.log({foundDish});
    if (foundDish !== undefined) {
      setCount((prev) => prev + 1);
    }
  };
  const minusClick = (itemCode) => {
    //  setProductId(el.itemCode);

    const foundDish = dish.find((dish) => dish.itemCode === itemCode);
    console.log({ itemCode });
    if (foundDish !== undefined) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <>
      {dish.map((el) => {
        return (
          <div className="card" key={el.itemCode}>
            {count > 0 && <div className="count">{count}</div>}

            <div className="photo">
              <img src={el.url} />
            </div>
            <div className="card_desc">
              <span style={{fontWeight: 'bold', marginTop: "5px"}}>{el.itemName}</span>
              <span>{el.itemDescription}</span>
              <span>{el.itemWeight}гр</span>
              <div style={{marginBottom: '10px'}}>
                <button  onClick={() => minusClick(el.itemCode)}>-</button>
                <span style={{color: 'blue', padding: '15px', fontSize: '24px'}}>{el.itemPrice}₽</span>
                <button onClick={() => plusClick(el.itemCode)}>+</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default GetDish;
