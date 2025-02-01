
export interface IGeneralApiRes {
  Title: string;
  Fullname: string;
  MetaTag: string | null;
  MetaDescription: string | null;
  Address: string;
  Contact: string;
  HeroImage: {
    url: string;
  };
}

export interface IPersonalInfo{
   email: string;
   facebook: string;
   id:number;
   instagram: string;
   linkedin: string;
   location: string;
   name: string;
   phone: string;
   positions: string;
   profileimage:{
    url: string;
    alternativeText: string;
    caption: string;

   };
   birthday:string 
}

export type PersonalInfo = IPersonalInfo;


export interface ISkills {
  title: string;
  image: {
    url: string;
    alt: string;
    caption: string;
  };
  description: string;
}

export type Skills = ISkills[];