import { fetchGeneral } from "@/services/generalService";
import React from "react";

const Herosection = async () => {
  const data = await fetchGeneral();
  return (
    <section className=" grid grid-cols-1 md:grid-cols-2">
      <div className="leftside card-bg  text-white">
        <img
          src={process.env.NEXT_PUBLIC_API_ASSETS_URL + data.HeroImage.url}
          alt=""
        />
        <div>
          <h1>{data?.Fullname}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius,
            metus eu posuere consectetur, justo ligula fermentum velit, vel
            consectetur odio enim eu velit. Sed viverra, lectus vel varius
            ullamcorper, lectus est consectetur neque, vitae tincidunt neque
            nunc sed neque.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
