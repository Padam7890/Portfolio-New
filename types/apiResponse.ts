
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
}

export type PersonalInfo = IPersonalInfo;
