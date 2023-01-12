import React from "react";

const Pagination = ({ data, pageHandler }) => {
  let pageNumbers = [];
  for (let i = 1; i < Math.ceil(data.length / 9) + 1; i++) {
    pageNumbers.push(i);
  }
  return (
    <center>
      <div>
        <div className="col-12 pb-1">
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center mb-3">
              <li className="page-item disabled">
                <button className="page-link" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                  <span className="sr-only">Previous</span>
                </button>
              </li>
              {pageNumbers.map((page, key) => (
                <li
                  key={key}
                  className="page-item active"
                  style={{ backgroundColor: "#D19C97" }}
                >
                  <button
                    onClick={() => pageHandler(page)}
                    className="page-link"
                  >
                    {page}
                  </button>
                </li>
              ))}
              <li className="page-item">
                <button className="page-link" aria-label="Next">
                  <span aria-hidden="true">»</span>
                  <span className="sr-only">Next</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </center>
  );
};

export default Pagination;
