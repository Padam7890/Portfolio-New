"use client";
import { IGeneralApiRes, ISkills, Skills } from "@/types/apiResponse";
import { getSmallText } from "@/utils/function";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  generalInformation: IGeneralApiRes;
  skills: Skills;
}

const AboutPage = ({ generalInformation, skills }: Props) => {
  const [activeSkill, setActiveSkill] = useState<ISkills | null>(null);

  const toggleActive = (skill?: ISkills) => {
    setActiveSkill(skill || null);

  };


  return (
    <>
      <article className="about active" data-page="about">
        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>

        <section className="about-text">
          <p>{generalInformation?.MetaDescription}</p>
        </section>

        <section className="service">
          <h3 className="h3 service-title">What I'm doing</h3>

          <ul className="service-list">
            {skills?.map((skill: ISkills, index: number) => (

              <li
                key={index}
                onClick={() => toggleActive(skill)}
                className="service-item"
              >
                <div className="service-icon-box">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_ASSETS_URL}${skill?.image?.url}`}
                    alt={skill?.title || "Skill"}
                    width="40"
                    height="40"
                  />
                </div>

                <div className="service-content-box">
                  <h4 className="h4 service-item-title">
                    {getSmallText(skill?.title, 30)}
                  </h4>
                  <p className="service-item-text">
                    {getSmallText(skill?.description, 10)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Modal Section */}
        {activeSkill && (
          <div className="modal-container active" data-modal-container>
            <div className="overlay active" data-overlay></div>
            <section className="testimonials-modal">
              <button className="modal-close-btn" data-modal-close-btn>
                <svg
                  onClick={() => toggleActive()}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                >
                  <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
                </svg>
              </button>

              <div className="modal-content">
                <h4 className="h3 modal-title">{activeSkill?.title}</h4>
                <p>{activeSkill?.description}</p>
              </div>
            </section>
          </div>
        )}
      </article>
    </>
  );
};

export default AboutPage;
