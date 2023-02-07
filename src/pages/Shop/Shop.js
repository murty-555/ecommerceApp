import React, { useState, useEffect } from "react";
import "./Shop.css";
import Filters from "./Filters";
import PageHeader from "../../Components/page-header/PageHeader";
import LoadingSpinner from "../../Components/Spinner/LoadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import fetchProducts from "../../actions/productsAction";
import { Link } from "react-router-dom";
import { cartActionTypes } from "../../actions/actionTypes/cartActionTypes";
import Pagination from "./Pagination";

const Shop = () => {
  const dispatch = useDispatch();
  const { productsList, isLoading } = useSelector((state) => ({
    ...state.products,
  }));
  const [perpage, setPerpage] = useState([]);
   const [filteredResults, setFilteredResults] = useState([]);
   
  useEffect(() => {
    dispatch(fetchProducts());
    // pageHandler(1);
    // setPerpage(productsList.slice(0, 10));
  }, [dispatch]);

  const pageHandler = (pageNumber) => {
    // console.log(pageNumber);
    if (filteredResults.length > 0) {
      setPerpage(filteredResults.slice(pageNumber * 9 - 9, pageNumber * 9));
    } else {
      setPerpage(productsList.slice(pageNumber * 9 - 9, pageNumber * 9));
    }
  };
  useEffect(() => {
    if (filteredResults.length > 0) {
      setPerpage(filteredResults.slice(0, 9));
    }else{
      setPerpage(productsList.slice(0, 9));
    }
  }, [filteredResults,productsList]);

  const searchItems = (e) => {
    const results = productsList.filter((post) => {
      if (e.target.value === "") return productsList;
      return post.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
   
   setFilteredResults(results);
  
        
    
}
const data = filteredResults.length > 0 ? filteredResults : productsList;

  const addToCartHandler = (item) => {
    dispatch({
      type: cartActionTypes.ADD_TO_CART,
      payload: {...item,quantity:1}
    });
  };

  return (
    <div style={{ backgroundColor: "#eaeded" }}>
      <PageHeader headerName={"Our Shop"} />
      <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          <div className="col-lg-2 col-md-12">
            <Filters />
          </div>
          <div className="col-lg-10 col-md-12">
            <div className="row pb-3">
              <div className="col-12 pb-1">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <form action="">
                    <div className="input-group">
                      <input
                        type="search"
                        className="form-control"
                        placeholder="Search by name"
                         onChange={searchItems}
                      />
                      <div className="input-group-append">
                        <span className="input-group-text bg-transparent text-primary">
                          <i className="fa fa-search text-dark"></i>
                        </span>
                      </div>
                    </div>
                  </form>
                  {/* <div className="dropdown ml-4">
                    <button
                      className="btn border dropdown-toggle"
                      type="button"
                      id="triggerId"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Sort by
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="triggerId"
                    >
                      <a className="dropdown-item" href="/shop">
                        Latest
                      </a>
                      <a className="dropdown-item" href="/shop">
                        Popularity
                      </a>
                      <a className="dropdown-item" href="/shop">
                        Best Rating
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="container-fluid ">
                <div className="text-center mb-4"></div>
                <div className="row px-xl-5 pb-3">
                  {isLoading ? (
                    <LoadingSpinner />
                  ) : (
                    perpage.map((item, key) => (
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
                              <i className="fas fa-eye trendy-icons mr-1"></i>
                              View Detail
                            </Link>
                            <button
                              className="btn btn-sm text-dark p-0"
                              onClick={() => addToCartHandler(item)}
                            >
                              <i className="fas fa-shopping-cart trendy-icons mr-1"></i>
                              Add To Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
              <Pagination data={data} pageHandler={pageHandler} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Shop;
