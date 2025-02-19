import { useEffect } from "react";

function WatsonChat() {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "6167c788-a40c-459c-9573-2a929e3267ce", 
      region: "au-syd", 
      serviceInstanceID: "c681a56d-ddd6-463d-9e9e-147b2187aa46", 
      onLoad: async (instance) => { await instance.render(); }
    };

    const script = document.createElement("script");
    script.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + 
                 (window.watsonAssistantChatOptions.clientVersion || "latest") + 
                 "/WatsonAssistantChatEntry.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null; // No renderiza nada en pantalla
}

export default WatsonChat;
