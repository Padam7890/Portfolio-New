import { fetchGeneralInfo } from "@/services/generalService";
import { IGeneralApiRes } from "@/types/apiResponse";
import React from "react";

const About = async () => {
  const generalInformation: IGeneralApiRes = await fetchGeneralInfo();

  console.log(generalInformation);

  return (
    <>
       <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>{generalInformation?.MetaDescription}"</p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>
      </section>

      {/* <ul className="service-list">
         {skills.map((skill) => { 
    //         return (
    //           <li className="service-item">
    //             <div className="service-icon-box">
    //               <img src={skill.image} alt="design icon" width="40" />
    //             </div>

    //             <div className="service-content-box">
    //               <h4 className="h4 service-item-title">{skill.title}</h4>

    //               <p className="service-item-text">{skill.descriptions}</p>
    //             </div>
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   </section>

    //   {/* <!--
    //   - testimonials
    // --> 

    //   <section className="testimonials">
    //     <h3 className="h3 testimonials-title">Testimonials</h3>

    //     <ul className="testimonials-list has-scrollbar">
    //       {testimonials.map((testimonial) => (
    //         <li key={testimonial._id} className="testimonials-item">
    //           <div className="content-card" data-testimonials-item>
    //             <figure className="testimonials-avatar-box">
    //               <img
    //                 src={testimonial.photo}
    //                 alt={testimonial.name}
    //                 width="60"
    //                 data-testimonials-avatar
    //               />
    //             </figure>

    //             <h4
    //               className="h4 testimonials-item-title"
    //               data-testimonials-title
    //             >
    //               {testimonial.name}
    //             </h4>

    //             <div className="testimonials-text" data-testimonials-text>
    //               <p>
    //                 {testimonial?.descriptions?.length > 200
    //                   ? testimonial.descriptions.slice(0, 200) + "..."
    //                   : testimonial.descriptions}
    //               </p>
    //             </div>
    //           </div>
    //         </li>
    //       ))}
    //     </ul>
    //   </section>

    //   {/* <section className="clients">
    //     <h3 className="h3 clients-title">Clients</h3>

    //     <ul className="clients-list has-scrollbar">
    //       <li className="clients-item">
    //         <a href="#">
    //           <img src="./assets/images/logo-1-color.png" alt="client logo" />
    //         </a>
    //       </li>

    //       <li className="clients-item">
    //         <a href="#">
    //           <img src="./assets/images/logo-2-color.png" alt="client logo" />
    //         </a>
    //       </li>

    //       <li className="clients-item">
    //         <a href="#">
    //           <img src="./assets/images/logo-3-color.png" alt="client logo" />
    //         </a>
    //       </li>

    //       <li className="clients-item">
    //         <a href="#">
    //           <img src="./assets/images/logo-4-color.png" alt="client logo" />
    //         </a>
    //       </li>

    //       <li className="clients-item">
    //         <a href="#">
    //           <img src="./assets/images/logo-5-color.png" alt="client logo" />
    //         </a>
    //       </li>

    //       <li className="clients-item">
    //         <a href="#">
    //           <img src="./assets/images/logo-6-color.png" alt="client logo" />
    //         </a>
    //       </li>
    //     </ul>
    //   </section>
      */}
    </article>
   
    </>
  );
};

export default About;
