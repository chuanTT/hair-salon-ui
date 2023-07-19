import { FC } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { defaultProps } from "@/types";
import ProviderSettings from "../ProviderSettings";
import PluginChat from "@/components/PluginChat";

const DefaultLayout: FC<defaultProps> = ({ children }) => {
  return (
    <ProviderSettings>
      <div id="root">
        <Header />
        <main id="root_main" className="flex justify-center">
          <div className="container">{children}</div>
        </main>
        <Footer />
      </div>

      {/* <PluginChat /> */}
    </ProviderSettings>
  );
};

export default DefaultLayout;
