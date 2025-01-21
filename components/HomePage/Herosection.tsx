import { fetchGeneral } from "@/services/generalService";
import { IGeneralApiRes } from "@/types/apiResponse";
import React from "react";

const Herosection = async () => {
  const data:IGeneralApiRes = await fetchGeneral();
  console.log(data)
  return (
    <section className=" grid grid-cols-1 md:grid-cols-2 pl-0 ">
      <div className="leftside card-bg  text-white max-w-[400px] mx-auto md:mx-0 ">
        <img
          src={process.env.NEXT_PUBLIC_API_ASSETS_URL + data?.HeroImage?.url}
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
