import Image from "next/image";
import React from "react";

const NotFount = () => {
  return (
    <article className="comingsoon" data-page="about">
      <Image src={"/comingsoon.svg"} height={300} width={400} alt="coming-soon page"/>
      <h3>Page is Under construction      </h3>
    </article>
  );
};

export default NotFount;
