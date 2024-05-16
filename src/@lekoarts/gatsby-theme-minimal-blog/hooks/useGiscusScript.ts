import React from "react";

const useGiscusScript = () => {
    const giscusRef = React.useRef<HTMLDivElement>(null);
  
    React.useEffect(() => {
      const script = document.createElement("script");
      const getColorMode = () => {
        const storageColor = localStorage.getItem("theme-ui-color-mode");
        if (storageColor) {
          return storageColor === "dark" ? "dark_high_contrast" : "light_high_contrast";
        }
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        return prefersDark ? "dark_high_contrast" : "light_high_contrast";
      };
  
      script.src = "https://giscus.app/client.js";
      script.setAttribute("data-repo", "stu442/comment_for_blog");
      script.setAttribute("data-repo-id", "R_kgDOL7wVWw");
      script.setAttribute("data-category", "Comments");
      script.setAttribute("data-category-id", "DIC_kwDOL7wVW84CfXvt");
      script.setAttribute("data-mapping", "pathname");
      script.setAttribute("data-strict", "0");
      script.setAttribute("data-reactions-enabled", "1");
      script.setAttribute("data-emit-metadata", "0");
      script.setAttribute("data-input-position", "top");
      script.setAttribute("data-theme", getColorMode());
      script.setAttribute("data-lang", "ko");
      script.setAttribute("crossorigin", "anonymous");
      script.async = true;
  
      if (giscusRef.current) {
        giscusRef.current.appendChild(script);
      }
    }, []);
  
    return giscusRef;
  };
  
  export default useGiscusScript