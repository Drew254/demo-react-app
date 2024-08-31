import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import App from "./App";
//import reportWebVitals from "./reportWebVitals";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: "KSH,1500/=",
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: "KSH,1400/=",
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: "KSH,1700/=",
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: "KSH,1650/=",
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: "KSH,1500/=",
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: "KSH,1800/=",
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
  {
    name: "Margherita",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: "KSH,1300/=",
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Parmigiana",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: "KSH,1900/=",
    photoName: "pizzas/parmigiana.jpg",
    soldOut: false,
  },
  {
    name: "Pollo Pilli Pilli",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: "KSH,1865/=",
    photoName: "pizzas/polllo_pilli_pilli.jpg",
    soldOut: false,
  },
  {
    name: "Caprese",
    ingredients: "Tomato, Buffalo, Mozarella and Basil",
    price: "KSH,1500/=",
    photoName: "pizzas/caprese.jpeg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };

  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Gogol Pizza</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <h3>Cheese From Italy, Love From Kenya</h3>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. Creative dishes to choose from. All from
            our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="/pizzas/spinaci.jpg"
        price="Ksh 1500"
      />
      <Pizza
        name="Funghi Pizza"
        ingredients="Tomato, mozarella, onion, tuna, and black olives"
        photoName="/pizzas/funghi.jpg"
        price={1500}
      />
      <Pizza
        name="Salamino"
        ingredients="Tomato, mozarella, onion, tuna, and black olives"
        photoName="/pizzas/salamino.jpg"
        price={1500}
      />
      <Pizza
        name="Focaccia"
        ingredients="Tomato, mozarella, onion, tuna, and black olives"
        photoName="/pizzas/focaccia.jpg"
        price={1500}
      />
      <Pizza
        name="Margherita Pizza"
        ingredients="Tomato, mozarella, onion, tuna, and black olives"
        photoName="/pizzas/margherita.jpg"
        price={1500}
      />
      <Pizza
        name="Prosciutto"
        ingredients="Tomato, mozarella, onion, tuna, and black olives"
        photoName="/pizzas/prosciutto.jpg"
        price={1500}
      />
      <Pizza
        name="Parmigiana"
        ingredients="Tomato, mozarella, onion, tuna, and black olives"
        photoName="/pizzas/parmigiana.jpg"
        price={1500}
      />
      <Pizza
        name="Caprese"
        ingredients="Tomato, mozarella, onion, tuna, and black olives"
        photoName="/pizzas/caprese.jpeg"
        price={1500}
      />
      <Pizza
        name="Pollo Pilli Pilli"
        ingredients="Tomato, mozarella, onion, tuna, and black olives"
        photoName="/pizzas/polllo_pilli_pilli.jpg"
        price={1500}
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  return (
    // <div className="pizza">
    //   <img src={props.photoName} alt={props.name}></img>
    //   <div>
    //     <h3>{props.name}</h3>
    //     <p>{props.ingredients}</p>
    //     <span>{props.price}</span>
    //   </div>
    // </div>
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        {/* {pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{pizzaObj.price}</span>
        )} */}

        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry we're closed");
  // console.log(hour);
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

//React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//React before v18
//React.render(<App/>);
