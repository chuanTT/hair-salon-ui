import { defaultProps } from "@/types";
import { Metadata } from "next";
import { FC } from "react";

export const  metadata: Metadata = {
    title: 'Tin tức'
  }

const LayoutBlog: FC<defaultProps> = ({children}) => {
    return ( <>{children}</> );
}
 
export default LayoutBlog;