import "./App.css";
import Header from "./components/Header";
import Reviews from "./components/Reviews";
import Home from "./components/Home";
import Menu from "./components/Menu";
import NewReviewForm from "./components/NewReviewForm";
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

  // function handleRemoveReview(review) {
  //   fetch(`http://localhost:3000/reviews/${review.id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((r) => r.json())
  //     .then(() => setReviews(review.filter((item) => item.id !== review.id)));
  // }

  const changeReview = (review) => {
    // let newReview = [...reviews, newReviewObj]
    // setReviews(newReview)

    fetch(`http://localhost:3000/reviews/${review.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then(setReviews(review));
  };

  const addNewReview = (e) => {
    // let newReview = [...reviews, newReviewObj]
    // setReviews(newReview)

    fetch("http://localhost:3000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(e),
    })
      .then((res) => res.json())
      .then(setReviews([...reviews, e]));
  };

  useEffect(() => {
    fetch("http://localhost:3000/menu")
      .then((res) => res.json())
      .then(handleRenderMenu);
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/reviews")
      .then((res) => res.json())
      .then(handleRenderReviews);
  }, []);

  return (
    // <>
    //   <Router>
    //     <Header />

    //     <Routes>
    //       <Route exact path="/" element={<App />}>
    //         <Route
    //           exact
    //           path="menu"
    //           element={<Menu menu={menu} handleCartClick={handleCartClick} />}
    //         />
    //         <Route
    //           exact
    //           path="reviews"
    //           element={<Reviews reviews={reviews} />}
    //         />
    //       </Route>
    //     </Routes>
    //   </Router>
    // </>
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
                changeReview={changeReview}
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
