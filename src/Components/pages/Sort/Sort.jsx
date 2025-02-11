// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Sort.css';
import axios from 'axios';

const Sort = () => {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState('title'); 
  const [order, setOrder] = useState('asc'); 

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products?sortBy=${sortBy}&order=${order}`)
      .then((response) => {
        setProducts(response.data.products);
      });
  }, [sortBy, order]); 

  return (
    <div className="container">
      <div className="sortpage">
        <h1>Sort</h1>
        <p>Sort products by title, price, or rating.</p>
        <div className="sort-options">
          <label>Sort by:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="title">Title</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>
          <label>Order:</label>
          <select value={order} onChange={(e) => setOrder(e.target.value)}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <p><strong>Product:</strong> {product.title}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Rating:</strong> {product.rating}</p>

            {product.reviews && product.reviews.length > 0 ? (
              product.reviews.map((review, index) => (
                <div className="review" key={index}>
                  <p><strong>Comment:</strong> {review.comment}</p>
                  <p><strong>Date:</strong> {review.date ? new Date(review.date).toLocaleDateString() : "No date available"}</p>
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

export default Sort;