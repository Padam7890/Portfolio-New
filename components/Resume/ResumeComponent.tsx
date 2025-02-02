import { IResume, ISkills, Resume, Skills } from "@/types/apiResponse";
import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";

interface Props {
  resumeData: Resume;
  skillData: Skills;
}
const ResumeComponent = ({ resumeData, skillData }: Props) => {
  return (
    <>
      <article className="resume">
        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <IoBookOutline name="book-outline"></IoBookOutline>
            </div>

            <h3 className="h3">Education</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Manipal University Jaipur
              </h4>

              <span>Bachelor of Computer Applications</span>

              <p className="timeline-text">
                I am currently pursuing a Bachelor of Computer Applications
                (BCA) at Manipal University Jaipur after previously starting a
                BBS degree, which I decided to drop out of to follow my true
                passion for technology. With a strong interest in the computer
                field, I am already working as a full-stack developer, gaining
                hands-on experience in building and managing web applications.
                My goal is to further enhance my technical expertise and
                contribute meaningfully to the ever-evolving tech industry.
              </p>
            </li>
          </ol>
        </section>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <FaBriefcase name="book-outline" />
            </div>

            <h3 className="h3">Experience</h3>
          </div>

          <ol className="timeline-list">
            {resumeData?.map((item: IResume, index: number) => (
              <li key={index} className="timeline-item">
                <h4 className="h4 timeline-item-title">{item.title}</h4>

                <span>
                  {item?.datefrom} - {item?.dateto}
                </span>

                <p className="timeline-text">{item?.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="skill">
          <h3 className="h3 skills-title">My skills</h3>

          <ul className="skills-list content-card">
            {skillData.map((item: ISkills, index: number) => (
              <li key={index} className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">{item.title}</h5>
                  <data value={`${item.percentage}`}>{item.percentage} %</data>
                </div>

                <div className="skill-progress-bg">
                  <div
                    className="skill-progress-fill"
                    style={{
                      width: `${item.percentage}%`,
                    }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </>
  );
};

export default ResumeComponent;
