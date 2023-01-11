import React from 'react'

const Pagination = ({data,pageHandler}) => {
    let pageNumbers=[]
    for (let i=1;i<Math.ceil(data.length/9)+1;i++){
        pageNumbers.push(i);
    }
  return (
    <center>
    <div>
      
          <div class="col-12 pb-1">
                <nav aria-label="Page navigation">
                  <ul class="pagination justify-content-center mb-3">
                    <li class="page-item disabled">
                      <button class="page-link"  aria-label="Previous">
                        <span aria-hidden="true">«</span>
                        <span class="sr-only">Previous</span>
                      </button>
                    </li>
                   { pageNumbers.map(page=> 
                    <li
                      class="page-item active"
                      style={{ backgroundColor: "#D19C97" }}
                    >
                      <button onClick={()=>pageHandler(page)} class="page-link">
                        {page}
                      </button>
                    </li>
                    )}
                    <li class="page-item">
                      <button class="page-link"  aria-label="Next">
                        <span aria-hidden="true">»</span>
                        <span class="sr-only">Next</span>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div> 
    </div>
    </center>
  )
}

export default Pagination
