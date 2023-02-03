import React from "react";

const GetDish = ({ dish, setDish }) => {
  const plusClick = (itemCode) => {
    const result = dish.map((item) => {
      if (item.itemCode === itemCode) {
        item.quantity += 1;
      }
      return item;
    });
    setDish(result);
  };
  const minusClick = (itemCode) => {
    const result = dish.map((item) => {
      if (item.itemCode === itemCode) {
        item.quantity -= 1;
      }
      return item;
    });
    setDish(result);
  };

  return (
    <>
      {dish.map((el) => {
        return (
          <div className="card" key={el.itemCode}>
            {el.quantity > 0 && <div className="count">{el.quantity}</div>}
            <div className="photo">
              <img src={el.url} />
            </div>
            <div className="card_desc">
              <span style={{ fontWeight: "bold", marginTop: "5px" }}>
                {el.itemName}
              </span>
              <span>{el.itemDescription}</span>
              <span>{el.itemWeight}гр</span>
              <div style={{ marginBottom: "10px" }}>
                <button onClick={() => minusClick(el.itemCode)}>-</button>
                <span
                  style={{ color: "blue", padding: "15px", fontSize: "24px" }}
                >
                  {el.itemPrice}₽
                </span>
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
