import { fetchGeneral } from "@/services/generalService";
import { IGeneralApiRes } from "@/types/apiResponse";
import React from "react";

const Herosection = async () => {
  const data:IGeneralApiRes = await fetchGeneral();
  console.log(data)
  


  return (
    <section className=" grid grid-cols-1 md:grid-cols-2 pl-0 gap-5  ">
      <div className="leftside card-bg max-w-[600px]  text-white p-4 mx-auto md:mx-0 flex flex-col justify-center ">
        <img
          src={process.env.NEXT_PUBLIC_API_ASSETS_URL + data?.HeroImage?.url}
          alt=""
        />
        <div>
          <h1 className=" heading-3 mt-3">{data?.Fullname}</h1>
          <p className="m-p white-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius,
            metus eu posuere consectetur, justo ligula fermentum velit, vel
            consectetur odio enim eu velit. Sed viverra, lectus vel varius
            ullamcorper, lectus est consectetur neque, vitae tincidunt neque
            nunc sed neque.
          </p>
          <div className="button mt-5 flex gap-5 justify-between ">
            <button className=" btn button-primary text-accent_color">Book A Call</button>
            <button className="btn button-secondary white-90">Get In Touch</button>
          </div>

        </div>
      </div>
      <div id="rightside card-bg">
         <h3 className="heading-3"> My Expert area</h3>
         <div id="logo " className="mt-4 grid grid-cols-2 lg:grid-cols-3   ">
           <div className="nodejs flex flex-col gap-2 card-bg items-center justify-center py-6" >
              <img className="invert-logo logo" src="./logo/nodelogo.svg" alt="node js experience" />
             <span className="heading-6 mt-4">Node.js</span>
           </div>

         </div>

      </div>
    </section>
  );
};

export default Herosection;
