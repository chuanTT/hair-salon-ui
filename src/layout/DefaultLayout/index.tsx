import { FC } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { defaultProps } from "@/types";

const DefaultLayout: FC<defaultProps> = ({ children }) => {
  return (
    <div id="root">
      <Header />
      <main id="root_main" className="flex justify-center">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
