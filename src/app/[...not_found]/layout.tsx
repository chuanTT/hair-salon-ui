import { defaultProps } from "@/types";
import { Metadata } from "next";
import { FC } from "react";

export const  metadata: Metadata = {
    title: 'Không tìm thấy trang',
    description: "Oops! 😖 Không tìm thấy URL được yêu cầu trên máy chủ này.",
    openGraph: {
        title: "Không tìm thấy trang"
    }
  }

const LayoutNotFound: FC<defaultProps> = ({children}) => {
    return ( <>{children}</> );
}
 
export default LayoutNotFound;