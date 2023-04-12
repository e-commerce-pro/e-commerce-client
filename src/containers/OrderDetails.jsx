/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const OrderDetails = () => {
  return (
    <div className="Order-Details-traking-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8  ">
            <div className="Order-ID-body">
              <div className="Order-ID-box">
                <img src="/asstes/img/order-logo/package.png" alt="" />
              </div>
              <div className="order-id-list">
                <h5>Order ID: 3354654654526</h5>
                <p>2 Items . On Delivery</p>
              </div>
            </div>
            <div className="traking-progress-section">
              <div className="stepper-wrapper">
                <div className="stepper-item completed">
                  <div className="step-head-name">Order Placed</div>
                  <div className="step-counter">
                    <iconify-icon icon="ph:check" />
                  </div>
                  <div className="step-name">
                    {' '}
                    1 <sup>th</sup>Jan, 9:50pm{' '}
                  </div>
                </div>
                <div className="stepper-item completed">
                  <div className="step-head-name">Order Confirmed</div>
                  <div className="step-counter">
                    <iconify-icon icon="ph:check" />
                  </div>
                  <div className="step-name">
                    1 <sup>th</sup>Jan, 9:50pm{' '}
                  </div>
                </div>
                <div className="stepper-item completed">
                  <div className="step-head-name">Order On Delivery</div>
                  <div className="step-counter">
                    <iconify-icon icon="ph:check" />
                  </div>
                  <div className="step-name">
                    1 <sup>th</sup>Jan, 9:50pm{' '}
                  </div>
                </div>
                <div className="stepper-item active">
                  <div className="step-head-name disactive">
                    Order Delivered
                  </div>
                  <div className="step-counter">
                    <iconify-icon icon="ph:check" />
                  </div>
                  <div className="step-name disactive">
                    Expected by,1 <sup>th</sup>Jan, 9:50pm{' '}
                  </div>
                </div>
              </div>
            </div>

            <div className="traking-progress-section-mobile">
              <div className="traking-body">
                <div className="stepper-item">
                  <iconify-icon icon="mdi:check-circle" className="completed" />
                  <div>
                    <div>Order Placed</div>
                    <div>
                      1 <sup>th</sup>Jan, 9:50pm{' '}
                    </div>
                  </div>
                </div>
                <div className="stepper-item">
                  <iconify-icon icon="mdi:check-circle" className="completed" />
                  <div>
                    <div>Order Confirmed</div>
                    <div>
                      1 <sup>th</sup>Jan, 9:50pm{' '}
                    </div>
                  </div>
                </div>
                <div className="stepper-item">
                  <iconify-icon icon="mdi:check-circle" className="completed" />
                  <div>
                    <div>Order On Delivery</div>
                    <div>
                      1 <sup>th</sup>Jan, 9:50pm{' '}
                    </div>
                  </div>
                </div>
                <div className="stepper-item discompleted">
                  <iconify-icon
                    icon="mdi:check-circle"
                    className=" line-none"
                  />
                  <div>
                    <div>Order Delivered</div>
                    <div>
                      Expected by, 1 <sup>th</sup>Jan, 9:50pm{' '}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" order-details-traking-section  ">
              <div className="order-details-traking-contain col-lg-11 col-md-12">
                <div className="row">
                  <div className="col-lg-2 col-md-3  d-flex align-items-center justify-content-center m-0 p-0">
                    <div className="order-details-traking-img-box">
                      <a href="productsviewdetailes.html">
                        {' '}
                        <img src="/asstes/img/Wishlist page img/2.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-6 ">
                    <div className="order-details-traking-list">
                      <a href="productsviewdetailes.html">
                        <h5>
                          MuscleBlaze Test Pro & Ashwagandha 60 Tab Combo{' '}
                        </h5>
                      </a>
                      <div className="Price-tag">
                        <p>Qty: 2</p>
                        <p>Price : &#8377 8256</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3">
                    <div className="star-rating">
                      <a href="#">
                        {' '}
                        <i className="fas fa-star active " />
                        <i className="fas fa-star  active" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </a>
                    </div>
                    <div className="rating-a">
                      <a href="user-Rate-&-review.html">Write a Review here </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-details-traking-contain col-lg-11 col-md-12 ">
                <div className="row ">
                  <div className="col-lg-2 col-md-3  d-flex align-items-center justify-content-center m-0 p-0">
                    <div className="order-details-traking-img-box">
                      <a href="productsviewdetailes.html">
                        {' '}
                        <img src="/asstes/img/Wishlist page img/4.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-6 ">
                    <div className="order-details-traking-list">
                      <a href="productsviewdetailes.html">
                        <h5>
                          MuscleBlaze Test Pro & Ashwagandha 60 Tab Combo{' '}
                        </h5>
                      </a>
                      <div className="Price-tag">
                        <p>Qty: 1</p>
                        <p>Price : &#8377 4433</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3">
                    <div className="star-rating">
                      <a href="#">
                        {' '}
                        <i className="fas fa-star active " />
                        <i className="fas fa-star  active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </a>
                    </div>
                    <div className="rating-a">
                      <a href="user-Rate-&-review.html">Write a Review here </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-flex justify-content-center">
            <div className="col-lg-10 col-md-12 ">
              <div className="row">
                <div className="col-lg-12 col-md-6 col-sm-12">
                  <div className="delivery-address-details ">
                    <p className="Shipping-details">Shipping Details</p>
                    <div className=" name-addres-details">
                      <h6>Florence Lockman</h6>
                      <p>
                        {' '}
                        Ramkrishna Apartment, <br />
                        Near Sardar Bhavan Society,
                        <br />
                        mg Road 78,Udaipur-313001, India <br />
                        +91 8756957656, +91 9453698424
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6 col-sm-12">
                  <div className="total-box ">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col" colSpan="4" className="Price-detal ">
                            Price Details
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row" />
                          <td className="subtotal">Subtotal :</td>
                          <td />
                          <td className="text-end ">₹12689</td>
                        </tr>
                        <tr>
                          <th scope="row" />
                          <td className="discount">Discount :</td>
                          <td className="text-end" />
                          <td className="text-end">
                            <span className="me-2">-</span> ₹500
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" />
                          <td className="info-btn">
                            Tax
                            <i className="bi bi-info-circle" />
                            <span className="ms-3">:</span>{' '}
                          </td>
                          <td className="text-end" />
                          <td className="text-end">
                            <span className="me-2">+</span> ₹689
                          </td>
                        </tr>
                        <tr className="total-border">
                          <th scope="row" />
                          <th className="fw-semibold">Total :</th>
                          <td className="" />
                          <th className="text-end fw-semibold">₹ 12878</th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
