import React, { useState } from "react";
import "./App.css";
import Card from "./components/card/card";

function App() {
  const [productList, setProductList] = useState([
    {
      id: 1,
      price: "200",
      name: "Ios",
      image:
        "https://images.unsplash.com/photo-1607936854279-55e8a4c64888?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      title: "Iphone 12",
    },
    {
      id: 2,
      price: "150",
      name: "Ios",
      image:
        "https://images.unsplash.com/photo-1603891128711-11b4b03bb138?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      title: "Iphone 11",
    },
    {
      id: 3,
      price: "100",
      name: "Android",
      image:
        "https://images.unsplash.com/photo-1591530840052-dc5b98c7fb3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1044&q=80",
      title: "Xiaomi 10",
    },
    {
      id: 4,
      price: "175",
      name: "Android",
      image:
        "https://images.unsplash.com/photo-1600087626014-e652e18bbff2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      title: "Xiaomi 11",
    },
    {
      id: 4,
      price: "100$",
      name: "Android",
      image:
        "https://images.unsplash.com/photo-1609252924198-30b8cb324d2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      title: "Samsung A21",
    },
  ]);

  const [boxProduct, setBoxProduct] = useState([]);

  return (
    <div className="App">
      <h3>Product List</h3>
      <div className="gridItems">
        {productList.map((product, index) => {
          return (
            <Card
              onClick={(e) => {
                const arr = [...boxProduct];
                arr.push(product);
                setBoxProduct(arr);
                console.log(e)
      
              }}
              key={index}
              image={product.image}
              info={product.title}
              title={product.name}
            />
          );
        })}
      </div>
      <br />
      <hr />
      {boxProduct.length > 0 && (
        <div>
          {" "}
          <h3 style={{ color: "green", textAlign: "center" }}>The Products You Bought: <span style={{color:"darkred",fontSize:"18px"}}>(Total:{ boxProduct.length})</span></h3>
          {boxProduct.map((boxProduct, index) => {
            return (
            <div className="cart-div"> <ul className="list"> <li style={{ color: "blue" }} key={index}>
            {JSON.stringify(boxProduct.title)}{" "}
          </li></ul></div>
            );
          })}
        </div>
      )}
      {boxProduct.length < 1 && <h3 style={{color:"red",textAlign:"center"}}>There is no product in your cart.</h3>}
    </div>
  );
}

export default App;

//ex
