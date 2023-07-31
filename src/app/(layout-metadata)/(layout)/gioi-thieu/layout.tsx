import { joinUrl } from "@/common/function";
import config from "@/config";
import { defaultProps } from "@/types";
import { Metadata } from "next";
import { FC } from "react";

export const  metadata: Metadata = {
    title: 'Giới thiệu',
    alternates: {
      canonical: joinUrl(config.router.introduce)
    }
  }

const LayoutIntroduce: FC<defaultProps> = ({children}) => {
    return ( <>{children}</> );
}
 
export default LayoutIntroduce;