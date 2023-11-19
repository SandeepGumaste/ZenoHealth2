import React from "react";

const DownloadAppCard = () => {
  return (
    <div className="col-6 col-xl-5 col-xxl-3">
      <div className="">
        <h5 className="fw-bold fs-4 mb-4">Download app</h5>
        <div className="row">
          <a href="#!" className="col-6">
            <img
              src="https://booking.webestica.com/assets/images/element/google-play.svg"
              className=""
              alt="playstore"
            />
          </a>
          <a href="#!" className="col-6">
            <img
              src="https://booking.webestica.com/assets/images/element/app-store.svg"
              className=""
              alt="playstore"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadAppCard;
