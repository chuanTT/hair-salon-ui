import { ReactNode } from "react";

export interface defaultProps {
  children: ReactNode;
}

export interface typeObject {
  [key: string]: string | number | boolean;
}

export interface apiSildeProduct {
  id: number;
  big_thumb?: string;
  is_show?: number;
  product?: {
    id?: number;
    name?: string;
    alias?: string;
  };
  avatar?: {
    id?: number;
    avatar?: string;
    full_name?: string;
  };
}

export interface ImagesProduct {
  id?: number;
  thumb?: string;
  index_thumb?: number;
}

export interface apiDataProduct {
  id?: number;
  name?: string;
  alias?: string;
  short_content?: string;
  price?: number;
  isNegotiate?: number;
  status?: number;
  created_at?: string;
  updated_at?: string;
  description?: string;
  category?: {
    id?: number;
    name?: string;
    alias?: string;
  };
  user?: {
    id?: number;
    user_name?: string;
    full_name?: string;
    avatar?: string;
  };
  list_images: ImagesProduct[];
}

export interface apiDataSection {
  id?: number;
  title?: string;
  sub_title?: string;
  thumb?: string;
  is_show?: number;
  show_index?: number;
  content?: string;
}

export interface apiDataBlog {
  id?: number;
  title?: string;
  alias?: string;
  short_content?: string;
  description?: string;
  thumb?: string;
  created_at?: string;
  updated_at?: string;
  user?: {
    id?: number;
    user_name?: string;
    full_name?: string;
    avatar?: string;
  };
}

export interface paginationType {
  page: number
  limit: number
  total: number
}


export interface LinkDefaultProps {
  title: string;
  path: string;
}

export interface SelectDefault {
  value?: string | number
  label?: string | number
}


export interface typeFilterProduct {
  cate_id?: number;
  name?: string;
}

export interface typeFilterBlog {
  title?: string;
}


export interface optionType {
  value?: number | string
  label?: string | number
}


export interface dataSettingsApi {
  icon?: string;
  logo?: {
    settings?: {
      ["object-fit"]: string;
      ["object-position"]: string;
      [key: string]: string;
    };
    src?: string;
  };
  company: {
    company_name?: string;
    phone?: string;
    email?: string;
    fanpage_id?: string;
    description?: string;
    address: {
      text?: string;
      link?: string;
    };
    link_page: {
      url?: string;
      is_show_page?: number;
    };
  };
  socials: {
    id?: number,
    name?: string
    url?: string
    thumb?: string
  }[]
}