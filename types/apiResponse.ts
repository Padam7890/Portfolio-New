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

export interface IPersonalInfo {
  email: string;
  facebook: string;
  id: number;
  instagram: string;
  linkedin: string;
  location: string;
  name: string;
  phone: string;
  positions: string;
  profileimage: {
    url: string;
    alternativeText: string;
    caption: string;
  };
  birthday: string;
}

export type PersonalInfo = IPersonalInfo;

export interface ISkills {
  title: string;
  image: {
    url: string;
    alt: string;
    caption: string;
  };
  percentage: string;
  description: string;
}

export type Skills = ISkills[];

export interface IResume {
  title: string;
  datefrom: string;
  dateto: string;
  description: string;
}
export type Resume = IResume[];

export interface ICategory {
  id: number;
  name: string;
}

export type Categories = ICategory[];

export interface IPortfolio {
  title: string;
  subtitle: string;
  image: {
    url: string;
    alt: string;
    caption: string;
  };
  url: string;
  category: ICategory;
}

export type Portfolio = IPortfolio[];

export interface IBlog {
  id: number;
  Title: string;
  Description: any[];
  Featured_Image: {
    url: string;
    alt: string;
    caption: string;
  };
  publishedAt: string;
}

export type Blog = IBlog[];

export type axiosMethod = 'get' | 'post' | 'put' | 'delete' | 'patch';
