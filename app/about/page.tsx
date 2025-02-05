import AboutPage from "@/components/AboutPage/AboutPage";
import { fetchGeneralInfo, fetchSkillInfo } from "@/services/generalService";
import { IGeneralApiRes, Skills } from "@/types/apiResponse";
import React from "react";

const About = async () => {
  const generalInformation: IGeneralApiRes = await fetchGeneralInfo();
  const skills: Skills = await fetchSkillInfo();
  return <AboutPage generalInformation={generalInformation} skills={skills} />;
};

export default About;
