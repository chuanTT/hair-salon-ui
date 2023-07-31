import { joinUrl } from "@/common/function";
import config from "@/config";
import { defaultProps } from "@/types";
import { Metadata } from "next";
import { FC } from "react";

export const  metadata: Metadata = {
    title: 'Tin tức',
    alternates: {
      canonical: joinUrl(config.router.news)
    }
  }

const LayoutBlog: FC<defaultProps> = ({children}) => {
    return ( <>{children}</> );
}
 
export default LayoutBlog;