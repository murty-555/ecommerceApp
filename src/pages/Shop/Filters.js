import React from "react";

const FILTER_DATA = [
  {
    filter: "Filter by price",
    className: "border-bottom mb-4 pb-4",
    form: [
      { label: "all-price", labelData: "All Price", count: 1000 },
      { label: "price-1", labelData: "$0 - $100", count: 150 },
      { label: "price-2", labelData: "$100 - $200", count: 295 },
      { label: "price-3", labelData: "$200 - $300", count: 246 },
      { label: "price-4", labelData: "$300 - $400", count: 145 },
      { label: "price-5", labelData: "$400 - $500", count: 168 },
    ],
  },
  {
    filter: "Filter by color",
    className: "border-bottom mb-4 pb-4",
    form: [
      { label: "all-color", labelData: "All Color", count: 1000 },
      { label: "color-1", labelData: "Black", count: 150 },
      { label: "color-2", labelData: "White", count: 295 },
      { label: "color-3", labelData: "Red", count: 246 },
      { label: "color-4", labelData: "Blue", count: 145 },
      { label: "color-5", labelData: "Green", count: 168 },
    ],
  },
  {
    filter: "Filter by size",
    className: "mb-5",
    form: [
      { label: "all-size", labelData: "All Size", count: 1000 },
      { label: "size-1", labelData: "XS", count: 150 },
      { label: "size-2", labelData: "S", count: 295 },
      { label: "size-3", labelData: "M", count: 246 },
      { label: "size-4", labelData: "L", count: 145 },
      { label: "size-5", labelData: "XL", count: 168 },
    ],
  },
];

const Filters = () => {
  return (
    <>
      {FILTER_DATA.map((data,key) => (
        <div key={key} className={data.className}>
          <h5 className="font-weight-semi-bold mb-4">{data.filter}</h5>
          <form>
            {data.form.map((formData,key) => (
              <div key={key} className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id={formData.label}
                />
                <label className="custom-control-label" htmlFor={formData.label}>
                  {formData.labelData}
                </label>
                <span className="badge border font-weight-normal">
                  {formData.count}
                </span>
              </div>
            ))}
          </form>
        </div>
      ))}
    </>
  );
};
export default Filters;
