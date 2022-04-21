import "./App.css";
import Reviews from "./components/Reviews";
import Home from "./components/Home";
import Menu from "./components/Menu";
import React, { useState, useEffect } from "react";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  const [menu, setMenu] = useState([]);
  const [reviews, setReviews] = useState([]);

  function handleRenderMenu(data) {
    setMenu(data);
  }

  function handleRenderReviews(data) {
    setReviews(data);
    console.log(data);
  }

  function handleCartClick(id, cart, price) {
    setMenu(
      menu.map((item) => (id === item.id ? { ...item, isCart: cart } : item))
    );
  }

  function onDeleteReview(id) {
    const updatedReviews = reviews.filter((review) => review.id !== id);
    setReviews(updatedReviews);
  }

  function handleChangeReview(changedReview) {
    const changedReviews = reviews.map((review) => {
      if (review.id === changedReview.id) {
        return changedReview;
      } else {
        return review;
      }
    });
    setReviews(changedReviews);
  }

  const addNewReview = (e) => {
    fetch("http://localhost:9292/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(e),
    })
      .then((res) => res.json())
      .then(setReviews([...reviews, e]));
  };

  const addNewMenuItem = (e) => {
    fetch("http://localhost:9292/menu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(e),
    })
      .then((res) => res.json())
      .then(setMenu([...menu, e]));
  };

  useEffect(() => {
    fetch("http://localhost:9292/menu")
      .then((res) => res.json())
      .then(handleRenderMenu);
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/reviews")
      .then((res) => res.json())
      .then(handleRenderReviews);
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="menu"
            element={
              <Menu
                menu={menu}
                addNewMenuItem={addNewMenuItem}
                handleCartClick={(id) => handleCartClick(id, true)}
              />
            }
          />
          <Route
            exact
            path="reviews"
            element={
              <Reviews
                reviews={reviews}
                addNewReview={addNewReview}
                onDeleteReview={onDeleteReview}
                changeReview={handleChangeReview}
              />
            }
          />
          <Route
            exact
            path="cart"
            element={
              <Cart
                menu={menu.filter((item) => item.isCart)}
                handleClick={(id) => handleCartClick(id, false)}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
