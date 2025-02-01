import { ExpertiseData } from "@/constent/expertise";
import { fetchPersonalInfo } from "@/services/generalService";
import { IGeneralApiRes } from "@/types/apiResponse";
import Image from "next/image";
import React from "react";

const Herosection = async () => {
  const data: IGeneralApiRes = await fetchPersonalInfo();
  return (
    <section className=" grid grid-cols-1 md:grid-cols-[50%,1fr] lg:grid-cols-[33%,1fr] pl-0 gap-5   ">
      <div className="leftside card-bg  text-white p-4 mx-auto md:mx-0 flex flex-col justify-center items-center lg:items-start bg-base_black gap-5  lg:self-stretch lg:flex-shrink-0 lg:flex-grow" >
        <div>
        <Image
          className="bg-cover"
          sizes="calc(max((min(100vw - 60px, 1000px) - 20px) / 2, 1px) - 40px)"
          src={process.env.NEXT_PUBLIC_API_ASSETS_URL + data?.HeroImage?.url}
          alt={data.Fullname}
        />
        </div>
        <div className=" flex flex-col gap-3">
          <h1 className=" heading-3 mt-3">{data?.Fullname}</h1>
          <p className="m-p white-70">{data?.MetaTag}</p>
        </div>
        <div className="button mt-5 flex flex-col gap-5 justify-between lg:flex-row w-full white-70  ">
          <button className=" btn button-primary text-accent_color">
            Book A Call
          </button>
          <button className="btn button-secondary white-90">
            Get In Touch
          </button>
        </div>
      </div>
      <div className="rightside  ">
        <div className=" card-bg p-8 bg-[#111111]/20 ">
          <h3 className="heading-3 ml-8 md:ml-0 mb-4"> My Expert Area</h3>
          <div
            id="logo "
            className="mt-4 grid grid-cols-2 lg:grid-cols-3 gap-4   "
          >
            {ExpertiseData.map((data, index) => (
              <div key={index} className="nodejs flex flex-col gap-2 card-bg items-center justify-center py-6 bg-[#111111]/40 card-items group">
                <img
                  className="invert-logo logo"
                  src={data?.logo}
                  alt={data?.alt}
                />
                <span className="heading-6 mt-4">{data.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card-bg p-8 mt-6">
          <p className="big-p white-70">{data?.MetaDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
