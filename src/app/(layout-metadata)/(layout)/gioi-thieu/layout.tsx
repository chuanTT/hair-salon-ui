import { defaultProps } from "@/types";
import { Metadata } from "next";
import { FC } from "react";

export const  metadata: Metadata = {
    title: 'Giới thiệu'
  }

const LayoutIntroduce: FC<defaultProps> = ({children}) => {
    return ( <>{children}</> );
}
 
export default LayoutIntroduce;