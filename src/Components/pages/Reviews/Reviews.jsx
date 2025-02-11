// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./Reviews.css";
import axios from "axios";

const Reviews = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setProducts(response.data.products);
    });
  }, []);

  return (
    <div className="container">
      <div className="reviewspage">
        <h1>Reviews</h1>
        <p>Here you can find reviews of our products.</p>
      </div>

      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <p><strong>Product:</strong> {product.title}</p>
            <p><strong>Rating:</strong> {product.rating}</p>
            {product.reviews && product.reviews.length > 0 ? (
              product.reviews.map((review, index) => (
                <div className="review" key={index}>
                  <p><strong>Comment:</strong> {review.comment}</p>
                  <p><strong>Date:</strong> {new Date(review.date).toLocaleDateString()}</p>
                  <p><strong>Name:</strong> {review.reviewerName}</p>
                  <p><strong>Email:</strong> {review.reviewerEmail}</p>
                </div>
              ))
            ) : (
              <p>No reviews available</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;