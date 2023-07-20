import { defaultProps } from "@/types";
import { Metadata } from "next";
import { FC } from "react";

export const  metadata: Metadata = {
    title: 'Trang chủ'
  }

const LayoutHome: FC<defaultProps> = ({children}) => {
    return ( <>{children}</> );
}
 
export default LayoutHome;