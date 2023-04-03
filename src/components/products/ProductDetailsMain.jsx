/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Link } from 'react-router-dom';

const ProductDetailsMain = ({ selectedProduct }) => {
  const [activeImage, setActiveImage] = useState('');

  useEffect(() => {
    // console.log({ selectedProduct });
    if (selectedProduct && selectedProduct.image) {
      setActiveImage(selectedProduct.image.find((img) => img.url !== '').url);
    }
  }, [selectedProduct]);

  return (
    <>
      <section className="xzoom_part">
        <div className="container" style={{ backgroundColor: 'white' }}>
          <div className="row">
            <div className="col-lg-5 col-md-6   x-zoom-body ">
              <div className="x-zoomin-responsive">
                <div className="xzoom-heart xzoom-heart-hide">
                  <p className="false-seal  ">
                    <a href="wishlist page.html">
                      <svg
                        className="heart"
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
                  </p>
                </div>
              </div>
              <div className="col-lg-10   ">
                <div className="xzoom_container">
                  <div
                    className="xzoom-body-responsive"
                    id="img-container"
                    style={{ width: '400px' }}
                  >
                    <img src={activeImage} alt="" className="xzoom" />
                  </div>
                  {console.log({ img: selectedProduct })}
                  <div className="container">
                    <div className="xzoom-thumbs">
                      <div className="swiper mySwiper">
                        <Swiper
                          className="swiper-wrapper"
                          navigation
                          modules={[Autoplay, Pagination, Navigation]}
                          slidesPerView={5}
                          spaceBetween={25}
                        >
                          {selectedProduct &&
                            selectedProduct.image.map(
                              ({ url, key }) =>
                                url && (
                                  <SwiperSlide
                                    className="swiper-slide"
                                    key={key}
                                    onClick={() => setActiveImage(url)}
                                  >
                                    <img
                                      src={url}
                                      alt=""
                                      className="xzoom-gallery"
                                      width="80"
                                      xpreview={url}
                                    />
                                  </SwiperSlide>
                                )
                            )}
                        </Swiper>
                        {/* <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-7 col-sm-12 xzoom-body-contain">
              <div className="xzoom-heart heart-hide-responsive">
                <p className="false-seal ">
                  <a href="wishlist page.html">
                    <svg
                      className="heart"
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
                </p>
              </div>
              <div className="xzoom_details">
                <h4>
                  {selectedProduct && selectedProduct.name}{' '}
                  <span>
                    {' '}
                    <iconify-icon
                      icon="mdi:lacto-vegetarian"
                      className="veg-nonveg-icon"
                    />
                  </span>{' '}
                </h4>

                <h6>{selectedProduct && selectedProduct.brand}</h6>
                <p className="star">
                  <i className="fas fa-star" />
                  4.5
                </p>
                <h3>
                  ₹{selectedProduct && selectedProduct.price}{' '}
                  <span>
                    MRP:
                    <del className="ms-1">
                      {selectedProduct && selectedProduct.mrp}
                    </del>
                  </span>{' '}
                </h3>
                <div className=" btn-contain mb-2">
                  <p>Unit</p>
                  <div className="btn-body">
                    {selectedProduct &&
                      selectedProduct.otherUnit.map(
                        ({ mainProduct, value }) => (
                          <Link
                            to={`/product/${value._id}`}
                            key={value._id}
                            className={
                              mainProduct
                                ? 'btn-views btn-views-1 btn-views-active'
                                : 'btn-views btn-views-1'
                            }
                          >
                            <a href="#"> {value.value + value.unit}</a>
                          </Link>
                        )
                      )}
                  </div>
                </div>
                {selectedProduct && selectedProduct.flavour && (
                  <div className=" btn-contain mb-2">
                    <p>Flavour</p>
                    <div className="btn-body">
                      {selectedProduct &&
                        selectedProduct.otherFlavour.map(
                          ({ mainProduct, value }) => (
                            <Link
                              to={`/product/${value._id}`}
                              key={value._id}
                              className={
                                mainProduct
                                  ? 'btn-views btn-views-1 btn-views-active'
                                  : 'btn-views btn-views-1'
                              }
                            >
                              <a href="#">{value.flavour}</a>
                            </Link>
                          )
                        )}
                    </div>
                  </div>
                )}
                {selectedProduct && selectedProduct.color && (
                  <div className=" btn-contain">
                    <p>Color</p>
                    <div className="btn-body">
                      {selectedProduct &&
                        selectedProduct.otherColor.map(
                          ({ value, mainProduct }) => (
                            <Link
                              to={`/product/${value._id}`}
                              key={value._id}
                              className={
                                mainProduct
                                  ? 'btn-views btn-views-1 btn-views-active'
                                  : 'btn-views btn-views-1'
                              }
                            >
                              <a href="#">{value.color}</a>
                            </Link>
                          )
                        )}
                    </div>
                  </div>
                )}
                <div className="d-flex align-items-center mt-3">
                  <label for=""> Qty: </label>
                  <input type="number" value="1" className="form-control" />
                  <div className="btn-xzone-body ">
                    <a href="cart-page.html">
                      <p className="btn-xzone">
                        {' '}
                        <i className="bi bi-cart2" />
                        <span> Add To Cart</span>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsMain;