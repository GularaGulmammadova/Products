// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';
import { getAllProducts } from '../../../services/products-service';

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  const productsPerPage = 10;

  useEffect(() => {
    getAllProducts(productsPerPage, (page - 1) * productsPerPage)
      .then((response) => {
        setData(response.products);
        setTotalProducts(response.total);
      });
  }, [page]);

  const totalPages = Math.ceil(totalProducts / productsPerPage);

  return (
    <div className="container">
      <div className="homepage">
        <h1>Welcome to Our Shop!</h1>
        <p>Choose your favorite products and enjoy the shopping!</p>
      </div>

      <div className="products">
        {data.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <p><strong>Name:</strong> {product.title}</p>
            <p><strong>Price:</strong> {product.price}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Description:</strong> {product.description}</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={() => setPage(page > 1 ? page - 1 : page)}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button
          onClick={() => setPage(page < totalPages ? page + 1 : page)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;