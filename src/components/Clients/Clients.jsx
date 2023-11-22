import React from "react";
import styles from "./clients.module.css";
import { clientImages } from "../../data/data";

const Clients = () => {
  return (
    <section>
      <div className="container">
        <div className="row gap-4 gap-lg-0 justify-content-center align-items-center">
          {clientImages.map((client) => {
            return (
              <div key={client} className="col-5 col-sm-3 col-xl-2 px-lg-3">
                <img
                  src={client}
                  className={`${styles.greyscale} w-100`}
                  alt="client"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Clients;
