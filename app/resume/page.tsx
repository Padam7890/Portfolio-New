import ResumeComponent from '@/components/Resume/ResumeComponent';
import { fetchResumeInfo, fetchSkillInfo } from '@/services/generalService'
import { Resume as ResumeResponse, Skills } from '@/types/apiResponse';
import React from 'react'

const Resume = async () => {
 const resumeData:ResumeResponse = await  fetchResumeInfo();
 const skillData:Skills = await fetchSkillInfo();
  return (
    <ResumeComponent resumeData ={resumeData} skillData={skillData}/>
  )
}

export default Resume