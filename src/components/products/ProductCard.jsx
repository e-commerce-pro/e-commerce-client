/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="  box-card  ">
        <div className=" head-stars">
          <sapn className=" reviews">
            {' '}
            <i className="fas fa-star  me-1" />
            {product.rating}
          </sapn>
          <sapn className="false-seal ">
            <a href="wishlist page.html">
              <svg
                className="heart"
                width="17"
                height="20"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.0162 2.62457L11.733 3.36138L12.4498 2.62457C15.1694 -0.171114 20.0664 0.825498 21.8274 4.2646C22.6749 5.91956 22.8251 8.24441 21.368 11.1192C19.9471 13.9225 17.0001 17.228 11.7329 20.7968C6.46578 17.2284 3.51885 13.923 2.09797 11.1198C0.640872 8.24511 0.791039 5.92021 1.63851 4.26513C3.39962 0.825768 8.29658 -0.171037 11.0162 2.62457Z"
                  fill="#000000"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </a>
          </sapn>
        </div>
        <Link to={`/product/${product._id}`}>
          <div className="card-img">
            <a href="productsviewdetailes.html">
              <img
                src={product.image.find((elem) => elem.url !== '').url}
                alt=""
                className=""
              />
            </a>
          </div>
        </Link>

        <div className="card-body">
          <div className="card-con">
            <a href="productsviewdetailes.html">
              <h1>{product.name} </h1>
            </a>
            <h6>The specific products included</h6>
            <p>
              <a href="productsviewdetailes.html" className="card-price">
                <span className="px-1">{product.price}</span>
                <span className="px-1">
                  MRP<del>{product.mrp}</del>
                </span>
              </a>
            </p>
            <a href="cart-page.html" className="">
              <p className="shpoing-btn">
                <i className="bi bi-cart2" />
                Add to Cart
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
