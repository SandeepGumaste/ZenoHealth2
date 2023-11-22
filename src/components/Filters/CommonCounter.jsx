import React from "react";

const CommonCounter = ({ name, count, handleIncrease, handleDecrease }) => {
  return (
    <div className="d-flex justify-content-between align-items-center border-bottom py-2">
      <div className="me-2">
        <h5 className="display-7 fw-bold text-capitalize mb-0">{name}</h5>
      </div>
      <div className="d-flex justify-content-end align-items-center fs-5 w-50">
        <i
          class="bi bi-plus-circle fs-4 me-2"
          onClick={() => handleIncrease(name, count)}
        />
        {count}
        <i
          class="ms-2 bi bi-dash-circle fs-4"
          onClick={() => handleDecrease(name)}
        />
      </div>
    </div>
  );
};

export default CommonCounter;
