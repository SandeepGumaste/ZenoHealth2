import React from "react";
import TrustCard from "./TrustCard";
import DownloadAppCard from "./DownloadAppCard";
import { trustCardsData } from "../../data/data";

const Trust = () => {
  return (
    <section className="bg-light">
      <div className="container">
        <div className="row gap-4 px-3 px-md-0">
          {trustCardsData.map((data) => (
            <TrustCard key={data.heading} data={data} />
          ))}
          <DownloadAppCard />
        </div>
      </div>
    </section>
  );
};

export default Trust;
