import React, { useEffect } from "react";
import "./Shop.css";
import Filters from "./Filters";
import PageHeader from "../../Components/page-header/PageHeader";
import LoadingSpinner from "../../Components/Spinner/LoadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import fetchProducts from "../../actions/productsAction";
import { Link } from "react-router-dom";
import { cartActionTypes } from "../../actions/actionTypes/cartActionTypes";

const Shop = () => {
  const dispatch = useDispatch();
  const { productsList, isLoading } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // if (!isLoading) {
  //   console.log(productsList);
  // }

  // const addToCartHandler = (item) => {
  //   dispatch({
  //     type: actionTypes.ADD_TO_CART,
  //     payload: item
  //   })
  // }

  return (
    <div>
      <div class="container-fluid mb-5" style={{ backgroundColor: "#edf1ff" }}>
        <PageHeader headerName={"Our Shop"} />
      </div>
      <div class="container-fluid pt-5">
        <div class="row px-xl-5">
          <div class="col-lg-3 col-md-12">
            <Filters />
          </div>
          <div class="col-lg-9 col-md-12">
            <div class="row pb-3">
              <div class="col-12 pb-1">
                <div class="d-flex align-items-center justify-content-between mb-4">
                  <form action="">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search by name"
                      />
                      <div class="input-group-append">
                        <span class="input-group-text bg-transparent text-primary">
                          <i class="fa fa-search"></i>
                        </span>
                      </div>
                    </div>
                  </form>
                  <div class="dropdown ml-4">
                    <button
                      class="btn border dropdown-toggle"
                      type="button"
                      id="triggerId"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Sort by
                    </button>
                    <div
                      class="dropdown-menu dropdown-menu-right"
                      aria-labelledby="triggerId"
                    >
                      <a class="dropdown-item" href="/shop">
                        Latest
                      </a>
                      <a class="dropdown-item" href="/shop">
                        Popularity
                      </a>
                      <a class="dropdown-item" href="/shop">
                        Best Rating
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid ">
                <div className="text-center mb-4"></div>
                <div className="row px-xl-5 pb-3">
                  {isLoading ? (
                    <LoadingSpinner />
                  ) : (
                    productsList.map((item, key) => (
                      <div
                        className="col-lg-4 col-md-6 col-sm-12 pb-1"
                        key={key}
                      >
                        <div className="card product-item border-0 mb-4">
                          <div className="card-header inner product-img position-relative overflow-hidden bg-transparent border pt-2">
                            <img
                              className="img-fluid shop-image w-100"
                              src={item.image}
                              alt="img"
                            />
                          </div>
                          <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">{item.title}</h6>
                            <div className="d-flex justify-content-center">
                              <h6>${item.price}</h6>
                              <h6 className="text-muted ml-2">
                                <del>${item.price * 2}</del>
                              </h6>
                            </div>
                          </div>
                          <div className="card-footer d-flex justify-content-between bg-light border">
                            <Link
                              to={`/shop/${item.id}`}
                              className="btn btn-sm text-dark p-0"
                            >
                              <i className="fas fa-eye text-primary mr-1"></i>
                              View Detail
                            </Link>
                            <button
                              className="btn btn-sm text-dark p-0"
                              onClick={() =>
                                dispatch({
                                  type: cartActionTypes.ADD_TO_CART,
                                  payload: item,
                                })
                              }
                            >
                              <i className="fas fa-shopping-cart text-primary mr-1"></i>
                              Add To Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
              {/* <div class="col-12 pb-1">
                <nav aria-label="Page navigation">
                  <ul class="pagination justify-content-center mb-3">
                    <li class="page-item disabled">
                      <a class="page-link" href="/shop" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                        <span class="sr-only">Previous</span>
                      </a>
                    </li>
                    <li
                      class="page-item active"
                      style={{ backgroundColor: "#D19C97" }}
                    >
                      <a class="page-link" href="/shop">
                        1
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="/shop">
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="/shop">
                        3
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="/shop" aria-label="Next">
                        <span aria-hidden="true">»</span>
                        <span class="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Shop;
