import React from "react";

const useGiscusTheme = () => {
    React.useEffect(() => {
      const changeGiscusTheme = (theme: string) => {
        const iframe = document.querySelector<HTMLIFrameElement>("iframe.giscus-frame");
        iframe?.contentWindow?.postMessage(
          {
            giscus: {
              setConfig: { theme: theme === "dark" ? "dark_high_contrast" : "light_high_contrast" },
            },
          },
          "https://giscus.app"
        );
      };
  
      const handleStorageChange = (event: StorageEvent) => {
        if (event.key) {
          changeGiscusTheme(event.key);
        }
      };
  
      window.addEventListener("storage", handleStorageChange);
      return () => {
        window.removeEventListener("storage", handleStorageChange);
      };
    }, []);
  };

  export default useGiscusTheme