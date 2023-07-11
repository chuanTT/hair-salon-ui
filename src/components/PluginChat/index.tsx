"use client";
import { useEffect } from "react";

const PluginChat = () => {
  useEffect(() => {
    const chatbox = document.getElementById("fb-customer-chat");
    if (chatbox) {
      chatbox.setAttribute("page_id", "116506126456707");
      chatbox.setAttribute("attribution", "biz_inbox");

      window.fbAsyncInit = function () {
        // eslint-disable-next-line no-undef
        window.FB.init({
          xfbml: true,
          version: "v17.0",
        });
      };

      (function (d, s, id) {
        let js,
          fjs = d.getElementsByTagName(s)[0] as HTMLScriptElement;
        if (d.getElementById(id)) return;
        js = d.createElement(s) as HTMLScriptElement;
        js.id = id;
        js.src = "https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js";
        fjs && fjs?.parentNode?.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    }
  }, []);

  return (
    <>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
    </>
  );
};

export default PluginChat;
