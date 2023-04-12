/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const OrderItem = ({ item }) => {
  const { name, image, alreadyReviewed, price, qty, userReview } = item;

  return (
    <>
      <div className="order-details-traking-contain col-lg-11 col-md-12 ">
        <div className="row ">
          <div className="col-lg-2 col-md-3  d-flex align-items-center justify-content-center m-0 p-0">
            <div className="order-details-traking-img-box">
              <a>
                {' '}
                <img src={image} alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-7 col-md-6 ">
            <div className="order-details-traking-list">
              <a>
                <h5>{name}</h5>
              </a>
              <div className="Price-tag">
                <p>Qty: {qty}</p>
                <p>Price : {price}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="star-rating">
              <a>
                {userReview &&
                  [...Array(Number(userReview.rating) || 0)].map((active) => (
                    <i className="fas fa-star active " key={active} />
                  ))}
                {userReview &&
                  [...Array(5 - Number(userReview.rating) || 0)].map(
                    (inActive) => <i className="fas fa-star" key={inActive} />
                  )}
              </a>
            </div>
            <div className="rating-a" style={{ cursor: 'pointer' }}>
              <a>{alreadyReviewed ? 'Edit Review' : 'Write a Review here'}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderItem;
